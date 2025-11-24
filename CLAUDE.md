# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a portfolio website for artist Lisa Tomlin, built with React 19, Vite 6, and Tailwind CSS 4. The site showcases artwork through an interactive gallery with custom carousel components supporting images, videos, and side-by-side comparisons.

## Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linter
npm run lint

# Deploy to GitHub Pages
npm run deploy
```

## Architecture

### Routing & Pages
The app uses React Router with a single-page application structure. All routes are defined in `src/App.jsx`:
- `/` - Home page with hero section and in-progress work carousel
- `/work` - Main gallery with completed artwork
- `/about` - Artist biography
- `/awards` - Exhibition history and accolades
- `/contact` - Contact form integrated with EmailJS

### Key Components

**Carousel (`src/components/Carousel/Carousel.jsx`)**
- Flexible carousel supporting three item types:
  - `type: "image"` - Single image with HoverZoom
  - `type: "video"` - Video player with poster and controls
  - `type: "pair"` - Side-by-side image comparison (used for process/final views)
- Props: `items` array with structure: `{ type, src, title?, medium?, description?, poster?, left?, right? }`
- Automatically resets to first slide on route changes via `location.key`
- Uses fade transitions (300ms) between slides

**HoverZoom (`src/components/HoverZoom/HoverZoom.jsx`)**
- Wraps images to enable zoom on hover/click
- Used throughout the site for all artwork displays
- Maintains aspect ratio and provides smooth scaling

**Layout Components**
- `Header` - Navigation bar with links to all pages
- `Footer` - Site footer with social links
- `ScrollToTop` - Automatically scrolls to top on route change
- `BackToTopButton` - Floating button appears after scrolling past threshold (600px)

### Contact Form Integration
Contact form (`src/pages/Contact/Contact.jsx`) uses EmailJS:
- Service ID: `service_l636a5m`
- Template ID: `template_v4tvhbk`
- Public key: `C2vGMkUlCrB_ysIhO` (initialized in useEffect)
- Form state managed with React hooks
- Shows loading state during submission

### Asset Management
- All images/videos are in `public/` directory
- Paths use `import.meta.env.BASE_URL` prefix for proper resolution in production
- Structure: `public/images/` and `public/videos/`
- Certificates stored in `public/certificates/`

### Styling
- Tailwind CSS 4 configured via `@tailwindcss/cli`
- Component-specific CSS files co-located with components
- Global styles in `src/index.css` and `src/App.css`
- Custom fonts: Cinzel, Cormorant Garamond, and Parisienne (loaded in `index.html`)

## Important Patterns

### Adding New Artwork
When adding artwork to the gallery:
1. Place image/video files in `public/images/` or `public/videos/`
2. Add item to the `paintings` or `inProgress` array in the relevant page component
3. Use the appropriate carousel item type (`image`, `video`, or `pair`)
4. Always prefix paths with `${import.meta.env.BASE_URL}`
5. Include title, medium, and description for each piece

### Route Changes and State Reset
The Carousel component uses `useEffect` with `location.key || location.pathname` as a dependency to reset slide index on navigation. This ensures users always start at the first slide when visiting a page.

## Deployment
- Production builds are deployed to GitHub Pages via `gh-pages` package
- Base URL is set to `/` in `vite.config.js`
- Build output goes to `dist/` directory
- Run `npm run deploy` to build and publish
