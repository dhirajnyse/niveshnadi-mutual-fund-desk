# Nadi Payment Gateway Sandbox Route

The Payment Gateway Sandbox Route is the pre-launch rehearsal layer for NiveshNadi paid retail access. It sits between the Payment Wiring Console and the Subscription Backend Blueprint so the team can dry-run hosted checkout, signed webhooks, duplicate events, failed renewals, refunds, invoices, entitlement changes, support repair, incidents, and reconciliation before any real payment rail is switched on.

V113 adds the Founder Paid Beta Runbook. It converts sandbox proof into a small-cohort operating plan with first cohort posture, checkout rehearsal, webhook replay, entitlement repair, billing support, incident closeout, day-by-day rehearsals, and go/no-go rules before widening paid access.

The route is intentionally provider-neutral. It can model Razorpay-style, Cashfree-style, Stripe-style, or manual founder-beta behavior without claiming that a production integration exists. The live launch gate remains closed until the selected provider is onboarded, webhook secrets are configured server-side, event signatures are verified, and idempotency, replay, timeout, duplicate-event, refund, invoice, and settlement variance tests pass.

Every successful sandbox run should produce a backend audit receipt. At minimum, the receipt should include provider posture, sandbox scenario, gateway event ID, idempotency key, plan ID, amount, currency, entitlement action, invoice or refund reference, reconciliation status, support route, timestamp, release label, and data version. The static prototype displays the workflow and copyable brief only; it does not process payments or store payment credentials.

Security boundaries are strict. NiveshNadi should not collect card data, UPI handles, bank account numbers, PAN, payment passwords, gateway secrets, OTPs, or private support notes in the browser. Hosted checkout keeps sensitive payment entry outside the product. Paid feature unlocks should come only from verified backend events and backend audit receipts, not browser-local state.

The useful launch questions are simple: can the app create a short-lived hosted checkout session, reject unsigned or stale webhooks, ignore duplicate events, handle failed renewals without silently breaking access, reverse entitlement after refunds, produce invoice receipts, reconcile settlement reports, and replay incident events into rollback or correction paths? Until those answers are proven in backend tests, the route should remain a sandbox and not a production payment promise.
