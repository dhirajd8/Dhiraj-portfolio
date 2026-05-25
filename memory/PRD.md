# Portfolio Website — Dhiraj Dayanand

## Problem Statement
Build a premium portfolio landing page for Dhiraj Dayanand (Digital Marketing Executive, 1.5 yrs experience). Sections: Hire Me + Experience side-by-side, About Me, Graphic Design Portfolio (Ad Creatives / Festival Posts / LinkedIn Carousels), Meta Ads Results (two screenshots side by side), Connect (real social logos: IG, LinkedIn, FB, X), Thank You. Fonts: Poppins. Premium professional corporate look.

## Architecture
- Pure React frontend (static portfolio, no backend writes)
- Tailwind + shadcn/ui (Tabs, Dialog, Sonner)
- react-icons for real social brand logos
- IntersectionObserver-based reveal animations

## Implemented (2026-05-25)
- Premium dark theme (#040814 / cyan #06b6d4 / amber #f59e0b)
- Poppins font (400/500/600/700/800/900) globally
- Glass-morphism navbar with smooth scroll + mobile menu
- Bento hero: Hire Me card (photo, contact pills, Hire Me + Resume CTAs) + Experience timeline
- About Me with 1.5 yr highlight, skills chips, stats grid
- Portfolio tabs with image dialog modal
- Meta Ads results section (2 real screenshots + 4 highlight tiles)
- Connect section with 4 social cards (real brand colors + react-icons)
- Thank You footer with gradient hero text + Back to Top

## Backlog
- P1: Real resume PDF (currently toast placeholder)
- P1: Real portfolio images from Google Drive (currently AI-generated placeholders per category)
- P2: Contact form with backend (currently mailto)
- P2: Analytics / view counter
