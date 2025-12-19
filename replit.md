# Royal Clean Lavanderias

## Overview
A React-based website for Royal Clean Lavanderias, a laundry delivery service in Curitiba, Brazil. The site is built with Vite, TypeScript, and Tailwind CSS (CDN). Focus on SEO for keywords: "Lavanderia Palladium", "Lavanderia Delivery".

## Recent Changes (December 19, 2025)
- Created centralized route configuration with SEO metadata for all pages
- Built EnhancedSEO component for dynamic meta tags and structured data
- Fixed broken images using attached assets from user
- Updated all pages with "Lavanderia Palladium" and "Lavanderia Delivery" content
- Created all 17 neighborhood pages with unique content
- Added sitemap.xml with all routes
- Added robots.txt
- Updated _redirects for Netlify SPA routing
- Added Service Worker for caching
- Implemented pre-rendering configuration

## Project Structure
```
/
├── assets/images/        # Custom laundry images
├── components/
│   ├── EnhancedSEO.tsx  # Dynamic SEO component
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── PromoPopup.tsx
│   └── ScrollToTop.tsx
├── config/
│   └── routes.ts        # Centralized routes and SEO config
├── pages/
│   ├── Home.tsx         # Homepage with neighborhoods
│   ├── Services.tsx     # Services and pricing
│   ├── About.tsx        # About page
│   ├── Contact.tsx      # Contact info
│   ├── Neighborhood.tsx # Dynamic neighborhood pages
│   └── NotFound.tsx
├── public/
│   ├── _redirects       # Netlify SPA redirects
│   ├── sitemap.xml      # XML sitemap
│   ├── robots.txt       # Robots file
│   └── sw.js            # Service Worker
├── scripts/
│   └── generate-sitemap.ts
├── App.tsx
├── index.tsx
├── index.html           # With structured data
├── prerender.config.ts
└── vite.config.ts
```

## Tech Stack
- React 19
- React Router 7
- Vite 6
- TypeScript 5.8
- Tailwind CSS (via CDN)
- Lucide React (icons)

## Key Features
- **17 Neighborhood Pages**: Each with unique SEO content
- **Enhanced SEO**: Dynamic meta tags, structured data, canonical URLs
- **Service Worker**: Caching for offline support
- **Sitemap**: All routes included for search engines
- **Keywords Focus**: "Lavanderia Palladium", "Lavanderia Delivery"

## Neighborhoods Covered
Portão, Água Verde, Vila Izabel, Novo Mundo, Santa Quitéria, Guaíra, Parolin, Rebouças, Prado Velho, Lindóia, Hauer, Boqueirão, Centro, Seminário, Fanny, Fazendinha, Campo Comprido

## Development
- Run: `npm run dev` (port 5000)
- Build: `npm run build`
- Preview: `npm run preview`

## Deployment
- Configured for static deployment
- Build output: `dist/`
- Uses _redirects for SPA routing

## SEO Notes
- Each page has unique title, description, and keywords
- Structured data (JSON-LD) for LocalBusiness
- Breadcrumb structured data
- Open Graph and Twitter cards
- Geo meta tags for local SEO
- Canonical URLs for all pages
