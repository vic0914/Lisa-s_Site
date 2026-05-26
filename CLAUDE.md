# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Portfolio website for artist Lisa Tomlin. Built with React 19, Vite 6, and Tailwind CSS 4. Hosted on GoDaddy shared hosting (Apache).

## Development Commands

```bash
npm run dev       # Start development server
npm run build     # Build for production (output: dist/)
npm run build:gh  # Build for GitHub Pages (base: /Lisa-s_Site/)
npm run deploy    # Build and push to gh-pages branch (GitHub Pages)
npm run preview   # Preview production build
npm run lint      # Run linter
npm run format    # Format source files with Prettier
```

## Pages & Routes

Defined in `src/App.jsx` using React Router (BrowserRouter, no basename):

| Route | Page | Description |
|---|---|---|
| `/` | Home | Hero, Klimt quote, in-progress carousel |
| `/work` | Work | 4-column gallery grid (Aphrodite / Sentinel / Silver Belles / Additional) |
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

- `src/pages/Work/Work.jsx` — Four arrays (`aphroditePaintings`, `sentinelPaintings`, `silverBellesPaintings`, `otherPaintings`) with `src`, `title`, optional `panel`.
- `src/pages/PortraitDetail/PortraitDetail.jsx` — Single flat `paintings` array with full metadata. Order must exactly match Work page order since `/work/:id` uses a flat numeric index.

**21 paintings total**: 6 Aphrodite (indices 0–5), 6 Sentinel (indices 6–11), 4 Additional (indices 12–15), 5 Silver Belles (indices 16–20).
Offsets in Work.jsx are computed dynamically: `SENTINEL_OFFSET = aphroditePaintings.length`, `OTHER_OFFSET = SENTINEL_OFFSET + sentinelPaintings.length`, `SILVER_BELLES_OFFSET = OTHER_OFFSET + otherPaintings.length`.

Each painting in `PortraitDetail.jsx` has:
- `src`, `title`, `medium` — required
- `description` — string or JSX (triptych panels use JSX with `<em>`)
- `size` — optional; used for availability info (e.g., `"SOLD"`, `"Custom sizes available..."`)
- `videoSrc` — AI animation video (omit if none)
- `thumbnails[]` — 6 items for paintings with AI video: `[main image, AI video, detail ×4]`; paintings without AI video have all image thumbnails (Reflecting in Living Marble has 6 image-only thumbnails). Each item has `{ type: "image"|"video", src }`.

The "AI video shown for display purposes only" disclaimer renders conditionally — only when `portrait.thumbnails.some((t) => t.type === "video")`.

## Design Tokens

All CSS files use these values consistently — match them when adding new styles:
- **Font (headings/nav/labels)**: `"Cinzel", serif`
- **Font (body/buttons)**: `"Cormorant Garamond", serif`
- **Primary color**: `#6e4b3a` (dark brown — borders, text, active states)
- **Background tint**: `#f8f5f1` (light warm off-white)

## Public Asset Structure

All static assets live in `public/` and are referenced via `${import.meta.env.BASE_URL}`:

```
public/
  images/
    Aphrodite-Series/    # .jfif and .jpg
    Sentinel-Series/     # .jfif
    Other-Series/        # .jpg and .png
    Silver-Belle-Series/ # .jfif and .jpg
    UI-Images/           # Hero, About, Contact, Lisa-Pic
    Process-Images/      # in-progress shots used in Carousel
  thumb-nails/
    aphrodite-series/    # TN-Golden-Reign, TN-Gilded-Gaze, TN-Ascendant, TN-Enthroned, TN-Eternal, TN-Aphrodite, TN-All-Triptych
    sentinel-series/     # TN-Young, TN-Emerging, TN-Seasoned, TN-Noble, TN-Eternal-Sentinel, TN-Empress
    additional-works/    # TN-Awakening, TN-Shield-Maiden, TN-Future, TN-Judith
    silver-belle-series/ # TN-Belle-of-the-Silver-Garden-Interior, TN-Silver-Spark-Interior, TN-Anticipating-Her-Next-Move-Interior, TN-Modern-Belle-Interior, TN-Reflecting-in-Living-Marble-Interior
  videos/                # AI-*.MOV (AI animations) + Hero, Process videos
  certificates/          # Award JPEG/PNG files for Awards modal
  .htaccess              # Apache SPA routing — do not remove
  404.html               # GitHub Pages SPA routing redirect
```

## PortraitDetail — Media Viewer

`PortraitDetail.jsx` reads `/work/:id` as a flat index into the `paintings` array. The page shows a main viewer (image via `HoverZoom` or video element) driven by `selectedMediaIndex` state, controlled by clicking thumbnails below. Thumbnail index 0 is always the painting image; index 1 is the AI animation video (when present).

## Important Patterns

- All asset paths must use `${import.meta.env.BASE_URL}` prefix.
- Component-specific CSS files are co-located with each component.
- `vite.config.js` reads `VITE_BASE_PATH` env var for base (defaults to `"/"` for GoDaddy; `build:gh` sets it to `"/Lisa-s_Site/"`).
- EmailJS credentials in `Contact.jsx` are intentionally hardcoded inline (public key, service ID, template ID). They are client-side keys and do not need to move to env vars.

## Deployment

**GoDaddy** (production):
1. `npm run build` — outputs to `dist/`
2. Upload contents of `dist/` to `public_html/` via FTP or File Manager

**GitHub Pages** (testing/demo at `https://vic0914.github.io/Lisa-s_Site/`):
1. `npm run deploy` — builds with `/Lisa-s_Site/` base and pushes to `gh-pages` branch
2. Repo settings → Pages → source: `gh-pages` branch (one-time setup)

## Work Page — Mobile Tabs

On mobile (`max-width: 600px`), the Work page replaces the 4-column grid with a tab bar ("Aphrodite | Sentinel | Silver Belles | Additional") and a single-column list. The active tab is persisted in `sessionStorage` (key: `workActiveTab`). The scroll position when leaving `/work` is saved to `sessionStorage.workScrollPos` and restored by `ScrollToTop` when navigating back from `/work/:id`.

- **Default** — Silver Belles is the default tab on first visit (mirrors desktop behavior).
- **Tab sizing** — each tab uses `flex: 1` and `width: 100%` on the container so all four tabs fit without horizontal scroll. Font is `0.7rem` to accommodate the longer series names.

## Work Page — Desktop Series Filter

On desktop, four buttons above the grid let users focus on a single series. Key decisions:

- **Default** — Silver Belles Series is shown on first visit (no sessionStorage entry). Once the user clears the filter, `"all"` is stored so subsequent visits within the session show all columns.
- **All 4 or 1** — clicking a button shows only that series; the only way back to all 4 is the clear button. There is no "show 2 of 4" state.
- **Clear button** — appears only when a filter is active; uses the `MdClear` icon from `react-icons/md`.
- **Button style** — matches the "Back to Gallery" button in PortraitDetail: `Cormorant Garamond`, `1px solid #333`, `4px` border-radius. Active state fills brown (`#6e4b3a` bg, `#f8f5f1` text). Inactive is transparent at `opacity: 0.4`.
- **State persists** — `activeFilter` is saved to `sessionStorage` (key: `workActiveFilter`); `"all"` means all columns visible; `null`/missing means default to Silver Belles.
- **Flat grid layout** — the desktop grid renders all paintings as direct CSS grid children (interleaved by row). Single-series view uses `.work-grid--single` (`grid-template-columns: 1fr`, `max-width: 380px`).
- **Compact sizing** — `.work-grid:not(.work-grid--single)` scopes smaller image (`max-width: 180px`) and font sizes (`1.1rem`) so all-columns view is less cluttered. Single-series view uses full GalleryItem defaults.
- The `TABS` array in `Work.jsx` has `key`, `label`, `gridLabel`, `paintings`, and `offset` fields.
