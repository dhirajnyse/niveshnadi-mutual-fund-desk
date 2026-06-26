# Nadi Receipt Replay Engine

Phase 1 v146 adds the Receipt Replay Engine after the Backend Ticket Factory. The ticket factory names the receipt vault replay ticket; the replay engine turns that ticket into concrete implementation cases that can be tested before paid access widens.

The room covers seven replay paths: clean checkout to active access, duplicate webhook without double unlock, refund reversal, settlement variance, support repair without private data, audit export with exclusion proof, and payment incident freeze. Each replay case has an owner, event sequence, expected result, acceptance tests, freeze rule, route, case ID, and score.

This layer protects both trust and monetization. Low-price retail subscription can work only if payment events rebuild the same account state every time. Success URLs, browser-local flags, screenshots, support notes, and manual entitlement changes are not enough. The replay engine requires backend-owned receipts, idempotency keys, payload hashes, projection state, support-safe views, audit export proof, and freeze/resume rules before the founder widens the first paid pilot.

The data boundary remains strict. Replay receipts may use receipt IDs, event names, provider references, payload hashes, idempotency keys, redacted user hashes, source receipt IDs, projection state, freeze routes, replay result, and timestamps. They must exclude PAN, folio, CAS, bank details, UPI, raw card data, OTP, gateway secrets, ARN/EUIN, distributor client records, raw payment payloads, and private support-note bodies.
