# Changelog

## Unreleased

### Changed

- Move the Security and Administration documentation hubs from the desktop primary navigation into an accessible More menu with hover, click, and keyboard dismissal behavior.
- Update the Header contact link to `liangjiongxin@gmail.com` while preserving the complete mobile navigation.
- Add a top-level `Skills 技能` documentation entry and a dedicated Skills sidebar for tutorials, workflows, and recommendations.
- Remove Skills articles from the general `基础` navigation sequence while preserving their existing URLs and content.
- Improve Markdown code fences with matched light/dark themes, readable plain-text examples, copy affordances, and touch-friendly mobile controls.
- Expand the Skills learning path with four beginner and authoring guides covering first use, creation, reliable structure, testing, and iteration.
- Add a reusable article-illustration SOP and prompt library, then give all 12 Chinese Skills guides a paired editorial illustration and explanatory comic using compressed WebP assets.
- Expand the Skills hub into a seven-stage learning path covering discovery, installation, third-party security review, troubleshooting, multi-Skill composition, and cross-client team reuse.
- Add five beginner-friendly Skills guides backed by official specifications, client documentation, and supply-chain research, plus a durable content-framework document for future topic planning.
- Add paired editorial illustrations and long-haired female-IP comics for all five new guides, extend the reusable prompt library, and ignore local Firecrawl research artifacts.

### Fixed

- Replace unsupported MDX angle-bracket autolinks in the newly merged recommendation guides so production builds complete successfully.

### Verification

- `npm run check`
- `npm run build`
- Skills illustration coverage: 17/17 articles with two valid assets each
- Five new Skills routes and 10 referenced WebP assets verified in the production build
- Desktop and mobile browser checks with no horizontal overflow
