# Nadi Payment Readiness Lab

The Nadi Payment Readiness Lab is the commercial launch gate for Phase 1 retail monetization. It turns the low-fee pricing idea into a practical operating checklist for checkout, subscription lifecycle, entitlement logic, invoices, refunds, payment security, support, and reconciliation.

The retail anchors are deliberately simple: Rs. 100 per month and Rs. 1,000 per year for Nadi Plus, with a free Research Starter tier and a Founder Beta option for early believers. The point is not to maximize early revenue; it is to keep the fee light enough that retail investors can build a disciplined research habit without feeling loaded by the platform.

The lab separates plan catalog readiness from payment infrastructure readiness. A pricing card can be visually ready while checkout remains blocked if the gateway, webhook verification, invoice policy, cancellation rules, refund workflow, entitlement activation, and support lookup are not tested end to end.

Before paid beta, the product should pass lifecycle tests: successful monthly checkout activates Nadi Plus once, failed checkout leaves the user on the free tier, duplicate webhooks cannot double-activate, cancellation stops renewal without deleting research history, and refunds remove paid entitlement while preserving an audit-safe support reason.

The security boundary is strict. NiveshNadi should not collect card, UPI, bank, PAN, or payment credentials inside the static app. Payment credentials should stay with a regulated gateway. NiveshNadi should receive only signed payment events, subscription status, plan identifiers, invoice references, and support-safe reconciliation fields.
