# Security Release Checklist

Use this checklist before packaging or publishing NiveshNadi. The current Phase 1 app is static, but the checklist is written to grow with account, payment, and distributor workflows.

## Every Prototype Release

- Run `node scripts/static-check.mjs`.
- Run `node scripts/security-audit.mjs`.
- Confirm no secrets, keys, tokens, credentials, or private certificates are committed.
- Confirm `index.html` keeps the Content Security Policy.
- Confirm there are no external scripts or CDN runtime dependencies.
- Confirm no inline event handlers were added.
- Confirm user-entered text is escaped before rendering.
- Confirm local storage keys remain namespaced with `niveshnadi-`.
- Confirm no PAN, ARN, EUIN, payment, account, or client data is added to local storage.
- Confirm Review Vault snapshots do not store free-form review notes, PAN, folio, CAS text, or account identifiers.
- Confirm Investor Record Desk records do not store PAN, folio, CAS text, contact data, account identifiers, client identifiers, or free-form review notes.
- Confirm Research Dossier Builder snapshots do not store PAN, folio, CAS text, contact data, account identifiers, client identifiers, transaction records, or free-form private notes.
- Confirm release package extraction passes the static checks.
- Confirm the Evidence Ledger does not claim live data unless source date and citation path are present.

## Before Live Data Feeds

- Document every data source and update frequency.
- Validate and normalize incoming data server-side or at build time.
- Keep source citations visible for research claims.
- Show source date and extraction status in the Evidence Ledger before treating any signal as live.
- Add source failure states so stale data does not look live.
- Do not place vendor credentials in frontend code.

## Before Login or Account Sync

- Choose authentication architecture.
- Add secure password or identity provider handling.
- Use secure, HTTP-only cookies or a reviewed token design.
- Add rate limits and abuse protection.
- Add account deletion and data export rules.
- Add audit logs for profile, export, and subscription changes.

## Before Payments

- Use a hosted payment provider.
- Do not store card numbers or CVV.
- Verify webhooks server-side.
- Add invoice, GST, refund, cancellation, and entitlement rules.
- Log entitlement changes without storing sensitive payment details.

## Before PAN, ARN, EUIN, CAS, or Client Data

- Update `docs/DATA_CLASSIFICATION.md`.
- Add encryption at rest and secure transport.
- Add masking in UI and logs.
- Add role-based access control.
- Add consent capture and withdrawal flow.
- Add audit trails for every view, export, edit, and deletion.
- Add retention and deletion policies.

## Before Phase 2 Distributor Desk

- Define tenant boundaries.
- Verify one distributor cannot access another distributor's clients.
- Verify team roles cannot exceed assigned permissions.
- Add support/admin access controls and logs.
- Add export controls for client-level data.
- Review SEBI, AMFI, and privacy obligations with qualified counsel.
