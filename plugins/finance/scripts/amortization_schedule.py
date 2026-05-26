"""
amortization_schedule.py — Omega Finance Plugin v4.1

Generate a loan amortization schedule for any of the standard variants:
  - level annuity (equal payments)
  - level principal (equal principal)
  - bullet (interest-only with principal at maturity)
  - grace period then amortization
  - sculpted (project finance, given a CFADS profile)

Outputs a CSV schedule, a Markdown summary, and a Omega-branded chart.

Usage examples:
    # Level annuity, 10 M EGP, 10 % annual, 60 monthly payments
    python amortization_schedule.py \\
        --variant level \\
        --principal 10000000 \\
        --annual-rate 0.10 \\
        --periods 60 \\
        --pay-per-year 12 \\
        --currency EGP \\
        --output reports/loan/

    # Grace then level annuity (24 months grace, 36 months amortization, 60 total)
    python amortization_schedule.py \\
        --variant grace \\
        --principal 100000000 \\
        --annual-rate 0.12 \\
        --periods 60 \\
        --pay-per-year 12 \\
        --grace-periods 24

    # Sculpted (provide CFADS via JSON)
    python amortization_schedule.py \\
        --variant sculpted \\
        --principal 200000000 \\
        --annual-rate 0.08 \\
        --pay-per-year 1 \\
        --target-dscr 1.30 \\
        --cfads-json cfads.json

Author: Omega Finance Plugin v4.1
"""

from __future__ import annotations
import argparse
import csv
import json
import sys
from dataclasses import dataclass, asdict, field
from pathlib import Path

try:
    import matplotlib.pyplot as plt  # type: ignore
    HAS_MPL = True
except ImportError:
    HAS_MPL = False


Omega_NAVY = "#1B2A4E"
Omega_GOLD = "#C9A24B"
Omega_RED  = "#A33333"
Omega_GRAY = "#7A7A7A"


# --------------------------------------------------------------------------- #
# Data model
# --------------------------------------------------------------------------- #
@dataclass
class Row:
    period: int
    opening: float
    payment: float
    interest: float
    principal: float
    closing: float
    cumulative_interest: float = 0.0
    cumulative_principal: float = 0.0
    dscr: float | None = None        # for sculpted PF


@dataclass
class Schedule:
    variant: str
    principal: float
    annual_rate: float
    periodic_rate: float
    pay_per_year: int
    periods: int
    currency: str
    rows: list[Row] = field(default_factory=list)

    def totals(self) -> dict[str, float]:
        total_payment = sum(r.payment for r in self.rows)
        total_interest = sum(r.interest for r in self.rows)
        total_principal = sum(r.principal for r in self.rows)
        return {
            "total_payment": total_payment,
            "total_interest": total_interest,
            "total_principal": total_principal,
            "interest_pct_of_principal": (
                total_interest / self.principal if self.principal else 0.0
            ),
        }


# --------------------------------------------------------------------------- #
# Variant builders
# --------------------------------------------------------------------------- #
def _pmt(rate: float, n: int, pv: float) -> float:
    """Periodic level annuity payment. PV is positive; returns positive PMT."""
    if rate == 0:
        return pv / n
    return pv * (rate * (1 + rate) ** n) / ((1 + rate) ** n - 1)


def build_level_annuity(principal: float, rate: float, n: int) -> list[Row]:
    pmt = _pmt(rate, n, principal)
    rows: list[Row] = []
    balance = principal
    cum_i = 0.0
    cum_p = 0.0
    for k in range(1, n + 1):
        interest = balance * rate
        principal_pay = pmt - interest
        if k == n:
            # plug rounding into the last row
            principal_pay = balance
            pmt_k = principal_pay + interest
        else:
            pmt_k = pmt
        closing = balance - principal_pay
        cum_i += interest
        cum_p += principal_pay
        rows.append(Row(k, balance, pmt_k, interest, principal_pay, closing, cum_i, cum_p))
        balance = closing
    return rows


def build_level_principal(principal: float, rate: float, n: int) -> list[Row]:
    principal_each = principal / n
    rows: list[Row] = []
    balance = principal
    cum_i = 0.0
    cum_p = 0.0
    for k in range(1, n + 1):
        interest = balance * rate
        payment = principal_each + interest
        closing = balance - principal_each
        cum_i += interest
        cum_p += principal_each
        rows.append(Row(k, balance, payment, interest, principal_each, closing, cum_i, cum_p))
        balance = closing
    return rows


def build_bullet(principal: float, rate: float, n: int) -> list[Row]:
    rows: list[Row] = []
    balance = principal
    cum_i = 0.0
    cum_p = 0.0
    for k in range(1, n + 1):
        interest = balance * rate
        if k < n:
            principal_pay = 0.0
            payment = interest
        else:
            principal_pay = balance
            payment = interest + balance
        closing = balance - principal_pay
        cum_i += interest
        cum_p += principal_pay
        rows.append(Row(k, balance, payment, interest, principal_pay, closing, cum_i, cum_p))
        balance = closing
    return rows


def build_grace(
    principal: float, rate: float, n_total: int, grace: int
) -> list[Row]:
    if grace >= n_total:
        raise ValueError("grace_periods must be < total periods")
    rows: list[Row] = []
    balance = principal
    cum_i = 0.0
    cum_p = 0.0
    # Grace: interest-only
    for k in range(1, grace + 1):
        interest = balance * rate
        rows.append(Row(k, balance, interest, interest, 0.0, balance, cum_i + interest, cum_p))
        cum_i += interest
    # Amortizing
    n_amort = n_total - grace
    pmt = _pmt(rate, n_amort, balance)
    for j in range(1, n_amort + 1):
        k = grace + j
        interest = balance * rate
        principal_pay = pmt - interest
        if j == n_amort:
            principal_pay = balance
            pmt_k = principal_pay + interest
        else:
            pmt_k = pmt
        closing = balance - principal_pay
        cum_i += interest
        cum_p += principal_pay
        rows.append(Row(k, balance, pmt_k, interest, principal_pay, closing, cum_i, cum_p))
        balance = closing
    return rows


def build_sculpted(
    principal: float,
    rate: float,
    cfads: list[float],
    target_dscr: float,
) -> list[Row]:
    """
    Sculpt principal repayment to maintain a target DSCR each period given CFADS.
    `rate` is periodic; `cfads` is per-period cash flow available for debt service.
    """
    rows: list[Row] = []
    balance = principal
    cum_i = 0.0
    cum_p = 0.0
    for k, cf in enumerate(cfads, start=1):
        interest = balance * rate
        max_ds = cf / target_dscr
        principal_pay = max(0.0, max_ds - interest)
        if principal_pay > balance:
            principal_pay = balance
        payment = interest + principal_pay
        closing = balance - principal_pay
        dscr = payment / (interest + principal_pay) if (interest + principal_pay) > 0 else None
        # Actual DSCR achieved
        actual_dscr = cf / payment if payment > 0 else None
        cum_i += interest
        cum_p += principal_pay
        rows.append(
            Row(k, balance, payment, interest, principal_pay, closing, cum_i, cum_p, actual_dscr)
        )
        balance = closing
        if balance <= 0.0001:
            break
    return rows


# --------------------------------------------------------------------------- #
# Orchestrator
# --------------------------------------------------------------------------- #
def build_schedule(args: argparse.Namespace) -> Schedule:
    periodic = args.annual_rate / args.pay_per_year
    if args.variant == "level":
        rows = build_level_annuity(args.principal, periodic, args.periods)
    elif args.variant == "principal":
        rows = build_level_principal(args.principal, periodic, args.periods)
    elif args.variant == "bullet":
        rows = build_bullet(args.principal, periodic, args.periods)
    elif args.variant == "grace":
        rows = build_grace(args.principal, periodic, args.periods, args.grace_periods)
    elif args.variant == "sculpted":
        if not args.cfads_json:
            raise SystemExit("--cfads-json is required for sculpted variant")
        with open(args.cfads_json, "r", encoding="utf-8") as f:
            cf = json.load(f)
        cfads = cf if isinstance(cf, list) else cf["cfads"]
        rows = build_sculpted(args.principal, periodic, cfads, args.target_dscr)
    else:
        raise SystemExit(f"Unknown variant: {args.variant}")

    return Schedule(
        variant=args.variant,
        principal=args.principal,
        annual_rate=args.annual_rate,
        periodic_rate=periodic,
        pay_per_year=args.pay_per_year,
        periods=len(rows),
        currency=args.currency,
        rows=rows,
    )


# --------------------------------------------------------------------------- #
# Output writers
# --------------------------------------------------------------------------- #
def write_csv(sched: Schedule, path: Path) -> None:
    with open(path, "w", newline="", encoding="utf-8") as f:
        w = csv.writer(f)
        w.writerow([
            "period", "opening", "payment", "interest", "principal",
            "closing", "cum_interest", "cum_principal", "dscr",
        ])
        for r in sched.rows:
            w.writerow([
                r.period,
                f"{r.opening:.2f}",
                f"{r.payment:.2f}",
                f"{r.interest:.2f}",
                f"{r.principal:.2f}",
                f"{r.closing:.2f}",
                f"{r.cumulative_interest:.2f}",
                f"{r.cumulative_principal:.2f}",
                f"{r.dscr:.3f}" if r.dscr is not None else "",
            ])


def write_markdown(sched: Schedule, path: Path) -> None:
    t = sched.totals()
    lines: list[str] = []
    lines.append(f"# Loan Amortization Schedule — {sched.variant.title()}")
    lines.append("")
    lines.append("*Generated by Omega Finance Plugin v4.1 · amortization_schedule.py*")
    lines.append("")
    lines.append("## Loan parameters")
    lines.append("")
    lines.append(f"- **Principal:** {sched.currency} {sched.principal:,.0f}")
    lines.append(f"- **Annual rate:** {sched.annual_rate * 100:.2f}%")
    lines.append(f"- **Periodic rate:** {sched.periodic_rate * 100:.4f}% × {sched.pay_per_year} pay/yr")
    lines.append(f"- **Periods:** {sched.periods}")
    lines.append(f"- **Variant:** {sched.variant}")
    lines.append("")
    lines.append("## Totals")
    lines.append("")
    lines.append(f"- **Total payments:** {sched.currency} {t['total_payment']:,.0f}")
    lines.append(f"- **Total interest:** {sched.currency} {t['total_interest']:,.0f}")
    lines.append(f"- **Total principal:** {sched.currency} {t['total_principal']:,.0f}")
    lines.append(f"- **Interest as % of principal:** {t['interest_pct_of_principal']*100:.1f}%")
    lines.append("")

    # First 6 and last 3 rows for readability; full schedule in CSV
    lines.append("## Schedule preview (first 6 + last 3)")
    lines.append("")
    lines.append("| # | Opening | Payment | Interest | Principal | Closing |")
    lines.append("|---|---|---|---|---|---|")
    show = sched.rows[:6] + (
        [Row(-1, 0, 0, 0, 0, 0)] if len(sched.rows) > 9 else []
    ) + sched.rows[-3:] if len(sched.rows) > 9 else sched.rows
    for r in show:
        if r.period == -1:
            lines.append("| ... | ... | ... | ... | ... | ... |")
            continue
        lines.append(
            f"| {r.period} | {r.opening:,.0f} | {r.payment:,.0f} | "
            f"{r.interest:,.0f} | {r.principal:,.0f} | {r.closing:,.0f} |"
        )
    lines.append("")
    lines.append("*Full schedule in `schedule.csv`.*")

    # DSCR table for sculpted
    if sched.variant == "sculpted":
        lines.append("")
        lines.append("## DSCR by period (sculpted)")
        lines.append("")
        lines.append("| # | Payment | DSCR achieved |")
        lines.append("|---|---|---|")
        for r in sched.rows:
            dscr_str = f"{r.dscr:.2f}x" if r.dscr is not None else "—"
            lines.append(f"| {r.period} | {r.payment:,.0f} | {dscr_str} |")

    path.write_text("\n".join(lines), encoding="utf-8")


def write_chart(sched: Schedule, path: Path) -> None:
    if not HAS_MPL:
        return
    periods = [r.period for r in sched.rows]
    interest = [r.interest for r in sched.rows]
    principal = [r.principal for r in sched.rows]
    closing = [r.closing for r in sched.rows]

    fig, (ax1, ax2) = plt.subplots(2, 1, figsize=(10, 8))

    # Top: stacked payment composition
    ax1.bar(periods, interest, label="Interest", color=Omega_RED, width=1.0)
    ax1.bar(periods, principal, bottom=interest, label="Principal", color=Omega_NAVY, width=1.0)
    ax1.set_xlabel("Period")
    ax1.set_ylabel(f"{sched.currency}")
    ax1.set_title(f"Payment Composition — {sched.variant.title()} ({sched.principal:,.0f} {sched.currency})")
    ax1.legend()
    ax1.grid(True, alpha=0.3)

    # Bottom: outstanding balance
    ax2.plot(periods, closing, color=Omega_NAVY, linewidth=2)
    ax2.fill_between(periods, closing, alpha=0.2, color=Omega_NAVY)
    ax2.set_xlabel("Period")
    ax2.set_ylabel(f"Outstanding Balance ({sched.currency})")
    ax2.set_title("Outstanding Balance Over Time")
    ax2.grid(True, alpha=0.3)

    plt.tight_layout()
    plt.savefig(path, dpi=150)
    plt.close()


# --------------------------------------------------------------------------- #
# CLI
# --------------------------------------------------------------------------- #
def main() -> int:
    p = argparse.ArgumentParser(description="Omega Loan Amortization Schedule (v4.1)")
    p.add_argument("--variant", required=True,
                   choices=["level", "principal", "bullet", "grace", "sculpted"])
    p.add_argument("--principal", type=float, required=True)
    p.add_argument("--annual-rate", type=float, required=True, help="e.g. 0.10 for 10%%")
    p.add_argument("--periods", type=int, default=60, help="Total number of payment periods")
    p.add_argument("--pay-per-year", type=int, default=12)
    p.add_argument("--grace-periods", type=int, default=0, help="For 'grace' variant")
    p.add_argument("--target-dscr", type=float, default=1.30, help="For 'sculpted' variant")
    p.add_argument("--cfads-json", help="JSON list of CFADS per period (for sculpted)")
    p.add_argument("--currency", default="EGP")
    p.add_argument("--output", default="reports/amortization")
    args = p.parse_args()

    out_dir = Path(args.output)
    out_dir.mkdir(parents=True, exist_ok=True)

    sched = build_schedule(args)

    csv_path = out_dir / "schedule.csv"
    md_path = out_dir / "AMORTIZATION_SUMMARY.md"
    chart_path = out_dir / "amortization_chart.png"

    write_csv(sched, csv_path)
    write_markdown(sched, md_path)
    write_chart(sched, chart_path)

    print(f"Schedule CSV: {csv_path}")
    print(f"Summary MD:   {md_path}")
    if HAS_MPL:
        print(f"Chart:        {chart_path}")
    else:
        print("(matplotlib not installed — chart skipped)")

    t = sched.totals()
    print()
    print(f"Total interest:  {sched.currency} {t['total_interest']:,.0f}")
    print(f"Total payments:  {sched.currency} {t['total_payment']:,.0f}")
    print(f"Effective cost:  {t['interest_pct_of_principal']*100:.2f}% of principal")
    return 0


if __name__ == "__main__":
    sys.exit(main())
