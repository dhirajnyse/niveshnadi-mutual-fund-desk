# Cohort Receipt Backend

The Cohort Receipt Backend is the Phase 1 v136 bridge between the founder invite wave and the future paid account system. It converts cohort activity into backend-owned receipt streams instead of relying on browser-local state or informal founder notes.

The workspace maps invite decisions, activation proof, entitlement state, support cases, refund or pause events, privacy actions, and expansion decisions. Each stream has an event name, owner, score, route, allowed fields, and risk note. The goal is simple: before the first cohort expands, NiveshNadi should be able to prove what happened, replay the history, and freeze expansion if a receipt is missing, stale, duplicated, or not safe.

The planned event contract uses receipt ids, event names, cohort ids, actor roles, actor hashes, idempotency keys, source surfaces, state-before and state-after fields, source receipt ids, correction links, replay cursors, retention policies, redaction status, reviewer roles, and rollback references. It intentionally excludes PAN, folio, CAS, bank details, UPI, raw card data, OTP, credentials, ARN/EUIN, distributor client records, private research notes, and free-form personal identifiers.

This is still launch planning, not a live customer database. The backend receipt trail should be implemented only after auth, storage, payment gateway, support redaction, export/delete, monitoring, and incident replay decisions are finalized.
