# Review Rhythm Board

Review Rhythm Board is the Phase 1 v22 habit layer for NiveshNadi. It turns selected funds, watchlist alerts, compare-set funds, review dates, and evidence tasks into a 30/60/90-day research calendar.

The feature is designed for retail investors who start with enthusiasm but forget to review evidence later. It helps them return with a clear question instead of reacting to market noise, recent performance, or social media commentary.

## What It Does

- Builds a primary review checkpoint for the selected fund.
- Reads saved Watchlist triggers and review dates.
- Adds compare-set review tasks for portfolio X-Ray discipline.
- Buckets tasks into next 30 days, 31-60 days, 61-90 days, and later or unscheduled.
- Copies a plain-text rhythm note for the user's own records.
- Can save a review-date trigger to the existing Watchlist and Alerts Room.

## Review Focus Types

- Evidence refresh.
- SIP review.
- Switch review.
- Cost audit.
- Portfolio X-Ray.
- Behavior check.

Each focus creates a different research prompt. None of the prompts tells a user to buy, sell, switch, pause, hold, redeem, or execute a transaction.

## Compliance Boundary

Use: review rhythm, review checkpoint, evidence refresh, behavior check, cost audit, portfolio X-Ray review, next task, review trigger.

Avoid: buy date, sell date, switch date, hold instruction, redeem instruction, pause instruction, or transaction deadline.

## Data Boundary

Phase 1 stores only watchlist entries and alert triggers in browser local storage. The Review Rhythm form fields are in memory unless the user explicitly saves a review trigger. No PAN, folio, CAS, ARN, EUIN, client name, or account credential is collected.

## Launch Gates

- Add source-date-backed live evidence before making source freshness claims.
- Keep review triggers clearly separated from transaction instructions.
- Before account sync, update retention rules for saved review history.
- Before distributor workflows, add consent, audit trail, role-based access, and compliance review for every client review note.
