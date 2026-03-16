# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Portfolio website for artist Lisa Tomlin. Built with React 19, Vite 6, and Tailwind CSS 4. Deployed to GitHub Pages at `https://vic0914.github.io/Lisa-s_Site/`.

## Development Commands

```bash
npm run dev       # Start development server
npm run build     # Build for production
npm run preview   # Preview production build
npm run lint      # Run linter
npm run deploy    # Build and deploy to GitHub Pages (runs predeploy + gh-pages)
```

## Pages & Routes

Defined in `src/App.jsx` using React Router (BrowserRouter):

| Route | Page | Description |
|---|---|---|
| `/` | Home | Hero, Klimt quote, in-progress carousel |
| `/work` | Work | 3-column gallery grid (Aphrodite / Sentinel / Additional) |
| `/work/:id` | PortraitDetail | Full detail view with thumbnails, AI video, description |
| `/about` | About | Two-column bio layout |
| `/awards` | Awards | Award list with modal certificate viewer |
| `/contact` | Contact | EmailJS-powered form |

## Key Components

- **Carousel** — Supports `image`, `video`, `pair` types. 300ms fade. Resets on route change.
- **HoverZoom** — Desktop-only magnification popup via React portal. Mobile detection uses `(hover: hover) and (pointer: fine)` media queries, not viewport width.
- **GalleryItem** — Clickable thumbnail with title/panel label. Used in Work grid.
- **Header** — Responsive hamburger nav.
- **ScrollToTop** — Uses `useLayoutEffect` (pre-paint) to restore scroll position when navigating back from portrait detail to work page (reads from `sessionStorage`). Scrolls to top for all other navigation.
- **BackToTopButton** — Appears after 600px scroll. Detects footer overlap for styling.

## Artwork Data — Critical Duplication

**Painting data is defined in two separate places and must be kept in sync:**

- `src/pages/Work/Work.jsx` — Three arrays (`aphroditePaintings`, `sentinelPaintings`, `otherPaintings`) with `src`, `title`, optional `panel`.
- `src/pages/PortraitDetail/PortraitDetail.jsx` — Single flat `paintings` array with full metadata. Order must exactly match Work page order since `/work/:id` uses a flat numeric index.

**16 paintings total**: 6 Aphrodite (indices 0–5), 6 Sentinel (indices 6–11), 4 Additional (indices 12–15).
Offsets in Work.jsx are computed dynamically: `SENTINEL_OFFSET = aphroditePaintings.length`, `OTHER_OFFSET = SENTINEL_OFFSET + sentinelPaintings.length`.

Each painting in `PortraitDetail.jsx` has:
- `src`, `title`, `medium` — required
- `description` — string or JSX (triptych panels use JSX with `<em>`)
- `size` — optional; used for availability info (e.g., `"SOLD"`, `"Custom sizes available..."`)
- `videoSrc` — AI animation video
- `thumbnails[]` — always 6 items: `[main image, AI video, WIP/detail ×4]`. Each item has `{ type: "image"|"video", src }`.

## Important Patterns

- All asset paths must use `${import.meta.env.BASE_URL}` prefix (required for GitHub Pages subdirectory hosting).
- Component-specific CSS files are co-located with each component.
- `vite.config.js` sets `base: "/Lisa-s_Site/"` on build, `"/"` on dev.

## Deployment

`npm run deploy` handles everything — builds then pushes `dist/` to the `gh-pages` branch. GitHub Pages serves from that branch. Allow 1-2 minutes for changes to propagate.

## Future Development

### Work Page — Mobile Tab/Filter Toggle
On mobile, replace the 3-column grid with a tab bar at the top of the Work page (e.g., "Aphrodite | Sentinel | Additional"). Tapping a tab shows only that series as a single-column list. This keeps the UI clean, avoids long scrolling through mixed categories, and scales well if more series are added later.
