# Ricardo Scales Piano - Website Repository

## Overview

This is a React-based portfolio website for Ricardo Scales, "The Black Liberace," a renowned pianist and composer. The site showcases his musical legacy, biography, and features an integrated music player with YouTube embeds. Built with React 18, Vite, and Tailwind CSS, the application provides a modern, responsive experience for visitors to explore Ricardo's four-decade career and musical achievements.

## Recent Changes

### October 2025 - Site Updates
- **Footer Component**: Added unified footer across all pages with "All Rights Reserved" and Marchitechs branding
  - Linked to https://marchtechs.builders
  - Consistent styling across Home, Music, Bio, and Contact pages
- **Home Page Enhancement**: Added "New Music" section featuring Pretty Funk
  - Clickable thumbnail with play overlay leading to YouTube
  - "Watch on YouTube" and "More Music" call-to-action buttons
  - Positioned between Legacy and Musical Journey sections

### October 2025 - YouTube Music Player Enhancement
- **Enhanced Music Page** with 5 clickable YouTube tracks featuring inline player
- **Track Integration**: Pretty Funk, You'll Never Walk Alone, To Dream the Impossible Dream, You Are the One, When I Fall in Love
- **Performance Optimizations**: All thumbnails converted to WebP format (6-16KB each)
- **Album Covers**: Added 3 optimized WebP album cover images (6-7KB each)
- **Accessibility**: Implemented keyboard navigation, ARIA labels, and focus management
- **User Experience**: Single-play enforcement, smooth scrolling to player, play icon overlays
- **Data Structure**: Created `music_links.json` for centralized track metadata management
- **Image Assets**: Total of 8 WebP images in `/public/covers/` directory (84KB total)
- **System Dependencies**: Installed ImageMagick and FFmpeg for image optimization

See `MUSIC_PAGE_README.md` for detailed documentation on updating tracks and regenerating thumbnails.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Framework
- **React 18.2.0** with JSX for component-based UI development
- **Vite 5.0** as the build tool and development server
  - Chosen for fast Hot Module Replacement (HMR) and optimized production builds
  - Configured with React plugin for JSX/TSX support
  - Custom server configuration for Replit environment (port 5000, host 0.0.0.0)

### Styling Architecture
- **Tailwind CSS 4.1.11** for utility-first styling
  - PostCSS and Autoprefixer for CSS processing
  - Custom configuration extending default theme
  - Global styles in `src/index.css` and `src/App.css`
- **Custom CSS** with Google Fonts integration:
  - Playfair Display (serif, headings)
  - Inter (sans-serif, body)
  - Dancing Script and Allura (decorative)

### Routing
- **React Router DOM 7.7.1** for client-side navigation
  - Single-page application with route-based component rendering
  - Enables seamless navigation between different sections (Home, Music, Biography, etc.)

### Component Structure
- Page-level components organized in `src/` directory
- Responsive design patterns with mobile-first approach
- Fixed navigation header with backdrop blur effects
- Grid-based layouts for content sections

### Music Player Integration
- **YouTube IFrame API** integration for video playback
  - Deferred loading strategy to optimize initial page load
  - Single-track playback enforcement (one video at a time)
  - Inline player that opens within the page
- **Music Data Management**:
  - JSON-based track catalog (`public/music_links.json`)
  - Track metadata includes: title, artist, YouTube ID, thumbnail, duration, play counts
  - Centralized data structure for easy content updates

### Media Asset Strategy
- **WebP Image Format** for all thumbnails and album covers
  - Track thumbnails: 320x320px (6-16KB each)
  - Album covers: 300x300px (6-7KB each)
  - Lazy loading implementation for performance
  - Responsive images with srcset for high-density displays
- **Asset Organization**:
  - `/public/covers/` for music-related images
  - `/public/attached_assets/` for general site assets
  - YouTube video IDs used as image filenames for easy mapping

### Performance Optimizations
- Lazy loading for images and YouTube embeds
- Minimal CSS preloading
- System font stack fallbacks
- Code splitting via Vite's dynamic imports
- Smooth scroll behavior for anchor navigation

### Development Environment
- **TypeScript Support** configured (tsconfig.json) but using JSX files
  - Strict mode enabled for type safety when needed
  - ESNext target with modern module resolution
- **Development Server**:
  - Hot Module Replacement (HMR) on localhost:5000
  - Configured for Replit's environment with strict port binding

## External Dependencies

### Package Dependencies
- **react & react-dom** (18.2.0): Core framework for UI components
- **react-router-dom** (7.7.1): Client-side routing and navigation
- **vite** (5.0.0): Build tool and development server
- **@vitejs/plugin-react** (4.2.0): Official React plugin for Vite

### Styling Dependencies
- **tailwindcss** (4.1.11): Utility-first CSS framework
- **postcss** (8.5.6): CSS transformation tool
- **autoprefixer** (10.4.21): PostCSS plugin for vendor prefixes

### External Services
- **YouTube Data API**: Video embedding and thumbnail retrieval
  - Format: `https://www.youtube.com/watch?v={videoId}`
  - Thumbnail service: `img.youtube.com` with hqdefault quality
- **Google Fonts CDN**: Custom typography fonts loaded via CDN

### Type Definitions
- @types/react (18.2.37)
- @types/react-dom (18.2.15)
- typescript (5.2.2)

### Asset Hosting
- Static assets served from `/public` directory
- Images, JSON data, and media files deployed with application
- No external CDN or image optimization service currently in use