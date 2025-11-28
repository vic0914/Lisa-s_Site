# Site Redesign Progress

## Completed Changes

### Home Page
- Split hero section into two equal halves (50/50)
- **Left side**: Video (`Lisa CloseUp.MOV`) that plays on hover
- **Right side**: Original hero image with "Explore Gallery" button
- Added overlay on video hover with arrow icon and "About" button linking to About page
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
- Info section (right) displays title, medium, and description
- "Back to Gallery" button at top-left to return to Work page
- Responsive layout maintains side-by-side structure on all screen sizes
- Positioned closer to header with top padding

## Branch
All changes made on `feature/work-page-redesign` branch
