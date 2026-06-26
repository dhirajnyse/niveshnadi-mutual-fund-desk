# Nadi Coach Q&A

Nadi Coach Q&A is the research guidance layer. It does not answer with a buy, sell, hold, switch, or SIP recommendation. It reads the current workspace state and routes the investor to the next research check.

## Inputs

- Selected demo fund, category, risk band, TER, drawdown, and Nadi score.
- Compare set count, role clarity, duplication risk, and overlap signals.
- Evidence Ledger readiness score.
- First 5-Minute Start progress.
- Retail Investor Passport posture, horizon, emergency buffer, risk comfort, and SIP capacity.
- Research Pulse open checks.
- Watchlist and alert status.
- Nadi Decision Pack reason field.

## Supported Questions

- What should I check next?
- What are the red flags?
- Is my shortlist duplicated?
- Is this ready for first SIP research?
- Should I study a switch?
- What should I write in the memo?

## Behavior Boundary

The coach can open Compare, X-Ray, Stress Lab, Evidence Ledger, Switch Lab, First SIP Coach, Watchlist, Red Flag Radar, or Decision Pack. It may prefill a plain-language memo seed when the memo reason is empty.

It must not collect PAN, folio, CAS, bank data, account credentials, mobile OTP, or personal identifiers. It must not personalize an investment recommendation. It must not claim suitability, guarantee returns, or tell the investor to transact.

## Launch Gate

Before live use, connect source-date-backed AMFI, AMC factsheet, SID, KIM, portfolio disclosure, riskometer, TER, and benchmark citations. The coach should continue to say when a field is demo mapped, stale, or citation pending.
