# NiveshNadi Surface Release Queue

The Surface Release Queue turns the Claim Surface Map into operational handoff work. The map says whether each public surface can release, stay in preview, freeze, or remain unchanged. The queue converts those outcomes into owner-routed tasks so the team can see what research review, data operations, compliance research, and product release need to do next.

The queue supports actionable, release-candidate, preview-proof, freeze-correction, and all-surface lenses. Each item carries stage, owner, priority, due posture, source receipt, surface score, public impact, and the next action. Frozen items are pushed toward fallback wording and source fixes. Preview items are pushed toward citation, parser confidence, source date, and reviewer proof. Release candidates are routed to the Claim Release Gate.

This module is intentionally identity-light. It handles product claims, source receipts, and reviewer operations only. It must not store PAN, folio, CAS, bank data, credentials, contact data, free-form private notes, or distributor client records. In production, queue items should connect to release receipts, rollback notes, correction notices, audit logs, and reviewer sign-off controls before any live claim is published.
