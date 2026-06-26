# Nadi Doc Decoder

Nadi Doc Decoder is the Phase 1 v24 document-understanding layer. It converts SID, KIM, AMC factsheet, portfolio disclosure, riskometer, and TER history language into plain research questions for retail investors.

## What it does

- Lets the user choose a document lens: KIM snapshot, SID deep read, AMC factsheet, portfolio disclosure, or riskometer and TER history.
- Lets the user choose the question they are trying to answer: role, risk, cost, evidence freshness, or review timing.
- Produces a doc clarity score from demo source readiness, evidence readiness, research coverage, and selected-fund signals.
- Shows clauses to check across objective, risk factors, cost, portfolio evidence, benchmark, and review triggers.
- Adds a "do not infer" panel so document text is not converted into personalized transaction advice.

## Why it matters

Retail investors often skip scheme documents because the language feels legal, repetitive, and hard to connect to a decision. Nadi Doc Decoder turns those documents into a reading route. It does not summarize entire legal documents as final truth; it shows what to verify, what each clause means in research terms, and what live evidence is still missing.

## Launch gates

Live launch requires latest SID/KIM links, document date, addendum tracking, AMC factsheet month, portfolio disclosure date, riskometer date, TER history, citation path, and extraction confidence. Any stale or uncited document field should be visibly marked as blocked or demo-only.

## Compliance boundary

Nadi Doc Decoder is education and self-research support. It must not say a fund is suitable, approved, recommended, or rejected for a named investor. It should never turn objective, risk, cost, or return language into buy, sell, switch, hold, pause, redeem, or allocation instructions.
