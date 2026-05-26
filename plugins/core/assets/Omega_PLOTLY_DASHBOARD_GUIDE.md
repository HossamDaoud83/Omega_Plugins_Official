# Omega Plotly Interactive Dashboard Guide

**Version:** 1.0
**Updated:** February 2026
**Purpose:** Create Big 3-quality interactive dashboards for client presentations

---

## Overview

Plotly dashboards provide **interactive HTML files** that clients can open in any browser - no installation required. Perfect for scenario exploration, sensitivity analysis, and before/after comparisons.

---

## 1. Installation

```bash
pip install plotly pandas numpy kaleido
```

---

## 2. Omega Plotly Theme

```python
import plotly.graph_objects as go
import plotly.express as px
import plotly.io as pio

# Omega Custom Theme
Omega_TEMPLATE = go.layout.Template(
    layout=go.Layout(
        font=dict(family='Arial', size=12, color='#333333'),
        title=dict(font=dict(family='Arial Black', size=16, color='#1B4F72')),
        paper_bgcolor='white',
        plot_bgcolor='white',
        colorway=['#1B4F72', '#104E70', '#228B22', '#FF8C00', '#CC0000', '#9CC2E5'],
        xaxis=dict(
            showgrid=True, gridcolor='#E0E0E0', gridwidth=1,
            showline=True, linecolor='#333333', linewidth=1
        ),
        yaxis=dict(
            showgrid=True, gridcolor='#E0E0E0', gridwidth=1,
            showline=True, linecolor='#333333', linewidth=1
        ),
        legend=dict(
            bgcolor='rgba(255,255,255,0.8)',
            bordercolor='#9CC2E5', borderwidth=1
        ),
        hoverlabel=dict(
            bgcolor='#1B4F72', font_color='white', font_size=12
        )
    )
)

# Register as default
pio.templates['omega'] = Omega_TEMPLATE
pio.templates.default = 'omega'
```

---

## 3. Dashboard Types

### 3.1 Scenario Comparison Dashboard

```python
import plotly.graph_objects as go
from plotly.subplots import make_subplots
import pandas as pd

def create_scenario_dashboard(scenarios_df):
    """
    Create interactive 9-scenario comparison dashboard.

    Parameters:
    - scenarios_df: DataFrame with columns [Volume, API, IRR, DSCR, NPV, Revenue]
    """

    fig = make_subplots(
        rows=2, cols=2,
        subplot_titles=(
            'Project IRR by Scenario',
            'DSCR Coverage Ratio',
            'NPV Sensitivity',
            'Revenue Comparison'
        ),
        specs=[[{'type': 'bar'}, {'type': 'bar'}],
               [{'type': 'scatter'}, {'type': 'bar'}]]
    )

    # IRR Chart
    fig.add_trace(
        go.Bar(
            x=scenarios_df['Scenario'],
            y=scenarios_df['IRR'],
            marker_color=['#228B22' if x >= 15 else '#FF8C00' if x >= 12 else '#CC0000'
                          for x in scenarios_df['IRR']],
            text=[f'{x:.1f}%' for x in scenarios_df['IRR']],
            textposition='outside',
            name='IRR'
        ),
        row=1, col=1
    )

    # Add hurdle rate line
    fig.add_hline(y=12, line_dash='dash', line_color='#CC0000',
                  annotation_text='Hurdle Rate 12%', row=1, col=1)

    # DSCR Chart
    fig.add_trace(
        go.Bar(
            x=scenarios_df['Scenario'],
            y=scenarios_df['DSCR'],
            marker_color='#104E70',
            text=[f'{x:.2f}x' for x in scenarios_df['DSCR']],
            textposition='outside',
            name='DSCR'
        ),
        row=1, col=2
    )

    # Add covenant line
    fig.add_hline(y=1.35, line_dash='dash', line_color='#CC0000',
                  annotation_text='Covenant 1.35x', row=1, col=2)

    # NPV Scatter
    fig.add_trace(
        go.Scatter(
            x=scenarios_df['Volume'],
            y=scenarios_df['NPV'],
            mode='markers+text',
            marker=dict(size=scenarios_df['Revenue']/5, color='#1B4F72', opacity=0.7),
            text=scenarios_df['Scenario'],
            textposition='top center',
            name='NPV'
        ),
        row=2, col=1
    )

    # Revenue Comparison
    fig.add_trace(
        go.Bar(
            x=scenarios_df['Scenario'],
            y=scenarios_df['Revenue'],
            marker_color='#228B22',
            text=[f'${x:.0f}M' for x in scenarios_df['Revenue']],
            textposition='outside',
            name='Revenue'
        ),
        row=2, col=2
    )

    fig.update_layout(
        height=800,
        title_text='Al Adabiya Port - 9 Scenario Financial Analysis',
        showlegend=False,
        template='omega'
    )

    return fig
```

### 3.2 Before/After Comparison Dashboard

```python
def create_before_after_dashboard(before_data, after_data, metrics):
    """
    Create interactive before/after comparison.

    Parameters:
    - before_data: dict with metric values before intervention
    - after_data: dict with metric values after intervention
    - metrics: list of metric names to compare
    """

    fig = go.Figure()

    # Before bars
    fig.add_trace(go.Bar(
        name='Before',
        x=metrics,
        y=[before_data[m] for m in metrics],
        marker_color='#9CC2E5',
        text=[f'{before_data[m]:.1f}' for m in metrics],
        textposition='outside'
    ))

    # After bars
    fig.add_trace(go.Bar(
        name='After',
        x=metrics,
        y=[after_data[m] for m in metrics],
        marker_color='#1B4F72',
        text=[f'{after_data[m]:.1f}' for m in metrics],
        textposition='outside'
    ))

    # Calculate improvement percentages
    improvements = []
    for m in metrics:
        if before_data[m] != 0:
            pct = (after_data[m] - before_data[m]) / before_data[m] * 100
            improvements.append(f'{pct:+.1f}%')
        else:
            improvements.append('N/A')

    # Add improvement annotations
    for i, (metric, imp) in enumerate(zip(metrics, improvements)):
        color = '#228B22' if '+' in imp else '#CC0000'
        fig.add_annotation(
            x=metric, y=max(before_data[metric], after_data[metric]) * 1.15,
            text=imp, showarrow=False,
            font=dict(size=12, color=color, weight='bold')
        )

    fig.update_layout(
        title='Before vs After Analysis',
        barmode='group',
        template='omega',
        height=500,
        yaxis_title='Value',
        legend=dict(orientation='h', yanchor='bottom', y=1.02)
    )

    return fig
```

### 3.3 Interactive Sensitivity Explorer

```python
def create_sensitivity_dashboard(base_case, sensitivities):
    """
    Create tornado diagram with interactive hover.

    Parameters:
    - base_case: float, base case IRR
    - sensitivities: list of dicts with [name, low, high, impact_low, impact_high]
    """

    fig = go.Figure()

    # Sort by impact range
    sensitivities = sorted(sensitivities,
                           key=lambda x: abs(x['impact_high'] - x['impact_low']),
                           reverse=True)

    for i, s in enumerate(sensitivities):
        # Negative impact (left side)
        fig.add_trace(go.Bar(
            y=[s['name']],
            x=[s['impact_low'] - base_case],
            orientation='h',
            marker_color='#CC0000' if s['impact_low'] < base_case else '#228B22',
            name=f"{s['name']} Low",
            text=f"{s['low']}",
            textposition='outside',
            hovertemplate=f"<b>{s['name']}</b><br>Low Case: {s['low']}<br>IRR: {s['impact_low']:.1f}%<extra></extra>",
            showlegend=False
        ))

        # Positive impact (right side)
        fig.add_trace(go.Bar(
            y=[s['name']],
            x=[s['impact_high'] - base_case],
            orientation='h',
            marker_color='#228B22' if s['impact_high'] > base_case else '#CC0000',
            name=f"{s['name']} High",
            text=f"{s['high']}",
            textposition='outside',
            hovertemplate=f"<b>{s['name']}</b><br>High Case: {s['high']}<br>IRR: {s['impact_high']:.1f}%<extra></extra>",
            showlegend=False
        ))

    fig.add_vline(x=0, line_color='#1B4F72', line_width=2)

    fig.update_layout(
        title=f'IRR Sensitivity Analysis (Base Case: {base_case:.1f}%)',
        xaxis_title='Impact on IRR (%)',
        barmode='overlay',
        template='omega',
        height=400 + len(sensitivities) * 40
    )

    return fig
```

### 3.4 20-Year Financial Timeline

```python
def create_financial_timeline(years, revenue, ebitda, fcf):
    """
    Create interactive 20-year financial projection.
    """

    fig = go.Figure()

    # Revenue area
    fig.add_trace(go.Scatter(
        x=years, y=revenue,
        fill='tozeroy',
        fillcolor='rgba(27, 79, 114, 0.2)',
        line=dict(color='#1B4F72', width=2),
        name='Revenue',
        hovertemplate='Year %{x}<br>Revenue: $%{y:.1f}M<extra></extra>'
    ))

    # EBITDA line
    fig.add_trace(go.Scatter(
        x=years, y=ebitda,
        fill='tozeroy',
        fillcolor='rgba(34, 139, 34, 0.3)',
        line=dict(color='#228B22', width=2),
        name='EBITDA',
        hovertemplate='Year %{x}<br>EBITDA: $%{y:.1f}M<extra></extra>'
    ))

    # FCF markers
    fig.add_trace(go.Scatter(
        x=years, y=fcf,
        mode='markers+lines',
        marker=dict(size=8, color='#FF8C00'),
        line=dict(color='#FF8C00', width=1, dash='dot'),
        name='Free Cash Flow',
        hovertemplate='Year %{x}<br>FCF: $%{y:.1f}M<extra></extra>'
    ))

    # Add range slider
    fig.update_layout(
        title='20-Year Financial Projections',
        xaxis=dict(
            rangeslider=dict(visible=True),
            type='linear'
        ),
        yaxis_title='USD Millions',
        template='omega',
        height=500,
        legend=dict(orientation='h', yanchor='bottom', y=1.02)
    )

    return fig
```

---

## 4. Multi-Tab Dashboard (Dash)

For complex dashboards with multiple views, use Plotly Dash:

```python
from dash import Dash, dcc, html, Input, Output
import plotly.express as px

app = Dash(__name__)

app.layout = html.Div([
    html.H1('Al Adabiya Port - Investment Dashboard',
            style={'color': '#1B4F72', 'fontFamily': 'Arial Black'}),

    dcc.Tabs([
        dcc.Tab(label='Scenario Analysis', children=[
            dcc.Graph(id='scenario-chart')
        ]),
        dcc.Tab(label='Sensitivity', children=[
            dcc.Graph(id='sensitivity-chart')
        ]),
        dcc.Tab(label='Timeline', children=[
            dcc.Graph(id='timeline-chart')
        ]),
    ]),

    html.Div([
        html.Label('Select Scenario:'),
        dcc.Dropdown(
            id='scenario-dropdown',
            options=[
                {'label': 'Conservative', 'value': 'conservative'},
                {'label': 'Base Case', 'value': 'base'},
                {'label': 'Optimistic', 'value': 'optimistic'}
            ],
            value='base'
        )
    ])
])

if __name__ == '__main__':
    app.run_server(debug=True)
```

---

## 5. Export Options

```python
# Self-contained HTML (recommended for client delivery)
fig.write_html('dashboard.html', include_plotlyjs=True, full_html=True)

# HTML with CDN (smaller file, requires internet)
fig.write_html('dashboard_cdn.html', include_plotlyjs='cdn')

# Static image export
fig.write_image('dashboard.png', scale=2)  # High resolution
fig.write_image('dashboard.svg')           # Vector format
fig.write_image('dashboard.pdf')           # PDF format
```

---

## 6. Best Practices

### Design Principles
- [ ] Answer "So what?" in the title
- [ ] Use Omega color palette consistently
- [ ] Include hover tooltips with key data
- [ ] Add reference lines (hurdle rates, covenants)
- [ ] Limit to 4-6 charts per dashboard

### Performance
- [ ] Downsample large datasets (>10,000 points)
- [ ] Use WebGL for scatter plots with many points
- [ ] Lazy load charts in tabbed interfaces

### Client Delivery
- [ ] Export as self-contained HTML
- [ ] Test in multiple browsers (Chrome, Edge, Firefox)
- [ ] Include Omega logo in dashboard header
- [ ] Add data source citations

---

## 7. File Output Location

```
05_Deliverables_Final/
├── Phase_A/
│   ├── excel/           # Static Excel workbooks
│   └── dashboards/      # Interactive HTML dashboards
│       ├── scenario_analysis.html
│       ├── sensitivity_explorer.html
│       └── financial_timeline.html
```

---

## 8. Quick Reference

| Dashboard Type | Use Case | Key Feature |
|----------------|----------|-------------|
| Scenario Comparison | 9-scenario matrix | Side-by-side bars, color coding |
| Before/After | Pre/post intervention | Grouped bars, % improvement |
| Sensitivity | Risk analysis | Tornado diagram, hover details |
| Timeline | 20-year projections | Range slider, area fills |
| Multi-Tab | Comprehensive analysis | Dash tabs, dropdowns |

---

**Document Control:**
- Author: Omega Consulting
- Classification: Internal Methodology
- Review Cycle: Quarterly
