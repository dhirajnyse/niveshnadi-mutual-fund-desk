# Nadi Subscription Backend Blueprint

The Subscription Backend Blueprint converts the V97 operations console into a technical contract for paid retail launch. It defines how hosted gateway events, signed webhook verification, idempotency, event replay, entitlement projection, invoice and refund ledger entries, support repair, settlement reconciliation, and launch incidents should behave before a real subscription can unlock Nadi Plus features.

The blueprint keeps payment credentials, PAN, folio, CAS, UPI, bank details, raw card data, ARN/EUIN, and private notes out of the product backend. It focuses on metadata and receipt trails: gateway event ids, request ids, user hashes, plan ids, invoice references, refund references, entitlement state, timestamps, and redacted support case ids.

The launch principle is simple: the browser can display entitlement, but it cannot be the source of truth. Paid access should come from server-verified gateway events, replay-safe idempotency, durable backend receipts, finance reconciliation, and support-safe repair workflows. Until those systems exist, the blueprint remains a planning and dry-run surface only.
