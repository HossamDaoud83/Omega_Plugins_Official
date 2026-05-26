---
name: visualization-library
description: Choose the right chart for the message — McKinsey-style storytelling charts, decision tree, color discipline.
---

# Visualization Library

## When to use
Whenever a deliverable contains a chart. Wrong-chart-for-the-message is the most common quality issue.

## Chart selection decision tree

```
Are you SHOWING DATA or TELLING A STORY?
├── Showing data (exploration/QA)
│   └── Use small multiples, scatterplots, distributions
└── Telling a story (deliverable)
    ├── Comparing magnitudes → bar chart (sorted)
    ├── Showing change over time → line chart (or area for parts-of-whole)
    ├── Showing composition → stacked bar (NOT pie chart in most cases)
    ├── Showing flow → Sankey
    ├── Showing relationships → scatter, bubble, correlation matrix
    ├── Showing geographic distribution → choropleth, point map
    ├── Showing density / heat → heatmap
    ├── Showing rank → bump chart, slope chart
    └── Showing process → flow diagram, swim lane
```

## McKinsey-style storytelling charts

The chart's TITLE is the headline insight, not the metric name:
- ❌ "Revenue by Quarter"
- ✅ "Revenue grew 23% in Q3, driven by enterprise segment"

Charts have:
- Headline title (the SO-WHAT)
- Subtitle / units (the WHAT)
- Source citation (the WHERE FROM)
- Annotations on the data points that matter

## Bar chart rules

- Sort by value (descending) unless time/category order matters
- Horizontal bars when labels are long; vertical when comparing time
- One color unless multiple series (then 2-3 max)
- Data labels on bars > axis ticks for executive readouts
- Zero baseline always; no truncated y-axis

## Line chart rules

- ≤5 lines or it becomes spaghetti
- Most-important line in the brand color; others gray
- Direct labels at line ends > separate legend
- Annotations on inflection points
- Time on x-axis, left-to-right

## Anti-patterns

- 3D anything
- Pie chart with >5 slices (use bar instead)
- Dual y-axis (almost always misleading; use two charts)
- Truncated y-axis on bar chart (visual lie)
- Rainbow color palette on continuous data
- Default Excel colors (lazy, off-brand)

## Color discipline

- One brand primary color for the focus
- Gray for context
- Red for negative / warning ONLY (don't use for positive)
- Sequential palette for ordinal/continuous data
- Diverging palette for above/below midpoint
- Test in greyscale (will the chart still work?)

## Chart density rule

A chart should be readable from 2 meters away (printed) or in a 30-second glance (slide). If you need to squint, simplify or split.

## Tables vs charts

Use a table when:
- ≤5 rows × ≤5 columns
- Precise values matter (financial summaries)
- Comparing many dimensions

Use a chart when:
- Pattern / trend matters more than precise values
- Comparison is across categories
- Audience is executive

## Quality bar

- Every chart has a headline title (insight, not metric name)
- Every chart cites its data source
- Every chart could stand alone — readable without surrounding text
- Color use is intentional, not default

## Integration

- Pair with `executive-storytelling` skill for deck construction
- All v4.2.0 capability/industry skills reference this library for output specs
- Use in `omega-coe` dashboards for KPI display patterns
