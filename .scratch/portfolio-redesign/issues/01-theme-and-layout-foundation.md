# 01: Theme and layout foundation

**What to build:** Visitors see a calm site in the warm neutral palette with a single deep-blue accent (`#1E3A8A` light / `#93A8F4` dark) used only for links, focus rings and View Source. The theme follows the system setting by default. A toggle flips it and remembers the choice, with no flash of the wrong theme on load. Keyboard users get a skip-to-content link and visible focus rings, and the header and footer are shared across pages. All decoration is removed (grain overlay, drifting orbs, outlined name, scroll fade-ups), and any remaining motion turns off under `prefers-reduced-motion`. This slice also sets up the build-output test seam that every later ticket extends.

**Blocked by:** None (can start immediately)

**Status:** ready-for-agent

- [ ] Colors are theme tokens with light and dark values. The system preference applies by default, an explicit choice overrides it and persists, and storage failures are handled.
- [ ] No flash of the wrong theme on reload, and no hydration warnings in the console.
- [ ] A skip link is the first focusable element and moves focus to the main content.
- [ ] The grain overlay, orbs, outlined name and scroll animations are gone. Hover and focus transitions are CSS-only and disabled under reduced motion.
- [ ] Text and accent meet WCAG AA contrast in both themes.
- [ ] Unused create-next-app assets are removed.
- [ ] A `test` script runs Node's built-in test runner against the prerendered HTML from `next build`. The first assertions cover one `<h1>`, `<main>` and `<nav>` landmarks, and the skip link.
- [ ] `npm run lint`, `npm run build` and `npm test` pass.
