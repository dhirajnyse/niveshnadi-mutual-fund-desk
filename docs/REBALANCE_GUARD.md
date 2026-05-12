# Rebalance Guard

Rebalance Guard is the Phase 1 v26 drift-discipline layer for NiveshNadi. It takes the selected X-Ray or Compare funds, reads the Portfolio Blueprint target weights, and lets the investor enter current demo weights to inspect drift before writing a decision note.

## What It Does

- Shows target weight, current weight, drift, and whether each fund is inside the selected tolerance band.
- Converts drift into a research score, total drift percentage, current TER, high-risk weight, evidence readiness, and outside-band count.
- Creates a contribution-first research route for underweight sleeves using future SIP amount assumptions.
- Lets the user copy a Rebalance Guard note and save a browser-local watch trigger for later review.
- Keeps the experience tied to Blueprint, Portfolio X-Ray, Evidence Ledger, Cost Lab, Stress Lab, and Decision Pack.

## Compliance Boundary

The guard must stay research-only. It must not say that the investor should buy, sell, hold, switch, redeem, pause, or allocate a particular percentage. It can say that a fund is above or below a research target and that future contribution routing should be reviewed. It must also remind the user to check source dates, TER, overlap, tax, exit load, behavior, and evidence before any real action.

## Data Boundary

The current version stores no rebalance fields in local storage. Current weights, corpus value, tolerance, and route amount are page-memory inputs only. When the user saves a review trigger, only a watchlist entry and generic review note are written to the existing browser-local alert keys. PAN, folio, CAS, transaction history, broker data, and investor identity are not required.

## Paid Value Later

Nadi Plus can save rebalance histories, compare drift snapshots, export review notes, and sync review triggers after authentication is designed. The paid value is workflow memory and discipline. It is not personalized allocation advice or a model portfolio.
