# Portfolio Blueprint Lab

Portfolio Blueprint Lab is the research-only portfolio sketching layer introduced in Phase 1 v25. It lets an investor take the selected X-Ray or Compare funds and test draft weights before writing a decision memo. Phase 1 v26 connects those target weights to Rebalance Guard for drift review.

## What it does

- Uses the current selected fund set from X-Ray or Compare.
- Lets the user enter draft weights, monthly SIP amount, horizon, portfolio style, and review cadence.
- Normalizes weights to show blended TER, evidence readiness, high-risk weight, duplication risk, sleeve mix, and demo SIP projection.
- Shows fund-level role cards so each fund has a visible job in the draft.
- Produces guardrails for weight totals, high-risk exposure, missing stabilizer allocation, high TER, weak evidence, short horizon, tax-aware drafts, and duplication risk.
- Feeds target weights into Rebalance Guard so current demo weights can be reviewed against a tolerance band without creating a transaction instruction.

## Compliance posture

The lab is not a model portfolio engine and does not recommend an allocation. It is a scratchpad for research discipline. The product language must keep saying draft, sketch, review, guardrail, and research-only. It must not say the weights are suitable, approved, optimal, recommended, or personalized for a user.

## Launch gates

Before any account sync or saved portfolio feature is added, the data classification should explicitly cover user-entered weights, local-only scenario inputs, and future authenticated storage. Live launch should add source-date-backed holdings, TER, riskometer, and factsheet records before showing a blueprint as current.

## Paid tier fit

Nadi Plus can save blueprint history, compare blueprint versions, export blueprint notes, attach review dates, and sync blueprint drafts across devices after authentication is designed. The paid value is workflow memory and research organization, not personalized allocation advice.
