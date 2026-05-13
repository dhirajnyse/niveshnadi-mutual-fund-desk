# Nadi Launch Readiness Board

The Nadi Launch Readiness Board is the founder-facing production gate for Phase 1. It turns the launch readiness score into concrete blockers instead of leaving it as a single percentage. The board sits near the Build Tracker because product progress and launch readiness must remain connected but separate.

The board tracks live data and citations, source QA and claim release, account and saved research, payments and subscriptions, compliance and disclosures, security release gates, support operations, and the Phase 2 distributor boundary. Each gate has a score, owner, blocker, next action, and route to the relevant workspace area.

This is intentionally stricter than the product prototype score. A feature can look polished while still being unready for retail launch if the data feed is not source-dated, the account model is not tested, payment flows are missing, compliance copy is not reviewed, or backend security has not been assessed.

The board also creates a release ladder: prototype hardening, private beta, paid retail beta, public retail launch, and Phase 2 distributor preview. The current build remains in prototype hardening until live data dry runs, account storage, payment rails, legal review, support operations, and security release checks move out of blocker status.

The no-launch guardrails are explicit. Every live-looking field needs source date, citation path, freshness rule, and reviewer status. Accounts, payments, refunds, deletion, export, and audit logs need testing with non-demo data. Security scans, secret handling, auth rules, rate limits, backups, and incident response must be documented. Legal and compliance review must confirm the research-only boundary and risk warnings before public use.
