# Nadi Entitlement Bridge

The Entitlement Bridge is the Phase 1 launch layer that connects payment wiring, account state, research feature access, support posture, and backend audit receipts. It exists so NiveshNadi can charge a low retail fee without accidentally unlocking paid features from editable browser state or making refunds, renewals, and grace periods ambiguous.

## Scope

- Map Free Starter, Nadi Plus Monthly, Nadi Plus Annual, Founder Beta, and Phase 2 Distributor Preview states.
- Connect paid access to verified backend payment events, not client-side flags.
- Define feature limits for saved packs, watchlists, dossiers, exports, alerts, review history, and future live-data refreshes.
- Treat failed renewal, grace period, refund, cancellation, expiry, and manual founder review as first-class lifecycle events.
- Keep support views redacted and receipt-driven so no PAN, folio, CAS, bank, card, UPI, ARN, EUIN, or distributor client data is exposed.

## Launch Contract

The bridge should only unlock paid features after a backend receipt proves plan, user hash, gateway event, idempotency key, entitlement start, entitlement expiry, and feature policy. Negative events such as refunds, cancellations, failed renewals, chargebacks, or expiry should downgrade or revoke access through the same receipt trail.

## Guardrails

Phase 1 entitlement is for retail self-research only. It must not become an execution system, personalized advisory workflow, distributor client book, or KYC repository. Phase 2 distributor permissions, ARN/EUIN, PAN consent, family account mapping, and client management must remain behind a separate consent and role-based architecture.
