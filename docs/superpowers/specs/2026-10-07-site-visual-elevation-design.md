# Groove at Home — Visual Elevation Redesign

**Date:** 2026-10-07
**Status:** Approved by user, pending implementation plan

## Context

The site (`epk-groove`, Astro + Tailwind) is a one-page EPK for the funk/soul live band "Groove at Home". It already has a defined identity — dark cinematic theme, "vintage funk" palette (golden yellow, deep red, cobalt blue), Playfair Display + Inter + Space Grotesk — established and partially refined in a prior redesign-audit pass (see commits `7bcd802`, `1dec5f5`, `9487381`).

The user's feedback: the site doesn't look generic or broken, but it isn't convincing at a premium/aesthetic level yet. Goal of this round: elevate execution quality across the whole site while keeping the existing identity.

## Goal

A full visual elevation of every section, under the current identity (not a rebrand), with one explicit, user-requested focal change: section headline typography should be noticeably bigger and more impactful, consistent with the Hero's existing scale philosophy. Small copy polish is in scope; content restructuring and the logo are not.

## Non-goals

- No change to color palette, font families, or overall page structure/section order.
- No change to the logo asset or its usage (`src/assets/Groove_transparent_logo.png`), anywhere it appears.
- No rewrite of existing copy — only small polish where phrasing reads as generic/template, plus one explicit content addition (below).
- No new sections, no removal of existing sections.

## In scope: all sections

`Hero`, `BioSection`, `CollaboratorsSection`, `LiveSection`, `MetricsSection`, `MusicSection`, `TrustBar`, `VideoShowcase`, `BookingSection`.

## Design

### 1. Unified fluid typography scale

Today, `Hero.astro` already uses a fluid `clamp()`-based headline size (`clamp(2.8rem, 8vw, 6.5rem)`), but every other section uses fixed Tailwind breakpoint classes for headings (typically `text-4xl md:text-5xl lg:text-6xl`, capping at 60px). This is inconsistent with the Hero and caps out well short of "impactful" on large viewports.

Introduce shared scale tokens in `src/styles/global.css` (CSS custom properties, consumed via a small set of utility classes or inline `style`, matching how `Hero.astro` already does it):

| Token | Current | New | Used for |
|---|---|---|---|
| `--text-display` | `clamp(2.8rem, 8vw, 6.5rem)` | `clamp(2.8rem, 8vw, 7rem)` | Hero H1 only |
| `--text-h2` | fixed `text-4xl md:text-5xl lg:text-6xl` (≤60px) | `clamp(2.25rem, 6vw, 5.5rem)` | Section headings (one per section: Bio, Collaborators, Live, Metrics, Music, Booking, VideoShowcase) |
| `--text-h3` | varies (`text-xl`–`text-3xl`) | `clamp(1.5rem, 3vw, 2.25rem)` | Sub-headings, card/stat titles |

Large headline text also gets tightened tracking (`letter-spacing: -0.02em`) and compact line-height (`leading-[0.95]`/`leading-none`), for an editorial feel rather than "big but loose." Body copy, labels, and buttons keep their current sizes — impact comes from headline scale, not from inflating everything.

### 2. Per-section execution audit

Keeping palette, fonts, and section order untouched, review each section for the usual tells of unfinished/generic execution: inconsistent spacing rhythm between sections, decorative effects (glow, glass, corner accents) applied without clear purpose, weak contrast between heading/subheading/body, and half-finished detail work (alignment, hover states, focus states). Fix what's found; this is a polish pass, not a rebuild — no structural changes to any section's layout or content order.

### 3. Logo — explicit constraint

The logo (`Groove_transparent_logo.png`) and its current placement/usage are not to be touched in any way. Treat it as immutable throughout implementation.

### 4. Content changes

- Existing copy stays; only light polish where phrasing reads as template-generic, without changing tone or meaning.
- Add co-founder credit: `src/components/BioSection.astro` currently opens the origin story with "It started in 2023 with **Francesco Coppola Bove**, a home studio, and a microphone" — no mention of a co-founder anywhere in the codebase. Update this line to also credit **Gianmaria Salerno** as co-founder. Check other sections (e.g. `CollaboratorsSection`) for a secondary natural spot, but the Bio opening line is the primary location.

## Testing / verification

No automated test suite exists for this project (static Astro site). Verification is manual:
- Run `npm run dev` and visually review every section at mobile, tablet, and desktop widths.
- Confirm the Hero headline, all section H2s, and card/stat H3s follow the new scale and don't overflow or wrap awkwardly at any breakpoint.
- Confirm the logo is visually unchanged.
- Confirm the Bio section reads correctly with the co-founder credit added.
