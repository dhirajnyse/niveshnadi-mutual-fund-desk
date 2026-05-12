# Portfolio Review Room

Portfolio Review Room is the review-command layer introduced in Phase 1 v27 for NiveshNadi. It brings together the selected research set, Rebalance Guard drift, Evidence Ledger readiness, cost and overlap signals, watchlist triggers, and the user's written review note into one calm checkpoint. Phase 1 v28 adds Review Vault so the user can save compact review snapshots over time. Phase 1 v29 adds Investor Record Desk so the latest review posture can become an identity-light review record.

## What It Does

- Scores the portfolio review across drift, evidence, cost and overlap, behavior, and rhythm lanes.
- Shows a clear review queue before the user refreshes a decision pack or journal note.
- Uses the selected X-Ray or Compare funds and the current Rebalance Guard inputs.
- Saves browser-local review triggers for the selected funds when the user asks to save a review.
- Creates a copyable review note that can be attached to a decision pack or journal.
- Feeds compact score, queue, drift, evidence, and trigger data into Review Vault without storing free-form note text.
- Feeds the latest review posture into Investor Record Desk, again without storing the free-form review note.

## Compliance Boundary

The room organizes a research file. It must not say that the investor should buy, sell, switch, hold, redeem, pause, or execute. It can say what should be reviewed: drift band, source date, citation path, cost, overlap, stress behavior, watchlist trigger, and next review date. The output is a workflow checklist, not personalized investment advice or a model portfolio.

## Data Boundary

The review focus, conviction, date, and note are page-memory inputs unless the user saves a review trigger. A saved trigger writes only generic review metadata to the existing browser-local watchlist and alert keys. PAN, folio, CAS, transaction history, broker account data, and distributor identifiers are not required.

## Paid Value Later

Nadi Plus can save review histories, compare review snapshots, sync review files across devices, export PDF review notes, and link review rooms to decision packs after authentication is designed. The paid value is research memory and disciplined follow-up, not personalized recommendations.
