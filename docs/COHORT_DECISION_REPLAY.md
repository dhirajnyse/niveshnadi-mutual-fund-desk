# Cohort Decision Replay

The Cohort Decision Replay room is the Phase 1 v137 safety layer after the Cohort Receipt Backend. V136 mapped the receipt streams; V137 checks whether those streams can be replayed into the same safe state before the founder widens the paid cohort.

The room tests clean activation replay, duplicate invite replay, support repair replay, refund rollback replay, privacy closeout replay, and expansion-freeze replay. Each case has a trigger, before state, after state, event id, expected result, owner, score, and route. The goal is to make expansion depend on replayable proof rather than confidence, enthusiasm, or a manual spreadsheet.

The key launch rule is simple: no paid cohort expansion while refund rollback, support repair, privacy closeout, or entitlement state cannot replay safely. Replays must use idempotency keys, ordered receipt cursors, source receipt ids, correction links, rollback references, reviewer roles, and redacted read models. The lane still excludes PAN, folio, CAS, bank details, UPI, card data, OTP, credentials, ARN/EUIN, distributor client records, and private research notes.

This is not a live backend implementation. It is a product and architecture control surface that makes the future backend requirements visible before public beta.
