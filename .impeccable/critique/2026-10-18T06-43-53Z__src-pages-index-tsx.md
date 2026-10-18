---
target: Nice Glass customer-facing homepage, catalogue scale
total_score: 23
max_score: 40
na_heuristics: 
p0_count: 0
p1_count: 3
target_identity: "file:C:\\Users\\vi_hu\\Desktop\\dev\\niceglass\\src\\pages\\index.tsx"
target_fingerprint: "sha256:5b6784245e35abed060bf64ae5c660283b5e9157f9a078b000986c05fc2cb260"
target_path: "C:\\Users\\vi_hu\\Desktop\\dev\\niceglass\\src\\pages\\index.tsx"
timestamp: 2026-10-18T06-43-53Z
slug: src-pages-index-tsx
---
Method: degraded single-context. Parallel review passes did not return. This pass could not reload http://localhost:3000 (the request timed out and the browser showed a connection error). Visual judgment uses the page source, DESIGN.md, PRODUCT.md, and an earlier successful viewing of the same homepage in this project. The design detector returned no findings. No overlay was injected.

# Critique: Nice Glass homepage

Target: src/pages/index.tsx

## Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 2 | No current-section marker. Below 900px the header drops Pieces and Contact with no menu in their place. |
| 2 | Match System / Real World | 3 | The studio voice is true. Cute, Foodie, Celestial, and Nature do not say what the object is. |
| 3 | User Control and Freedom | 2 | One long scroll. There is no piece index to leave and return to. |
| 4 | Consistency and Standards | 3 | One visual language. Every piece is forced through the same full-spread pattern. |
| 5 | Error Prevention | 2 | No sold or available state. A buyer can pursue a piece that may already be gone. |
| 6 | Recognition Rather Than Recall | 2 | Pieces are met one by one. Their names are never on screen together. |
| 7 | Flexibility and Efficiency | 1 | No jump, search, or collection path. The only route is scroll. |
| 8 | Aesthetic and Minimalist Design | 3 | The four-piece page is quiet and specific. The same spacing at catalogue scale becomes a corridor. |
| 9 | Error Recovery | 2 | The recovery path is a single Etsy link. A missing or sold piece has no next step on the page. |
| 10 | Help and Documentation | 3 | The making sequence and the contact sentence explain the object and the next action. |
| **Total** | | **23/40** | **Acceptable** |

## Design Specificity Verdict

LLM assessment: The page is authored for this maker. Warm Paper, the hanging leaf, the faint projection, Playfair at regular weight, the copper outline, and the first-person making sequence would not survive being swapped onto a generic shop. The risk is the next step. A default product grid would throw away the thing that makes the page specific.

Deterministic scan: `impeccable detect --json src/pages/index.tsx` exited 0 and returned `[]`. No rule hits. Nothing the detector caught that the review missed. No false positives to discard.

Visual overlays: No reliable overlay. The live page did not answer on this pass, so detect.js was not injected.

## Overall Impression

At four pieces the page is a studio window, and that is the right feeling. It is the wrong instrument for finding a piece among twelve, twenty-four, or fifty. The single biggest opportunity is a second surface: keep this window for arrival, and give the work a shelf that can be scanned.

## What's Working

- The leaf, the paper-colored ground, and the slow projection make the first screen feel like a room with light in it, not a storefront.
- The making sequence (sketch, cut, foil, solder, finish) teaches the object in the maker's order, in one sitting.
- The contact sentence tells the truth the product record requires: sold once, price in AUD on Etsy, daylight photographs and size on request. One copper outline does that job.

## Priority Issues

### [P1] The catalogue is a sequence of full spreads
Why it matters: Each piece is a two-column spread. The photograph column is about 1.4 of 2.4 parts, at a 4:5 frame, with clamp(4rem, 10vw, 8rem) under it. On a laptop that is about one piece per screen. Twelve pieces is a short book. Twenty-four is a long one. Fifty is a corridor of screens. A buyer who wants "something celestial" cannot see the candidates together.
Fix: Keep the large frame for a single piece the buyer has chosen. Give the index a shared, smaller frame so several pieces share one view.
Suggested command: /impeccable shape

### [P1] Arrival and browsing are the same page
Why it matters: Home, the studio, the process, and every piece share one scroll. The window and the shelf are different jobs. Growing the shelf inside the window makes both worse: the arrival gets longer, and the search never gets a list.
Fix: Let the homepage keep a few pieces in the light. Put the full set on its own page, with a way back to the window.
Suggested command: /impeccable shape

### [P1] Below 900px the header hides the way to the work
Why it matters: The stylesheet sets nav links after About to display:none. Pieces and Contact disappear. There is no menu button. On a phone the buyer is left to discover the work by scrolling, which is the path that breaks first as the list grows.
Fix: Keep Home, Pieces, and Contact reachable without a hover and without a marketplace drawer full of filters.
Suggested command: /impeccable adapt

### [P2] Collection words are captions, not paths
Why it matters: Cute, Foodie, Celestial, and Nature sit under the title and do nothing. At twelve pieces, four quiet collection links are enough. At twenty-four they become the way a buyer narrows the room. A filter sidebar is not justified. A price slider, a sort menu, and badge filters would turn the studio into a marketplace.
Fix: Make each collection a destination once there is more than a handful of pieces in it. Leave multi-facet filtering out.
Suggested command: /impeccable shape

### [P2] Focus is undocumented and unstyled
Why it matters: The stylesheet never sets a focus style. The design record says hover and focus are undecided. A keyboard buyer moving through fifty links will not see a ring that belongs to this studio, and may see none if the reset removes it.
Fix: One visible focus treatment, using the existing ink or copper, on links and the button. Decide it before the catalogue multiplies the number of stops.
Suggested command: /impeccable audit

## Brand principles (these stay)

- The Studio Window: warm, luminous, unhurried. The work is given room.
- Warm Paper as the ground. Deep Ink for the wordmark and the footer. Aged Copper only as the action outline. Burnished Ochre only for small labels.
- Playfair Display at weight 400. Inter for reading and labels. Size carries emphasis.
- One shadow, on the hanging leaf. Surfaces stay flat. The only radius is 4px, on the button.
- Photographs of the real glass, large when the buyer is with that one piece.
- First person. One piece, sold once. The leaf's stained-glass colors stay in the projection.
- No ratings, urgency, sale badges, filled shout buttons, generic shop cards, card shadows, craft-fair ornament, or a cold white gallery.

## Current implementation constraints (these should change)

- Every piece occupies a full editorial spread. That is a choice for four pieces, not a law of the brand.
- Section padding and the large gap under every piece are applied as if each piece were a chapter.
- There is no second template. The homepage is the only catalogue.
- There is no shared image frame. Default is 4:5, one piece is 16:9, one is a narrower column. At fifty pieces those exceptions stop being rhythm and start being noise.
- Category words are not navigation.
- The header's small-screen rule hides Pieces and Contact.
- "How to buy {name}" always lands on one contact block and one shop link. It does not open that piece.

## Scale

| | 12 pieces | 24 pieces | 50 pieces |
|---|---|---|---|
| Discoverability | Possible only by scrolling the whole book. Comparison is memory. | The buyer will not reach the later pieces. | The page stops being a way to look. |
| Density | About 1 piece per desktop or phone screen. | Same density, twice the walk. | Same density. The walk is the product. |
| Image size | The 4:5 column is still justified for a short list. | Too large for scanning. Right for a piece the buyer has opened. | A shared index crop is required. The large frame belongs on the piece itself. |
| Scroll | On the order of 15 viewports once hero, studio, process, and contact are counted. | On the order of 30. | On the order of 55. |
| One-piece presentation | Still pleasant, already tiring if the buyer is choosing. | The wrong default. | Unusable as the only view. |
| Navigation between pieces | Scroll, or nothing. | No return to a list, because there is no list. | The buyer is lost in the sequence. |
| Homepage vs catalogue | They need to split here. | The split is overdue. | A single page cannot do both jobs. |
| Cards | A quiet index frame is enough. Not a shop card. | Same frame, repeated. | Same frame. Do not add chrome as the count grows. |
| Categories | Four text links are enough. | Collections become the primary narrow. | Collections, plus the ability to find a piece by name. Not a facet panel. |
| Filters | Not justified. | Still not a sidebar. | Name and collection only. |
| Desktop / tablet / mobile | Desktop can show 2 across if it must. Tablet and mobile still want the photograph, so 1 across in an index is honest only if the image is shorter. | Desktop 3 across in an index. Tablet 2. Mobile 2 modest or 1 short. | Same index. Do not shrink type to fit more. |
| Whitespace | The current section padding on every piece is the cost. | Keep it on the homepage and on the open piece. Remove it between index items. | Index rhythm has to be tight and even. |
| Hierarchy | The hero still wins, then piece one, and the rest are equal. | Later pieces have no rank. | Without a curated few, nothing is the window. |
| Accessibility | Four similar links are understandable. | Fifty identical "How to buy" links with no list context are a long, flat tab order. | The index needs real headings per collection and a focus style. |
| Focus | One undecided ring, multiplied by four. | Same gap, more stops. | A missing ring is now the way the page is operated. |
| Mobile nav | Already hides the catalogue. | The hidden links are the whole task. | A phone cannot browse fifty pieces from Home and About. |
| Design system | Tokens survive. The missing piece is an index frame that uses those tokens and adds no new chrome. | The system scales if the index is a layout, not a new brand. | The system breaks only if the index imports a second visual language. |

## Cognitive load

Current page, four pieces: 3 of 8 checklist items fail (grouping, working memory across the sequence, progressive disclosure). That is moderate.

The failures are grouping (the category word does not gather its pieces), working memory (comparing Frog with Meltem means remembering the earlier spread), and progressive disclosure (the entire set is expanded at once).

At twenty-four and beyond, chunking, minimal choices, and hierarchy fail as well. That is high load. The buyer's task, choosing one object, stays simple. The page adds the load by making every object a chapter.

## Emotional journey

Arrival is the peak: light, paper, one leaf, a sentence in the maker's voice. The middle is a slow walk, which is the pleasure at four pieces and the fatigue at twenty-four. The end is clear and calm: one sentence and one copper link to Etsy. The valley is the moment of choosing. The page never shows price, size, or availability beside the photograph, so the decision is postponed to another site. That is acceptable for four pieces. It is a dead walk if the buyer had to scroll fifty chapters to hesitate.

## Persona red flags

Jordan, first-timer: The first action is clear enough, which is to scroll. "How to buy Frog" does not say the price or the size. Cute and Foodie do not explain the object. After the click, the buyer is at a generic contact block, not at Frog.

Casey, phone: Pieces and Contact are not in the header. The Etsy button sits at the end of the whole scroll, so the action is at the bottom only after every piece. Each photograph is still about a screen tall. Returning to a piece means scrolling again. There is no list to come back to.

Sam, keyboard: Tab order is the whole document: header, four piece links, the shop link, the footer. No authored focus style. The leaf is hidden from assistive tech, which is correct. Collection names are not headings the buyer can jump by. At fifty pieces the tab order is the scroll, repeated as links.

A buyer in the studio (from the product record): They came to choose one piece and to feel the maker's room. The room is there. The choosing gets harder with every piece added, because the room and the shelf are the same scroll. They will not feel rushed. They will feel lost.

## Minor observations

- Moon uses 16:9 and Meltem uses a narrower column. As exceptions they are fine. As a system they need a shared index crop.
- The hero line "Scroll for the pieces" is a label, not a control.
- Every piece link points at the same #contact. The name in the link is the only piece-specific fact.
- The process block is five items, one over the working-memory line of four. The sequence is meaningful, so it can stay. It should not be repeated as a pattern for the catalogue.
- The ghost button exists in the stylesheet and is unused.

## Questions to consider

- What if the homepage showed three pieces in the light, and the fourth through the fiftieth lived on a shelf with the same paper and a smaller photograph?
- What if a collection were a short walk into one kind of piece, rather than a word under a title?
- What would the large photograph mean if it appeared only after the buyer had chosen?

## Directions

### 1. Editorial Gallery

Homepage: The current window, shortened to a hero and a few large pieces, with a single text link onward.
Catalogue: The same spreads, tightened. Some pieces sit two across on a large screen. Most remain one across. Tablet and phone stay one across.
Density: Desktop about 1 to 2 visible. Tablet 1. Mobile 1.
Advantages: The photograph stays primary. The identity is the safest of the three.
Disadvantages: Twelve is a long page. Twenty-four and fifty are still a book. Discovery is patience.
Identity: Strongest preservation. Weakest answer to the actual problem.

### 2. Curated Collection Grid

Homepage: The leaf and a short studio sentence, then the pieces in a quiet grid immediately.
Catalogue: That grid is the catalogue. The homepage and the shelf are nearly the same view.
Density: Desktop 3 across, about 6 visible. Tablet 2 across, about 4 visible. Mobile 2 modest columns, about 2 to 4 visible.
Advantages: Twelve pieces are one or two views. Twenty-four is a short scroll. Fifty is possible. Comparison is visual.
Disadvantages: The window becomes an index. If the cells grow borders, prices, and badges, the studio is gone. Even without those, the first screen is a wall of objects.
Identity: Usable, and the easiest to ruin. It preserves the palette only if the grid stays flat, square-cornered, and untitled except for name and collection.

### 3. Hybrid Studio + Catalogue

Homepage: Stays the Studio Window. Leaf, headline, a curated few pieces at the current large size, the making sequence, and one invitation. A text link opens the full shelf.
Catalogue: Its own page. A shared crop, the piece name, the collection. No price badge, no shadow, no radius, no star, no urgency. Opening a piece returns to the large editorial spread, one object, with the copper link.
Density: Homepage stays about 1 large piece per view, and only for the curated few. Catalogue: desktop 3 across and about 6 visible; tablet 2 across and about 4 visible; mobile a short frame, 1 or 2 visible, with the name always readable.
Advantages: Arrival and search stop damaging each other. The large photograph is earned by opening a piece. The index can grow to fifty without lengthening the window. Collections can be quiet links above the index once a collection holds more than a few pieces.
Disadvantages: Two layouts to care for. The index must be designed with the same restraint as the window, or it will look like a shop attached to a poem.
Identity: Best fit. The window remains a window. The shelf is a shelf in the same room.

## Recommendation

Choose Hybrid Studio + Catalogue.

The north star is a room with light in it. That room is the homepage, and it should keep a few pieces, the leaf, and the making. The job that breaks at twelve, twenty-four, and fifty is recognition: seeing enough work to choose. That job wants a shelf, using the same paper, type, and metals, with a smaller shared photograph and no marketplace chrome. The large frame stays, on the piece the buyer has opened, which is where reverence belongs.
