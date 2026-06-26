# Nadi Gateway Decision and Webhook Drill

Phase 1 v141 adds a focused payment launch decision layer between the Payment Gateway Sandbox Route and the Entitlement Bridge. The goal is to stop the product from jumping from "sandbox demo" to "paid access" without a clear provider choice, signed webhook proof, idempotency replay, invoice/refund posture, settlement reconciliation, entitlement projection, and incident rollback script.

The drill is intentionally provider-neutral. It can model Razorpay-style, Cashfree-style, Stripe-style, or manual-founder-beta posture, but it does not claim that any provider has been integrated. The launch-ready version must still use official gateway credentials, backend-only checkout creation, signed webhook verification, timestamp tolerance, schema validation, idempotency keys, replay logs, and production audit receipts.

The tool produces a copyable decision packet with a receipt family, provider posture, webhook proof status, entitlement source, finance closeout posture, priority blocker, and blocked-data list. Blocked data includes raw card details, UPI PIN or mandate credentials, bank login or account details, OTP, gateway secrets, PAN, folio, CAS, ARN/EUIN, distributor client records, and free-form private investment notes.

Launch rule: paid features must unlock only from verified backend gateway events and backend audit receipts. A success URL, browser-local state, manual support note, or imported screenshot is never enough to activate, extend, revoke, refund, or repair paid access.

Phase 1 v142 follows this drill with the Payment Provider Pilot Receipt Contract. The drill answers whether the provider posture is good enough to consider; the contract answers what exact backend receipts must be written for checkout, webhook, idempotency, entitlement, invoice, refund, reconciliation, support repair, and incident closeout before a live paid pilot is allowed.

Phase 1 v143 follows the contract with the Pilot Receipt Vault. The vault answers whether the named receipts are durable and replayable enough to support access, refunds, support repair, reconciliation, audit export, and incident freeze decisions without relying on browser-local state.
