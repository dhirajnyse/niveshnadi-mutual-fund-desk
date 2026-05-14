# Payment Wiring Console

Payment Wiring Console is the Phase 1 v94 bridge between the low-cost retail pricing idea and a launch-safe paid account flow. Payment Readiness explains what must exist; the Wiring Console turns those requirements into a concrete checkout and entitlement state map that can later be implemented against a regulated hosted payment gateway.

The console models hosted checkout, manual founder cohort handling, deferred paid launch, and an explicitly blocked direct in-app payment path. It also maps Nadi Plus Monthly, Nadi Plus Annual, Founder Beta, and a Phase 2 distributor preview without treating any pricing route as investment advice, distribution, or transaction execution.

The core wiring states are checkout creation, gateway redirect, webhook verification, entitlement activation, invoice issuance, refund or cancellation handling, and settlement reconciliation. Each state has an owner, event name, required receipt fields, and a guardrail. The most important control is that paid entitlements must unlock only after a verified backend payment event, not from browser state or a front-end success URL.

Before public paid launch, the business still needs gateway onboarding, signed webhook verification, idempotency keys, duplicate-event handling, GST and invoice policy, refund wording, settlement reconciliation, support lookup, and backend audit receipts. NiveshNadi should never collect card numbers, UPI credentials, bank data, PAN, folio, CAS files, or raw payment instrument data inside the app. Payment credentials belong with the gateway; the app should store only entitlement state, receipt references, invoice or refund IDs, and reconciliation status.
