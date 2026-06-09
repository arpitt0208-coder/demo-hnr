# Hire N Ride Demo

A premium luxury bike rental landing page built with Next.js, React, TypeScript, Tailwind CSS, and Framer Motion.

## Tech Stack

- **Next.js 15+** (App Router)
- **React 19**
- **TypeScript**
- **Tailwind CSS v4**
- **Framer Motion**
- **Lucide React**
- **clsx**

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the landing page.

## Project Structure

```
src/
├── app/              # Next.js App Router pages & layout
├── components/
│   ├── Navbar/       # Floating navigation bar
│   ├── Hero/         # Hero section with showcase
│   ├── BikeCard/     # Floating bike cards
│   ├── TrustBar/     # Trust indicators
│   ├── BackgroundEffects/  # Layered background visuals
│   └── UI/           # Reusable UI primitives
├── data/             # Static content & configuration
├── assets/           # Local asset references
├── styles/           # Additional CSS utilities
└── lib/              # Shared utilities
```

## Design System

| Token | Value |
|-------|-------|
| Primary Yellow | `#FFB800` |
| Dark Navy | `#0F172A` |
| Text Gray | `#64748B` |
| Background | `#FAFAFA` |
| Border | `#EAEAEA` |

## Scripts

- `npm run dev` — Start development server
- `npm run build` — Production build
- `npm run start` — Start production server
- `npm run lint` — Run ESLint
