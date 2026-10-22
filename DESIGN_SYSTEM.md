# SpecV Design System

## Source And Scope

This specification is extracted from the existing `index.html` and the files under `assets/`. The source is a single static HTML page with a large inline stylesheet, inline component styles, an embedded footer stylesheet, and inline JavaScript. It does not use Tailwind, a CSS framework, a component library, or a separate production stylesheet.

The values below distinguish source facts from the role-based aliases introduced in `design-tokens.css`. Those aliases make the values easier to reuse; they do not claim that the original page already had a formal token system. The landing page source was not changed to create these references.

## Visual Direction

- Dark, high-contrast, full-bleed presentation with a near-black canvas and white typography.
- Cyan `#229EC0` is the principal accent for emphasized words, counters, and interactive states.
- Large uppercase display typography contrasts with readable Poppins paragraphs.
- Sections alternate between open text layouts, viewport-scale image/video panels, and restrained outlined or translucent panels.
- Content alignment deliberately varies: the hero is centered, team/manifesto statements are right-aligned, and explanatory content is generally left-aligned.

## Implementation And Fonts

- Fonts are loaded from Google Fonts in the page head: Poppins at weights `400`, `500`, `700`; Space Grotesk at weight `700`.
- `--text-font` is `'Poppins', sans-serif`; `--heading-font` is `'Space Grotesk', sans-serif`.
- The CSS also requests weights `600` and `800` in places even though those weights are not in the Google Fonts request. A browser may synthesize those weights or use a fallback; the actual available face can depend on font loading.
- No Tailwind config, theme file, icon package, or reusable component framework is present.
- One inline SVG arrow is used in the lower CTA. The brand mark is a PNG image.

## Existing Root Variables

These are the literal variables currently declared in `:root`; preserve their values when matching existing source behavior:

| Variable | Literal value | Actual role in source |
| --- | --- | --- |
| `--body` | `#000` | Page background |
| `--text-font` | `'Poppins', sans-serif` | Body/copy font |
| `--dark` | `#fff` | Default text color |
| `--heading-font` | `'Space Grotesk', sans-serif` | Headings and display text |
| `--black` | `#fff` | Used for white foregrounds and a white CTA background despite its name |
| `--gray` | `#fff` | Default secondary text color despite its name |
| `--blue` | `#229EC0` | Cyan accent |

The names `--dark`, `--black`, and `--gray` are not reliable descriptions of their literal colors. Use the literal values or the explicit color aliases in `design-tokens.css`, rather than inferring color from these variable names.

## Color Palette

| Use | Value | Source observation |
| --- | --- | --- |
| Main canvas | `#000` / `#000000` | Body and most sections |
| Main text | `#fff` / `#ffffff` / `white` | Headings, nav, body copy |
| Accent | `#229EC0` | `.text-blue`, counters, emphasized words |
| Muted copy | `#999999` | Footer links and footer description |
| Subtle copy | `#666666` | Footer copyright line |
| Portfolio description | `#e0e0e0` | Card descriptions |
| Secondary gray literal | `#a1a1aa` | Video-card numbers inline; the later `.why-video-stack > div span` rule overrides spans to the cyan accent with `!important` |
| Border | `#222222` | Footer top and bottom dividers |
| Video panel base | `#0b0b0d` | Background behind each video |
| Header glass | `#fafafa08` | Fixed header before scroll |
| Scrolled header | `rgba(8, 8, 10, 0.88)` | Header after scroll threshold |
| Header divider | `rgba(255, 255, 255, 0.08)` | Scrolled header border |
| Video card final surface | `rgba(18, 18, 20, 0.38)` | Later stylesheet rule overrides the inline `.72` card background |
| Video overlay final gradient | `linear-gradient(90deg, rgba(0, 0, 0, 0.05) 0%, rgba(0, 0, 0, 0.28) 100%)` | Later `!important` rule overrides the inline `.1` to `.6` video overlay |
| Portfolio image label | `rgba(0, 0, 0, 0.6)` | Small numbered label background |

The hero image uses `linear-gradient(to bottom, rgba(0, 0, 0, 0) 60%, rgba(0, 0, 0, 1) 100%)` over `hero_pcb.jpg`. The lower CTA section uses `radial-gradient(ellipse 60% 40% at 50% 100%, rgba(20, 85, 217, 0.15) 0%, rgba(235, 235, 235, 0) 100%)`. The latter is a subtle blue glow, not a general page background treatment.

## Typography

Sizes below are literal source declarations. `clamp()` expressions are retained as written; do not replace them with a guessed fixed size.

| Role / selector | Family | Size | Weight | Line height | Tracking / transform |
| --- | --- | --- | --- | --- | --- |
| Hero display `.heading-main` | Space Grotesk | `clamp(6rem, 18vw, 24rem)` desktop; `4.125rem` at `max-width: 767px` | `700` | `.8` | Uppercase, `white-space: nowrap`, left aligned |
| Team/manifesto `.team-heading` | Space Grotesk | `clamp(3rem, 6.5vw, 8.5rem)` | `400` | `1.0` | Uppercase, right aligned; `scaleY(1.2)` from top-right |
| CTA display heading | Space Grotesk | `clamp(3.5rem, 8vw, 8rem)` | `700` | Individual lines `.9` | Uppercase, `-0.02em` |
| Intro/portfolio section headings | Space Grotesk | `2.5rem` | `700` | Browser default unless otherwise set | Uppercase |
| Hero supporting copy | Poppins | `1.125rem` | `400` | `1.5` | Centered; mobile `1rem` |
| Team supporting copy | Poppins | `1.125rem` | `400` | `1.6` | Right aligned |
| Portfolio lead copy | Poppins | `clamp(1.1rem, 1.5vw, 1.35rem)` | `400` | `1.6` | n/a |
| Intro/service supporting copy | Poppins | `1.1rem` | `400` | `1.6` (service text `1.65`) | n/a |
| Stat description | Poppins | `1rem` | Not explicitly set | `1.6` | n/a |
| Portfolio card title | Space Grotesk | `1.4rem` | `800` requested | Browser default | Uppercase; `letter-spacing: 0` |
| Portfolio card description | Poppins | `.95rem` | `400` | `1.5` | n/a |
| Service number | Space Grotesk | `clamp(5rem, 8vw, 8rem)` | `400` | `1` | Cyan |
| Header navigation | Poppins | `12px` | `500` | Browser default | Uppercase, `.1em` |
| Footer column heading | Poppins | `.9rem` | `600` | Browser default | Uppercase, `.1em` |
| Footer links / description | Poppins | `.95rem` | Not explicitly set | Description `1.6` | n/a |
| Portfolio image number | Space Grotesk | `.9rem` | `700` | Browser default | n/a |
| Hero CTA | Poppins | `11px` | `500` | Browser default | Uppercase, `.1em` |
| Lower CTA | Poppins | `.95rem` | `500` | Browser default | Uppercase, `.02em` |

Other authored type sizes include `.85rem`, `.9rem`, `.95rem`, `1rem`, `1.05rem`, `1.1rem`, `1.125rem`, `1.15rem`, `1.25rem`, `1.35rem`, `1.4rem`, `1.5rem`, `2rem`, `2.5rem`, `3rem`, and `32vw` in a legacy footer selector. Authored weights are `400`, `500`, `600`, `700`, and `800`; line heights include `.8`, `.85`, `.9`, `1`, `1.1`, `1.5`, `1.6`, `1.65`, and `1.7`. Letter spacing values include `-.02em`, `0`, `.02em`, `.05em`, and `.1em`.

## Layout And Spacing

### Global And Containers

- Universal reset: `box-sizing: border-box`, `margin: 0`, `padding: 0`.
- `html, body`: full width, minimum height `100vh`, horizontal overflow clipped, black background.
- `.page-wrapper`: vertical flex column, width `100%`; `.main-wrapper`: width `100%`.
- Header container: maximum width `1400px`, centered with `margin: 0 auto`, width `100%`; horizontal padding `max(2rem, 5vw)`.
- Repeated content gutters are inline `max(1.5rem, 5vw)` or `max(2rem, 5vw)`, depending on the section.
- Other observed maximum widths: `1300px` on the portfolio lead class rule (the current heading's inline `900px` cap wins), `1200px` video wrapper, `1000px` services grid, `900px` intro/stats copy or grid, `600px` portfolio copy, `560px` hero copy, `500px` cards/CTA copy.

### Section Patterns

| Section | Authored geometry and alignment |
| --- | --- |
| Header | Fixed top, `min-height: 5.5rem`; centered `1400px` container; three grid tracks `1fr auto 1fr`. Logo occupies the first track, menu the middle track. |
| Hero | `min-height: 98svh`; top padding `5.5rem`; cover/center background image with a bottom black fade. Inner wrapper minimum height `calc(100svh - 5.5rem)`, bottom padding `3.5rem`. Heading starts after `4rem` top margin. |
| Team | Black background; `padding: 8rem 2rem 6rem`; content pushed to the right, no explicit max-width on the team container. |
| Intro | Desktop top/bottom padding `8rem 0 2rem`; content horizontal gutter `max(1.5rem, 5vw)`; text width capped at `900px`. |
| Stats | `padding: 6rem 0 10rem`; grid capped at `900px`, `repeat(auto-fit, minmax(250px, 1fr))`, gap `4rem 2rem`. |
| Portfolio | Viewport-height (`100vh`) stage; intro header has bottom margin `3rem`; horizontal track uses `gap: 2rem` and `padding: 0 5vw`. Each image panel is `70vh` square on desktop. |
| Manifesto | Right-aligned display text; sections use `8rem 0` or `12rem 0` vertical padding as authored. Heading margins are content-specific (`10rem` or `15rem`). |
| Services | Section padding `8rem 0`; centered grid maximum width `1000px`; two equal columns, row/column gaps `7rem 6rem`. |
| Video reasons | Four panels, each `100vw` wide by `100vh`; sticky at top while scrolling; inner copy card max-width `500px`; viewport bleed achieved with `left: 50%` and negative `50vw` margins. |
| Final CTA | `12rem 0` section padding; grid columns `1.2fr 1fr`, gap `6rem`; horizontal gutter `max(2rem, 5vw)`. Right copy max-width `500px`. |
| Footer | Black background; `padding: 6rem 5vw 2rem`; four flex columns with `gap: 3rem`, `margin-bottom: 4rem`; bottom divider then a flex row. |

Repeated spacing literals include `.25rem`, `.3rem`, `.4rem`, `.5rem`, `.75rem`, `.85rem`, `1rem`, `1.25rem`, `1.5rem`, `1.75rem`, `2rem`, `3rem`, `4rem`, `6rem`, `7rem`, `8rem`, `10rem`, `12rem`, `15rem`, and `20rem`, plus responsive `vw`/`vh` values. These are observed values, not a formally defined scale.

## Page Structure And Hierarchy

The current source order is: hero (`FROM IDEA / TO IMPACT`), team statement (`WE BUILD / THE HARDWARE / THAT SCALES / YOUR IDEAS`), impact intro, three stats, six-item portfolio, short manifesto (`WE BUILD / WE TEACH / WE SHIP`), four-step services grid, four video-backed reasons, final contact CTA, and footer.

The main visual hierarchy is the oversized hero headline, followed by oversized team/manifesto statements. Section titles and large service numerals form the next level; paragraphs, stat descriptions, and footer links are smaller support text. Cyan emphasizes selected display words and numerical markers, not complete content blocks. Maintain this distinction on a separate page, while using content-appropriate section order rather than copying the landing page's marketing sequence.

## Components

### Header And Navigation

- Fixed, high stacking order (`z-index: 99`) with `14px` backdrop blur and initial translucent background `#fafafa08`.
- After scroll position `40px`, background becomes `rgba(8, 8, 10, 0.88)` and a 1px white border at `.08` opacity appears.
- Header slides out when scrolling down beyond `80px`; scrolling upward reveals it.
- Navigation uses white uppercase Poppins, `12px`, weight `500`, tracking `.1em`, and a `2rem` gap. On mobile it is hidden at `767px`.
- The current source points the visible header labels to `index.html`; the labels are not section-specific destinations.

### Buttons And Links

- Hero CTA `.btn-cta`: black background, white foreground (`var(--black)` resolves to white), no border, square corners, padding `.85rem 1.75rem`, gap `.5rem`; hover changes text to cyan and lifts `2px`.
- Lower CTA `.btn-launch`: white background (`var(--black)`), black text, padding `1rem 1.75rem`, `.95rem` Poppins, weight `500`, `.02em` tracking; hover reduces opacity to `.8` and lifts `2px`.
- Global visible keyboard focus: `2px` cyan outline with `4px` offset on anchors and buttons.
- Footer anchors transition, and links using inline `#999999` become white on hover.
- Some source links use `href="#"`; do not assume these have finished destinations in other repositories.

### Portfolio Cards

- Six horizontal cards. Image wrapper has `border-radius: 1.25rem` (`20px`), `overflow: hidden`, and desktop dimensions `70vh` square.
- Images fill the panel with `object-fit: cover`, absolute positioning, and `brightness(0.45)`; inline declarations override the generic image max-size/`mix-blend-mode` defaults.
- Text is anchored bottom-left with `2rem` offsets; number badge top-right with `1.5rem` offsets, translucent black background, `20px` radius.
- Image scale hover is `1.04` over `.6s`; card metadata transitions exist in CSS, but the `.hover-top-right`/`.hover-bottom-left` elements are not used in the current six-card markup.

### Service Grid And Stats

- Stats use cyan `3rem`, weight `700` Space Grotesk numerals, with descriptions in Poppins `1rem`/`1.6`.
- Services use a two-column desktop grid; each item is left-aligned. Numerals use responsive Space Grotesk display sizing; labels and descriptions are white.

### Video Panels And Final CTA

- Four autoplaying, looping, muted, inline MP4 backgrounds with `object-fit: cover`.
- Video panels use a full-bleed black/near-black surface, overlay gradient, and sticky stacking with increasing z-index from `1` to `4`.
- Copy cards are capped at `500px`, use `18px` border radius and a `0 25px 50px rgba(0, 0, 0, 0.5)` shadow. Their inline `backdrop-filter: blur(16px)` and `.72` background are overridden by a later stylesheet rule that disables the blur and sets `.38` alpha. The inline hover background change is likewise overridden by `!important`.
- Even-numbered panels align their copy to the left; odd-numbered panels align right.
- The final CTA balances an oversized left display headline with a narrower right-side paragraph and button. At desktop widths of at least `992px`, the right column receives a `20rem` top offset.

### Footer

- Current footer is `.footer-new`, not the separate `.footer-section` family of legacy CSS selectors.
- Four columns: brand/description (`flex: 2`, min-width `280px`), Explore and Services (each min-width `150px`), Contact (min-width `220px`).
- Column headings are white uppercase Poppins, `.9rem`, weight `600`, `.1em` tracking. Links and description are muted `#999999`, `.95rem`.
- Bottom row has a `1px #222222` divider, `1.5rem` top padding, and a `1.5rem` gap.

## Radius, Border, Shadow, And Icons

- Buttons: `border-radius: 0` (square).
- Portfolio image: `1.25rem` (20px); video copy card: `18px`; portfolio number badge: `20px`.
- Video copy card shadow: `0 25px 50px rgba(0, 0, 0, 0.5)`.
- Borders are restrained: `1px solid rgba(255,255,255,.08)` for scrolled nav; `1px solid rgba(255,255,255,.12)` for video cards; `1px solid #222222` for footer dividers.
- No icon system is installed. The lower CTA contains one inline 12x12 SVG northeast arrow; navigation has text labels only.

## Responsive Behavior

Source breakpoints are `767px`, `991px`, and `992px`:

- `max-width: 767px`: body font size becomes `1.125rem`; header changes to flex with `1rem 1.5rem` padding and `3.8rem` minimum height; nav menu is hidden; hero heading is `4.125rem`; hero copy is `1rem`; portfolio cards become `85vw` square; portfolio header horizontal padding becomes `1rem`; services become one column with `4rem` gap; current footer columns stack with `2rem` gap and footer padding becomes `4rem 1.5rem 2rem`; intro and stats vertical padding reduce.
- `max-width: 991px`: final CTA grid changes to one column with `4rem` gap.
- `min-width: 992px`: final CTA right column gets `margin-top: 20rem`.
- There is no dedicated `768px`-to-`991px` tablet layout beyond the CTA grid change; the desktop portfolio sizing and services two-column grid remain authored there.
- The current source does not define a `prefers-reduced-motion` override.

## Motion

- GSAP `3.12.5` and ScrollTrigger are loaded from cdnjs.
- Hero headline reveal: translate Y to `0%`, `1.2s`, `power4.out`, `.15s` stagger after a `.2s` delay.
- Hero copy fades/translates into place over `1s` with `power2.out`; header fades in over `1s`.
- Team/manifesto lines animate when their observed section intersects at threshold `.2`; `1.2s`, `power4.out`, `.15s` stagger.
- Portfolio horizontal motion is ScrollTrigger-pinned with `scrub: 1` and `anticipatePin: 1`.
- Generic section fade uses `1.5s`, `power2.out`; stat count-up uses `2s`, `power2.out`.
- CSS transitions use `.2s`, `.3s`, or `.6s` depending on interaction; button lifts are `2px` and portfolio hover scale is `1.04`.

## Asset Inventory

These are the local assets actually referenced by the page. Raster dimensions were read from the files.

| Path | Format / dimensions | Use |
| --- | --- | --- |
| `assets/images/hero_pcb.jpg` | JPEG, 1024x716 | Hero background, cover/center |
| `assets/images/logo_transparent.png` | PNG, 393x297 | Header and footer brand mark |
| `assets/images/portfolio_1.jpg` | JPEG, 2752x1536 | Portfolio card 1 |
| `assets/images/portfolio_2.jpg` | JPEG, 1536x2752 | Portfolio card 2 |
| `assets/images/portfolio_3.png` | PNG, 880x626 | Portfolio card 3 |
| `assets/images/portfolio_4.png` | PNG, 576x1024 | Portfolio card 4 |
| `assets/images/portfolio_5.jpg` | JPEG, 2400x1792 | Portfolio card 5 |
| `assets/images/portfolio_6.png` | PNG, 736x981 | Portfolio card 6 |
| `assets/videos/mentorship-industry.mp4` | MP4 | Video reason 1 |
| `assets/videos/product-development.mp4` | MP4 | Video reason 2 |
| `assets/videos/tools-technology.mp4` | MP4 | Video reason 3 |
| `assets/videos/proven-track-record.mp4` | MP4 | Video reason 4 |

## Known Source Caveats

- The stylesheet contains a separate `.footer-section`/`.footer-top` design family that is not used by the current `.footer-new` markup. Its `#111111` background and decorative footer typography are not active footer styles.
- `.nav-cta`, `.logo-icon`, several `.footer-*` classes, and portfolio hover-label classes have selectors but no corresponding active markup in the current page.
- The current source mixes global CSS with extensive inline declarations. Inline styles and later `!important` rules can override base rules; the component descriptions above call out visible overrides where they materially affect the final look.
- Existing browser screenshots were not present as repository files. No screenshot has been generated or fabricated for this documentation set.