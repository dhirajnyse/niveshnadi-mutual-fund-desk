# Security Model

This document describes the security posture for NiveshNadi Phase 1 and the controls required before the product handles real investor, distributor, payment, or portfolio data.

## Current Architecture

Phase 1 is a static browser application:

- `index.html`, `styles.css`, and `app.js` are served as static files.
- Demo fund data is embedded in the frontend.
- User notes, watchlists, alert triggers, and decision packs are stored in browser `localStorage`.
- There is no server, database, account system, payment gateway, API integration, or admin panel.

This keeps the current attack surface small, but it does not remove the need for disciplined controls.

## Protected Assets

- Product code and release packages.
- Demo research logic and scoring formulas.
- User-entered local notes, alerts, and decision-pack reasons.
- Future account identifiers such as email and phone.
- Future investor identifiers such as PAN.
- Future distributor identifiers such as ARN and EUIN.
- Future client portfolios, CAS-style imports, transaction history, and review notes.
- Future payment and entitlement records.

## Trust Boundaries

- Browser runtime: untrusted user-controlled environment.
- Static files: trusted only if served from the official repository or deployment.
- Local storage: convenience storage only; not secure storage for regulated data.
- Future API boundary: every request must be authenticated, authorized, validated, rate-limited, and logged.
- Future distributor workspace: must isolate every distributor, team, branch, and client book.

## Current Controls

- CSP blocks external scripts, frames, object embeds, and form submission.
- No external script dependencies.
- No inline event handlers.
- No dynamic code execution.
- Namespaced local storage keys.
- Output escaping for user-provided text before injecting into HTML.
- Static checks for required product sections and unsafe HTML patterns.
- Security audit script for CSP, secrets, script policy, local storage keys, and prohibited network/runtime APIs.

## Threats and Controls

| Threat | Current Control | Required Before Launch |
| --- | --- | --- |
| Cross-site scripting | CSP, no inline handlers, escaped user text | Add automated DOM XSS tests and CSP reporting |
| Secret leakage | No secrets needed in Phase 1 | Secret scanning in CI and restricted environment variables |
| Supply chain compromise | No third-party runtime package | Dependency pinning, audit, lockfiles, and review workflow |
| Unsafe external scripts | CSP and local-only scripts | Vendor review, subresource integrity where possible, CSP update |
| Local storage exposure | Only non-regulated local research notes | Never store PAN, CAS, tokens, or client data in local storage |
| Unauthorized API access | No API in Phase 1 | Auth, authorization, rate limits, request validation, logging |
| Distributor data leakage | No distributor data in Phase 1 | Tenant isolation, RBAC, consent, audit trails, masking |
| PAN exposure | No PAN collection in Phase 1 | Encryption, masking, strict access policy, retention controls |
| Payment abuse | No payment flow in Phase 1 | Hosted payment provider, no card storage, webhook verification |
| Clickjacking | CSP frame-ancestors none | Keep frame restrictions unless embedded workflows are reviewed |
| Data corruption | Demo-only frontend state | Server-side validation, backups, audit logs, restore drills |

## Phase Gates

### Phase 1 Static Research

Allowed:

- Demo data.
- Browser-only notes and watchlists.
- Copy/export research text without real account sync.

Not allowed:

- PAN collection.
- Login sessions.
- Payment collection.
- Distributor client books.
- Mutual fund transaction execution.

### Phase 1.5 Account Sync

Required:

- Authentication design.
- Secure session handling.
- Server-side authorization.
- Encrypted data at rest.
- Abuse protection.
- Privacy policy and retention rules.

### Phase 2 Distributor Desk

Required:

- ARN/EUIN/PAN data classification.
- Role-based access control.
- Client consent records.
- Audit trail for every view, note, export, and client data change.
- Tenant isolation tests.
- Incident response plan.

## Engineering Rule

Any feature that adds new data collection must update `docs/DATA_CLASSIFICATION.md` before implementation. Any feature that adds a new trust boundary must update this security model before release.
