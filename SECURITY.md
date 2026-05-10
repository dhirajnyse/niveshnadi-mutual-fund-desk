# Security Policy

NiveshNadi treats security as a product requirement, not a release afterthought. The current Phase 1 prototype is a static self-research application with demo data only. It has no backend, no login, no payment flow, no API keys, no PAN storage, and no distributor client records.

## Current Security Posture

- Static GitHub Pages compatible application.
- No external JavaScript or CDN dependency.
- Strict Content Security Policy in `index.html`.
- No inline event handlers.
- No `eval`, `new Function`, or dynamic script loading.
- User-entered journal, watchlist, alert, and decision-pack text is escaped before rendering.
- Browser storage is limited to namespaced local keys for non-regulated research notes.
- Automated static and security checks live in `scripts/`.

## Reporting Security Issues

During early private development, report security issues directly to the repository owner. Do not open a public GitHub issue for vulnerabilities that expose user data, authentication weaknesses, secrets, or client records.

When the product has real user accounts, add a dedicated security contact, response SLA, disclosure policy, and vulnerability intake process.

## Launch Gates

Before collecting email, phone, PAN, ARN, EUIN, CAS data, portfolio holdings, payment details, or distributor client data, the product must pass the launch gates in:

- `docs/SECURITY_MODEL.md`
- `docs/DATA_CLASSIFICATION.md`
- `docs/SECURITY_RELEASE_CHECKLIST.md`

## Required Checks

Run before every release package:

```powershell
node scripts/static-check.mjs
node scripts/security-audit.mjs
```

If `package.json` is available:

```powershell
npm run check
```

## Non-Negotiables

- Do not commit secrets, API keys, private keys, tokens, or production credentials.
- Do not store PAN, ARN, EUIN, client identifiers, CAS files, or payment data in browser local storage.
- Do not add external scripts without a documented trust review and CSP update.
- Do not launch distributor workflows without role-based access control, consent records, and audit logs.
- Do not add personalized advice or execution workflows until regulatory and security boundaries are approved.
