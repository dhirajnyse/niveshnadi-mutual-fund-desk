# Nadi Claim Release Ledger

The Nadi Claim Release Ledger is the browser-local audit trail for decisions made in the Claim Release Gate. The gate decides whether updated source evidence can refresh an investor-facing claim; the ledger preserves that decision so the product team can see what was released, previewed, queued, blocked, or kept frozen.

Each ledger entry stores the selected fund, claim surface, source family, release score, decision posture, gate metrics, source-drift posture, affected public claims, flags, timestamp, release label, and data version. This turns release control into a repeatable habit rather than a one-time copy note. It also helps reviewers compare the latest decision with the prior saved decision through score and evidence deltas.

The ledger is intentionally local and identity-light. It is designed for public product-claim governance, not client management. It must not store PAN, folio number, CAS text, bank information, account credentials, distributor client records, contact details, or private investor notes. If Phase 2 adds distributor workflows, client-specific audit trails should be designed separately with explicit consent, access control, retention policy, and encryption.

The ledger remains research support only. Saving an entry does not approve an investment, create a recommendation, execute a transaction, certify suitability, or guarantee returns.
