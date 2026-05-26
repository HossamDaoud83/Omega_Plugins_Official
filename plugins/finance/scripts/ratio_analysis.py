"""
ratio_analysis.py — Omega Finance Plugin v4.1

Compute the four ratio families (Liquidity, Solvency, Profitability,
Growth & Efficiency) from a structured statements input, with optional
charts and Omega-branded markdown report.

Usage:
    python ratio_analysis.py --input statements.json --output reports/

Input format (statements.json):
{
  "client":   "Client Name",
  "currency": "EGP",
  "units":    "millions",
  "years":    ["FY23", "FY24", "FY25"],
  "income_statement": {
    "revenue":          [1050, 1150, 1200],
    "cogs":             [ 610,  696,  720],
    "sga":              [ 173,  198,  216],
    "depreciation":     [  42,   48,   60],
    "interest_expense": [  16,   21,   36],
    "tax":              [  48,   46,   38],
    "net_income":       [ 162,  140,  130]
  },
  "balance_sheet": {
    "cash":               [ 65,  75,  80],
    "accounts_receivable":[140, 184, 200],
    "inventory":          [120, 156, 180],
    "current_assets":     [380, 460, 500],
    "total_assets":     [1080,1140,1200],
    "accounts_payable":   [ 90, 108, 120],
    "short_term_debt":    [ 70,  80,  80],
    "current_liabilities":[210, 240, 250],
    "long_term_debt":     [300, 300, 300],
    "total_liabilities":  [510, 540, 550],
    "equity":             [570, 600, 650]
  },
  "cash_flow": {
    "cfo":     [200, 175, 180],
    "capex":   [ 80,  85,  90],
    "dividends":[ 25,  28,  30]
  }
}

Author: Omega Finance Plugin v4.1
"""

from __future__ import annotations
import argparse
import json
import os
import sys
from dataclasses import dataclass, field
from pathlib import Path
from typing import Any

try:
    import matplotlib.pyplot as plt  # type: ignore
    HAS_MPL = True
except ImportError:
    HAS_MPL = False


# --------------------------------------------------------------------------- #
# Omega Branding
# --------------------------------------------------------------------------- #
Omega_NAVY = "#1B2A4E"
Omega_GOLD = "#C9A24B"
Omega_RED  = "#A33333"
Omega_GRAY = "#7A7A7A"


# --------------------------------------------------------------------------- #
# Sector medians for benchmark coloring (illustrative; verify per engagement)
# --------------------------------------------------------------------------- #
DEFAULT_THRESHOLDS = {
    "current_ratio":   {"strong": 2.0, "ok": 1.5, "weak": 1.0},
    "quick_ratio":     {"strong": 1.0, "ok": 0.8, "weak": 0.5},
    "cash_ratio":      {"strong": 0.5, "ok": 0.3, "weak": 0.15},
    "debt_to_equity":  {"strong": 0.5, "ok": 1.0, "weak": 1.5, "lower_is_better": True},
    "debt_to_assets":  {"strong": 0.3, "ok": 0.5, "weak": 0.6, "lower_is_better": True},
    "interest_cov":    {"strong": 5.0, "ok": 3.0, "weak": 2.0},
    "gross_margin":    {"strong": 0.40, "ok": 0.25, "weak": 0.15},
    "ebitda_margin":   {"strong": 0.20, "ok": 0.12, "weak": 0.08},
    "operating_margin":{"strong": 0.15, "ok": 0.08, "weak": 0.04},
    "net_margin":      {"strong": 0.10, "ok": 0.05, "weak": 0.02},
    "roa":             {"strong": 0.08, "ok": 0.05, "weak": 0.02},
    "roe":             {"strong": 0.18, "ok": 0.12, "weak": 0.08},
    "dso_days":        {"strong": 45, "ok": 60, "weak": 90, "lower_is_better": True},
    "dio_days":        {"strong": 60, "ok": 90, "weak": 120, "lower_is_better": True},
    "ccc_days":        {"strong": 60, "ok": 90, "weak": 120, "lower_is_better": True},
}


# --------------------------------------------------------------------------- #
# Data model
# --------------------------------------------------------------------------- #
@dataclass
class Statements:
    client: str
    currency: str
    units: str
    years: list[str]
    is_: dict[str, list[float]]   # income_statement
    bs: dict[str, list[float]]    # balance_sheet
    cf: dict[str, list[float]]    # cash_flow

    @classmethod
    def from_json(cls, path: Path) -> "Statements":
        with open(path, "r", encoding="utf-8") as f:
            d = json.load(f)
        return cls(
            client=d.get("client", "Unspecified Client"),
            currency=d.get("currency", "EGP"),
            units=d.get("units", "millions"),
            years=d["years"],
            is_=d["income_statement"],
            bs=d["balance_sheet"],
            cf=d.get("cash_flow", {}),
        )

    def n_years(self) -> int:
        return len(self.years)


# --------------------------------------------------------------------------- #
# Computation helpers
# --------------------------------------------------------------------------- #
def safe_div(a: float, b: float) -> float | None:
    if b == 0 or b is None or a is None:
        return None
    return a / b


def avg(seq: list[float], i: int) -> float | None:
    """Average of period i and i-1, for ratios needing average balances."""
    if i == 0:
        return seq[i]
    return (seq[i] + seq[i - 1]) / 2


def yoy_growth(seq: list[float], i: int) -> float | None:
    if i == 0:
        return None
    if seq[i - 1] == 0:
        return None
    return (seq[i] - seq[i - 1]) / seq[i - 1]


# --------------------------------------------------------------------------- #
# Ratio engine
# --------------------------------------------------------------------------- #
def compute_ratios(s: Statements) -> dict[str, list[float | None]]:
    """Return dict of ratio_name -> list of values, one per year."""
    n = s.n_years()
    r: dict[str, list[float | None]] = {}

    # Derived series
    gross_profit = [s.is_["revenue"][i] - s.is_["cogs"][i] for i in range(n)]
    ebitda = [
        gross_profit[i]
        - s.is_["sga"][i]
        for i in range(n)
    ]
    ebit = [ebitda[i] - s.is_["depreciation"][i] for i in range(n)]
    total_debt = [
        s.bs["short_term_debt"][i] + s.bs["long_term_debt"][i] for i in range(n)
    ]

    # Liquidity
    r["current_ratio"]  = [safe_div(s.bs["current_assets"][i], s.bs["current_liabilities"][i]) for i in range(n)]
    r["quick_ratio"]    = [safe_div(s.bs["current_assets"][i] - s.bs["inventory"][i], s.bs["current_liabilities"][i]) for i in range(n)]
    r["cash_ratio"]     = [safe_div(s.bs["cash"][i], s.bs["current_liabilities"][i]) for i in range(n)]
    r["working_capital"] = [s.bs["current_assets"][i] - s.bs["current_liabilities"][i] for i in range(n)]

    # Solvency
    r["debt_to_equity"] = [safe_div(total_debt[i], s.bs["equity"][i]) for i in range(n)]
    r["debt_to_assets"] = [safe_div(total_debt[i], s.bs["total_assets"][i]) for i in range(n)]
    r["interest_cov"]   = [safe_div(ebit[i], s.is_["interest_expense"][i]) for i in range(n)]
    r["equity_multiplier"] = [safe_div(s.bs["total_assets"][i], s.bs["equity"][i]) for i in range(n)]

    # Profitability
    r["gross_margin"]     = [safe_div(gross_profit[i], s.is_["revenue"][i]) for i in range(n)]
    r["ebitda_margin"]    = [safe_div(ebitda[i], s.is_["revenue"][i]) for i in range(n)]
    r["operating_margin"] = [safe_div(ebit[i], s.is_["revenue"][i]) for i in range(n)]
    r["net_margin"]       = [safe_div(s.is_["net_income"][i], s.is_["revenue"][i]) for i in range(n)]
    r["roa"]              = [safe_div(s.is_["net_income"][i], avg(s.bs["total_assets"], i)) for i in range(n)]
    r["roe"]              = [safe_div(s.is_["net_income"][i], avg(s.bs["equity"], i)) for i in range(n)]

    # Growth & efficiency
    r["revenue_growth"] = [yoy_growth(s.is_["revenue"], i) for i in range(n)]
    r["ebitda_growth"]  = [yoy_growth(ebitda, i) for i in range(n)]
    r["asset_turnover"] = [safe_div(s.is_["revenue"][i], avg(s.bs["total_assets"], i)) for i in range(n)]
    r["dso_days"] = [safe_div(avg(s.bs["accounts_receivable"], i), s.is_["revenue"][i]) for i in range(n)]
    r["dso_days"] = [v * 365 if v is not None else None for v in r["dso_days"]]
    r["dio_days"] = [safe_div(avg(s.bs["inventory"], i), s.is_["cogs"][i]) for i in range(n)]
    r["dio_days"] = [v * 365 if v is not None else None for v in r["dio_days"]]
    r["dpo_days"] = [safe_div(avg(s.bs["accounts_payable"], i), s.is_["cogs"][i]) for i in range(n)]
    r["dpo_days"] = [v * 365 if v is not None else None for v in r["dpo_days"]]
    r["ccc_days"] = [
        (r["dso_days"][i] or 0) + (r["dio_days"][i] or 0) - (r["dpo_days"][i] or 0)
        if r["dso_days"][i] is not None and r["dio_days"][i] is not None and r["dpo_days"][i] is not None
        else None
        for i in range(n)
    ]

    # DuPont decomposition of ROE
    r["dupont_check_roe"] = [
        (r["net_margin"][i] or 0) * (r["asset_turnover"][i] or 0) * (r["equity_multiplier"][i] or 0)
        if all(r[k][i] is not None for k in ["net_margin", "asset_turnover", "equity_multiplier"])
        else None
        for i in range(n)
    ]

    return r


# --------------------------------------------------------------------------- #
# Classification — color the ratios vs thresholds
# --------------------------------------------------------------------------- #
def classify(name: str, value: float | None) -> str:
    """Return 'strong' | 'ok' | 'weak' | 'critical' | '—'."""
    if value is None:
        return "—"
    cfg = DEFAULT_THRESHOLDS.get(name)
    if cfg is None:
        return "—"
    lower_better = cfg.get("lower_is_better", False)
    if lower_better:
        if value <= cfg["strong"]:
            return "strong"
        if value <= cfg["ok"]:
            return "ok"
        if value <= cfg["weak"]:
            return "weak"
        return "critical"
    else:
        if value >= cfg["strong"]:
            return "strong"
        if value >= cfg["ok"]:
            return "ok"
        if value >= cfg["weak"]:
            return "weak"
        return "critical"


# --------------------------------------------------------------------------- #
# Formatting
# --------------------------------------------------------------------------- #
def fmt(name: str, value: float | None) -> str:
    if value is None:
        return "n/a"
    if name.endswith("_margin") or name.endswith("_growth") or name in {"roa", "roe", "debt_to_assets"}:
        return f"{value * 100:.1f}%"
    if name.endswith("_days"):
        return f"{value:.0f} d"
    if name in {"current_ratio", "quick_ratio", "cash_ratio", "debt_to_equity",
                "interest_cov", "asset_turnover", "equity_multiplier", "dupont_check_roe"}:
        return f"{value:.2f}x"
    return f"{value:,.0f}"


# --------------------------------------------------------------------------- #
# Markdown report
# --------------------------------------------------------------------------- #
RATIO_FAMILIES = {
    "Liquidity": ["current_ratio", "quick_ratio", "cash_ratio", "working_capital"],
    "Solvency":  ["debt_to_equity", "debt_to_assets", "interest_cov", "equity_multiplier"],
    "Profitability": ["gross_margin", "ebitda_margin", "operating_margin", "net_margin", "roa", "roe"],
    "Growth & Efficiency": [
        "revenue_growth", "ebitda_growth", "asset_turnover",
        "dso_days", "dio_days", "dpo_days", "ccc_days",
    ],
}

CLASS_BADGE = {"strong": "🟢", "ok": "🟡", "weak": "🟠", "critical": "🔴", "—": "⚪"}


def build_report(s: Statements, ratios: dict[str, list[float | None]]) -> str:
    out: list[str] = []
    out.append(f"# Financial Ratio Analysis — {s.client}")
    out.append("")
    out.append(f"*Generated by Omega Finance Plugin v4.1 · ratio_analysis.py*")
    out.append("")
    out.append(f"**Currency:** {s.currency} ({s.units})  ·  **Periods:** {', '.join(s.years)}")
    out.append("")

    # Build one table per family
    for family, names in RATIO_FAMILIES.items():
        out.append(f"## {family}")
        out.append("")
        header = "| Ratio | " + " | ".join(s.years) + " | Latest verdict |"
        sep    = "|---|" + "|".join(["---"] * s.n_years()) + "|---|"
        out.append(header)
        out.append(sep)
        for n in names:
            row = [n.replace("_", " ").title()]
            for v in ratios[n]:
                row.append(fmt(n, v))
            latest = ratios[n][-1]
            badge = CLASS_BADGE[classify(n, latest)]
            row.append(f"{badge} {classify(n, latest)}")
            out.append("| " + " | ".join(row) + " |")
        out.append("")

    # DuPont
    out.append("## DuPont decomposition of ROE")
    out.append("")
    out.append("ROE = Net Margin × Asset Turnover × Equity Multiplier")
    out.append("")
    for i, year in enumerate(s.years):
        nm = ratios["net_margin"][i]
        at = ratios["asset_turnover"][i]
        em = ratios["equity_multiplier"][i]
        roe = ratios["roe"][i]
        if None in (nm, at, em, roe):
            continue
        out.append(
            f"- **{year}**: {nm*100:.1f}% × {at:.2f}x × {em:.2f}x ≈ {nm*at*em*100:.1f}% (direct ROE: {roe*100:.1f}%)"
        )
    out.append("")

    # Headline verdict heuristic
    out.append("## Headline observations")
    out.append("")
    obs = _generate_observations(s, ratios)
    for line in obs:
        out.append(f"- {line}")
    out.append("")

    out.append("---")
    out.append("")
    out.append("*Color key: 🟢 strong · 🟡 acceptable · 🟠 weak · 🔴 critical · ⚪ n/a*")
    out.append("")
    out.append("*Thresholds are illustrative defaults; calibrate to sector medians for the engagement.*")
    return "\n".join(out)


def _generate_observations(
    s: Statements, ratios: dict[str, list[float | None]]
) -> list[str]:
    obs: list[str] = []
    n = s.n_years()
    if n < 2:
        return ["Single-period data — trend observations require ≥ 2 periods."]

    # Revenue vs EBITDA growth divergence
    rev_g = ratios["revenue_growth"][-1]
    ebitda_g = ratios["ebitda_growth"][-1]
    if rev_g is not None and ebitda_g is not None:
        if rev_g > 0.05 and ebitda_g < 0:
            obs.append(
                f"Revenue grew {rev_g*100:.1f}% while EBITDA shrank {ebitda_g*100:.1f}% — **margin compression**."
            )
        elif ebitda_g > rev_g + 0.02:
            obs.append(
                f"EBITDA growth ({ebitda_g*100:.1f}%) outpaced revenue ({rev_g*100:.1f}%) — operating leverage at work."
            )

    # DSO trend
    dso_first, dso_last = ratios["dso_days"][0], ratios["dso_days"][-1]
    if dso_first is not None and dso_last is not None:
        delta = dso_last - dso_first
        if delta > 10:
            obs.append(
                f"DSO extended from {dso_first:.0f} to {dso_last:.0f} days — **collection deterioration**."
            )
        elif delta < -10:
            obs.append(
                f"DSO improved from {dso_first:.0f} to {dso_last:.0f} days — collection discipline."
            )

    # Leverage
    de = ratios["debt_to_equity"][-1]
    if de is not None:
        if de > 1.5:
            obs.append(f"Debt-to-Equity at {de:.2f}x — **high leverage; covenant headroom check required**.")
        elif de < 0.5:
            obs.append(f"Debt-to-Equity at {de:.2f}x — conservative capital structure.")

    # Interest coverage
    ic = ratios["interest_cov"][-1]
    if ic is not None:
        if ic < 2.0:
            obs.append(f"Interest coverage at {ic:.2f}x — **solvency stress; below 2.0x threshold**.")
        elif ic > 5.0:
            obs.append(f"Interest coverage at {ic:.2f}x — strong, ample servicing capacity.")

    # Liquidity
    cr = ratios["current_ratio"][-1]
    if cr is not None and cr < 1.0:
        obs.append(f"Current ratio at {cr:.2f}x — **negative working capital, near-term liquidity stress**.")

    return obs or ["Ratios within typical ranges; no headline anomalies detected on default thresholds."]


# --------------------------------------------------------------------------- #
# Charts
# --------------------------------------------------------------------------- #
def make_charts(s: Statements, ratios: dict[str, list[float | None]], out_dir: Path) -> list[Path]:
    if not HAS_MPL:
        print("matplotlib not installed — skipping charts. pip install matplotlib", file=sys.stderr)
        return []
    out_dir.mkdir(parents=True, exist_ok=True)
    written: list[Path] = []

    # 1) Margin ladder over time
    fig, ax = plt.subplots(figsize=(9, 5))
    for name, color in [
        ("gross_margin", Omega_NAVY),
        ("ebitda_margin", Omega_GOLD),
        ("operating_margin", Omega_RED),
        ("net_margin", Omega_GRAY),
    ]:
        vals = [v * 100 if v is not None else None for v in ratios[name]]
        ax.plot(s.years, vals, marker="o", label=name.replace("_", " ").title(), color=color, linewidth=2)
    ax.set_ylabel("Margin (%)")
    ax.set_title(f"{s.client} — Margin Trend")
    ax.grid(True, alpha=0.3)
    ax.legend()
    p = out_dir / "ratios_margin_trend.png"
    plt.tight_layout()
    plt.savefig(p, dpi=150)
    plt.close()
    written.append(p)

    # 2) Working capital days
    fig, ax = plt.subplots(figsize=(9, 5))
    for name, color in [
        ("dso_days", Omega_NAVY),
        ("dio_days", Omega_GOLD),
        ("dpo_days", Omega_RED),
        ("ccc_days", Omega_GRAY),
    ]:
        vals = ratios[name]
        ax.plot(s.years, vals, marker="o", label=name.replace("_", " ").upper(), color=color, linewidth=2)
    ax.set_ylabel("Days")
    ax.set_title(f"{s.client} — Working Capital Cycle")
    ax.grid(True, alpha=0.3)
    ax.legend()
    p = out_dir / "ratios_working_capital.png"
    plt.tight_layout()
    plt.savefig(p, dpi=150)
    plt.close()
    written.append(p)

    # 3) Returns
    fig, ax = plt.subplots(figsize=(9, 5))
    for name, color in [("roa", Omega_NAVY), ("roe", Omega_GOLD)]:
        vals = [v * 100 if v is not None else None for v in ratios[name]]
        ax.plot(s.years, vals, marker="o", label=name.upper(), color=color, linewidth=2)
    ax.set_ylabel("Return (%)")
    ax.set_title(f"{s.client} — Return on Assets and Equity")
    ax.grid(True, alpha=0.3)
    ax.legend()
    p = out_dir / "ratios_returns.png"
    plt.tight_layout()
    plt.savefig(p, dpi=150)
    plt.close()
    written.append(p)

    # 4) Leverage
    fig, ax = plt.subplots(figsize=(9, 5))
    ax.plot(s.years, ratios["debt_to_equity"], marker="o", label="D/E", color=Omega_NAVY, linewidth=2)
    ax.plot(s.years, ratios["interest_cov"], marker="o", label="Interest Cov", color=Omega_GOLD, linewidth=2)
    ax.set_title(f"{s.client} — Leverage & Coverage")
    ax.grid(True, alpha=0.3)
    ax.legend()
    p = out_dir / "ratios_leverage.png"
    plt.tight_layout()
    plt.savefig(p, dpi=150)
    plt.close()
    written.append(p)

    return written


# --------------------------------------------------------------------------- #
# CLI
# --------------------------------------------------------------------------- #
def main() -> int:
    parser = argparse.ArgumentParser(description="Omega Ratio Analysis (v4.1)")
    parser.add_argument("--input", required=True, help="Path to statements.json")
    parser.add_argument("--output", default="reports/ratios", help="Output directory")
    parser.add_argument("--no-charts", action="store_true", help="Skip chart generation")
    args = parser.parse_args()

    input_path = Path(args.input)
    if not input_path.exists():
        print(f"Input not found: {input_path}", file=sys.stderr)
        return 1

    out_dir = Path(args.output)
    out_dir.mkdir(parents=True, exist_ok=True)

    s = Statements.from_json(input_path)
    ratios = compute_ratios(s)
    report = build_report(s, ratios)

    report_path = out_dir / "RATIO_REPORT.md"
    report_path.write_text(report, encoding="utf-8")
    print(f"Report: {report_path}")

    if not args.no_charts:
        chart_dir = out_dir / "charts"
        for p in make_charts(s, ratios, chart_dir):
            print(f"Chart:  {p}")

    return 0


if __name__ == "__main__":
    sys.exit(main())
