# Sprinklers and Lawns — Website

NextJS 14 + Node.js website for SprinklersandLawns.com

---

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Plain CSS (globals.css — no Tailwind needed)
- **Fonts:** Oswald (headings) + Source Sans 3 (body) via Google Fonts
- **Database (Phase 3):** PostgreSQL via `pg` package
- **Images:** Next.js Image component (optimized WebP/AVIF)

---

## Getting Started

```bash
npm install
npm run dev
# Open http://localhost:3000
```

---

## Project Structure

```
sprinklers-lawns/
├── app/
│   ├── layout.jsx              # Root layout (Navbar + Footer)
│   ├── page.jsx                # Home page
│   ├── about/
│   │   └── page.jsx            # About page
│   ├── contact/
│   │   └── page.jsx            # Contact page (with form)
│   ├── sprinkler-repair/
│   │   └── page.jsx            # Sprinkler Repair service page
│   ├── sprinkler-installation/
│   │   └── page.jsx            # Sprinkler Installation page
│   └── api/
│       └── contact/
│           └── route.js        # Contact form API endpoint
├── components/
│   ├── Navbar.jsx              # Sticky nav with dropdowns
│   └── Footer.jsx              # Full footer with links
├── styles/
│   └── globals.css             # All brand styles + CSS variables
├── public/
│   └── images/                 # Add your images here (see list below)
└── next.config.js
```

---

## Images Required (add to /public/images/)

| Filename | Used On | Description |
|---|---|---|
| `logo.webp` | Navbar | The Sprinklers and Lawns logo |
| `hero-sprinkler.jpg` | Home hero | Sprinkler watering green lawn |
| `about-joe-davis.jpg` | Home about section | Joe Davis or team photo |
| `joe-davis-portrait.jpg` | About page | Joe Davis portrait |
| `north-texas-lawn.jpg` | Home conditions section | Lush North Texas lawn |
| `irrigation-inspection.jpg` | About page | Technician inspecting system |
| `sprinkler-repair-hero.jpg` | Repair page hero | Technician repairing valve |
| `irrigation-repair-work.jpg` | Repair page | Repair work in progress |
| `sprinkler-installation-hero.jpg` | Install page hero | Installation in progress |
| `irrigation-installation-work.jpg` | Install page | Pipe being laid |

---

## Phase Plan

### ✅ PHASE 1 — Complete (This Delivery)
| Page | File | Status |
|---|---|---|
| Home | app/page.jsx | ✅ Done |
| About | app/about/page.jsx | ✅ Done |
| Contact | app/contact/page.jsx | ✅ Done |
| Sprinkler Repair | app/sprinkler-repair/page.jsx | ✅ Done |
| Sprinkler Installation | app/sprinkler-installation/page.jsx | ✅ Done |
| Navbar | components/Navbar.jsx | ✅ Done |
| Footer | components/Footer.jsx | ✅ Done |
| Global CSS | styles/globals.css | ✅ Done |
| Contact API | app/api/contact/route.js | ✅ Done |

### 🔵 PHASE 2 — Service Pages (Client Content Available)
| Page | File | Content |
|---|---|---|
| Irrigation Design | app/irrigation-design/page.jsx | ✅ Content ready |
| Smart Controllers | app/smart-controllers/page.jsx | ✅ Content ready |
| Rain & Freeze Sensors | app/rain-freeze-sensors/page.jsx | ✅ Content ready |
| Electrical Troubleshooting | app/electrical-troubleshooting/page.jsx | ✅ Content ready |
| Head Replacement | app/head-replacement/page.jsx | ✅ Content ready |
| Commercial Services | app/commercial-services/page.jsx | ❌ Awaiting client content |
| Water-Saving Solutions | app/water-saving-solutions/page.jsx | ❌ Awaiting client content |
| Seasonal Maintenance | app/seasonal-maintenance/page.jsx | ❌ Awaiting client content |
| Landscape Services | app/landscape-services/page.jsx | ❌ Awaiting client content |

### 🟡 PHASE 3 — Location Pages + Database
| Page/Feature | Status |
|---|---|
| Allen service area | ❌ Awaiting client content |
| Frisco service area | ❌ Awaiting client content |
| McKinney service area | ❌ Awaiting client content |
| PostgreSQL setup | ❌ Phase 3 |
| Contact form DB saving | ❌ Phase 3 (see api/contact/route.js TODOs) |
| Blog system | ❌ Phase 3 |

---

## Brand Colors

| Variable | Value | Usage |
|---|---|---|
| `--brand-blue` | #1e6bb8 | Primary color — CTAs, headings, icons |
| `--brand-blue-dark` | #154d8a | Hover states |
| `--brand-blue-light` | #d6e8f7 | Backgrounds, badges |
| `--brand-brown` | #7a4e1e | Accent — "LAWNS" color from logo |
| `--brand-green` | #3a8a2a | Success, checkmarks |
| `--brand-white` | #ffffff | Page background |
| `--brand-off-white` | #f8fbff | Section alternation |

---

## SEO Features Implemented

- Unique `metadata` (title + description) per page
- Canonical URLs on every page
- H1 → H2 → H3 heading hierarchy
- Local keywords (Dallas, Fort Worth, North Texas, specific cities)
- Pricing transparency (Google rewards this)
- License number, credentials, trust signals
- Schema markup (add in Phase 2 — LocalBusiness + Service schema)
- Phone number as clickable `tel:` link throughout

---

## Contact Form — Production Setup

Edit `app/api/contact/route.js`:

1. **Email notifications** — Add Resend or Nodemailer:
   ```bash
   npm install resend
   ```
   Set env: `RESEND_API_KEY=re_...`

2. **Database** (Phase 3) — PostgreSQL:
   ```bash
   npm install pg
   ```
   Set env: `DATABASE_URL=postgresql://user:pass@host:5432/dbname`

Create `.env.local`:
```
DATABASE_URL=your_postgres_url
RESEND_API_KEY=your_resend_key
```
