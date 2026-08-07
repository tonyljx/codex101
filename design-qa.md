# Design QA

## Final result

**passed**

## Source truth

- Homepage: <https://learn.chatgpt.com/>
- Documentation: <https://www.codex-docs.com/docs>
- Captured source evidence: `.design/source/`
- Desktop comparison: `.design/compare-desktop.png`
- Mobile comparison: `.design/compare-mobile.png`

All source pages and states were opened and measured with Ego Lite. Source visuals used by the implementation were captured locally; the implementation does not hotlink reference-site images or fonts.

## Implementation

- Local preview: <http://127.0.0.1:4321>
- Astro pages and layouts: `src/pages/`, `src/layouts/`
- React interactions: `src/components/InteractiveHeader.tsx`, `src/components/ModeSection.tsx`
- Visual system: `src/styles/global.css`
- Local assets: `public/images/`, `public/fonts/`

## Viewports and capture settings

| Surface | CSS viewport | Device scale | Comparison pixels | State |
| --- | ---: | ---: | ---: | --- |
| Homepage desktop | 1440 × 900 | 1 | 1440 × 901 | light, top of page |
| Docs desktop | 1440 × 900 | 1 | 1440 × 901 | light, overview |
| Homepage mobile | 390 × 844 | 1 | 587 × 1267 at 144 dpi | light, top of page |
| Docs mobile | 390 × 844 | 1 | 587 × 1267 at 144 dpi | light, overview |

Reference and implementation captures use the same viewport, state, print background, and zero-margin output settings.

## Full-view comparison

The combined comparison artifacts place reference and implementation in the same visual input:

- `.design/compare-desktop.png`: homepage and docs at 1440 × 900
- `.design/compare-mobile.png`: homepage and docs at 390 × 844

The final comparison confirms matching header heights, content order, responsive breakpoints, hero alignment, major typography scale, CTA placement, docs sidebar width, overview media size, mobile margins, and section rhythm. Localized text changes line length, but the visual hierarchy and measured anchor positions remain aligned with the references.

## Focused state comparison

| State | Reference evidence | Implementation evidence | Result |
| --- | --- | --- | --- |
| Mobile docs drawer | `.design/source/codex-docs-mobile-nav-open-page-1.png` | `.design/implementation-docs-mobile-nav-final-page-1.png` | Panel is 352 × 844 at x=0; navigation links remain scrollable |
| Mobile search | `.design/source/codex-docs-mobile-search-open-page-1.png` | `.design/implementation-docs-mobile-search-final-page-1.png` | Dialog is 374 × 332 at x=8, y=76; suggested pills match and typed search returns `提示词` |
| Language menu | `.design/source/codex-docs-mobile-language-open-page-1.png` | `.design/implementation-docs-mobile-language-final-page-1.png` | 176 × 482 at x=129, y=63; all 13 locales present |
| Dark mode | `.design/source/codex-docs-mobile-dark-page-1.png` | `.design/implementation-docs-mobile-dark-final-page-1.png` | Theme class and persisted preference update; content and controls retain contrast |
| Mobile product demo | source element captured as `.design/source/learn-chatgpt-app-demo-mobile.png` | `.design/implementation-home-mobile-final-page-1.png` | Uses the real 326 × 502 mobile visual instead of a stretched desktop capture |

## Functional and accessibility checks

- Mobile drawer exposes `role="dialog"`, a close control, and 27 documentation links.
- Search opens from its labelled button, focuses the input, accepts text, filters results, and closes with Escape.
- Language menu exposes 13 `menuitemradio` entries; selecting English navigates to `/en/docs` and updates `lang="en"`.
- Theme control updates the root theme class and local storage.
- `/docs/quickstart` renders four article sections, an active sidebar item, and a three-item completion checklist.
- Desktop and mobile checks found zero horizontal overflow and no browser error events.
- Focus-visible styling, semantic links/buttons, reduced-motion handling, labelled icon controls, and practical mobile tap targets are present.

## Findings and resolution history

1. **P1 — mobile homepage product visual used the desktop capture.** The crop and information density did not match the source mobile state. Resolved by isolating and locally storing the source’s real 326 × 502 mobile product visual and switching assets at the mobile breakpoint.
2. **P1 — drawer and search entry animations could remain at their first frame during deterministic browser capture.** The backdrop appeared while the panel was off-canvas. Resolved by removing the nonessential entrance animations and re-running geometry plus visual checks.
3. **P1 — mobile docs title and media started lower than the reference.** The title was 68.8 px instead of 50.7 px and the hero grid gap was 60 px instead of 40 px. Resolved in the mobile typography and spacing tokens; final anchors align within approximately 2 CSS pixels.
4. **P2 — mobile search suggestions were a long result list rather than compact chips.** Resolved with the five reference suggestions and a 332 px dialog while retaining typed document filtering.
5. **P2 — docs header omitted the mobile overflow icon and the language popover was displaced.** Resolved by restoring the fifth control and matching the 176 × 482 menu geometry.

No open P0, P1, or P2 findings remain.

## Engineering verification

- `npm run check`: 0 errors, 0 warnings, 0 hints
- `npm run build`: 351 static pages built
- Smoke-tested `/`, `/docs`, `/docs/quickstart`, and all 13 locale doc roots: HTTP 200
- Final visual and interaction verification: Ego Lite
