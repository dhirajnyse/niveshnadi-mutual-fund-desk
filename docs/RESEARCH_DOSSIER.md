# Research Dossier Builder

Research Dossier Builder is the Phase 1 v30 export layer for NiveshNadi. It assembles the selected fund, compare set, evidence posture, Portfolio Review Room score, Review Vault count, latest Investor Record context, review queue, and decision boundaries into one copyable research packet.

The goal is to make retail research portable without crossing into personalized advice. A user can use the dossier as a self-review file, family discussion packet, advisor conversation packet, or evidence audit packet. The dossier organizes what has been checked and what still needs source verification; it does not say that a fund is suitable, recommended, approved, or ready for execution.

## What It Stores

Saved dossiers use the `niveshnadi-research-dossiers` local storage key. The saved snapshot contains the dossier label, mode, depth, boundary, readiness score, selected fund names, categories, risk bands, expense ratios, Nadi scores, evidence score, review score, drift, queue count, attention count, vault count, section summaries, and review queue items.

The dossier intentionally excludes PAN, folio numbers, CAS text, account credentials, bank details, phone numbers, email addresses, distributor client data, transaction records, and free-form private notes.

## Product Behavior

- Build from the selected fund and current compare set.
- Include Portfolio Review Room discipline without saving the free-form review note.
- Reference the latest Investor Record code when available.
- Show a readiness score for dossier completeness, not investment quality.
- Copy a markdown research packet for offline use.
- Save a compact local dossier history for future paid-history workflows.

## Compliance Rule

Allowed language: research dossier, packet, evidence audit, review queue, decision boundary, source verification, selected fund, compare set, review score, export guardrail.

Avoid language: advice, recommendation, approved portfolio, best fund, suitable fund, cleared to invest, execute, buy, sell, switch, hold, redeem, guaranteed, account verified.

## Paid Value Later

Nadi Plus can offer unlimited dossier history, PDF exports, source-cited exports after live data launch, and account-synced research packets. Phase 2 distributor software can reuse this shape for client review packets only after consent, access control, audit logs, ARN/EUIN design, PAN handling, and retention rules are completed.
