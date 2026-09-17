# 🎨 Design System & Visual Identity
## 🕉️ Vishwakarma — The Divine Architect

---

## 1. Visual Direction & Aesthetic Philosophy

The aesthetic of the website is rooted in the timeless resonance of ancient Indian temple architecture, cosmic geometry, and contemporary editorial web craftsmanship:

- **Sacred, not cluttered**: Generous whitespace, refined line work, breathing room for divine contemplations.
- **Ancient, not outdated**: High-contrast editorial typography paired with classical Sanskrit verses.
- **Premium, not commercial**: Restrained antique gold accents rather than flashy neon gradients.
- **Cinematic, not distracting**: Deep cosmic darkness, warm lamp light, slow atmospheric glows.
- **Devotional, not melodramatic**: Authentic scriptural citations presented with quiet solemnity and dignity.

---

## 2. Color Palette & Distribution

The color architecture follows a disciplined **60-30-10** balance to maintain visual tranquility:

| Tier | Role | CSS Variable | Hex Code | Purpose |
|---|---|---|---|---|
| **60% Primary Surface** | Deep Cosmic Darkness | `--color-bg` | `#0B0907` | Deep void of unmanifest creation, night sky, foundation |
| **Secondary Surface** | Temple Basalt / Stone | `--color-bg-secondary` | `#15100C` | Elevated cards, section backdrops, subtle layering |
| **30% Supporting Tone** | Warm Maroon / Flame | `--color-maroon` | `#3A1111` | Devotional fire, kumkum, sacred sacrificial altar |
| **Supporting Tone** | Earth & Ancient Teak | `--color-brown` | `#3A2617` | Workshop wood, forge hearth, grounding warmth |
| **Primary Text** | Warm Ivory Silk | `--color-text` | `#F4EDE0` | High-contrast readable body text, headers |
| **Muted Text** | Weathered Parchment | `--color-text-muted` | `#B8AA96` | Secondary labels, captions, metadata, source notes |
| **10% Accent Highlight** | Antique Temple Gold | `--color-gold` | `#C99A3D` | Keylines, active badges, icons, sacred dividers |
| **Bright Accent** | Celestial Sunlight | `--color-gold-light` | `#E5C46A` | Display titles, mantra glow, focused interactive states |

### Gold Usage Rule
> **Gold must remain an accent, never a wallpaper.**
Excessive gold cheapens the divine feeling. Gold is reserved for focal points: the divine crown, the flame of the diya, the chiseling edge of creation, and active navigation indicators.

---

## 3. Typography Hierarchy

### Font Family Allocations
1. **Primary Display (Latin)**: **Cinzel** (Google Fonts)
   - Inspired by first-century Roman inscriptions and classical proportions.
   - Used for: Chapter titles, hero headlines, numerals, architectural labels.
2. **Body Copy (Latin)**: **Inter** (Google Fonts)
   - Renowned for screen readability, clean geometry, and neutral elegance.
   - Used for: Explanatory narratives, historical descriptions, UI controls.
3. **Sacred Verses & Devotional Text (Devanagari)**: **Noto Serif Devanagari** (Google Fonts)
   - Classical calligraphic contrast, dignified serifs, excellent rendering of Sanskrit conjuncts.
   - Used for: Rigvedic suktas, Puranic shlokas, Hindi devotional summaries, mantras.

### Typographic Scale (Fluid `clamp()` Values)
- **Display Hero**: `clamp(3.25rem, 2.40rem + 4.25vw, 6.0rem)` — 1.05 line height
- **Heading 1**: `clamp(2.25rem, 1.80rem + 2.25vw, 3.5rem)` — 1.2 line height
- **Heading 2**: `clamp(1.875rem, 1.55rem + 1.6vw, 2.75rem)` — 1.35 line height
- **Heading 3**: `clamp(1.25rem, 1.12rem + 0.65vw, 1.5625rem)` — 1.35 line height
- **Body Lead**: `clamp(1.0625rem, 0.98rem + 0.41vw, 1.25rem)` — 1.8 line height
- **Body Text**: `clamp(0.9375rem, 0.88rem + 0.29vw, 1.0625rem)` — 1.6 line height
- **Caption / Metadata**: `clamp(0.8438rem, 0.80rem + 0.22vw, 0.9375rem)` — 1.5 line height

---

## 4. Spacing Scale (Harmonic 4px / 8px Grid)

```css
--space-1:  0.25rem;  /*  4px */
--space-2:  0.50rem;  /*  8px */
--space-3:  0.75rem;  /* 12px */
--space-4:  1.00rem;  /* 16px */
--space-6:  1.50rem;  /* 24px */
--space-8:  2.00rem;  /* 32px */
--space-12: 3.00rem;  /* 48px */
--space-16: 4.00rem;  /* 64px */
--space-24: 6.00rem;  /* 96px */
--space-32: 8.00rem;  /* 128px */
```

---

## 5. UI Component Specifications

### 1. Floating Navigation Bar
- **Form**: Pill-shaped floating dock centered at top of viewport (bottom on mobile).
- **Background**: Translucent charcoal (`rgba(15, 12, 9, 0.75)`) with 12px backdrop blur.
- **Border**: 1px subtle gold border (`rgba(201, 154, 61, 0.15)`).
- **Active State**: Gold accent bottom line, gold-light text.

### 2. Source Classification Badges
- **Vedic Badge**: Soft gold glow background with antique gold border.
- **Puranic Badge**: Muted crimson background with subtle gold border.
- **Traditional Badge**: Earthy wood tone background with ivory border.
- **Regional Practice Badge**: Dark basalt background with muted border.

### 3. Creation Cards
- **Structure**: 2-column or 3-column responsive grid.
- **Surface**: Subtle elevated card with 1px gold border on hover and delicate -4px translateY motion.
- **Glow**: Subtle celestial gold glow (`0 0 30px rgba(201, 154, 61, 0.18)`).

### 4. Mantra Block
- **Centerpiece**: Framed sanctuary box with radial glow.
- **Typography**: Sanskrit verse centered, followed by English philosophical translation in italicized ivory text.

---

## 6. Iconography Strategy

- **Primary Interface**: **Lucide Icons** (clean, crisp, accessible 1.5px stroke weight).
  - Audio toggle: `volume-2`, `volume-x`
  - Navigation: `compass`, `book-open`, `hammer`, `eye`
- **Sacred Symbols**: Custom SVGs in `assets/icons/`:
  - **Lotus (कमल)**: Unfolding of cosmic order.
  - **Diya (दीपक)**: Divine consciousness and inner light.
  - **Hammer & Chisel (छैनी-हथौड़ा)**: Creative skill transforming raw matter.
  - **Measuring Cord (सूत्र)**: Proportion, mathematical truth, Vastu harmony.
