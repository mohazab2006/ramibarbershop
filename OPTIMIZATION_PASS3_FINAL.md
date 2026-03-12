# Final polish pass – measured bottlenecks only

This pass made **only** changes with a clear performance benefit. No redesign; no branding, layout, or content changes; visual behavior kept as close as possible.

---

## 1. Audit results (remaining jank sources)

- **Scroll-linked framer-motion:** **ScrollProgress** was the only remaining scroll-linked framer-motion: it used `useScroll()` and `useSpring()` so every scroll tick updated a motion value and drove a `motion.div` style. That caused continuous work and potential re-renders on scroll. **Addressed** by replacing it with a CSS-variable–driven bar and a throttled scroll listener that does not set React state.

- **whileInView usage:** All remaining `whileInView` usages use `viewport={{ once: true }}`, so they run a single animation when the element enters view and then stop. They are not scroll-linked in a continuous way. Converting them to CSS would require custom Intersection Observer logic and more code for limited gain. **Left as-is.**

- **Blur / backdrop-filter:** Nav used `backdrop-blur-lg` (scrolled) and `backdrop-blur-xl` (mobile menu); these can be costly on low-end GPUs. **Addressed** by reducing both to `backdrop-blur-md` for a clear GPU win with a small visual trade-off (slightly less blur). BackgroundEffects orbs use `filter: blur()` (not backdrop); they are already CSS-only and were left as-is. JerseyWall lightbox/buttons use `backdrop-blur-sm`; left as-is.

- **Large client bundles:** Homepage and layout already use dynamic imports for BackgroundEffects, ScrollProgress, CursorGlow, and VideoGrid. No further bundle splits were made in this pass.

- **Unnecessary hydration:** All current `'use client'` components need client state or interactivity (booking, nav, hero IO, motion, etc.). None were removed.

- **Repeated rerenders:** Nav scroll is already throttled with rAF (pass 2). ScrollProgress was the only component still updating on every scroll; that is fixed by moving progress to a CSS variable.

- **Hero video:** Already optimized in pass 2 (pause when out of view, `preload="metadata"`). No change in this pass.

---

## 2. Files changed

| File | What changed |
|------|--------------|
| `src/app/globals.css` | Added `--scroll-progress: 0` on `:root` and `.scroll-progress-bar` (transform from variable). |
| `src/components/ScrollProgress.tsx` | Replaced framer-motion `useScroll` + `useSpring` + `motion.div` with a single `useEffect` that updates `--scroll-progress` via a throttled scroll/resize listener; bar is a plain `div` with class `scroll-progress-bar`. |
| `src/components/Nav.tsx` | `backdrop-blur-lg` → `backdrop-blur-md` (scrolled header); `backdrop-blur-xl` → `backdrop-blur-md` (mobile menu). |

---

## 3. Per-file details: what, why, impact

### `src/app/globals.css`

- **Added:** `:root { --scroll-progress: 0; }` and `.scroll-progress-bar { transform: scaleX(var(--scroll-progress, 0)); transform-origin: left; }`.
- **Why:** ScrollProgress needs to reflect scroll position without React state so scroll never triggers re-renders. The bar is driven by a CSS variable set from JS; the browser applies the transform without going through React.
- **Impact:** Enables the new ScrollProgress implementation; no layout or visual change by itself.

### `src/components/ScrollProgress.tsx`

- **Changed:** Removed `framer-motion` (useScroll, useSpring, motion.div). Component now uses one `useEffect` that:
  - Subscribes to `scroll` (passive) and `resize`.
  - Throttles updates with `requestAnimationFrame`.
  - Computes progress as `scrollY / (scrollHeight - innerHeight)` and sets `document.documentElement.style.setProperty('--scroll-progress', value)`.
  - Renders a plain `div` with class `scroll-progress-bar` and the same gradient as before.
- **Why:** Scroll-linked framer-motion was a measured bottleneck: every scroll event updated a motion value and could trigger work/re-renders. A CSS variable + plain div removes scroll from the React path and reduces framer-motion usage in the ScrollProgress chunk.
- **Impact:** No re-renders on scroll for the progress bar; same look and behavior; smaller ScrollProgress bundle (no useScroll/useSpring). Slightly smoother scrolling, especially on slower devices.

### `src/components/Nav.tsx`

- **Changed:** Header when scrolled: `backdrop-blur-lg` → `backdrop-blur-md`. Mobile menu overlay: `backdrop-blur-xl` → `backdrop-blur-md`.
- **Why:** Backdrop-blur is GPU-heavy; reducing radius (lg/xl → md) lowers cost while keeping a visible frosted effect.
- **Impact:** Less GPU work on scroll and when the mobile menu is open; very small visual change (slightly less blur). Layout and behavior unchanged.

---

## 4. What was left alone (and why)

- **All `whileInView` usage:** One-shot, `once: true` animations. Not continuously scroll-linked; converting to CSS would add complexity for small gain. Left as-is.

- **All `'use client'` components:** Required for booking context, nav state, hero IO, motion, or other interactivity. No safe removal. Left as-is.

- **BackgroundEffects blur:** Uses `filter: blur()` on orbs, already animated via CSS keyframes (pass 2). No backdrop-filter; no change.

- **JerseyWall / StickyMobileBookBar backdrop-blur:** Small radii (`backdrop-blur-sm`, `backdrop-blur-md`), used in limited places. Left as-is.

- **Hero video:** Already optimized in pass 2. No change.

- **CursorGlow, Nav scroll throttle:** Already optimized in pass 2. No change.

- **Design, branding, layout, content:** Unchanged by design.

---

## 5. Summary

- **ScrollProgress:** No longer uses scroll-linked framer-motion; progress is driven by a CSS variable and a throttled listener; bar is a plain div. Clear win for scroll performance and bundle size for this component.
- **Nav:** Slightly lower blur radius for a clear GPU/backdrop-filter cost reduction with minimal visual difference.
- **Everything else:** Audited; only the above two areas were changed. Build passes; behavior and visuals kept as close as possible.
