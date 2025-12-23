# Site Redesign Progress

## Completed Changes

### Home Page
- Split hero section into two equal halves (50/50)
- **Left side**: Image (`Lisa-Pic.PNG`) with permanent overlay (35% opacity), "About" button always visible with arrow above
- **Right side**: Hero artwork image with "Explore Gallery" button
- Both buttons vertically aligned using absolute positioning (centered at 50%)
- Both images use `object-fit: cover` to fill containers without whitespace
- Set fixed height of 500px for hero section
- Implemented responsive mobile layout (sections stack vertically)

### Work Page
- Removed Carousel component entirely
- Created new `GalleryItem` component for displaying artwork
- Layout: Image stacked on top of title, centered alignment
- Image max-width: 250px (200px on tablet, 150px on mobile)
- Spacing: 6rem between gallery items
- Click handler on images only (not surrounding div)
- Hover effect: Opacity change on image hover
- Title styling: Black color, 1.5rem font size (1.25rem on tablet, 1rem on mobile)
- Clicking on a portrait navigates to detail page

### Portrait Detail Page
- Created new page at route `/work/:id` for individual portrait viewing
- Layout: Centered container with max-width 800px
- Image section (left, fixed 300px width) with HoverZoom functionality
- Info section (right) displays title, medium, size, and description
- Added portrait size field (e.g., "Bristol Vellum 22 x 30\"") under medium
- "Back to Gallery" button at top-left to return to Work page
- "Inquire About Purchase" button below description, navigates to Contact page
- Button styling: Transparent background with dark border, fills dark on hover
- **Media thumbnails**: Image and video thumbnails (100px each) below main display
- Clicking thumbnails toggles between image and video views
- Video thumbnail shows play button overlay
- Active thumbnail indicated with border and shadow
- Videos autoplay with controls when selected
- Responsive layout maintains side-by-side structure on all screen sizes
- Positioned closer to header with top padding
- **Aphrodite Triptych titles**: Three paintings display two-line titles:
  - Line 1: "Aphrodite Triptych: Journey of a Goddess"
  - Line 2: Panel designation (I, II, or III) with painting name
  - Uses smaller font size (1.15rem) via `.portrait-title-triptych` class
- **Spacing adjustment**: Size line has no spacing from medium line (margin-top: -1rem)
- **AI video disclaimer**: Added note below "Inquire About Purchase" button stating "AI video shown for display purposes only" in italic, light gray text

### Navigation & Scroll Behavior
- **Scroll position preservation**: When navigating from Work page → Portrait Detail → back to Work page, scroll position is now preserved
- Updated `ScrollToTop` component to save/restore scroll position using sessionStorage
- Uses `useLayoutEffect` to prevent visual jumping
- All other page navigation still scrolls to top as expected

## Deployment
- Configured for GoDaddy subdirectory preview deployment
- Base URL set to `/preview/` in vite.config.js
- Production build ready for upload to `yoursite.com/preview`

## Branch
All changes made on `feature/work-page-redesign` branch
