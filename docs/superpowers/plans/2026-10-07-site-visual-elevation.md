# Site Visual Elevation Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Introduce a unified fluid typography scale across the whole site (bigger, more impactful section headlines, consistent with the Hero), fix a concrete heading-style inconsistency in `MetricsSection`, and add the co-founder credit for Gianmaria Salerno — all within the existing "vintage funk" dark cinematic identity, with no change to palette, fonts, structure, or the logo.

**Architecture:** Add three CSS custom properties (`--text-display`, `--text-h2`, `--text-h3`) and two reusable utility classes (`.section-heading`, `.card-heading`) to `src/styles/global.css`. Every section's `<h2>` currently repeats the same fixed Tailwind class string (`font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-{3,4} leading-tight`) across 7 files — replace all 7 with `.section-heading`, which uses `var(--text-h2)` to scale fluidly instead of jumping between fixed breakpoints. The Hero's already-fluid headline switches to `var(--text-display)`. `--text-h3` is applied narrowly, only to the one standalone "Request Booking" sub-heading in `BookingSection` — it is intentionally NOT applied to the small repeated grid-card titles (`.pillar-title`, `.service-title`, `.stat-label`), which stay at their current compact size since they're dense UI card labels, not narrative headings, and bumping them would break the 4-column grid layouts.

**Tech Stack:** Astro 5 + Tailwind CSS 3 (static site, no JS framework, no test runner). There is no automated test suite — verification throughout is manual: run `npm run dev` and visually inspect each section at mobile/tablet/desktop widths in the browser, as called out in the design spec's Testing section.

**Spec:** `docs/superpowers/specs/2026-10-07-site-visual-elevation-design.md`

---

### Task 1: Add the typography scale tokens and utility classes to global.css

**Files:**
- Modify: `src/styles/global.css:46-49` (add tokens to `:root`)
- Modify: `src/styles/global.css:238-241` (add utility classes after `.font-playfair`)

- [ ] **Step 1: Add the three scale tokens to `:root`**

In `src/styles/global.css`, the `:root` block currently ends like this (lines 44-49):

```css
  --shadow-glow: 0 0 40px rgba(247, 181, 56, 0.28);

  /* section transitions */
  --section-clip-in: inset(0 100% 0 0);
  --section-clip-out: inset(0 0% 0 0);
}
```

Change it to:

```css
  --shadow-glow: 0 0 40px rgba(247, 181, 56, 0.28);

  /* section transitions */
  --section-clip-in: inset(0 100% 0 0);
  --section-clip-out: inset(0 0% 0 0);

  /* Typography scale — fluid, grows with viewport instead of jumping between breakpoints */
  --text-display: clamp(2.8rem, 8vw, 7rem);   /* Hero H1 only */
  --text-h2:      clamp(2.25rem, 6vw, 5.5rem); /* section headings */
  --text-h3:      clamp(1.5rem, 3vw, 2.25rem); /* standalone sub-headings, not small grid-card titles */
}
```

- [ ] **Step 2: Add `.section-heading` and `.card-heading` utility classes**

In the same file, inside `@layer utilities`, the `.font-playfair` block currently reads (lines 238-241):

```css
  /* Playfair display */
  .font-playfair {
    font-family: 'Playfair Display', Georgia, serif;
  }
```

Add two new classes directly after it:

```css
  /* Playfair display */
  .font-playfair {
    font-family: 'Playfair Display', Georgia, serif;
  }

  /* Section heading — replaces the old fixed text-4xl/5xl/6xl pattern repeated per-section */
  .section-heading {
    @apply font-bold;
    font-family: 'Playfair Display', Georgia, serif;
    font-size: var(--text-h2);
    line-height: 0.95;
    letter-spacing: -0.02em;
    color: #fff;
  }

  /* Standalone sub-heading (e.g. a card's own title, not a repeated grid-card label) */
  .card-heading {
    @apply font-bold;
    font-size: var(--text-h3);
    line-height: 1.1;
    color: #fff;
  }
```

- [ ] **Step 3: Verify the dev server still builds**

Run: `npm run dev`
Expected: Astro dev server starts with no CSS/build errors (check the terminal output and that `http://localhost:4321` loads). Nothing visually changes yet since no component uses the new classes.

- [ ] **Step 4: Commit**

```bash
git add src/styles/global.css
git commit -m "style: add fluid typography scale tokens and section-heading/card-heading utilities"
```

---

### Task 2: Apply the new display scale to the Hero headline

**Files:**
- Modify: `src/components/Hero.astro:211`

- [ ] **Step 1: Switch the Hero headline to the shared token**

In `src/components/Hero.astro`, the `.hero-headline` rule currently reads (lines 210-215):

```css
.hero-headline {
  font-size: clamp(2.8rem, 8vw, 6.5rem);
  font-weight: 900;
  line-height: 1.0;
  letter-spacing: -0.02em;
}
```

Change the `font-size` line:

```css
.hero-headline {
  font-size: var(--text-display);
  font-weight: 900;
  line-height: 1.0;
  letter-spacing: -0.02em;
}
```

- [ ] **Step 2: Verify visually**

With `npm run dev` running, open `http://localhost:4321` and check the Hero headline ("Italian Funk. No Compromises.") at mobile (375px), tablet (768px), and desktop (1440px+) widths using the browser's device toolbar. It should be slightly larger at the top end than before (max ~112px vs ~104px) and must not overflow, wrap unexpectedly, or overlap the logo/eyebrow above it.

- [ ] **Step 3: Commit**

```bash
git add src/components/Hero.astro
git commit -m "style: bump Hero headline max size with the new display scale token"
```

---

### Task 3: Apply `.section-heading` to BioSection and add the co-founder credit

**Files:**
- Modify: `src/components/BioSection.astro:36`
- Modify: `src/components/BioSection.astro:49-53`

- [ ] **Step 1: Replace the heading class**

In `src/components/BioSection.astro`, line 36 currently reads:

```astro
      <h2 class="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 leading-tight">
```

Change it to:

```astro
      <h2 class="section-heading mb-3">
```

- [ ] **Step 2: Add the co-founder credit**

Lines 49-53 currently read:

```astro
        <p class="bio-para bio-para--lead">
          It started in <strong class="text-white">2023</strong> with <strong class="text-white">Francesco Coppola Bove</strong>, a home studio,
          and a microphone. No label, no plan. Just the idea that funk and soul could be recorded
          at home and still sound right.
        </p>
```

Change it to:

```astro
        <p class="bio-para bio-para--lead">
          It started in <strong class="text-white">2023</strong> with <strong class="text-white">Francesco Coppola Bove</strong> and co-founder <strong class="text-white">Gianmaria Salerno</strong>, a home studio,
          and a microphone. No label, no plan. Just the idea that funk and soul could be recorded
          at home and still sound right.
        </p>
```

- [ ] **Step 3: Verify visually**

With the dev server running, scroll to the Bio section ("It started at home. It didn't stay there.") at mobile, tablet, and desktop widths. Confirm: the heading is visibly bigger and scales smoothly as you resize the browser (no breakpoint "jump"); the lead paragraph now reads "...with Francesco Coppola Bove and co-founder Gianmaria Salerno..." and still fits the layout without awkward wrapping.

- [ ] **Step 4: Commit**

```bash
git add src/components/BioSection.astro
git commit -m "feat: credit Gianmaria Salerno as co-founder in the bio, apply new heading scale"
```

---

### Task 4: Apply `.section-heading` to CollaboratorsSection

**Files:**
- Modify: `src/components/CollaboratorsSection.astro:36`

- [ ] **Step 1: Replace the heading class**

Line 36 currently reads:

```astro
      <h2 class="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
```

Change it to:

```astro
      <h2 class="section-heading mb-4">
```

- [ ] **Step 2: Verify visually**

Scroll to "A Few Names You Might Know" at mobile, tablet, and desktop widths. Confirm the heading is bigger/scales fluidly and the word-cloud of names below it still has reasonable spacing (the heading change doesn't affect the word cloud's own sizing, which is untouched).

- [ ] **Step 3: Commit**

```bash
git add src/components/CollaboratorsSection.astro
git commit -m "style: apply fluid section-heading scale to CollaboratorsSection"
```

---

### Task 5: Apply `.section-heading` to LiveSection

**Files:**
- Modify: `src/components/LiveSection.astro:99`

- [ ] **Step 1: Replace the heading class**

Line 99 currently reads:

```astro
      <h2 class="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 leading-tight">
```

Change it to:

```astro
      <h2 class="section-heading mb-3">
```

- [ ] **Step 2: Verify visually**

Scroll to "On Stage. Every Night." at mobile, tablet, and desktop widths. Confirm the heading scales up and the video grid / photo gallery below are unaffected.

- [ ] **Step 3: Commit**

```bash
git add src/components/LiveSection.astro
git commit -m "style: apply fluid section-heading scale to LiveSection"
```

---

### Task 6: Apply `.section-heading` to MetricsSection and fix the inconsistent pillar card

**Files:**
- Modify: `src/components/MetricsSection.astro:31`
- Modify: `src/components/MetricsSection.astro:125-126`

- [ ] **Step 1: Replace the heading class**

Line 31 currently reads:

```astro
      <h2 class="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
```

Change it to:

```astro
      <h2 class="section-heading mb-4">
```

- [ ] **Step 2: Fix the inconsistent middle pillar card**

The three "value pillar" cards should all use the shared `.pillar-title` / `.pillar-desc` classes, but the middle one ("120+ Musicians") was written with raw Tailwind utilities instead, so it renders smaller and in a different color than its siblings. Lines 119-129 currently read:

```astro
      <div class="pillar-card">
        <div class="pillar-icon pillar-icon--red">
          <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"/>
          </svg>
        </div>
        <h3 class="text-xl font-bold mb-2">120+ Musicians</h3>
        <p class="text-[var(--text-secondary)]">
          A rotating collective from across Italy and Europe. The right people, when the project needs them.
        </p>
      </div>
```

Change the `<h3>` and `<p>` classes to match the other two pillar cards:

```astro
      <div class="pillar-card">
        <div class="pillar-icon pillar-icon--red">
          <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"/>
          </svg>
        </div>
        <h3 class="pillar-title">120+ Musicians</h3>
        <p class="pillar-desc">
          A rotating collective from across Italy and Europe. The right people, when the project needs them.
        </p>
      </div>
```

- [ ] **Step 3: Verify visually**

Scroll to "Where We Stand." Confirm: the section heading scales up; and in the three-pillar row below the stat cards, "120+ Musicians" now visually matches "The Live Show" and "Built an Audience" in size and color (it was previously noticeably smaller/dimmer).

- [ ] **Step 4: Commit**

```bash
git add src/components/MetricsSection.astro
git commit -m "fix: match 120+ Musicians pillar card styling to its siblings, apply heading scale"
```

---

### Task 7: Apply `.section-heading` to MusicSection

**Files:**
- Modify: `src/components/MusicSection.astro:17`

- [ ] **Step 1: Replace the heading class**

Line 17 currently reads:

```astro
      <h2 class="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 leading-tight">
```

Change it to:

```astro
      <h2 class="section-heading mb-3">
```

- [ ] **Step 2: Verify visually**

Scroll to "Hear It for Yourself." Confirm the heading scales up and the Spotify embed grid below is unaffected.

- [ ] **Step 3: Commit**

```bash
git add src/components/MusicSection.astro
git commit -m "style: apply fluid section-heading scale to MusicSection"
```

---

### Task 8: Apply `.section-heading` to VideoShowcase

**Files:**
- Modify: `src/components/VideoShowcase.astro:26`

- [ ] **Step 1: Replace the heading class**

Line 26 currently reads:

```astro
      <h2 class="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
```

Change it to:

```astro
      <h2 class="section-heading mb-4">
```

- [ ] **Step 2: Verify visually**

Scroll to "A Few Things That Took Off." Confirm the heading scales up and the Instagram embed grid below is unaffected.

- [ ] **Step 3: Commit**

```bash
git add src/components/VideoShowcase.astro
git commit -m "style: apply fluid section-heading scale to VideoShowcase"
```

---

### Task 9: Apply `.section-heading` and `.card-heading` to BookingSection

**Files:**
- Modify: `src/components/BookingSection.astro:59`
- Modify: `src/components/BookingSection.astro:122`

- [ ] **Step 1: Replace the section heading class**

Line 59 currently reads:

```astro
      <h2 class="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
```

Change it to:

```astro
      <h2 class="section-heading mb-4">
```

- [ ] **Step 2: Apply `.card-heading` to the "Request Booking" sub-heading**

Line 122 currently reads:

```astro
          <h3 class="text-2xl font-bold mb-6">Request Booking</h3>
```

Change it to:

```astro
          <h3 class="card-heading mb-6">Request Booking</h3>
```

- [ ] **Step 3: Verify visually**

Scroll to "Book the Show. Let's Talk." Confirm: the section heading scales up; the services grid (Festivals/Club Nights/Private Events/Collaborations) is unaffected (those card titles use `.service-title`, untouched); and "Request Booking" above the form is modestly bigger than before but still fits cleanly above the form fields at mobile width without crowding them.

- [ ] **Step 4: Commit**

```bash
git add src/components/BookingSection.astro
git commit -m "style: apply fluid heading scale to BookingSection heading and Request Booking title"
```

---

### Task 10: Full-site manual QA pass

**Files:** none (verification only)

- [ ] **Step 1: Run the dev server**

Run: `npm run dev`
Open: `http://localhost:4321`

- [ ] **Step 2: Check every section at three widths**

Using the browser's device toolbar, check the full page top to bottom at 375px (mobile), 768px (tablet), and 1440px (desktop). For each of the 7 updated headings (Bio, Collaborators, Live, Metrics, Music, VideoShowcase, Booking) and the Hero headline, confirm:
- No text overflows its container or overlaps neighboring elements.
- Sizing grows smoothly as the viewport widens (resize the window slowly between 375px and 1440px) rather than jumping at fixed breakpoints.
- The Hero is still clearly the largest headline on the page at every width.

- [ ] **Step 3: Confirm untouched elements are actually untouched**

- Logo: compare the Hero logo mark against `main` (pre-change) — pixel-identical, same asset, same ring/sizing.
- Small grid-card titles (`.pillar-title`, `.service-title`, `.stat-label`) in Metrics and Booking: unchanged size.
- Palette, fonts elsewhere, page structure/section order: unchanged.

- [ ] **Step 4: Confirm the content change**

In the Bio section, confirm the lead paragraph reads "...with Francesco Coppola Bove and co-founder Gianmaria Salerno..." and reads naturally in context.

- [ ] **Step 5: Production build sanity check**

Run: `npm run build`
Expected: build completes with no errors (confirms no broken class references or syntax issues across the 9 modified files).

No commit for this task — it's verification only. If any issue is found, fix it in the relevant task's files and commit as a follow-up fix referencing which task it corrects.
