# 🕉️ Vishwakarma — The Divine Architect
### भगवान विश्वकर्मा — दिव्य गाथा, स्थापत्य एवं शिल्प परंपरा
### A Cinematic Digital Journey Through Ancient Indian Heritage, Divine Architecture & Devotion

---

## 1. Project Overview

**Vishwakarma — The Divine Architect** is an immersive devotional, cultural, and philosophical storytelling website dedicated to **Bhagwan Vishwakarma**. 

The experience is crafted not as a conventional reference website, but as a digital journey synthesizing:
> **Ancient Indian Heritage × Devotional Atmosphere × Storytelling × Divine Architecture × Modern Premium Web Design**

The visitor embarks on an experiential pathway:
**Cosmic Creation → Vishvakarman in Vedic Rigveda → Celestial Craftsman → Divine Architectures & Weapons → Traditional Katha → Living Puja & Tool Veneration → Human Craftsmanship → Modern Makers → Sacred Darshan & Blessing**

---

## 2. Technical Stack & Architectural Principles

The platform adheres to a disciplined, zero-framework, static web stack:

- **HTML5**: Strictly semantic, fully accessible (ARIA roles, live regions, skip links, semantic dialogs, WCAG 2.1 AA compliant).
- **CSS3**: Three-layer design token architecture (primitive → semantic → component), fluid typography via CSS `clamp()`, and GPU-composited animations.
- **Vanilla JavaScript (ES6+ Modules)**: Decoupled modular controllers:
  - `main.js`: Application bootstrapper and orchestrator.
  - `navigation.js`: Responsive navigation, smooth scroll, scrollspy, Back to Top, and native Share API with clipboard fallback.
  - `animations.js`: GSAP timeline choreography and scroll-triggered reveals.
  - `story.js`: Chapter data schema, narrative progress dock, and creation detail modals.
  - `gallery.js`: Darshan visual gallery, category filtering, and fullscreen touch/keyboard lightbox viewer.
  - `audio.js`: Web Audio API synthetic tanpura drone and ceremonial chime (strict user opt-in, zero external audio dependencies, zero autoplay).
- **Lightweight Permitted CDN Libraries**:
  - [GSAP 3.12](https://greensock.com/gsap/): Cinematic timeline choreography and scroll animations.
  - [Lenis 1.0](https://github.com/darkroomengineering/lenis): Butter-smooth virtual scrolling with auto-degradation.
  - [Lucide Icons](https://lucide.dev/): Crisp interface iconography.
- **Strictly Forbidden & Avoided**:
  - Zero JS frameworks (No React, Next.js, Vue, Angular, Svelte).
  - Zero backend runtime dependencies (No Node.js server, Python, PHP, Express, APIs).
  - Zero databases or external CMS dependencies.
  - Zero build step or bundler requirements (Runs out of the box in any browser).

---

## 3. Directory Structure

```text
VISHWAKARMA JI/
├── index.html                 # Complete cinematic experience entry point
│
├── css/                       # Modular CSS design architecture
│   ├── variables.css          # Design tokens (colors, typography, spacing, elevations)
│   ├── reset.css              # Baseline modern CSS reset
│   ├── base.css               # HTML/body fundamentals, skip link, selection
│   ├── typography.css         # Font families, fluid scale, Sanskrit & Hindi typography
│   ├── components.css         # Reusable UI component specs (nav, cards, modals, blessings)
│   ├── sections.css           # Structural section layouts & chapter wrappers
│   ├── animations.css         # Divine motion keyframes & prefers-reduced-motion
│   └── responsive.css         # Mobile-first breakpoints & touch adaptations
│
├── js/                        # Modular Vanilla JavaScript (ES6 Modules)
│   ├── main.js                # App orchestrator & lifecycle logger
│   ├── navigation.js          # Navigation bar, mobile drawer, scrollspy, back-to-top, share
│   ├── animations.js          # Motion controller & IntersectionObserver
│   ├── story.js               # Chapter data schema, progress dock & modal controller
│   ├── gallery.js             # Darshan lightbox modal controller with touch & keyboard nav
│   └── audio.js               # Ambient sound controller (Web Audio API tanpura synthesis)
│
├── assets/                    # Media & visual assets
│   ├── images/
│   │   ├── hero/              # Master Vishwakarma artwork
│   │   ├── cosmic/            # Vedic creation & all-seeing celestial visuals
│   │   ├── story/             # Narrative chapter visuals & 1900 katha manuscript
│   │   ├── creations/         # Weapons, chariots & celestial cities (Dwarka, Lanka, Setu)
│   │   ├── puja/              # Consecrated tool altars & ceremonial aarti flame
│   │   └── craftsmanship/     # Lineage of skill, hands & artisan lineages
│   ├── icons/                 # Sacred golden favicon & geometric SVGs
│   └── og-preview.svg         # 1200x630 Open Graph & Twitter social card
│
├── content/                   # Verified research & narrative documentation
│   ├── story.md               # 7-chapter narrative blueprint
│   ├── sources.md             # Textual registry (Vedic, Puranic, Traditional)
│   ├── puja.md                # Significance, ritual steps & tool philosophy
│   └── translations.md        # Tri-lingual vocabulary (English/Hindi/Sanskrit)
│
├── docs/                      # Architectural & design guidelines
│   ├── architecture.md        # Technical architecture & contracts
│   ├── design-system.md       # Color tokens, typography, visual rules
│   ├── content-guidelines.md  # Fact vs Tradition, citation & writing rules
│   └── research-notes.md      # Verified research notes & scriptural analysis
│
└── README.md                  # Complete project documentation & deployment guide
```

---

## 4. Complete Experience Flow

The digital journey unfolds across a unified, contemplative sequence:

```text
SACRED LOADING SCREEN (Sequential Dissolution)
   ↓
DIVINE ENTRY & AMBIENT AUDIO TOGGLE
   ↓
MASTER HERO (Bhagwan Vishwakarma with Dhyana Shloka)
   ↓
THE DIVINE STORY (Chapters 01–07)
   ├── 01: Cosmic Beginning (Rigveda 10.81)
   ├── 02: The All-Seeing Vision (Vishvachakshu)
   ├── 03: The Divine Craftsman & Vastu Purusha Mandala
   ├── 04: Divine Creations (Trishula, Sudarshana, Dwarka, Lanka, Ram Setu)
   ├── 05: Traditional Katha (Historical 1900 Nawal Kishore Press Text)
   ├── 06: Five Pillars of Meaning (Srijan, Shilpa, Jnana, Samyama, Karma)
   └── 07: Transformation Bridge (Cosmic → Divine → Human Craft)
   ↓
VISHWAKARMA PUJA & LIVING CRAFTSMANSHIP
   ├── 01: The Philosophy of Puja (Work as Worship)
   ├── 02: Living Ritual Timeline (7-Step Sacred Pathway)
   ├── 03: Sacred Tool Exhibition (Blueprint Schematics & Consecration)
   ├── 04: Workplace as a Sacred Space
   ├── 05: Devotional Mantra & Meditative Breathing Halo
   ├── 06: Artisan to Modern Maker (Transmission of Skill across Millennia)
   ├── 07: Dignity of Labor
   └── 08: Reflection Gateway (Chamber of the Solitary Diya)
   ↓
DARSHAN VISUAL GALLERY (Interactive 12-Card Exhibition with Lightbox)
   ↓
FINAL DEVOTIONAL BLESSING (ॐ विश्वकर्मणे नमः & Universal Greeting)
   ↓
SOURCES & TRADITIONS DIRECTORY (Four-Tier Stratification)
   ↓
ABOUT THIS JOURNEY & REVERENT FOOTER
```

---

## 5. Content & Source Stratification Discipline

Every claim, narrative, and citation on this website is strictly categorized to uphold the highest theological and historical integrity:

1. **Vedic Foundation**: Rigveda Mandala 10, Sukta 81 & 82 (verified via Vedic Heritage Portal, IGNCA), and Nirukta of Yaska (10.26).
2. **Itihasa & Epics**: Valmiki Ramayana (Yuddha Kanda 6.22 on Nala Setu; Sundara Kanda on Lanka) and Mahabharata (Adi Parva 66; Sabha Parva).
3. **Puranic & Shilpa Shastras**: Vishnu Purana (Book 3, Ch 2 on the cosmic lathe), *Vishvakarma Prakasha*, Matsya Purana, and Skanda Purana.
4. **Traditional Texts & Living Culture**: Historical 1900 CE lithograph manual *श्री विश्वकर्मदेव की कथा : पूजन-विधि सहित* (Munshi Nawal Kishore Press), Kanya Sankranti (September 17), Ayudha Puja, and Govardhan Puja.
5. **Original Website Copy**: Clearly marked and never disguised as ancient scripture.

---

## 6. How to Run Locally

Because this project is strictly static, no compilation, transpilation, or build step is required:

### Option 1: Direct File Opening
Double-click `index.html` or open it in any modern browser (Chrome, Edge, Firefox, Safari).

### Option 2: Local Static Web Server (Recommended for ES Modules)
Run any lightweight static server in the root directory:

```bash
# Using Python 3:
python -m http.server 8000

# Using Node.js npx:
npx serve .
```
Then visit `http://localhost:8000`.

---

## 7. Static Production Deployment Guide

Deployable to any static hosting provider within seconds:

### Deploying to GitHub Pages
1. Push this repository to GitHub.
2. Navigate to **Settings** → **Pages**.
3. Under **Build and deployment**, select `Deploy from a branch`.
4. Choose the `main` branch and `/ (root)` folder.
5. Save. Your site will be live at `https://<username>.github.io/<repo-name>/`.

### Deploying to Netlify
1. Drag and drop the project folder directly onto the [Netlify Drop](https://app.netlify.com/drop) console.
2. Or connect your Git repository with `Publish directory: .` (root) and no build command.

### Deploying to Vercel
1. Run `npx vercel` in the project root or import the repository in the Vercel dashboard.
2. Select **Other** as the framework preset and leave build settings blank.

---

## 8. Accessibility, Performance & Motion Standards

- **WCAG 2.1 AA Compliant**: High contrast ratios (Ivory `#F4EFEA` and Gold `#C99A3D` on Deep Brown/Obsidian `#0B0907`), keyboard focus rings, and explicit ARIA labels.
- **Prefers-Reduced-Motion**: All ambient breathing loops, floating transitions, and parallax transforms respect user OS motion settings.
- **Zero Horizontal Overflow Guarantee**: Strict `max-width: 100vw; overflow-x: hidden;` across all viewport sizes from 320px to 4K.
- **Touch & Keyboard Ergonomics**: All interactive elements exceed 44×44px hit targets. Lightbox supports Escape, Left Arrow, Right Arrow, and mobile touch swipe gestures.

---

### *ॐ विश्वकर्मणे नमः*
*Create with skill. Work with devotion. Build with purpose.*
