# 🏛️ Architecture & System Design
## 🕉️ Vishwakarma — The Divine Architect

---

## 1. System Philosophy & Technical Constraints

The project is built upon a deliberately pure, non-negotiable static architecture designed for longevity, high performance, and rapid worldwide access:

- **Strictly Static**: HTML5, CSS3, and modern Vanilla ES6+ JavaScript.
- **Zero Build Tooling Overhead**: No Webpack, Vite, Parcel, Babel, or npm compilation steps required to view or run the site.
- **Forbidden Technologies**: React, Vue, Angular, Next.js, Node.js backend, Express, Firebase, Supabase, headless CMS, and heavy CSS frameworks (e.g. Tailwind runtime).
- **Permitted Lightweight Libraries**:
  - **GSAP (GreenSock)**: Used selectively for high-end cinematic timeline choreography without layout thrashing.
  - **Lenis**: Virtual smooth scrolling without scroll hijacking.
  - **Lucide Icons**: Minimal, clean SVG icons loaded via CDN/inline SVG.

---

## 2. Directory Architecture

```text
vishwakarma/
├── index.html                 # Semantic HTML5 document shell & landmarks
│
├── css/                       # Modular CSS architecture
│   ├── variables.css          # Design tokens (colors, typography, spacing, elevations)
│   ├── reset.css              # Baseline CSS reset & normalization
│   ├── base.css               # Foundational styling, body background, scrollbar, skip-links
│   ├── typography.css         # Font definitions, scale, line-heights, Devotional/Sanskrit typography
│   ├── components.css         # Reusable UI component styling (nav, badges, cards, mantras)
│   ├── sections.css           # Structural section layouts and narrative chapter grids
│   ├── animations.css         # Divine motion keyframes, reveal utilities, prefers-reduced-motion
│   └── responsive.css         # Mobile-first breakpoints and touch adaptations
│
├── js/                        # Modular Vanilla JavaScript (ES6 Modules)
│   ├── main.js                # Master orchestrator and DOM initialization
│   ├── navigation.js          # Floating nav, scrollspy, active links, smooth scroll
│   ├── animations.js          # IntersectionObserver reveal manager & motion coordinator
│   ├── story.js               # Decoupled chapter data models and content schema
│   ├── gallery.js             # Darshan lightbox modal controller & keyboard traps
│   └── audio.js               # Devotional audio controller (opt-in, gentle fade)
│
├── assets/                    # Optimized media assets
│   ├── images/
│   │   ├── hero/              # Master Vishwakarma artwork (portrait/celestial)
│   │   ├── cosmic/            # Rigvedic forge, nebula, cosmic architecture
│   │   ├── story/             # Narrative chapter visuals
│   │   ├── creations/         # Weapons (Sudarshana, Trishula) & cities (Dwarka, Lanka)
│   │   ├── puja/              # Tool worship, lamps, kalash, factory altars
│   │   ├── craftsmanship/     # Traditional artisans, sculptors, blacksmiths
│   │   └── gallery/           # High-resolution darshan artwork
│   ├── audio/                 # Ambient temple soundscapes (opt-in audio)
│   └── icons/                 # Custom SVG icons & religious emblems
│
├── content/                   # Structured content tracking & research registries
│   ├── story.md               # 7-chapter narrative outline
│   ├── sources.md             # Multi-tier textual source registry
│   ├── puja.md                # Consecration rituals, philosophical foundation
│   └── translations.md        # Tri-lingual vocabulary (English / Hindi / Sanskrit)
│
├── docs/                      # Engineering and design documentation
│   ├── architecture.md        # This document: systems & module boundaries
│   ├── design-system.md       # Color tokens, typography, visual guidelines
│   ├── content-guidelines.md  # Fact vs Tradition, citation & writing rules
│   └── research-notes.md      # Scriptural research and academic citations
│
└── README.md                  # Project overview, roadmap & guidelines
```

---

## 3. CSS Loading Hierarchy & Specificity Management

To guarantee predictability and avoid specificity wars, stylesheets are linked in strict sequential order:

```html
<link rel="stylesheet" href="css/variables.css">
<link rel="stylesheet" href="css/reset.css">
<link rel="stylesheet" href="css/base.css">
<link rel="stylesheet" href="css/typography.css">
<link rel="stylesheet" href="css/components.css">
<link rel="stylesheet" href="css/sections.css">
<link rel="stylesheet" href="css/animations.css">
<link rel="stylesheet" href="css/responsive.css">
```

### Layer Principles
1. **Zero Nesting Depth Hell**: Maintain shallow CSS selectors (single class selectors e.g. `.creation-card`, `.nav-bar`).
2. **Design Token Strictness**: No arbitrary hex codes or random pixel values in `components.css` or `sections.css`. Every color, spacing, radius, and font size references `var(--token)`.
3. **No Important Flags**: Avoid `!important` except inside `@media (prefers-reduced-motion)` overrides.

---

## 4. JavaScript Module Contracts & Lifecycle

### Initialization Flow
1. User loads `index.html`.
2. Browser renders critical HTML shell and base styling.
3. Scripts are loaded with `type="module"`, deferring execution until HTML parsing finishes.
4. `main.js` catches `DOMContentLoaded` and sequentially triggers module controllers:
   ```javascript
   NavigationController.init();
   AnimationController.init();
   GalleryController.init();
   AudioController.init();
   ```

### Decoupled Content Data Model
All chapter story text, citations, and verse metadata live in `js/story.js`. This guarantees that future redesigns or animations can query chapter data without parsing DOM elements or entangling textual copy with CSS layout coordinates.

```javascript
// Example schema in js/story.js
{
  id: "chapter-01",
  chapterNumber: "01",
  title: "The Cosmic Beginning",
  hindiTitle: "सृष्टि का आरंभ",
  category: "vedic",
  sourceType: "Vedic",
  primarySource: "Rigveda 10.81 & 10.82",
  verse: "...",
  verseRef: "ऋग्वेद १०.८१.३",
  shortDescription: "...",
  hindiText: "...",
  englishText: "...",
  sourceNote: "..."
}
```

---

## 5. Performance Strategy & 90+ Lighthouse Target

### Image Optimization
- Modern image formats: **WebP** and **AVIF** with fallbacks.
- Explicit `width` and `height` attributes on `<img>` tags to prevent Cumulative Layout Shift (CLS).
- Native `loading="lazy"` on all images below the hero fold.
- `fetchpriority="high"` reserved exclusively for the primary hero visual.

### Script & Font Loading
- `dns-prefetch` and `preconnect` to `https://fonts.googleapis.com` and `https://fonts.gstatic.com`.
- CSS Google Fonts loaded with `display=swap` to avoid Flash of Invisible Text (FOIT).
- External CDN libraries (GSAP, Lenis, Lucide) loaded asynchronously.

### Motion Performance
- All CSS animations operate strictly on GPU-composited properties: `opacity` and `transform`.
- Zero animating of `width`, `height`, `margin`, or `top/left` during scroll.
- Respect `prefers-reduced-motion` at both CSS and JS runtime levels.

---

## 6. Audio Strategy & Safety

- **Opt-In Only**: Audio never plays without direct user gesture (click/tap).
- **Default State**: Muted.
- **Audio Lifecycle**: Gentle 1200ms linear fade-in on play; 800ms fade-out on pause.
- **Fail Gracefully**: If the audio file is missing or blocked by browser autoplay policies, the UI updates smoothly without throwing unhandled exceptions.
