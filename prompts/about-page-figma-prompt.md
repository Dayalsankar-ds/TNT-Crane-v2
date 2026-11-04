# PROMPT — TNT About Us page in Figma

> Fill in the Figma link below, then paste everything under the line into a
> Claude Code session that has the Figma connector enabled.

---

Design the **TNT Crane & Rigging "About Us" page** in Figma, using this file:

**Figma file / page:** [[ PASTE FIGMA URL — the page that holds the existing TNT screens ]]

The page must look like it belongs with the screens already in that file. You
are **extending** an existing design system, not creating a new one.

## 1. Before drawing anything: analyse the file

Load the `/figma-use` skill first (mandatory before `use_figma`). Then:

1. Run `get_metadata` on the page and list every existing frame. Run
   `get_screenshot` on the main ones: homepage, Services, Contact, and any
   component or style sheet frames.
2. Run `get_variable_defs` and `search_design_system`. Record the existing:
   - **colour variables**: gold, black, white, greys, off-white
   - **text styles**: display (Impact), body (Open Sans), eyebrow, caption
   - **spacing and radius values**
   - **components**: nav bar, footer, buttons (primary / secondary / link),
     eyebrow, cards, stat blocks, badges, icons, image treatments
3. Run `get_design_context` on two or three representative sections to learn
   the patterns:
   - grid and column widths
   - section padding
   - heading-to-body spacing
   - how photos fade into dark panels
   - card borders (hairline, no shadows)
4. Write a short **design-system summary** (tokens, components, layout rules)
   and show it to me before building.

## 2. Rules

- Use only the existing variables, text styles and components. Use component
  **instances** for the nav, footer, buttons, cards and badges.
- No new colours, fonts or one-off styles. No raw hex values where a
  variable exists.
- If something you need doesn't exist (for example a timeline item), build
  it from existing tokens as a local component and flag it in your summary.
- Brand palette: gold, black, white, greys. No navy. No red accents. No drop
  shadows on cards.
- Use auto layout everywhere. Name layers and frames clearly
  ("About / Hero", "About / Timeline" …).
- Place the new frames next to the existing page frames, aligned to the
  same grid and spacing as their neighbours.
- Build two frames: **Desktop 1440** and **Mobile 375**. The mobile frame
  stacks every section; nothing is hidden.

## 3. Page content (use exactly this; do not invent facts)

1. **Hero.** Split layout: black text panel on the left, a crane photo on
   the right fading into the black.
   - Eyebrow: "About TNT Crane & Rigging"
   - H1: "Built on local expertise. / **United by strength.**" (the second
     line in gold)
   - Body: "Since 1985, TNT Crane & Rigging has grown from its Houston roots
     into a North American crane and rigging organization, bringing regional
     expertise, specialized equipment, and engineering capabilities together
     under one family."
   - Button: "Explore Our Story"
2. **Our Journey and timeline.** White section.
   - Heading: "Four decades of lifting what matters."
   - Two short paragraphs: founded 1985 in Houston; regional businesses kept
     their names, crews and customers.
   - Timeline with logo marks for each chapter:
     - **1985** · The first lift · Houston, Texas
     - **2012** · Heading southeast · Southway joins
     - **2014** · North of the border · Stampede and Eagle West, Canada
     - **2015** · Into the Rockies · RMS Cranes merges
     - **Today** · Different names. One TNT.
3. **Family of companies.** Off-white section.
   - Heading: "Different names. One TNT."
   - A black parent card for TNT Crane & Rigging (Houston, founded 1985).
   - A selector for the five companies, each showing region, base, branch
     cities and services:
     - Southway: GA · AL · SC · FL
     - RMS Cranes: CO · WY · NM
     - Eagle West: BC
     - JMS: MT · SD
     - TNT Canada: AB
   - Button: "Find Our Locations"
4. **Capabilities.** White section.
   - Heading: "One partner. End-to-end capability."
   - One large photo beside a selectable list of the six services: Crane
     Rental, Specialized Rigging, Machinery Moving, Heavy Haul & Transport,
     Lift Planning & Engineering, Industrial Storage.
   - Button: "Explore Our Services"
5. **North American reach.** The page's one black band.
   - Heading: "Local expertise. North American reach."
   - Stats: **45+** Locations · **700+** Cranes · **1,750+** Employees ·
     **2** Countries
   - Footprint list:
     - **United States:** TNT (TX LA OK), Southway (GA AL SC FL), RMS
       (CO WY NM), JMS (MT SD)
     - **Canada:** TNT Canada (AB), Eagle West (BC)
   - A full-width photo underneath.
6. **Safety and iCARE.** Grey section.
   - iCARE badge in a white card.
   - Heading: "Safety is part of every lift."
   - Four numbered points: Stop-work authority · Trained, certified
     operators · A lift plan first · Measured every month.
   - Button: "Explore Our Safety Commitment"
7. **Final call to action.** Gold band.
   - Heading: "Your next project. Our next priority."
   - Buttons: "Request a Quote" (primary) and "Find a Location" (secondary)
8. **Footer.** The existing footer component.

**Images:** reuse photos already in the Figma file, or upload these from the
repo's `public/` folder:
- `photos/about/about-hero-crawler-sunset.webp`
- `photos/tnt-crawler-bridge-lift.jpg`
- `photos/fleet/hydraulic-truck-crane.jpg`
- `brand/*.svg`
- `brand/icare-badge.png`

Use no stock images of other companies.

## 4. Workflow

1. Analyse the file (§1), then post the design-system summary and the section
   plan. **Wait for my OK.**
2. Build the desktop frame section by section. Take a `get_screenshot`
   after each section and compare it with the neighbouring screens.
3. Build the mobile frame.
4. Report back with:
   - the frame links
   - which components and variables you used
   - anything new you had to create
   - any content you couldn't place
