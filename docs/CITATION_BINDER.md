# Nadi Citation Binder

Nadi Citation Binder is the source-proof layer for NiveshNadi. It sits between Evidence Ledger and Data Readiness Room and answers a launch-critical question: can a fund-level claim show a visible source date, citation path, extraction confidence, and stale-source status before a retail investor sees it as current research?

The binder works with six source families: AMFI scheme and NAV master, AMC monthly factsheet, SID and KIM documents, portfolio disclosure file, benchmark and index data, and riskometer/TER history. For each source it records the expected citation path, freshness rule, proof fields, blocking gaps, and launch boundary.

The feature creates:

- a citation score for the selected source and fund,
- freshness, visibility, extraction, and evidence sub-scores,
- a source card with the required citation path,
- mapped proof fields connected to demo fund data,
- blocking gaps for stale source, hidden citation, low extraction confidence, and launch-mode evidence weakness,
- a binder checklist that excludes PAN, folio, CAS, account data, credentials, and client identifiers,
- and a copyable citation binder note.

Launch guardrails:

- Do not display live-looking return, risk, expense, holding, benchmark, or document claims without a visible source date and citation path.
- Treat low extraction confidence or missing citation as a launch blocker.
- Keep personal identifiers and account documents out of source proof workflows.
- Use Citation Binder to govern research evidence, not to approve funds, personalize advice, execute transactions, or guarantee returns.
