# Investor Review Record

Investor Review Record is the Phase 1 v29 account-ready layer for NiveshNadi. It turns the latest Review Vault snapshot, or the current Portfolio Review Room preview when no snapshot exists, into a compact review record that a retail investor can keep for self discipline. Phase 1 v30 adds Research Dossier Builder, which can reference the latest investor record code inside a broader research packet.

The feature is intentionally identity-light. It stores a record label, review stance, audience, boundary, record code, score, review date, evidence, drift, TER, attention count, fund names, fund categories, fund risk bands, review queue, and guardrail text. It does not store PAN, folio numbers, CAS text, account credentials, bank data, phone numbers, email addresses, distributor client data, or the free-form Portfolio Review Room note.

The record is useful because retail investors often forget why a fund was shortlisted, what evidence was missing, what should be checked next, and what would make them revisit the decision. The Record Desk makes that memory portable without pretending to be advice. The copyable record can be kept offline, pasted into the journal, discussed with family, or used later as a template for a compliant distributor workflow.

## Product Behavior

- Use the latest saved Review Vault snapshot when available.
- Fall back to the current Portfolio Review Room preview when the vault is empty.
- Let the user choose a stance such as research only, watch and review, memo ready, or source refresh needed.
- Let the user choose a safe audience label such as self review, family discussion note, advisor conversation note, or future distributor handoff draft.
- Show decision boundaries before any record is copied or saved.
- Save only compact local metadata in `niveshnadi-investor-records`.
- Keep the record score as a review-discipline score, not an investment approval score.
- Feed the latest record code and guardrail posture into Research Dossier Builder without exposing private notes or identifiers.

## Compliance Rule

Allowed language: review record, self review, record code, evidence, drift, TER, review queue, decision boundary, source verification, account-ready, future handoff draft.

Avoid language: advice, recommendation, approved, certified, cleared to invest, execute, buy, sell, switch, hold, redeem, suitable for you, best for you.

## Phase 2 Path

For Phase 2, this record shape can become the seed for distributor workflows, but only after authentication, consent, ARN/EUIN design, PAN handling, audit logs, access control, and retention rules are designed. Until then, the Record Desk should remain browser-local and non-identity based.
