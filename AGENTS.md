# AGENTS.md - Ambulanter Pflegedienst Dora GmbH

This file provides essential information for AI coding agents working on this project.

## Project Overview

**Ambulanter Pflegedienst Dora GmbH** is a professional website for a German home care nursing service based in Offenbach/Frankfurt am Main. The website provides information about the company's services, team, and contact options. It is designed with a focus on accessibility (WCAG compliance), GDPR compliance, and modern web standards.

The project uses a **hybrid architecture** supporting both:
- **Next.js App Router** (primary) - for static site generation and deployment
- **Vite + React Router** (secondary) - for client-side development and testing

## Technology Stack

| Category | Technology | Version |
|----------|------------|---------|
| Framework | Next.js | ^16.1.6 |
| React | React | ^19.2.4 |
| Router | React Router DOM | ^7.13.0 |
| Build Tool | Vite | ^6.2.0 |
| Styling | Tailwind CSS | ^4.1.18 |
| Language | TypeScript | ~5.8.2 |
| Form Backend | Web3Forms | API-based |
| Deployment | Netlify | Static export |

## Project Structure

```
├── app/                    # Next.js App Router pages
│   ├── api/submit/         # API route for form submission (Web3Forms)
│   ├── datenschutz/        # Privacy policy page
│   ├── impressum/          # Legal imprint page
│   ├── kontakt/            # Contact page with form
│   ├── leistungen/         # Services overview page
│   ├── ueber-uns/          # About us page
│   ├── globals.css         # Global styles with Tailwind directives
│   ├── layout.tsx          # Root layout with metadata
│   └── page.tsx            # Homepage
├── components/             # Shared React components
│   ├── ContactBar.tsx      # Fixed contact bar (used in app/)
│   ├── CookieBanner.tsx    # GDPR cookie consent banner
│   ├── Footer.tsx          # Site footer (Vite version)
│   ├── Header.tsx          # Navigation header (Vite version)
│   ├── PageIntro.tsx       # Page header component
│   ├── ServiceCard.tsx     # Service display card
│   └── StickyContactBar.tsx# Alternative contact bar
├── pages/                  # Legacy Vite Router pages (unused in Next.js)
│   ├── About.tsx
│   ├── Contact.tsx
│   ├── Home.tsx
│   ├── Legal.tsx
│   └── Services.tsx
├── public/                 # Static assets
│   ├── *.webp              # Optimized images
│   ├── hero.webp
│   └── logo.jpeg
├── constants.tsx           # Brand config, contact info, SVG icons
├── types.ts                # TypeScript type definitions
├── tailwind.config.js      # Tailwind CSS configuration
├── next.config.mjs         # Next.js static export config
├── vite.config.ts          # Vite development server config
└── netlify.toml            # Netlify deployment & security headers
```

## Build Commands

```bash
# Development (Vite dev server on port 3000)
npm run dev

# Production build (Vite, outputs to /dist)
npm run build

# Preview production build
npm run preview

# Next.js build (static export, outputs to /out)
npx next build
```

**Note:** The project primarily uses Vite for development and Next.js for static site generation. The `dist` folder is the Vite output, while `out` contains the Next.js static export.

## Code Style Guidelines

### Component Structure
- Use functional components with TypeScript interfaces
- Components receiving props must define explicit interfaces
- Use `"use client"` directive for client-side components in Next.js App Router

### Naming Conventions
- Components: PascalCase (e.g., `Header.tsx`, `ServiceCard.tsx`)
- Pages: `page.tsx` (Next.js convention) or PascalCase (legacy Vite pages)
- Constants: UPPER_SNAKE_CASE for exports
- Files: kebab-case for directories, PascalCase for components

### Styling Conventions
- Primary styling via Tailwind CSS utility classes
- Brand colors defined in `tailwind.config.js`:
  - `brand.DEFAULT`: #47153b (primary brand color)
  - `brand.light`: #6d215a
  - `brand.dark`: #2e0d26
  - `brand.accent`: #fdf7fa
- Custom CSS in `globals.css` for scrollbars and accessibility features
- Use `@/` alias for imports from project root

### Accessibility Requirements
- All images must have descriptive `alt` text
- Interactive elements need `aria-label` attributes
- Skip-link for keyboard navigation in layout
- ARIA roles for dynamic content (e.g., `role="alert"` for form success)
- Semantic HTML5 elements (nav, main, section, article)

## Configuration Files

### next.config.mjs
```javascript
{
  output: 'export',        // Static HTML export
  images: { unoptimized: true },  // Required for static export
  reactStrictMode: true
}
```

### vite.config.ts
- Port: 3000, host: 0.0.0.0
- Public directory: `public/`
- Path alias: `@/` resolves to project root
- Environment variables: `GEMINI_API_KEY` exposed as `process.env`

### tailwind.config.js
- Content paths: `app/`, `pages/`, `components/`, root files
- Custom font families: Inter (sans), Playfair Display (serif)
- Extended with brand color palette

## Environment Variables

Create `.env.local` from `.env.local.example`:

```bash
# Required for contact form
WEB3FORMS_ACCESS_KEY=your_access_key_here

# Optional analytics
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

**Security Note:** Never commit `.env.local` to version control.

## Form Handling

The contact form uses **Web3Forms** API for serverless form submission:

1. Form submits to `/api/submit` (Next.js API route)
2. Server-side validation checks:
   - Required fields: name, email, message
   - Max length: name ≤ 100 chars, message ≤ 5000 chars
3. Data forwarded to `https://api.web3forms.com/submit`
4. On success: Redirect to `/kontakt?success=true`

**Implementation in `app/api/submit/route.ts`:**
- Method: POST
- Input: FormData
- Output: JSON response or redirect

## Deployment

### Netlify Configuration (netlify.toml)
- Build command: `npm run build`
- Publish directory: `dist` (Vite) or configure for `out` (Next.js)
- Security headers configured:
  - X-Frame-Options: DENY
  - X-XSS-Protection
  - Content-Security-Policy
  - Permissions-Policy
- SPA fallback redirect configured

### Static Export
For production deployment:
1. Run `npx next build` to generate static files in `/out`
2. Or use `npm run build` for Vite output in `/dist`
3. Deploy the appropriate folder to Netlify

## Key Components Reference

### Layout Components
- `app/layout.tsx`: Root layout with Header, ContactBar, Footer, CookieBanner
- `PageIntro`: Consistent page header with title, description, accent text

### UI Components
- `ServiceCard`: Displays service with icon, description, features list
- `CookieBanner`: GDPR-compliant cookie consent with localStorage persistence

### Icons
All icons are inline SVG components exported from `constants.tsx`:
- `ICONS.Phone`, `ICONS.Mail`, `ICONS.Location`
- `ICONS.Check`, `ICONS.Heart`, `ICONS.Clock`
- `ICONS.Users`, `ICONS.Shield`, `ICONS.Medical`
- `ICONS.Bath`, `ICONS.HomeService`, `ICONS.Star`

## Brand Constants

Located in `constants.tsx`:

```typescript
BRAND.name: "Ambulanter Pflegedienst Dora GmbH"
BRAND.tagline: "Pflege mit Herz, Kompetenz und Vertrauen"
BRAND.primaryColor: "#47153b"
BRAND.quote: "Menschlichkeit steht bei uns im Mittelpunkt..."

CONTACT.phone: "069 – 800 894 44"
CONTACT.mobile: "0160 – 8089444"
CONTACT.email: "info@pd-dora.de"
CONTACT.address: "Kaiserleistraße 43, 63067 Offenbach/Frankfurt am Main"
```

## Security Considerations

1. **Form Validation**: Server-side validation in API routes
2. **Honeypot**: Hidden `botcheck` field in contact form
3. **CSP Headers**: Configured in netlify.toml
4. **No Sensitive Data**: API keys stored in environment variables only
5. **HTTPS**: Enforced in production via Netlify

## Testing

This project does not include automated tests. Manual testing checklist:
- [ ] Form submission works correctly
- [ ] Cookie banner stores preference in localStorage
- [ ] All navigation links work
- [ ] Mobile responsive design
- [ ] Accessibility: keyboard navigation, screen reader compatibility
- [ ] Cross-browser compatibility (Chrome, Firefox, Safari)

## Language and Localization

- Primary language: **German (de)**
- All user-facing content is in German
- Legal pages (Impressum, Datenschutz) follow German legal requirements
- HTML lang attribute: `lang="de"`

## File Cache Busting

Images include version query parameters for cache busting:
```html
<img src="/hero.webp?v=20260129" ... />
```

Update the version date when changing images.

## Common Tasks

### Adding a New Page
1. Create directory under `app/[page-name]/`
2. Add `page.tsx` with component export
3. Use `PageIntro` component for consistent headers
4. Import from `@/constants` for brand consistency
5. Add route to navigation in `constants.tsx` if needed

### Updating Contact Information
Edit `constants.tsx` - changes propagate to all components automatically.

### Adding New Icons
Add SVG component to `constants.tsx` under `ICONS` object.

### Modifying Styles
- Global styles: `app/globals.css`
- Tailwind config: `tailwind.config.js`
- Component-specific: Use Tailwind utility classes

---

Last updated: 2026-02-12
