# Velocita Racing - Official Web Platform

> Reconstructed source repository for **Velocita Racing**, the combustion-class Formula Student (FSAE) racing team of the **Ramaiah Institute of Technology (MSRIT)**, Bengaluru, India.
> Recovered autonomously via **REA (Reverse Engineer Anything)** full source code and asset recovery pipeline.

---

## 🏎️ Overview

Velocita Racing designs, manufactures, and tests race cars to compete in Formula Student competitions (e.g., Formula Bharat). This repository contains the complete frontend web application serving [officialvelocitaracing.com](https://officialvelocitaracing.com/).

### Key Architectural Highlights
- **Framework**: React 17 SPA with React Router v5
- **UI & Theming**: Material-UI (MUI v5), custom SCSS modules, and responsive CSS variables
- **Motion & Interactions**: `react-scroll-parallax`, `react-swipeable-views`, interactive multi-step checkout/crowdfunding workflows
- **Dynamic Documents**: `@react-pdf/renderer` for client-side receipt/letter PDF generation
- **SEO & Meta**: `react-helmet` with canonical link mapping and Google Analytics tag integration

---

## 📂 Project Structure

```
velocita-racing/
├── build.bat                   # 1-Click build script for Windows
├── package.json                # Dependencies, scripts, and project metadata
├── .gitignore                  # Git ignore rules for node_modules and builds
├── public/                     # Public root and static HTML shell
│   ├── favicon.ico             # App icon
│   ├── index.html              # HTML template with SEO and Analytics tags
│   ├── logo192.png             # PWA app icons (192px)
│   ├── logo512.png             # PWA app icons (512px)
│   ├── manifest.json           # Web App Manifest
│   └── robots.txt              # Search engine crawler policies
└── src/                        # Complete unminified application source code
    ├── assets/                 # Extracted binary images, SVGs, and brand assets
    │   ├── Banner/             # Hero banners and event headers
    │   ├── Careers/            # Recruitment and engineering division graphics
    │   ├── Events/             # Competition gallery and event photos
    │   ├── History/            # Historical car models (VRF1 - VRF6, MAYA)
    │   ├── Home/               # Homepage hero, sponsors, UI elements
    │   ├── Logo/               # Vector and WebP team logos
    │   ├── Partners/           # Sponsor brand logos (Gold, Silver, Bronze)
    │   ├── Podcast/            # Media assets
    │   ├── Shop/               # Stickers, wallpapers, merchandise
    │   ├── Sponsors24/         # Season 2024 partners
    │   ├── Team/               # Faculty and team member portrait photos
    │   └── UPI/                # Payment gateway QR & brand icons
    ├── components/             # Reusable UI component modules
    │   ├── accordion/          # Custom FAQ and dropdown accordions
    │   ├── dialogbox/          # Modal dialog popups
    │   ├── footer/             # Site footer with social links & sitemap
    │   ├── footersponsors/     # Sponsor carousel and partner marquee
    │   ├── form/               # Feedback, payment, and lead intake forms
    │   ├── infoBox/            # Announcement and callout boxes
    │   ├── inventory/          # Internal parts & tooling inventory portal
    │   ├── navbar/             # Sticky responsive navigation bar
    │   ├── newsponsors/        # Sponsor card grids
    │   ├── pdf/                # Sponsorship brochures & dynamic PDF generator
    │   ├── popup/              # Dynamic popover alerts
    │   ├── quiz/               # Recruitment technical quiz components
    │   ├── Stepper/            # Step-by-step donation progress stepper
    │   ├── styledCharacter/    # Monospace technical badge tags
    │   ├── styledHeading/      # Accent header typography with orange rules
    │   ├── Svgs/               # Geometric SVG divider masks and arrows
    │   ├── teamcard/           # Member bio and social link cards
    │   └── theme.js            # Central MUI theme tokens and color palette
    ├── data/                   # Static content JSON data
    │   └── teamData.js         # Team member rosters and vehicle specs
    ├── pages/                  # Page route components
    │   ├── 404.js              # Custom 404 Not Found error page
    │   ├── About.js            # Mission, history, and workshop overview
    │   ├── Careers.js          # Recruitment portal and openings
    │   ├── Checkout.js         # Crowdfunding donation checkout
    │   ├── Contact.js          # Direct inquiry form and social channels
    │   ├── ContactSponsorTeam.js# Corporate sponsorship intake
    │   ├── Crowdfunding.js     # Campaign page with donation slabs
    │   ├── Development.js      # Under-maintenance placeholder route
    │   ├── Faculty.js          # Faculty advisors and department heads
    │   ├── FSeries.js          # Race car technical breakdown (F-Series)
    │   ├── History.js          # Timeline of vehicles from 2015 to present
    │   ├── Home.js             # High-impact landing page
    │   ├── InternalFeedback.js # Team retrospectives and internal forms
    │   ├── Inventory.js        # Mechanical & electrical component catalog
    │   ├── Newsletter.js       # Subscription and press release archive
    │   ├── OurSponsors.js      # Sponsor tiers (Title, Gold, Silver, Bronze)
    │   ├── OurTeam.js          # Current active roster and leadership
    │   ├── PartnerWithUs.js    # B2B partnership proposal and pitch
    │   ├── Payment.js          # UPI payment gateway confirmation
    │   ├── Privacy.js          # Privacy policy
    │   ├── Recruit25.js        # Recruitment campaign for Season 2025
    │   ├── Register25.js       # Candidate registration form
    │   ├── SponsorDetails.js   # Detailed sponsor profile page
    │   ├── SponsorPage.js      # Individual sponsor showcase
    │   ├── Stickers.js         # Team merchandise store
    │   ├── TeamPage.js         # Subsystem division deep-dive (Aerodynamics, Powertrain, Chassis, etc.)
    │   ├── TermsOfUse.js       # Terms of use
    │   ├── VerifyPayment.js    # Transaction ID and UPI reference verification
    │   ├── WaysToSponsor.js    # In-kind, material, and monetary tier benefits
    │   ├── functions/          # Utility hooks (ScrollToTop, ScrollTopRefresh)
    │   └── style/              # SCSS style definitions per page
    ├── App.js                  # Master router and route definitions
    ├── index.css               # Global baseline stylesheet and font definitions
    ├── index.js                # React DOM render entry point
    └── reportWebVitals.js      # Performance tracking hooks
```

---

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v16.x, v18.x, or v20.x recommended)
- `npm` or `yarn`

### Installation
Install project dependencies using `--legacy-peer-deps` (required for React 17 + MUI v5 compatibility):
```bash
npm install --legacy-peer-deps
```

### Development Server
Run the local development server at `http://localhost:3000`:
```bash
npm start
```

### Production Build
Compile optimized production artifacts to the `/build` directory:
```bash
npm run build
```
Or execute the 1-click batch script on Windows:
```cmd
build.bat
```

---

## 🛣️ Route Mapping

| Path | Component | Purpose |
| :--- | :--- | :--- |
| `/` | `Home.js` | Landing page, highlights, car showcase |
| `/about` | `About.js` | Team overview and institution background |
| `/our-team/` | `OurTeam.js` | Team directory |
| `/our-team/:id` | `TeamPage.js` | Subsystem technical division view |
| `/faculty/:id` | `Faculty.js` | Faculty advisors |
| `/series/F/` | `FSeries.js` | F-Series combustion car specifications |
| `/careers/` | `Careers.js` | Open engineering roles |
| `/careers/recruitment/` | `Recruit25.js` | Recruitment portal |
| `/partner-with-us/` | `PartnerWithUs.js` | Corporate sponsorship program |
| `/history/` | `History.js` | Historical vehicle timeline |
| `/sponsors/` | `OurSponsors.js` | Sponsor directory |
| `/crowdfunding/` | `Crowdfunding.js` | Crowd support campaign |
| `/crowdfunding/upi/checkout/` | `Checkout.js` | UPI payment flow |
| `/connect/contact-us/` | `Contact.js` | Inquiry and contact details |
| `/shop/stickers/` | `Stickers.js` | Team merchandise |
| `/inventory/` | `Inventory.js` | Internal inventory manager |
| `*` | `404.js` | Catch-all 404 page |

---

## 🔒 Verification & Quality Assurance
- **Source Fidelity**: 100% of components, styles, and assets reconstructed from source maps and asset hashes.
- **Zero Skeletons**: Zero placeholder files or stub implementations. All forms, routes, handlers, and SVG paths are fully intact.
