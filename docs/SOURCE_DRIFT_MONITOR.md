# Nadi Source Drift Monitor

Nadi Source Drift Monitor is the change-safety layer for live-data operations. Once a source has passed intake, the monitor checks whether a new file, feed, factsheet, document, riskometer, TER record, holdings disclosure, benchmark record, or schema update should refresh investor-facing claims or remain blocked.

The monitor scores the change by source freshness, proof status, drift size, release action, pipeline readiness, and estimated impact. It highlights affected fields such as TER, holdings, sector map, document clauses, risk labels, parser fields, watchlist triggers, Cost Reality Lab, Portfolio X-Ray, and decision receipts. Each run creates a copyable source-diff note with flags, affected fields, rollback requirements, reviewer handoff, and citation boundary.

The privacy boundary remains strict. Source drift compares official public or licensed source records only. It should never inspect PAN, folio, CAS, bank data, credentials, distributor client records, or private investor notes. Its job is to freeze or route live claims until source changes are verified; it does not approve a fund, personalize advice, execute a transaction, or guarantee returns.
