# -*- coding: utf-8 -*-
"""
Sensitivity Analysis Configuration - TEMPLATE
==============================================
Omega Business Consulting - Project Finance Template

INSTRUCTIONS:
1. Copy this file to your project's sensitivity_analysis/scripts/ folder
2. Update PROJECT IDENTIFICATION section with your project details
3. Update CAPITAL EXPENDITURE with actual CAPEX breakdown
4. Update OPERATING PARAMETERS with project-specific values
5. Update FINANCIAL PARAMETERS with actual financing terms
6. Update BASE CASE OUTPUTS with values from your financial model
7. Run: python run_all_analysis.py

All values below are PLACEHOLDERS - replace with actual project data.
"""

import os
from pathlib import Path
from dataclasses import dataclass, field
from typing import Dict, List, Tuple

# =============================================================================
# Omega BRANDING COLORS
# =============================================================================
Omega_COLORS = {
    'PRIMARY': '#1B4F72',       # Navy - Headers, primary elements
    'DARK_TEAL': '#104E70',     # Dark Teal - Subheaders
    'LIGHT_BLUE': '#9CC2E5',    # Light Blue - Borders, accents
    'ALT_ROW': '#F8FBFD',       # Very Light - Alternating rows
    'CRITICAL': '#CC0000',      # Red - Critical/negative
    'HIGH': '#FF8C00',          # Orange - High risk/warning
    'MEDIUM': '#FFD700',        # Yellow/Gold - Medium
    'LOW': '#228B22',           # Green - Low risk/positive
    'INPUT': '#FFFF99',         # Yellow - Editable cells
    'GRAY': '#666666',          # Gray - Secondary text
    'WHITE': '#FFFFFF',         # White - Background
}

# Tornado chart specific colors
TORNADO_COLORS = {
    'positive': '#228B22',      # Green for positive impact
    'negative': '#CC0000',      # Red for negative impact
    'base_line': '#1B4F72',     # Navy for base case line
}

# Monte Carlo distribution colors
MC_COLORS = {
    'histogram': '#1B4F72',     # Navy for histogram bars
    'p10': '#CC0000',           # Red for P10
    'p50': '#FF8C00',           # Orange for P50 (median)
    'p90': '#228B22',           # Green for P90
    'mean': '#104E70',          # Dark teal for mean
}

# =============================================================================
# PROJECT PATHS
# =============================================================================
PROJECT_ROOT = Path(__file__).parent.parent.parent
SENSITIVITY_ROOT = Path(__file__).parent.parent
CHARTS_DIR = SENSITIVITY_ROOT / 'charts'
REPORTS_DIR = SENSITIVITY_ROOT / 'reports'

# Ensure directories exist
CHARTS_DIR.mkdir(exist_ok=True)
REPORTS_DIR.mkdir(exist_ok=True)

# =============================================================================
# PROJECT CONFIGURATION - UPDATE FOR EACH PROJECT
# =============================================================================

@dataclass
class SensitivityConfig:
    """
    Configuration class for sensitivity analysis.

    UPDATE ALL VALUES BELOW FOR YOUR SPECIFIC PROJECT.
    Current values are PLACEHOLDERS for template purposes.
    """

    # =========================================================================
    # PROJECT IDENTIFICATION - UPDATE THESE
    # =========================================================================
    project_name: str = "[PROJECT NAME]"
    project_code: str = "[PROJECT-CODE]"
    kvr_version: str = "1.0"
    currency: str = "USD"

    # =========================================================================
    # CAPITAL EXPENDITURE (USD Millions) - UPDATE THESE
    # =========================================================================
    total_capex: float = 100.0          # Total project CAPEX

    capex_breakdown: Dict[str, float] = field(default_factory=lambda: {
        'civil_works': 30.0,            # Civil/construction
        'equipment': 40.0,              # Major equipment
        'installation': 15.0,           # Installation & commissioning
        'contingency': 15.0,            # Contingency (~15%)
    })

    # =========================================================================
    # OPERATING PARAMETERS - UPDATE THESE
    # =========================================================================
    annual_throughput_mta: float = 1.0  # Annual throughput (million units)

    # =========================================================================
    # FINANCIAL PARAMETERS - UPDATE THESE
    # =========================================================================
    # Revenue assumptions
    tariff_usd_per_tonne: float = 10.00  # Revenue per unit
    ancillary_revenue_pct: float = 0.10  # Additional revenue (%)

    # Operating costs
    opex_fixed_annual: float = 5.0       # USD M/year fixed OPEX
    opex_variable_per_tonne: float = 2.0 # USD/unit variable OPEX
    opex_escalation: float = 0.025       # 2.5% annual escalation

    # Financing structure
    debt_ratio: float = 0.70             # 70% debt / 30% equity
    equity_ratio: float = 0.30
    interest_rate: float = 0.10          # 10% interest rate
    loan_tenor_years: int = 15           # Loan tenor
    grace_period_years: int = 2          # Principal grace period

    # Discount rates
    wacc: float = 0.10                   # Weighted average cost of capital
    cost_of_equity: float = 0.15         # Required equity return
    risk_free_rate: float = 0.04         # Risk-free rate

    # =========================================================================
    # PROJECT TIMELINE - UPDATE THESE
    # =========================================================================
    construction_months: int = 24        # Construction duration
    operations_years: int = 20           # Operating period for analysis
    total_project_years: int = 22        # Construction + Operations

    # =========================================================================
    # BASE CASE OUTPUTS - UPDATE FROM YOUR FINANCIAL MODEL
    # =========================================================================
    base_npv: float = 50.0               # NPV from financial model (USD M)
    base_irr: float = 0.15               # Project IRR (15%)
    base_equity_irr: float = 0.20        # Equity IRR (20%)
    base_payback_years: float = 8.0      # Simple payback
    base_min_dscr: float = 1.25          # Minimum DSCR
    base_avg_dscr: float = 1.50          # Average DSCR
    base_llcr: float = 1.40              # Loan Life Coverage Ratio

    # =========================================================================
    # SENSITIVITY RANGES (for analysis)
    # =========================================================================
    sensitivity_range: float = 0.20      # +/- 20% default range

    # Variable-specific ranges (low_multiplier, high_multiplier)
    variable_ranges: Dict[str, Tuple[float, float]] = field(default_factory=lambda: {
        'capex': (0.85, 1.25),           # -15% to +25%
        'tariff': (0.75, 1.20),          # -25% to +20%
        'throughput': (0.70, 1.15),      # -30% to +15%
        'opex': (0.85, 1.30),            # -15% to +30%
        'interest_rate': (0.75, 1.25),   # +/- 25%
        'construction_delay': (1.0, 1.5), # 0 to +50% delay
    })

    # =========================================================================
    # MONTE CARLO PARAMETERS
    # =========================================================================
    mc_iterations: int = 10_000          # Number of simulations
    mc_seed: int = 42                    # Random seed for reproducibility

    # Distribution parameters (multipliers relative to base case)
    mc_distributions: Dict[str, Dict] = field(default_factory=lambda: {
        'capex': {'dist': 'triangular', 'min': 0.90, 'mode': 1.0, 'max': 1.20},
        'tariff': {'dist': 'normal', 'mean': 1.0, 'std': 0.10},
        'throughput': {'dist': 'triangular', 'min': 0.75, 'mode': 0.95, 'max': 1.10},
        'opex': {'dist': 'normal', 'mean': 1.0, 'std': 0.12},
        'interest_rate': {'dist': 'uniform', 'min': 0.08, 'max': 0.12},
        'construction_months': {'dist': 'pert', 'min': 20, 'mode': 24, 'max': 32},
    })

    # =========================================================================
    # SCENARIO DEFINITIONS
    # =========================================================================
    scenarios: Dict[str, Dict[str, float]] = field(default_factory=lambda: {
        'base': {
            'capex': 1.0, 'tariff': 1.0, 'throughput': 1.0,
            'opex': 1.0, 'interest_rate': 1.0, 'delay_months': 0
        },
        'upside': {
            'capex': 0.95, 'tariff': 1.10, 'throughput': 1.10,
            'opex': 0.95, 'interest_rate': 0.90, 'delay_months': 0
        },
        'downside': {
            'capex': 1.10, 'tariff': 0.90, 'throughput': 0.85,
            'opex': 1.10, 'interest_rate': 1.10, 'delay_months': 3
        },
        'stress': {
            'capex': 1.20, 'tariff': 0.80, 'throughput': 0.75,
            'opex': 1.20, 'interest_rate': 1.20, 'delay_months': 6
        },
        'bank_case': {
            'capex': 1.10, 'tariff': 0.95, 'throughput': 0.90,
            'opex': 1.05, 'interest_rate': 1.0, 'delay_months': 3
        },
    })

    # =========================================================================
    # BREAK-EVEN THRESHOLDS
    # =========================================================================
    breakeven_targets: Dict[str, float] = field(default_factory=lambda: {
        'npv_zero': 0.0,                 # NPV = 0
        'irr_wacc': 0.10,                # IRR = WACC
        'dscr_covenant': 1.20,           # Minimum DSCR covenant
        'dscr_default': 1.05,            # Default threshold
        'payback_max': 12.0,             # Maximum acceptable payback
    })

    # =========================================================================
    # RISK MATRIX THRESHOLDS
    # =========================================================================
    risk_thresholds: Dict[str, Dict[str, float]] = field(default_factory=lambda: {
        'npv': {'critical': 0, 'high': 25, 'medium': 40, 'low': 50},
        'irr': {'critical': 0.08, 'high': 0.10, 'medium': 0.12, 'low': 0.15},
        'dscr': {'critical': 1.0, 'high': 1.10, 'medium': 1.20, 'low': 1.30},
        'payback': {'critical': 15, 'high': 12, 'medium': 10, 'low': 8},
    })


# =============================================================================
# HELPER FUNCTIONS
# =============================================================================

def get_config() -> SensitivityConfig:
    """Return default configuration instance."""
    return SensitivityConfig()


def format_currency(value: float, decimals: int = 1) -> str:
    """Format value as currency (USD M)."""
    if abs(value) >= 1000:
        return f"${value/1000:.{decimals}f}B"
    return f"${value:.{decimals}f}M"


def format_percentage(value: float, decimals: int = 1) -> str:
    """Format value as percentage."""
    return f"{value*100:.{decimals}f}%"


def format_ratio(value: float, decimals: int = 2) -> str:
    """Format value as ratio (e.g., DSCR)."""
    return f"{value:.{decimals}f}x"


# =============================================================================
# MATPLOTLIB STYLE CONFIGURATION
# =============================================================================

def apply_omega_style():
    """Apply Omega branding to matplotlib plots."""
    import matplotlib.pyplot as plt

    plt.rcParams.update({
        'font.family': 'Arial',
        'font.size': 10,
        'axes.titlesize': 12,
        'axes.titleweight': 'bold',
        'axes.labelsize': 10,
        'axes.labelweight': 'bold',
        'axes.edgecolor': Omega_COLORS['PRIMARY'],
        'axes.linewidth': 1.5,
        'axes.grid': True,
        'axes.axisbelow': True,
        'grid.color': Omega_COLORS['LIGHT_BLUE'],
        'grid.linestyle': '--',
        'grid.alpha': 0.7,
        'xtick.labelsize': 9,
        'ytick.labelsize': 9,
        'legend.fontsize': 9,
        'legend.framealpha': 0.9,
        'figure.facecolor': 'white',
        'axes.facecolor': 'white',
        'savefig.dpi': 300,
        'savefig.bbox': 'tight',
        'savefig.facecolor': 'white',
    })


if __name__ == "__main__":
    # Test configuration
    config = get_config()
    print(f"Project: {config.project_name}")
    print(f"Base NPV: {format_currency(config.base_npv)}")
    print(f"Base IRR: {format_percentage(config.base_irr)}")
    print(f"Base DSCR: {format_ratio(config.base_min_dscr)}")
    print("\n*** UPDATE config.py WITH YOUR PROJECT DATA BEFORE RUNNING ANALYSIS ***")
