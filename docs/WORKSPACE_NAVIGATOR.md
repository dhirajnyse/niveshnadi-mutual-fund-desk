# Workspace Command

Workspace Command is the compact navigation layer for NiveshNadi. As the product grew from a screener into a full research operating desk, the header started carrying too many direct links. The command layer keeps the main header calm while preserving fast access to every major tool.

The visible header now prioritizes the primary workflow: Today, Screener, Profile, Compare, X-Ray, Dossier, and Pricing. A compact phase rail underneath maps the journey into Profile, Find, Verify, Memo, and Review. All other tools remain available through the Workspace dropdown, grouped by Discover, Compare and Fit, Portfolio, and Trust and Follow-up. The command status chip shows the active research zone on wider screens, while primary shortcuts receive an active state as the user moves through the workspace.

## Product Behavior

- Keep the sticky header compact on desktop so content starts closer to the top of the page.
- Preserve anchor navigation for every workspace section.
- Use grouped dropdown options so the user can jump directly to any major tool.
- Use the phase rail for guided movement across the retail research journey.
- Sync the dropdown and command status with both anchor clicks and normal scrolling.
- Highlight the active primary shortcut without changing the underlying hash on every scroll.
- Keep the floating quick search panel as a second navigation path.
- Update the dropdown value when the hash changes, without forcing page reloads.

## Design Rule

The header should feel like a command bar, not a sitemap. Primary links should be reserved for the tools users return to most often. Full section discovery belongs in the Workspace dropdown and floating quick search panel.

## Accessibility Rule

The dropdown keeps an explicit label and uses native select behavior. Links remain anchors. Hash navigation must keep the sticky-header offset so section headings do not hide under the header.
