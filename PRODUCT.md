# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Primary: booking decision-makers — festival organizers, booking agents, club/venue operators, and private/corporate event organizers — who are evaluating whether to book Groove at Home for a stage, room, or event, and who complete the Booking section's contact form.

Secondary: fans/public who discover the band through social reach and listen via the Music/Live/Video sections. Secondary: press/industry (journalists, labels, brand partners) evaluating the band for coverage or partnership (e.g. Thomann).

## Product Purpose

An electronic press kit (EPK) one-page site for the live funk/soul/nu-jazz band "Groove at Home." Its job is to give booking decision-makers enough proof — sound, live footage, credibility, numbers — to decide whether to book the band, and to convert that decision into a booking inquiry via the contact form. Success is measured in booking inquiries, not just traffic or follows.

## Positioning

Three confirmed, combined pillars (not a single tagline):

1. **Home-studio origin, organic growth** — founded 2023 by Francesco Coppola Bove and co-founder Gianmaria Salerno in a home studio, no label, no plan; grew from there to festival stages and sold-out club dates. Independence is part of the claim.
2. **Open collective model** — not a fixed lineup but a network of 120+ musicians across Italy and beyond (singers, keys, brass, guitar, etc.), which the site frames as a scalability/quality strength rather than a limitation.
3. **Demonstrated, concrete credibility** — Jacob Collier publicly commented on their arrangement; studio work with Mario Biondi, Arabella Rustico, and Francesca Tandoi; sold-out dates at Nocera Jazz Festival, Kroton Jazz Festival, and European stops (BIKO Milan, Crazy Coqs London, Das Wohnzimmer Wiesbaden). Proof over adjectives.

## Operating Context

The band operates across the live circuit the Booking section itself enumerates: festivals, club nights, private/corporate events, and cross-genre collaborations/studio sessions. The site is used by a booker/organizer sizing up fit (room size, audience, genre) before reaching out, and by the band to route that interest into a contact form (submits to athomegroove@gmail.com via Web3Forms) or direct email.

## Capabilities and Constraints

- Static site: Astro 5 + Tailwind CSS 3, no backend, no test suite. Build: `npm run build`.
- Tour dates are structured data with status `confirmed | available | sold-out | past` (see `BookingSection.astro`), sorted soonest-first (upcoming) / most-recent-first (past).
- Booking form posts to Web3Forms; destination email `athomegroove@gmail.com`.
- Music via Spotify track embeds; short-form video via local `.mp4` files and Instagram reel embeds; both have documented in-file instructions for swapping content.
- Live photo gallery grid has an intentional dense-pack photo ordering constraint (even count of portrait/landscape images) documented inline in `LiveSection.astro` — don't reorder without preserving it.

## Brand Commitments

- Name: "Groove at Home." Logo asset (`src/assets/Groove_transparent_logo.png`) is treated as immutable — do not alter, regenerate, or restyle it.
- Established dark cinematic "vintage funk" visual identity: golden yellow / deep red / cobalt blue accent palette, Playfair Display (display) + Inter (body) + Space Grotesk (data/stat figures). This identity was deliberately preserved (not replaced) in the most recent redesign round — see `docs/superpowers/specs/2026-10-07-site-visual-elevation-design.md`.
- Founders: Francesco Coppola Bove (2023) and co-founder Gianmaria Salerno, credited in the Bio section.

## Evidence on Hand

- Jacob Collier Instagram comment on the band's arrangement (screenshot asset: `src/assets/jacob_comment.jpg`) — real, not simulated.
- Named studio collaborators: Mario Biondi, Arabella Rustico, Francesca Tandoi (plus a longer word-cloud of other collaborators in `CollaboratorsSection.astro`).
- Official brand partner: Thomann (Europe's largest music retailer).
- Festival/venue history: first festival date summer 2025 at Nocera Jazz Festival; early 2026 European run (BIKO Milan, Crazy Coqs London, Das Wohnzimmer Wiesbaden), each sold out; Kroton Jazz Festival (summer, 3 nights) alongside Andrea Di Battista and Vincent Garcia.
- Social/reach numbers (as of the current copy): 40,000+ Instagram followers, 5.75% engagement rate, one video at 500K views, 635K monthly cross-platform reach. Copy explicitly frames these as "not inflated, not rounded up" — current-state snapshots, not static claims to be left stale.
- Musician breakdown by instrument (singers 47, keyboardists 23, bassists 20, guitarists 17, saxophonists 11, trumpeters 7, drummers 2) and summary stats (2023 founded, 120+ musicians, 3 countries toured, 20+ live shows).
- First studio album planned for 2027; tracks already road-tested live.
- State explicitly: no other named testimonials, press mentions, or case studies exist beyond what's listed above — future work must not fabricate additional ones.

## Product Principles

1. **Proof over adjectives.** Every credibility claim ties to a concrete, named fact (a person, a number, a venue) — never vague superlatives alone.
2. **Every section ultimately serves the booking decision.** Sound, live proof, credibility, and numbers all exist to help a booker decide fit and act, even where the immediate content reads as fan-facing.
3. **The collective model is a strength to foreground, not a caveat.** 120+ musicians across a network is framed as scalability and quality, not instability.
4. **Numbers are current-state snapshots, kept honest.** Stats should read as "where the project stands right now," not inflated or stale; they're expected to be refreshed as reality changes.
5. **Independence and origin story are part of the brand, not just backstory.** The home-studio, no-label founding is a deliberate credibility signal, not an apology.
