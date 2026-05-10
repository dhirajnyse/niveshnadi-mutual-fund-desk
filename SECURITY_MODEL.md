# Portfolio Intelligence X-Ray

Portfolio Intelligence X-Ray is the Phase 1 v9 upgrade to the earlier portfolio comparison panel. It helps a retail investor understand whether selected funds have distinct jobs or are simply repeating the same category, sleeve, holdings, or risk exposure.

## What It Adds

- Duplication score from shared holdings, category crowding, and very-high-risk exposure.
- Role clarity label such as Core-led, Balanced, Satellite-heavy, or Needs thesis.
- Plain-English portfolio thesis for the selected research set.
- Role map for each selected fund.
- Overlap warnings that point to research questions before any action.
- Research conclusion with highest risk band and duplication posture.

## Compliance Posture

This feature is research support only. It should describe structure, concentration, overlap, and questions to inspect. It must not say that an investor should buy, sell, switch, hold, redeem, or allocate a specific percentage to a fund.

Recommended wording:

- "Inspect overlap before adding another fund."
- "Write the decision reason before acting."
- "Confirm live factsheet holdings before investing real money."
- "This is research support only."

Avoid:

- "You should sell this duplicate fund."
- "Allocate 40 percent here."
- "This is the best portfolio for you."

## Data Roadmap

The demo version uses static sample holdings. A live version should connect:

- AMC factsheet holdings.
- Portfolio disclosure dates.
- Benchmark constituents.
- Expense ratios and riskometer changes.
- Category and scheme metadata from source records.

Every live X-Ray output should show source date and citation status so stale holdings do not look current.

## Phase 2 Distributor Fit

For distributor workflows, this can become a client review screen only after consent, role-based access, tenant isolation, and audit logging exist. The role map can support review conversations, but the product must preserve the boundary between neutral research software and regulated advice or execution.
