# Nadi Source Dry-Run Board

The Source Dry-Run Board is the rehearsal layer between live data contracts and public claim release. A source contract can describe what should be true, but the dry-run board tests whether the source is fresh, parseable, citation-ready, reviewer-routable, and safe to expose on a specific product surface.

The board treats every source family as a release candidate, preview-only source, or frozen source. Release candidates can move to the Claim Release Gate for reviewer approval. Preview-only sources can support internal research checks but should not make user-facing claims look current. Frozen sources keep the affected claim surface blocked until the source date, parser confidence, field contract, or citation problem is resolved.

Each dry-run receipt should include source family, source date, file or provider path, parser version, extracted field set, confidence score, citation visibility, affected surface, reviewer owner, freeze rule, and rollback or correction path. The board deliberately avoids PAN, folio, CAS, bank data, credentials, contact records, private notes, and distributor client data.

The launch goal is narrow and disciplined: if one source fails, only the relevant claim surfaces should freeze. The whole product should not appear broken, but no investor-facing claim should silently refresh without source proof and reviewer release.
