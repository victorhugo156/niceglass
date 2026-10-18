---
name: Nice Glass
description: Handmade stained-glass suncatchers, given room in a warm studio window.
colors:
  aged-copper: "#b68235"
  burnished-ochre: "#7d5411"
  warm-paper: "#f2efe8"
  deep-ink: "#201f1d"
  reading-ink: "rgba(32, 31, 29, 0.72)"
  muted-ink: "rgba(32, 31, 29, 0.66)"
  faint-ink: "rgba(32, 31, 29, 0.5)"
  paper-on-ink: "#e8e4da"
  footer-muted: "rgba(232, 228, 218, 0.72)"
  photo-well: "rgba(127, 127, 127, 0.08)"
  hairline: "rgba(32, 31, 29, 0.18)"
  link-rule: "rgba(32, 31, 29, 0.35)"
typography:
  display:
    fontFamily: "Playfair Display, Georgia, serif"
    fontSize: "clamp(2.5rem, 7vw, 5.75rem)"
    fontWeight: 400
    lineHeight: 0.98
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "Playfair Display, Georgia, serif"
    fontSize: "clamp(2.25rem, 5vw, 5rem)"
    fontWeight: 400
    lineHeight: 1.02
    letterSpacing: "-0.02em"
  title:
    fontFamily: "Playfair Display, Georgia, serif"
    fontSize: "clamp(2rem, 4vw, 3.375rem)"
    fontWeight: 400
    letterSpacing: "-0.02em"
  body:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.7
  label:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "0.6875rem"
    fontWeight: 400
    letterSpacing: "0.18em"
rounded:
  control: "4px"
components:
  button-primary:
    backgroundColor: "transparent"
    textColor: "{colors.aged-copper}"
    rounded: "{rounded.control}"
    padding: "0.55rem 1rem"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.aged-copper}"
    rounded: "{rounded.control}"
    padding: "0.55rem 1rem"
  text-link:
    textColor: "{colors.deep-ink}"
    padding: "0 0 0.25rem 0"
  nav-link:
    textColor: "{colors.muted-ink}"
    typography: "{typography.label}"
---

# Design System: Nice Glass

## Overview

**Creative North Star: "The Studio Window"**

The Studio Window is a warm, quiet studio where natural light passes through stained glass and the maker's work is given space to be the focus. The locked mood is warm, luminous, and unhurried.

The page is sparse. Photographs are large, sections are padded generously, and a screen holds one idea at a time. Playfair Display carries the wordmark and the headlines at regular weight. Inter carries reading text and the small uppercase labels. Controls are few, and the one button is a thin copper outline.

Depth is restrained: a translucent header, a solid dark footer, and a single soft shadow under the hanging leaf. A faint colored light, the projection of that leaf, sits behind the page and is not a second palette for interface elements. This system refuses marketplace chrome, a cold white gallery, and craft-fair clutter.

**Key Characteristics:**

- Warm, luminous, and unhurried
- Warm Paper ground and Deep Ink type
- Aged Copper for the action, Burnished Ochre for small labels
- Playfair Display for display type, Inter for reading and labels
- Flat surfaces, with one shadow reserved for the hanging leaf
- Large rectangular photographs and very few controls

## Colors

The interface is warm paper and deep ink, with two metals that never trade jobs. The leaf's stained-glass light is a separate, quieter layer.

### Primary

- **Aged Copper** (`{colors.aged-copper}`): The action color. It draws the outline and the letters of the button. It does not fill a surface.

### Secondary

- **Burnished Ochre** (`{colors.burnished-ochre}`): The small-label color. It marks an accented eyebrow and the numbers in the making sequence. It is rarer than the copper, and it is never the button.

### Neutral

- **Warm Paper** (`{colors.warm-paper}`): The page ground, and the color mixed into the sticky header.
- **Deep Ink** (`{colors.deep-ink}`): The wordmark, piece titles' accompanying links, and the solid footer. The same ink is both text and the dark band.
- **Reading Ink** (`{colors.reading-ink}`): Paragraphs and piece categories.
- **Muted Ink** (`{colors.muted-ink}`): Navigation and default eyebrows.
- **Faint Ink** (`{colors.faint-ink}`): The quietest line, the scroll hint.
- **Paper on Ink** (`{colors.paper-on-ink}`): The footer wordmark, a lighter paper set on Deep Ink.
- **Footer Muted** (`{colors.footer-muted}`): Footer links on the dark band.
- **Photo Well** (`{colors.photo-well}`): The wash behind a photograph before the image loads. It is not a gray UI palette.
- **Hairline** (`{colors.hairline}`): The rule above the making sequence.
- **Link Rule** (`{colors.link-rule}`): The underline on a piece's text link.

### Named Rules

**The Two Metals Rule.** Aged Copper is the only action color. Burnished Ochre marks small labels and sequence numbers. Neither color fills a background.

**The Paper Ground Rule.** The page sits on Warm Paper. Pure white is not the ground of this system.

## Typography

**Display Font:** Playfair Display (with Georgia, then serif)
**Body Font:** Inter (with system-ui, then sans-serif)
**Label Font:** Inter, tracked and set in uppercase

**Character:** Playfair is the maker's voice: large, regular weight, slightly tight. Inter is the quiet informant: smaller, looser, and often uppercase when it is a label. The pairing is editorial, not decorative. The only italic is the short hanging-leaf note in the hero. The font loader requests the roman cut, so that italic is not a separate licensed style.

### Hierarchy

- **Display** (weight 400, `{typography.display.fontSize}`, line-height 0.98): The hero headline only.
- **Headline** (weight 400, `{typography.headline.fontSize}`, line-height 1.02): The closing invitation.
- **Title** (weight 400, `{typography.title.fontSize}`): A piece name. The studio quotation is the same face, set a little smaller at `clamp(1.75rem, 4vw, 3.4rem)` with line-height 1.15. A process step title is Playfair at `1.625rem`.
- **Body** (weight 400, `0.875rem`, line-height 1.7): Reading text beside the work. The hero paragraph is one step larger, at `0.9375rem` with line-height 1.78. The wordmark is Playfair at `1.25rem`. The footer wordmark is Playfair at `1.5rem`.
- **Label** (weight 400, `0.6875rem`, letter-spacing `0.18em`, uppercase): Eyebrows. Navigation uses the same size and case with letter-spacing `0.16em`.

### Named Rules

**The Regular Weight Rule.** Display, headlines, and titles are Playfair Display at weight 400. Size carries the emphasis. Bold is not the voice of this system.

## Layout

The page is one centered column with a maximum width of `90rem`. Each section pads `clamp(3rem, 8vw, 6rem)` vertically and `clamp(1.25rem, 5vw, 5rem)` horizontally. The header uses that same horizontal padding and `1.375rem` vertically, and it sticks to the top.

Above `900px`, a piece is a two-column pair: photograph and words, sometimes reversed. The studio splits `1.6fr` / `1fr`. The closing invitation splits `1.4fr` / `1fr`. The making sequence is five equal columns. The wide photograph uses a `16 / 9` frame. The narrow piece stops at `56rem`.

At `900px` and below, those grids become a single column, and the hero note aligns left. At `640px` the hanging leaf and its projection get smaller; the projection also shortens. The header currently hides navigation links after About below `900px`. That is present behavior, not a rule to copy onto a new screen. Pieces and Contact remain reachable in the page and the footer.

## Elevation & Depth

The system is flat paper with two tonal slabs and one physical shadow. Surfaces do not lift. Cards do not float.

The header is Warm Paper mixed to 88% over transparency, with an `8px` backdrop blur, so the page can pass underneath a sheet of the same paper. The footer is a solid slab of Deep Ink. The hanging leaf carries the only shadow: `drop-shadow(0 18px 14px rgba(60, 56, 40, 0.16))`.

Behind everything, the leaf projection is a fixed, blurred silhouette (`15px` on large screens, `18px` below `640px`) at very low opacity (`0.05` on large screens). It reads as light in the room, not as a layer of interface.

### Shadow Vocabulary

- **Leaf shadow** (`drop-shadow(0 18px 14px rgba(60, 56, 40, 0.16))`): Only the hanging leaf. It places the glass in the air in front of the page.

### Named Rules

**The One Shadow Rule.** Surfaces stay flat. The translucent header, the solid footer, and the leaf's single soft shadow are the whole depth system. Decorative card shadows are out.

## Shapes

Corners are square, except the button. Photographs are rectangular crops: `4 / 5` by default, `16 / 9` when a piece is marked wide. They are not clipped into circles, and they are not given a radius.

The button's corners are gently cut, at `4px`. That is the only radius in the interface.

The hanging leaf and its projection are organic silhouettes taken from the glass itself. A circle, polygon, or gradient mask is not a substitute for that outline.

### Named Rules

**The Single Radius Rule.** The only corner radius is `4px`, and it belongs to the button. Photographs, panels, and the page itself stay square.

## Components

There is no input, card, or chip. The controls that exist are a copper outline button, a text link, a small label, and the navigation. The leaf is the signature object.

### Buttons

Quiet and precise. The type does the asking. The button does not shout, and it has no fill.

- **Shape:** A slight corner cut (`4px`), a `1px` solid border.
- **Primary:** Transparent ground, Aged Copper border and text, padding `0.55rem 1rem`, Playfair Display at `0.875rem`.
- **Ghost:** The same button with a transparent border. The class exists. The current page does not use it.
- **Hover / Focus:** Unstyled. The page does not define a hover color or a focus ring. Do not invent one in the record. A future control must add a visible focus style when it is built; that style is not decided here.

### Navigation

The wordmark is Playfair Display, Deep Ink, `1.25rem`, letter-spacing `0.02em`. Links are Inter, uppercase, `0.6875rem`, letter-spacing `0.16em`, Muted Ink, with no underline. The bar sticks, on a blurred sheet of Warm Paper. The hanging leaf is anchored in the bar, between About and Pieces, and it does not receive pointer events.

Below `900px` the links after About are hidden. Home and About remain.

### Text link

The piece link is Inter at `0.8125rem`, letter-spacing `0.04em`, Deep Ink, with a `1px` underline in Link Rule and `0.25rem` of padding beneath the words. The label names the piece and the outcome, as in "How to buy Frog".

### Labels

An eyebrow is Inter, uppercase, `0.6875rem`, letter-spacing `0.18em`. The default color is Muted Ink. The accent variant is Burnished Ochre, used for the sequence numbers.

### Image well

A rectangular frame, `4 / 5` unless a piece is wide (`16 / 9`). The well is Photo Well until the photograph covers it. The image fills the frame and is cropped with `object-fit: cover`. Corners stay square.

### Footer

A Deep Ink band. The wordmark is Playfair Display at `1.5rem` in Paper on Ink. Links are uppercase Inter in Footer Muted, letter-spacing `0.16em`. The legal line is smaller, letter-spacing `0.1em`, and sits under a light hairline.

### The hanging leaf and its light

The leaf is a photograph of the glass, hung from the header on the page's vertical axis. It sways `1.6deg` over `8.5s`, easing in and out, and it carries the leaf shadow.

The projection is a separate fixed layer: the leaf silhouette in `#2b2924`, plus a soft vertical stain of `#cdb05c`, `#9db05c`, `#7c906c`, and `#c9a23f`. Those four lights belong to the projection. They are not interface colors. The projection drifts over `10.5s`.

When the visitor prefers reduced motion, both animations stop. The leaf rests at a slight angle. The projection rests slightly offset.

## Do's and Don'ts

### Do:

- **Do** set the page on Warm Paper, with Deep Ink for the wordmark and for the footer slab.
- **Do** set display type in Playfair Display at weight 400, and reading type in Inter.
- **Do** use Aged Copper only for the action, as a 1px outline with 4px corners and no fill.
- **Do** use Burnished Ochre only for small labels and sequence numbers.
- **Do** keep photographs large, rectangular, and unrounded.
- **Do** reserve the single drop shadow for the hanging leaf.
- **Do** keep motion slow, leaf `8.5s` and projection `10.5s`, and stop it when the visitor prefers reduced motion.

### Don't:

- **Don't** use marketplace chrome: star ratings, badges, dense product cards, or urgency labels.
- **Don't** use a cold gallery: a pure white ground and thin black type.
- **Don't** use craft-fair clutter: script fonts, floral borders, or extra hues.
- **Don't** fill the button, and don't add a second action color.
- **Don't** put drop shadows on cards, panels, or buttons.
- **Don't** round photographs, or invent a radius other than 4px.
