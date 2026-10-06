# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

Package manager is Yarn Classic (`yarn@1.22.19`, pinned in `packageManager`). Node >= 22.18.0.

```bash
yarn install --frozen-lockfile
yarn dev            # vite dev server (--host)
yarn typecheck       # tsc --noEmit
yarn lint            # eslint src --report-unused-disable-directives --max-warnings 0
yarn format:check    # prettier --check
yarn build            # runs typecheck, then vite build
yarn preview
yarn deploy           # build + copy 404.html + gh-pages publish (GitHub Pages)
```

There is no test suite yet (`yarn test` does not exist — see `docs/refactor.md` Phase 6). Do not run `typecheck`, `lint`, `format:check`, or `build` after changes unless the user explicitly asks (to save tokens).

## Architecture

- **Stack**: React 18 + TypeScript, Vite, TailwindCSS 3, react-router-dom v6, Zustand (mostly phased out — see below).
- **Deployment**: GitHub Pages at `https://miloe2.github.io/portfolio`. Both the router (`basename="/portfolio"` in `App.tsx`) and Vite (`base: "/portfolio"` in `vite.config.ts`) must stay in sync with this path.
- **Routing** (`src/App.tsx`): `/` (Home), `/work` and `/work/:projectSlug` (Develope — project list + detail), `/exhibitions`. Legacy `/develope` redirects to `/work`. Project selection is driven entirely by the URL `slug` param, not global state or timers.
- **Project data model** (`src/assets/data/DevPrjData.tsx`): each project has a typed `ProjectSlug` and a `DevProject` entry (title, date, desc, stack, thumbnail, color tokens). `src/components/develope/Detail.tsx` maps `ProjectSlug -> ComponentType` to pick which `Detail<ProjectName>.tsx` component renders, falling back to the last project if the slug is unknown.
- **Project detail layout**: each project has its own `Detail<Name>.tsx` component in `src/components/develope/`, composed from shared block components in `src/components/detail/` (`LeftImage`, `RightImage`, `Left1Image`, `Left3Image`, `RightFullImage`, `FullImage`, `FullVideo`, `Center9image`, `MobileSource`, `ParagraphRow`, `PrjSummary`, `StackCircle`, `ViewCode`, `TSLogoSnipet`). `detailLayout.ts` holds shared layout types/class maps (e.g. `VerticalAlign` -> static Tailwind class, not string interpolation).
- **Pages** (`src/pages/`) are thin composition of section components under `src/components/home/`, `src/components/develope/`, `src/components/exhibitions/`.
- **Zustand**: mostly removed as part of the URL-driven routing refactor — only a couple of `assets/data` files still use it for non-route state. Don't reach for global state for anything expressible as a route param.
- **Intersection Observer**: use the single shared `src/hooks/useIntersectionObserver.ts` hook (refs + callback + options). Do not add a second IO implementation.
- **Scroll-driven effects**: several components (`MainWork.tsx`, `Hello.tsx`, `IntroItems.tsx`, `PrjList.tsx`) read `window.scrollY` in a `scroll` listener and feed it into React state — this is the established pattern in this codebase, but it's a known perf issue (see `docs/refactor.md` P1). When adding new scroll effects, prefer `transform`/`opacity`, batch with `requestAnimationFrame`, or use native CSS (`animation-timeline: scroll()`/`view()`) over adding more per-scroll `setState` calls, and use `{ passive: true }` listeners.
- **Tailwind**: custom `fontSize` scale (`hello-heading`, `introduce-heading`, etc.), custom `keyframes`/`animation`, and generated `spacing`/fraction utilities live in `tailwind.config.js` — extend these rather than writing arbitrary one-off values. Never build class names via string interpolation (e.g. `` `items-${items}` ``); Tailwind can't statically find them. Use a static class-name map instead (see `detailLayout.ts` for the pattern). Double-check any new class against real Tailwind utilities — the codebase has accumulated some invalid ones (`w-3xl`, `border-1`, `bg-red-00`, etc.) that should not be copied.
- No styled-components or Sass in this project — everything is Tailwind utilities plus a couple of `@layer components` classes in `src/index.css` for things Tailwind can't express (e.g. `.glassmorphism`). Keep new one-off CSS there rather than introducing a new styling system.

## Ongoing refactor

`docs/refactor.md` is the living plan for an in-progress code-quality refactor (not a content rewrite) — it defines phases (build reproducibility, routing/state, project-detail data model, styling/animation cleanup, accessibility, bundling, tests/CI), a target directory structure, and a session-resume procedure with a dated work log. Read it before starting structural work in this repo, follow its phase order, and append a dated entry when you complete a step. Key constraints it establishes:

- Keep the React/TypeScript/Vite/Tailwind base — no framework swaps.
- Small, always-buildable changes; typecheck/lint/build must pass at the end of each step.
- Don't store route-expressible state globally.
- Keep project data and UI layout separate (no JSX in data files).
- No dynamic Tailwind class strings.
- Don't mix structural refactors with dependency major-version bumps.
- Preserve existing URLs and the `/portfolio` base path (add redirects instead of breaking links).
