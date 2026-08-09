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

### Fixed

- Replace unsupported MDX angle-bracket autolinks in the newly merged recommendation guides so production builds complete successfully.

### Verification

- `npm run check`
- `npm run build`
- Skills illustration coverage: 12/12 articles with two valid assets each
- Desktop and mobile browser checks with no horizontal overflow
