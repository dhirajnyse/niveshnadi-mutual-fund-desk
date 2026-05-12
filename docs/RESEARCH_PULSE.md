# Research Pulse

Research Pulse is the compact command layer for NiveshNadi. It sits near the top of the product, before the full screener, and turns the current research state into a short set of next checks. The goal is to help a retail investor understand what still needs attention without presenting the output as advice, approval, or a transaction recommendation.

## Product Behavior

- Read the selected fund, compare set, evidence readiness, watchlist triggers, drawdown pressure, and decision memo reason.
- Show one compact pulse score, posture, and the next research check.
- Provide direct action cards for Compare, Evidence, Stress Lab, and Decision Pack.
- Let the user copy a research pulse note for their own records.
- Keep all wording inside the self-research boundary.

## Guardrail

Research Pulse must never say that a fund is suitable, approved, buyable, or recommended. It should only describe workflow completeness and missing checks. Live launch must keep this distinction clear, especially after AMFI, AMC factsheet, SID/KIM, portfolio disclosure, benchmark, TER, riskometer, login, payment, or distributor workflows are added.

## Design Rule

The pulse belongs above the screener because it is an operating layer, not a deep analysis page. It should feel like a control-room summary: compact, clear, and action-oriented. It should not compete with the full Evidence Ledger, Risk Stress Lab, Watchlist, or Decision Pack. It should route users to those tools when deeper review is needed.
