#!/usr/bin/env python3
"""Sync this Omega project's current state to the portfolio dashboard data repo.

Reads:
  - project.json
  - session_state.json (root + .claude/memory/)
  - 00_Engagement_Management/deliverables_tracker.json
  - 00_Engagement_Management/risk_register.md (counts by priority)

Writes:
  - <dashboard_repo>/data/projects/<project_id>.json  (sanitized snapshot)

Invoked automatically from the /project:session-end skill. Can also be run manually:

    python3 scripts/sync_to_dashboard.py
    python3 scripts/sync_to_dashboard.py --dry-run
    python3 scripts/sync_to_dashboard.py --dashboard-path "/mnt/d/Python Projects/Omega Dashboard/Omega_Dashboard"

Configuration lives in .claude/memory/session_state.json → dashboard_sync.
"""

from __future__ import annotations
import argparse
import json
import re
import sys
from datetime import datetime, timezone
from pathlib import Path

PROJECT_ROOT = Path(__file__).resolve().parent.parent
DEFAULT_DASHBOARD_LOCAL = Path("/mnt/d/Python Projects/Omega Dashboard/Omega_Dashboard")


def read_json(p: Path, default=None):
    try:
        return json.loads(p.read_text(encoding="utf-8"))
    except Exception as e:
        print(f"  ! cannot parse {p.name}: {e}", file=sys.stderr)
        return default if default is not None else {}


def infer_project_id(project_root: Path, pj: dict) -> str | None:
    """Find the P00X code. Returns None if this is the bare template (not a real project)."""
    # Prefer engagement.code if set (e.g. "P007"); else derive from folder name.
    code = (pj.get("engagement") or {}).get("code")
    if isinstance(code, str) and re.fullmatch(r"P\d{3}", code):
        return code
    m = re.search(r"Project_(P\d{3})_", project_root.name)
    if m:
        return m.group(1)
    m = re.search(r"(P\d{3})", project_root.name)
    if m:
        return m.group(1)
    return None


def count_risks_from_register(register_path: Path) -> dict:
    counts = {"critical": 0, "high": 0, "medium": 0, "low": 0, "total_open": 0}
    if not register_path.exists():
        return counts
    try:
        text = register_path.read_text(encoding="utf-8")
    except Exception:
        return counts
    # Look for lines like "### [RISK-001] ..." with Priority: "Critical" / "High" / ...
    # Also honor the Risk Summary table if present.
    for match in re.finditer(r"\*\*Priority:\*\*\s*(Critical|High|Medium|Low)", text, re.IGNORECASE):
        level = match.group(1).lower()
        counts[level] += 1
        counts["total_open"] += 1
    return counts


def extract_deliverables(tracker: dict) -> dict:
    summary = {"total": 0, "completed": 0, "in_progress": 0, "blocked": 0, "items": []}
    if not isinstance(tracker, dict):
        return summary
    # Prefer top-level counts if present, else derive from workstreams
    if "total_deliverables" in tracker:
        summary["total"] = tracker.get("total_deliverables", 0) or 0
        summary["completed"] = tracker.get("completed_deliverables", 0) or 0
    workstreams = tracker.get("workstreams") or []
    items = []
    for ws in workstreams:
        for d in (ws.get("deliverables") or []):
            items.append({
                "id": d.get("id", "?"),
                "title": d.get("title", ""),
                "status": d.get("status", "unknown"),
                "priority": d.get("priority"),
                "due_date": d.get("due_date"),
                "completion_percentage": d.get("completion_percentage", 0),
            })
    if items:
        if not summary["total"]:
            summary["total"] = len(items)
        summary["completed"] = sum(1 for i in items if str(i["status"]).lower() in ("completed", "complete", "done"))
        summary["in_progress"] = sum(1 for i in items if str(i["status"]).lower() in ("in_progress", "in progress"))
        summary["blocked"] = sum(1 for i in items if str(i["status"]).lower() in ("blocked",))
    # Limit items shipped to dashboard to the top 20 to keep payload small
    summary["items"] = items[:20]
    return summary


def build_snapshot(project_root: Path) -> dict:
    pj = read_json(project_root / "project.json")
    ss_root = read_json(project_root / "session_state.json")
    ss_memory = read_json(project_root / ".claude" / "memory" / "session_state.json")
    tracker = read_json(project_root / "00_Engagement_Management" / "deliverables_tracker.json")

    # Prefer root session_state (usually more recent); fall back to memory for fields missing at root.
    ss = {**ss_memory, **{k: v for k, v in ss_root.items() if v not in (None, "", [])}}
    # Session number: take the MAX across the two (defensively).
    ss["session_number"] = max(
        ss_root.get("session_number") or 0,
        ss_memory.get("session_number") or 0,
    )

    project_id = infer_project_id(project_root, pj)
    if not project_id:
        print(
            "✗ Cannot infer a P00X project code. Run /engagement-setup to set "
            "engagement.code, or run this script from inside a Project_P00X_* folder.",
            file=sys.stderr,
        )
        sys.exit(2)
    engagement = pj.get("engagement", {}) if isinstance(pj.get("engagement"), dict) else {}
    client = pj.get("client", {}) if isinstance(pj.get("client"), dict) else {}
    timeline = pj.get("timeline", {}) if isinstance(pj.get("timeline"), dict) else {}
    team = pj.get("team", {}) if isinstance(pj.get("team"), dict) else {}
    budget = pj.get("budget", {}) if isinstance(pj.get("budget"), dict) else {}

    risks = count_risks_from_register(project_root / "00_Engagement_Management" / "risk_register.md")
    # Fall back to session_state.risk_summary if register parsing returned zero
    if risks["total_open"] == 0 and ss.get("risk_summary"):
        rs = ss["risk_summary"]
        risks = {
            "critical": rs.get("critical", 0),
            "high": rs.get("high", 0),
            "medium": rs.get("medium", 0),
            "low": rs.get("low", 0),
            "total_open": rs.get("total_open", 0),
        }

    deliverables = extract_deliverables(tracker)

    snapshot = {
        "project_id": project_id,
        "engagement_name": engagement.get("name") or ss.get("engagement_name") or "[NAMELESS]",
        "engagement_reference": engagement.get("code") or ss.get("engagement_reference"),
        "client_name": client.get("name") or ss.get("client") or "[UNKNOWN CLIENT]",
        "client_slug": (client.get("name") or "").lower().replace(" ", "-")[:40] if client.get("name") else None,
        "service_line": engagement.get("service_line") or ss.get("service_line"),
        "industry": engagement.get("industry") or ss.get("industry"),
        "current_phase": ss.get("current_phase") or engagement.get("phase"),
        "session_number": ss.get("session_number", 0),
        "health": (ss.get("engagement_health") or "GREEN").upper(),
        "omega_team_lead": team.get("omega_lead") or (ss.get("omega_team") or {}).get("lead"),
        "omega_consultants": team.get("consultants") or (ss.get("omega_team") or {}).get("consultants") or [],
        "start_date": timeline.get("start_date"),
        "end_date": timeline.get("end_date"),
        "budget": {
            "total": ss.get("budget", {}).get("total") or budget.get("total") or 0,
            "consumed": ss.get("budget", {}).get("consumed", 0),
            "remaining": ss.get("budget", {}).get("remaining", 0),
            "currency": ss.get("budget", {}).get("currency") or budget.get("currency") or "USD",
            "status": ss.get("budget", {}).get("status") or "Not specified",
        },
        "deliverables": deliverables,
        "risks": risks,
        "milestones": [
            {"id": k, "name": v.get("name") if isinstance(v, dict) else str(v),
             "target_date": v.get("target_date") if isinstance(v, dict) else None,
             "status": v.get("status") if isinstance(v, dict) else None}
            for k, v in (ss.get("milestone_status") or {}).items()
        ],
        "handoff_notes": (ss.get("handoff_notes") or "")[:2000],
        "last_updated": ss.get("last_updated"),
        "last_synced": datetime.now(timezone.utc).strftime("%Y-%m-%dT%H:%M:%SZ"),
        "tags": ["area/consulting", f"project/{project_id.lower()}"],
    }

    # Sanity: if engagement name still says [PLACEHOLDER], mark visibility private
    if "[" in snapshot["engagement_name"] and "]" in snapshot["engagement_name"]:
        snapshot["visibility"] = "private"
        snapshot["health"] = "NOT_STARTED"
    return snapshot


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--dashboard-path", default=str(DEFAULT_DASHBOARD_LOCAL),
                    help="Local path to the Omega_Dashboard repo")
    ap.add_argument("--dry-run", action="store_true", help="Show snapshot, don't write")
    args = ap.parse_args()

    dash = Path(args.dashboard_path)
    if not dash.exists() and not args.dry_run:
        print(f"✗ Dashboard path not found: {dash}", file=sys.stderr)
        sys.exit(1)

    snapshot = build_snapshot(PROJECT_ROOT)
    project_id = snapshot["project_id"]

    out_dir = dash / "data" / "projects"
    out_file = out_dir / f"{project_id}.json"

    if args.dry_run:
        print(f"[dry-run] would write → {out_file}")
        print(json.dumps(snapshot, indent=2, ensure_ascii=False)[:2000] + "…")
        return

    out_dir.mkdir(parents=True, exist_ok=True)
    out_file.write_text(json.dumps(snapshot, indent=2, ensure_ascii=False), encoding="utf-8")

    print(f"✓ {project_id} synced → {out_file}")
    print(f"  engagement: {snapshot['engagement_name']}")
    print(f"  session: {snapshot['session_number']} | phase: {snapshot['current_phase']} | health: {snapshot['health']}")
    print(f"  deliverables: {snapshot['deliverables']['completed']}/{snapshot['deliverables']['total']}")
    print(f"  risks: {snapshot['risks']['total_open']} open ({snapshot['risks']['critical']} critical)")
    print()
    session_n = snapshot["session_number"]
    print(f"Next: cd '{dash}' && git add data/projects/{project_id}.json && "
          f"git commit -m 'sync: {project_id} session {session_n}' && git push")


if __name__ == "__main__":
    main()
