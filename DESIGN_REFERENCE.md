# SpecV Page Design Reference

This guide is for building a new page in a separate repository while keeping it visually related to the existing SpecV landing page. It translates the source implementation into repeatable layout and component rules; it is not a redesign brief.

For exact values and the source audit, see `DESIGN_SYSTEM.md`. For a copyable CSS variable set, include `design-tokens.css` and the Poppins/Space Grotesk font request described below.

## Start A New Page

1. Add `design-tokens.css` to the new repository and load it before page-specific CSS. Its original variables are copied from the landing page; role aliases are inferred names over source-derived values.
2. Load Poppins weights `400`, `500`, and `700`, plus Space Grotesk `700`, from Google Fonts. These are the weights the source actually requests. If the new page needs `600` or `800`, verify the font face behavior instead of assuming an imported weight exists.
3. Use a black page canvas, white primary type, and cyan `#229EC0` as a selective accent. Preserve readable contrast; muted `#999999` is primarily a footer treatment in the source.
4. Reuse the source's gutters and max-widths from tokens. Keep full-bleed media separate from constrained text blocks.
5. Copy local assets only when needed and retain their image/video treatment. Do not replace the logo or portfolio imagery with approximations.

Example setup:

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&family=Space+Grotesk:wght@700&display=swap" rel="stylesheet">
<link rel="stylesheet" href="design-tokens.css">
```

## Page Frame And Alignment

- Use a black full-width canvas and avoid a permanently centered narrow page column. The reference mixes full-bleed sections with content constrained independently inside each section.
- Use `max(2rem, 5vw)` for broad horizontal gutters and `max(1.5rem, 5vw)` for tighter content sections, matching the source's authored patterns.
- The source's strongest container widths are `1400px` for the header, `1200px` for media, `1000px` for the service grid, `900px` for intro/stats content, and `500px` for card or CTA copy. Select the width appropriate to the content rather than nesting every section in the same max-width.
- For display sections, alignment is part of the visual identity: the team/manifesto statements are right-aligned; regular explanations are left-aligned; the hero copy is centered.
- Use generous section spacing. Existing major vertical values are `8rem` and `12rem`; the hero and portfolio use viewport units instead. These are observed values, not a requirement to give every section identical padding.
- Favor asymmetry and whitespace over a stack of uniformly padded cards. The source uses cards for portfolio media and reason panels, but its main sections are unframed.

## Typography Rules

- Space Grotesk is for uppercase display headlines, section headings, service numerals, and compact image labels. Poppins is for paragraphs, links, navigation, and footer headings.
- Preserve the strong scale contrast: very large responsive display text, section headings around `2.5rem`, and body copy around `1rem` to `1.125rem`.
- The landing hero uses `clamp(6rem, 18vw, 24rem)` on desktop and a fixed `4.125rem` at the source mobile breakpoint. Its lines are uppercase, nowrap, left aligned, and `line-height: .8`.
- Team and manifesto text is uppercase, right aligned, and uses `clamp(3rem, 6.5vw, 8.5rem)` with a `scaleY(1.2)` transform in the source.
- Supporting text uses line heights between `1.5` and `1.65`; do not compress paragraph line spacing to match the oversized headings.
- Accent color is applied to selected words or numerals, not entire paragraphs. The source uses `.text-blue` / `#229EC0` for this role.
- Navigation and footer headings use uppercase styling and tracking. Avoid applying `.1em` tracking to body copy.

## Component Treatment

### Header

- Full-width fixed strip with a `5.5rem` minimum height, blur, and translucent near-white overlay over the content. On scroll it darkens and gains a faint bottom border.
- Constrain the inner row to `1400px`; use the source's left brand / centered nav arrangement and `2rem` item gap at desktop.
- Header labels use `12px` Poppins, weight `500`, uppercase, `.1em` letter spacing.
- At `767px` and below, the source switches the container to flex, reduces header height to `3.8rem`, and hides the menu. If the separate page needs working cross-site navigation, provide real destinations for that repo; do not copy placeholder hashes or assume the landing page's `index.html` path is valid there.

### Buttons And Links

- Keep button silhouettes square (`border-radius: 0`). The source uses high-contrast black/white button surfaces, uppercase Poppins, and modest lift/opacity/color changes on hover.
- Focus-visible controls have a `2px` cyan outline with `4px` offset. Preserve keyboard focus visibility.
- Use cyan for emphasis and hover states, not as a replacement for all white foreground text.
- The reference has one inline northeast arrow SVG in the lower CTA and no icon library. A new page should use the same restrained icon treatment if an icon is needed.

### Cards And Grids

- Portfolio imagery is arranged as a horizontal track, with `2rem` gaps and broad `5vw` side padding. Desktop panels are square at `70vh`; mobile panels are `85vw` square.
- Portfolio pictures fill their panel with `object-fit: cover` and a dark `brightness(0.45)` filter, with text anchored bottom-left and the number badge top-right.
- The service process is a two-column grid capped at `1000px`, with large cyan numerals above white text. At `767px` and below it becomes one column.
- Stats use an auto-fit grid with minimum `250px` columns and a `4rem 2rem` gap, capped at `900px`.
- Avoid adding shadows to every card. The one pronounced source shadow is on the video-reason copy panel.

### Full-Bleed Media

- Hero image: `hero_pcb.jpg`, cover and centered, with a transparent-to-black fade that reaches black at the bottom.
- Portfolio images use `object-fit: cover`, are darkened, and remain within the rounded media frame.
- Reason panels use full-viewport MP4 backgrounds with `autoplay`, `loop`, `muted`, `playsinline`, and `object-fit: cover`. Apply a dark horizontal overlay so white copy remains legible.
- Video panels are sticky and stack in order. Text cards are about `500px` wide, use an `18px` radius, restrained border, and the source's deep shadow. Note: final source CSS overrides the inline card blur/background and video overlay; consult the caveats in `DESIGN_SYSTEM.md` when reproducing the actual result.
- Use the actual supplied assets listed in `DESIGN_SYSTEM.md`; video dimensions and codec were not inferred from the filename.

### Footer

- Use a black background with generous top padding (`6rem` desktop, `4rem` mobile), a fine `#222222` divider, white small uppercase column headings, and muted `#999999` links.
- The current footer is a four-column flex layout: wider brand column, then Explore, Services, and Contact. Columns wrap naturally on desktop and become one column at `767px` and below.
- Keep footer copy compact; the brand summary is `.95rem` with `1.6` line height. The footer bottom row uses a fine top divider and aligns copyright opposite social links on wider screens.

## Responsive Rules

Use the source breakpoints, not invented device categories:

- `767px` maximum: mobile-specific header, hero, portfolio, services, footer, intro, and stats behavior.
- `991px` maximum: the CTA grid becomes one column.
- `992px` minimum: CTA right column gets its desktop top offset.

When adapting a page, check the transitions at `767px`, `768px`, `991px`, and `992px`. The reference does not contain a comprehensive tablet-specific system; preserve readable text and stable media sizing without implying it does. Keep text from overflowing, especially uppercase display lines which use `white-space: nowrap` in the hero.

## Motion And Interaction

- Source motion is powered by GSAP `3.12.5` and ScrollTrigger, loaded from cdnjs.
- Use the source's restrained timing language: short `.2s` to `.3s` CSS interactions, `.6s` image transitions, and roughly `1s` to `1.5s` section reveals.
- The landing page reveals hero lines and copy on load, reveals team/manifesto lines on intersection, pins and scrubs the portfolio horizontally, and counts up stats over `2s`.
- There is no `prefers-reduced-motion` rule in the reference source. If adding motion to the new page, decide and document its reduced-motion behavior rather than treating the absence as an accessibility standard.
- Do not make essential content depend on a hover-only state. The existing portfolio hover-label selectors do not have matching elements in the current card markup.

## Cross-Repository Notes

- The design reference is visual, not a routing contract. Since About and other pages live in separate repositories/subdomains, give the new page's nav links explicit destination URLs or a shared configuration. Do not copy the landing page's relative `index.html` links blindly.
- Copy or publish any referenced images, videos, and fonts in a location accessible to the new repository. Relative `assets/...` paths resolve only when those files are copied to matching paths.
- The current source contains legacy unused styles and several inline overrides. Reproduce the active rendered result, not every unused selector. See "Known Source Caveats" in `DESIGN_SYSTEM.md`.

## Match Checklist

- [ ] Black canvas, white primary text, selective `#229EC0` accent.
- [ ] Poppins body/navigation and Space Grotesk display fonts are loaded.
- [ ] Horizontal gutters and max-widths follow the relevant source pattern.
- [ ] Display sections and explanatory sections use the source's distinct alignment patterns.
- [ ] Media is correctly cropped, darkened/overlaid, and uses the actual brand assets where appropriate.
- [ ] Buttons remain square, with visible keyboard focus and restrained hover behavior.
- [ ] Responsive behavior is checked at the exact source breakpoints.
- [ ] Any cross-subdomain navigation uses real destinations for the new page.
- [ ] Source-derived values are preserved; any new values are identified as additions rather than attributed to the landing page.