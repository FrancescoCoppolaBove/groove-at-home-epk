---
name: Groove at Home
description: Dark cinematic EPK for a live funk/soul/nu-jazz collective — vintage stage-light palette, editorial typography, proof-driven credibility.
colors:
  golden-spotlight: "#f7b538"
  deep-red-velvet: "#c32f27"
  vintage-cobalt: "#1e4a8a"
  sunset-orange: "#d8572a"
  burnt-amber: "#db7c26"
  cobalt-mid: "#2d6bbf"
  void-black: "#0a0a0f"
  surface-dark: "#12121a"
  surface-elevated: "#1a1a24"
  card-surface: "rgba(26, 26, 36, 0.60)"
  text-primary: "#ffffff"
  text-warm: "#e8c3a0"
  text-muted: "#9b8574"
  hairline: "rgba(255, 255, 255, 0.08)"
typography:
  display:
    fontFamily: "'Playfair Display', Georgia, serif"
    fontSize: "clamp(2.8rem, 8vw, 7rem)"
    fontWeight: 900
    lineHeight: 1.0
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "'Playfair Display', Georgia, serif"
    fontSize: "clamp(2.25rem, 6vw, 5.5rem)"
    fontWeight: 700
    lineHeight: 0.95
    letterSpacing: "-0.02em"
  title:
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, sans-serif"
    fontSize: "clamp(1.5rem, 3vw, 2.25rem)"
    fontWeight: 700
    lineHeight: 1.1
  body:
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.9
  label:
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, sans-serif"
    fontSize: "0.7rem"
    fontWeight: 700
    letterSpacing: "0.18em"
  numeral:
    fontFamily: "'Space Grotesk', 'Inter', sans-serif"
    fontSize: "2.5rem"
    fontWeight: 900
    lineHeight: 1
rounded:
  sm: "12px"
  md: "16px"
  lg: "20px"
  xl: "24px"
  full: "9999px"
spacing:
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "32px"
  section: "80px"
components:
  button-primary:
    backgroundColor: "linear-gradient(135deg, {colors.golden-spotlight}, {colors.sunset-orange})"
    textColor: "{colors.text-primary}"
    typography: "{typography.body}"
    rounded: "{rounded.full}"
    padding: "16px 32px"
  button-ghost:
    backgroundColor: "rgba(10, 10, 15, 0.55)"
    textColor: "{colors.text-primary}"
    rounded: "{rounded.full}"
    padding: "16px 32px"
  card-glass:
    backgroundColor: "{colors.card-surface}"
    textColor: "{colors.text-primary}"
    rounded: "{rounded.md}"
    padding: "24px"
  chip-trust-badge:
    backgroundColor: "rgba(247, 181, 56, 0.08)"
    textColor: "{colors.golden-spotlight}"
    rounded: "{rounded.full}"
    padding: "8px 16px"
---

# Design System: Groove at Home

## Overview

**Creative North Star: "The Vintage Soul Stage"**

The site reads as a dark stage lit by warm spotlights, not a software product. Everything sits on a near-black, cinematic background (film grain, Ken Burns pans on photography, gradient vignettes) with a deliberately narrow three-accent vintage palette — gold stage light, deep red velvet, cobalt blue — carrying every point of emphasis. The voice is direct and proof-driven rather than ornamental: credibility is built from named collaborators, real numbers, and concrete history, and the visual system stays confident and uncluttered so that proof reads clearly. This identity was deliberately preserved (not replaced) in the most recent redesign pass — the brief was to elevate execution and typographic impact without changing the palette, fonts, or structure.

**Key Characteristics:**
- Always dark, cinematic, photography-led (never a light theme)
- One warm gold accent carries primary interactivity; red and blue rotate in as secondary signal colors on cards/badges
- Editorial serif display type (Playfair Display) paired with a clean grotesque body (Inter), plus a distinct geometric face (Space Grotesk) reserved for numerals/stats
- Headline sizes scale fluidly with viewport (`clamp()`), not in fixed breakpoint jumps
- Glassmorphism + warm glow signal elevation and interactivity rather than hard drop shadows

## Colors

A narrow, confident palette: one dominant warm accent plus two supporting accents, all read against near-black.

### Primary
- **Golden Spotlight** (`#f7b538`): the dominant accent — primary CTAs, active nav state, section eyebrows, hover glows, the logo ring. Carries the "warm stage light" read.

### Secondary
- **Deep Red Velvet** (`#c32f27`): second accent, used in rotation on stat cards, trust badges, and pillar icons alongside gold and blue; part of the vintage-funk gradient family.

### Tertiary
- **Vintage Cobalt** (`#1e4a8a`, mid tone `#2d6bbf`): third accent in the same rotation — cools the palette down where gold/red would feel too hot (e.g. the "Reach" stat card, blue trust badges).

### Neutral
- **Void Black** (`#0a0a0f`): base page background.
- **Surface Dark** (`#12121a`) / **Surface Elevated** (`#1a1a24`): secondary backgrounds (alternating section backdrops, mobile nav panel).
- **Card Surface** (`rgba(26, 26, 36, 0.60)`): the translucent glass-card fill, always paired with backdrop-blur.
- **Text Primary** (`#ffffff`): headlines and high-emphasis copy.
- **Text Warm** (`#e8c3a0`): secondary/body copy — a warm tan rather than a cold gray, keeps body text feeling lit by the same stage light.
- **Text Muted** (`#9b8574`): tertiary/label copy, lowest emphasis.
- **Hairline** (`rgba(255, 255, 255, 0.08)`): default border color on cards and dividers at rest.

### Named Rules
**The Warm Glow Rule.** Every primary interactive or elevated element — primary buttons, hovered glass cards, the logo ring, the Jacob Collier endorsement card — carries a warm gold glow (`box-shadow` built from Golden Spotlight at low opacity). Glow, not a harder shadow, is the site's signal for "this matters" or "this responds."

**The Three-Accent Rotation Rule.** Repeated card/badge sets (stat cards, trust badges, pillar icons) cycle gold → red → blue across siblings rather than defaulting every instance to the primary accent. A single yellow row of four identical cards would violate this; the rotation is what keeps the palette feeling vintage-funk rather than monochrome-with-an-accent.

## Typography

**Display Font:** Playfair Display (with Georgia, serif fallback)
**Body Font:** Inter (with -apple-system, BlinkMacSystemFont fallback)
**Label/Numeral Font:** Space Grotesk (for stat figures only — e.g. "40K+", "120+")

**Character:** A high-contrast serif/grotesque pairing — Playfair's bold italics do the emotional, editorial lifting on headlines, while Inter stays quiet and functional everywhere else. Space Grotesk is reserved exclusively for numerals, giving stats a distinct "data readout" feel against the editorial headlines around them.

### Hierarchy
- **Display** (900, `clamp(2.8rem, 8vw, 7rem)`, line-height 1.0): the Hero H1 only. The single largest text on the page at every viewport width.
- **Headline** (700, `clamp(2.25rem, 6vw, 5.5rem)`, line-height 0.95): every section's H2 (Bio, Collaborators, Live, Metrics, Music, VideoShowcase, Booking). Fluid, not stepped — grows continuously with viewport instead of jumping at breakpoints.
- **Title** (700, `clamp(1.5rem, 3vw, 2.25rem)`, line-height 1.1): standalone sub-headings inside a surface (e.g. "Request Booking"). Not used for small repeated grid-card labels.
- **Body** (400, 1rem, line-height 1.9 for long-form paragraphs like the Bio copy): generous line-height is deliberate — the Bio section reads as long-form narrative, not UI copy.
- **Label** (700, 0.7rem, letter-spacing 0.18em, uppercase): section eyebrows, trust-badge sub-labels, stat labels.

### Named Rules
**The Fluid Scale Rule.** Headline sizes use `clamp()`-based fluid scaling (`--text-display`, `--text-h2`, `--text-h3`), never fixed Tailwind breakpoint classes (`text-4xl md:text-5xl lg:text-6xl`). Any new headline follows the same pattern rather than reintroducing stepped sizing.

**The Small-Label Exception Rule.** The fluid headline scale never applies to small, repeated grid-card titles (`.pillar-title`, `.service-title`, `.stat-label`). Those stay at their compact, fixed size — they're dense UI labels, not narrative headings, and scaling them up breaks their grid layouts.

## Layout

Single-page, section-based scroll layout, each section full-bleed with an inner `container-max` (max-width 1400px, centered) and horizontal `section-padding` (24px mobile → 48px tablet → 80px desktop). Vertical rhythm between sections runs roughly 80–112px of padding (`py-20`–`py-28`), with a thin animated `.vintage-divider` gradient line marking most section boundaries. Section backgrounds alternate subtly between Void Black and Surface Dark to create separation without hard borders. Grids are content-driven rather than uniform: the Live photo gallery uses a dense-pack 4-column grid mixing portrait (1×2) and landscape (2×1) cells; stat/trust/pillar rows use responsive 2–4 column grids that collapse to 1–2 columns on mobile. Scroll-reveal (`opacity`/`translateY` transition on an `.active` class) staggers children in on entry.

## Elevation & Depth

Hybrid: flat, near-black surfaces at rest, with depth conveyed through two mechanisms rather than conventional drop shadows — translucent glassmorphism (`backdrop-filter: blur(20px) saturate(180%)` over a semi-transparent dark fill) for card surfaces, and warm colored glow (see Named Rules above) for emphasis/interactivity. Hard black shadows exist (`--shadow-sm/md/lg`) but are used sparingly, mostly under photography and video cards to lift them off the page, not as a general card treatment.

### Shadow Vocabulary
- **shadow-sm** (`0 2px 10px rgba(0,0,0,0.30)`): subtle lift, small elements.
- **shadow-md** (`0 10px 30px rgba(0,0,0,0.40)`): default card lift.
- **shadow-lg** (`0 20px 60px rgba(0,0,0,0.55)`): photography, video cards, carousel frame.
- **shadow-glow** (`0 0 40px rgba(247,181,56,0.28)`): the warm-glow signal described above, used on primary buttons and key elevated moments.

### Named Rules
**The Always-Dark Rule.** `color-scheme: dark` is set at the root and light mode is intentionally disabled in source (not merely undefined) — the cinematic dark environment is an invariant of the brand, not a default that may later be toggled or themed light.

## Shapes

Soft, rounded geometry throughout — no sharp corners anywhere in the system. Radii run from 12px (photo cells, small chips) up to fully-rounded pills (buttons, badges, the logo ring, nav dots). Borders are thin (1–1.5px) and low-opacity at rest, brightening to the relevant accent color on hover rather than changing width. A recurring editorial motif: thin L-shaped corner accent brackets (top-left/bottom-right, in Golden Spotlight) frame key photography, like a magazine crop mark — currently used on the Bio section's photo carousel.

## Components

### Buttons
- **Shape:** fully rounded (pill, 9999px radius).
- **Primary:** animated gold→orange gradient fill (`linear-gradient(135deg, #f7b538, #d8572a)`, background-position animated), white bold text, warm glow shadow at rest.
- **Hover / Focus:** primary scales up slightly and lifts (`scale(1.05) translateY(-2px)`) with a stronger glow; ghost/glass buttons shift background opacity and border color toward the gold accent on hover.
- **Ghost:** translucent dark fill with a thin gold-tinted border and blur; used where a primary button would compete with imagery (e.g. Hero's secondary CTA).

### Chips (trust badges)
- **Style:** fully-rounded pill, low-opacity tinted background matching one of the three rotation accents, icon + two-line label (bold primary line, smaller muted sub-label).
- **State:** desktop renders a static wrapped grid; mobile renders the same badges as an infinite horizontal marquee. Hover lifts the badge slightly (`translateY(-2px)`).

### Cards / Containers
- **Corner Style:** 16–20px radius (glass-card, stat-card, pillar-card all close to this range).
- **Background:** translucent `card-surface` + blur (glassmorphism), not solid fill.
- **Shadow Strategy:** see Elevation & Depth — glow-based emphasis, not heavy drop shadow, except for photography/video frames.
- **Border:** 1–1.5px hairline at rest, brightens to the card's assigned rotation accent on hover.
- **Internal Padding:** 24–28px typical (`p-6` / `1.75rem`).

### Navigation (signature component)
Desktop: a fixed vertical column of small dots on the left edge, one per section, tracking scroll position. The active dot widens and glows in Golden Spotlight; hovering an inactive dot reveals its section label sliding in beside it. Mobile: the dot nav is replaced entirely by a full-height slide-in panel (from the right) over a Surface Dark background, with a simple stacked text link list. This dot-nav is a distinctive, worth-preserving signature of the site rather than a generic navbar — new work should extend it, not replace it with a conventional top nav.

## Do's and Don'ts

### Do:
- **Do** keep the dark background and three-accent vintage palette (Golden Spotlight / Deep Red Velvet / Vintage Cobalt) as the baseline for every surface — this was a deliberate, explicit choice preserved through the latest redesign.
- **Do** use the fluid `--text-display` / `--text-h2` / `--text-h3` scale for any new headline, never fixed Tailwind breakpoint classes.
- **Do** apply the warm gold glow to signal interactivity on primary buttons and elevated/hovered cards (The Warm Glow Rule).
- **Do** rotate new stat/badge/pillar-style card sets through the gold → red → blue sequence (The Three-Accent Rotation Rule) instead of repeating one accent.

### Don't:
- **Don't** modify the logo asset (`Groove_transparent_logo.png`) or its ring/placement treatment — binding brand commitment, treat as immutable.
- **Don't** introduce colors outside the established accent/neutral palette; new gradients should be built only from existing primary/secondary/blue tokens.
- **Don't** apply the large fluid headline scale to small, repeated grid-card labels (`.pillar-title`, `.service-title`, `.stat-label`) — they stay at their compact fixed size (The Small-Label Exception Rule).
- **Don't** enable or design for a light theme; the dark cinematic environment is invariant (The Always-Dark Rule).
