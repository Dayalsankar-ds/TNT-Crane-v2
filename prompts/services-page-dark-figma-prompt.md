You are a senior product designer. Build two pages in Figma for **TNT Crane & Rigging (dark theme)**:

1. **Services overview** (`/services`), 10 sections
2. **Crane Rental** (`/services/crane-rental`), 6 sections

These pages already exist in a light theme. Reproduce the **same layout, structure, content and copy exactly**. **The only change is the look:** apply the dark theme below. Don't add, remove, reorder or rewrite anything.

Global navigation and footer are shared site components. Show them as placeholders at the top and bottom of each page, and don't redesign them.

---

## A. Figma setup

- **Frames:** Desktop 1440, Tablet 768, Mobile 375. Build Desktop first, then adapt.
- **Layout grid:** 12 columns, max content width 1280, centered, 24px gutter. Side padding: 32 (desktop), 24 (tablet), 16 (mobile).
- **Auto layout:** use it everywhere.
- **Components with variants:** Button, Eyebrow, Chip, Status Badge, Provider Tag, Service Card, Specialized Card, Crane Type Card, Step, Company Tab, Availability Row, Project Card, Company Row, Related Card, Form Field.
- **Local styles:** create colour and text styles from section B.
- **Page frames:** name them `Services / Desktop`, `Crane Rental / Desktop` and so on. Name each section layer `01 Hero`, `02 Introduction` and so on.
- **Image placeholders:** use rectangles labelled with the photo description given. Real photos are swapped in later.

---

## B. Dark design system

### Colours

| Token | Hex | Use |
|---|---|---|
| Black | #000000 | Main dark band, cards on slate/graphite bands |
| Slate | #1A1A1A | Alternate dark band, cards on black bands |
| Graphite | #262626 | Third dark band |
| Gold (brand) | #F8AE1C | Accent, eyebrows, primary buttons, quote band |
| Gold Vivid | #FFC24A | Hover on gold |
| White | #FFFFFF | Headings on dark |
| White 75% | rgba(255,255,255,.75) | Lead paragraphs |
| White 70% | rgba(255,255,255,.70) | Body text |
| White 65% | rgba(255,255,255,.65) | Secondary body |
| White 55% | rgba(255,255,255,.55) | Meta, notes, captions |
| White 25% | rgba(255,255,255,.25) | Secondary button border |
| White 12% | rgba(255,255,255,.12) | Chip/tab border |
| White 10% | rgba(255,255,255,.10) | Card borders, dividers |
| White 5% | rgba(255,255,255,.05) | Chip fill |
| Gold 50% / 10% | #F8AE1C @ 50% / 10% | Provider tag border / fill |

**Rules:**
- No navy, no blue tints, no gradients except the hero photo fade and the photo-pending tile (#000 → #242424, 135°).
- No drop shadows on cards. Depth comes from a 1px border that turns gold on hover.
- **No two neighbouring sections may share a background colour.**

### Typography

| Style | Font | Size / line height | Notes |
|---|---|---|---|
| Display XL (H1) | Impact | 72 / 1.02 desktop, 60 tablet, 48 mobile | UPPERCASE |
| Display L (section H2) | Impact | 60 / 0.95 desktop, 48 mobile | UPPERCASE, tracking +2% |
| Display M (card title) | Impact | 30 | UPPERCASE, +2% |
| Display S | Impact | 24 | UPPERCASE, +2% |
| Display XS | Impact | 20 | UPPERCASE, +2% |
| Display tab | Impact | 16 | UPPERCASE |
| Eyebrow | Open Sans Bold | 13 | tracking 18%, UPPERCASE, Gold |
| Lead | Open Sans Regular | 18 / 1.6 | White 70–75% |
| Body | Open Sans Regular | 16 / 1.6 | |
| Body S | Open Sans Regular | 15 / 1.6 | |
| Small | Open Sans Regular | 14 | |
| Caption | Open Sans | 13 | |
| Label | Open Sans Semibold | 11 | tracking 16%, UPPERCASE |
| Chip | Open Sans | 12 | |
| Mono | Geist Mono | 12–14 | Index numbers, step numbers, tags |

### Spacing and shapes

- **Section padding (overview):** 112 top/bottom desktop, 80 mobile.
- **Section padding (Crane Rental):** 96 / 80, except section A at 80 / 56.
- **Eyebrow → heading:** 16. **Heading → lead:** 24. **Header block → content:** 48.
- **Radius:** cards 12, buttons 6, chips 6, tabs 8, pills and badges full, quote form card 16.

### Components

**Button** (14px Open Sans Semibold, padding 10 × 20, radius 6, 16px arrow icon after the text that slides 4px right on hover, press scales to 97%):
- *Primary / Dark:* Gold fill, black text. Hover Gold Vivid.
- *Secondary / Dark:* 1px White 25% border, white text. Hover fills white with black text.
- *Primary / On Gold:* black fill, white text. Used only on the gold quote band.
- *Secondary / On Gold:* 1px black 15% border, black text. Hover fills black.
- *Link:* Gold text plus arrow, no box.
- *Phone variant:* "Call 1-800-799-2505", no arrow.
- *Focus state:* 2px Gold ring, offset 2 in the band colour.

**Eyebrow:** Gold, 13px bold, letter-spaced, uppercase. The hero version has a 36px × 1px gold line before it, with a 16px gap.

**Chip:** radius 6, 1px White 12% border, White 5% fill, 12px White 75% text, padding 4 × 10, gap 6.

**Provider tag:** pill, 1px Gold 50% border, Gold 10% fill, 11px semibold white text, 14px gold map-pin icon before it.

**Status badge** (pill, 11px semibold, 14px icon before the text, padding 4 × 10). Variants:
- **Offered directly:** Gold fill, black text, check icon.
- **Through the TNT network:** white fill, black text, network icon.
- **Contact us to confirm:** 1px White 25% border, White 70% text, question-circle icon.
- **Not offered:** White 5% fill, White 45% text, minus icon. Defined but not currently used.

**Index tag:** black 80% fill, radius 6, 12px Geist Mono in Gold, for example "01". Sits on photos at top-left with a 16px inset.

**Card hover:** border turns Gold, card lifts 2px, photo scales to 103%. Use a subtle fade, and no motion when reduced motion is on.

---

## C. PAGE 1 — Services overview

### Band sequence (top to bottom)

| # | Section | Background |
|---|---|---|
| 01 | Hero | Black |
| 02 | Introduction | Slate |
| 03 | Core Services | Black |
| 04 | Specialized Capabilities | Graphite |
| 05 | Crane Rental Preview | Black |
| 06 | How We Work | Slate |
| 07 | Regional Availability | Black |
| 08 | Projects | Graphite |
| 09 | Safety & Engineering | Slate |
| 10 | Request a Quote | Gold |

### 01 — Hero (Black)

**Layout:**
- **Desktop:** split layout, minimum height about 736.
  - Copy column: left 50%, padding 64–80 horizontal, vertically centred.
  - Photo: fills from 32% of the width to the right edge, full height. A black-to-transparent fade on its left 42% (eased, no visible start line) blends it into the black.
- **Mobile:** copy first, photo below at 16:10, faded in from the top 45%.

**Photo:** large TNT crawler crane rigged for a heavy lift at a refinery. Focal point 60% / 50%.

**Content:**
- Eyebrow, with a gold line before it: **OUR SERVICES**
- H1, Display XL, white: **FULL-SCOPE LIFTING,** / **RIGGING & INDUSTRIAL SOLUTIONS**. The words "INDUSTRIAL SOLUTIONS" are Gold. Line break after "LIFTING,".
- Lead (White 75%, max width about 512, 32px gap above): "From crane rental and specialized rigging to heavy transport, engineering and industrial storage, TNT Crane & Rigging brings together the capabilities of its family of companies to support complex projects across North America."
- Buttons, 40px above, 16px apart:
  - Primary: **Explore Our Services** (scrolls to section 03)
  - Secondary: **Request a Quote**

### 02 — Introduction (Slate)

**Layout:**
- **Desktop:** 2 columns (about 1 : 1.1), 80px gap.
- **Mobile:** stacked, 48px gap.

**Left column:**
- Eyebrow: **THE TNT NETWORK**
- H2: **ONE NETWORK.** / **COMPLETE PROJECT SUPPORT.**

**Right column:**
- Lead: "TNT Crane & Rigging brings together specialized equipment, experienced teams and regional expertise for lifting, rigging, transportation, engineering and industrial projects. Through its family of companies, TNT connects customers with the capabilities their specific project requires."
- A 2×2 grid of key messages, 40px below. Each has a 2px White 80% rule on top, a Display XS title and Body S text in White 65%:
  1. **CONNECTED REGIONAL EXPERTISE**: "Local teams who know their sites, backed by the wider TNT family."
  2. **BROAD EQUIPMENT CAPABILITIES**: "Cranes, rigging systems and transport across the network."
  3. **INTEGRATED INDUSTRIAL SERVICES**: "Lifting, rigging, moving, hauling and storage under one conversation."
  4. **PROJECT-SPECIFIC TECHNICAL SUPPORT**: "Planning and engineering matched to what each job needs."

### 03 — Core Services (Black)

**Header block:**
- Eyebrow: **CORE SERVICES**
- H2: **OUR CORE SERVICES**
- Lead: "Explore comprehensive lifting, rigging, transportation and industrial solutions."

**Grid:** 6 Service Cards, 2 per row on desktop, 1 per row on tablet and mobile, 24px gap. All cards in a row are the same height.

**Service Card** (Slate fill, 1px White 10% border, radius 12):
1. **Photo:** 2:1 aspect ratio, with the index tag at top-left.
2. **Body:** padding 32 desktop / 24 mobile.
   - Title: Display M, white.
   - Description: Body, White 70%.
   - List label (Label style, White 55%), then chips.
   - Optional expandable row: 13px semibold white with a small gold arrow that rotates 90° when open, revealing more chips.
   - Optional scope note: Caption, White 55%.
3. **Footer**, pinned to the bottom: 1px White 10% top divider. Left: "**Offered directly by:** " in white semibold, then the company names separated by " · " in White 65%. Right: the button.

**Card content:**

**01 · CRANE RENTAL**
- Photo: TNT all-terrain crane mid-lift at a commercial site.
- Description: "Mobile, crawler, rough-terrain and specialized crane rental for construction, infrastructure and industrial lifting."
- Label: CRANE TYPES ACROSS THE NETWORK
- Chips: All-Terrain Cranes · Hydraulic Truck Cranes · Crawler Cranes · Rough-Terrain Cranes · Carry Deck Cranes · Boom Trucks · Tower Cranes · Telescopic Crawler Cranes · Stiff-Boom Cranes · Folding / Knuckle-Boom Cranes
- Expandable "Rental options": Operated crane rental · Bare crane rental, where available
- Scope note: "Crane types are group-level categories. Not every type, or bare rental, is available at every location."
- Offered directly by: TNT · Southway · RMS · JMS · Eagle West
- Button: Primary **Explore Crane Rental**. This is the only card that links to a dedicated page.

**02 · SPECIALIZED RIGGING**
- Photo: TNT hydraulic gantry setting a heavy vessel-sized load.
- Description: "Specialized lifting, positioning and load-handling for complex industrial equipment and heavy machinery."
- Label: KEY CAPABILITIES
- Chips: Hydraulic Gantry Systems · Jack-and-Slide Systems · Hydraulic Jacks · Machinery Skates · Cantilever Bars · Specialized Rigging Forklifts · Self-Propelled Modular Transporters (SPMTs)
- Offered directly by: TNT · Southway · RMS · JMS
- Button: Primary **Request a Quote**

**03 · MACHINERY MOVING**
- Photo: TNT Versa-Lift moving a large transformer.
- Description: "Relocation, positioning and installation of industrial equipment in demanding plant and facility environments."
- Label: APPLICATIONS
- Chips: Industrial Equipment Relocation · Plant Equipment Moving · Equipment Installation · Precision Positioning · Machinery Removal · Facility Relocation Support
- Expandable "Example equipment": CNC Machines · Industrial Presses · Generators · Transformers · Chillers · Data Center Equipment · MRI Equipment · Industrial Vaults
- Scope note: "Examples of typical applications, not a guarantee of availability at every location."
- Offered directly by: TNT · Southway · RMS · JMS · Eagle West
- Button: **Request a Quote**

**04 · HEAVY HAUL & TRANSPORT**
- Photo: self-propelled modular transporter carrying a large transformer.
- Description: "Specialized transportation for oversized, overweight and complex industrial loads."
- Label: KEY CAPABILITIES
- Chips: Heavy-Haul Trucking · Oversized Load Transportation · Specialized Trailers · Industrial Equipment Transportation · On-Site Heavy Transport · SPMT Transportation · Transport Planning
- Scope note: "RMS Cranes and JMS Crane & Rigging offer heavy haul directly. Transport capabilities differ across the rest of the network."
- Offered directly by: RMS · JMS
- Button: **Request a Quote**

**05 · LIFT PLANNING & ENGINEERING**
- Photo: TNT cantilever spreader bar rigged below a crawler crane hook beside a high-rise.
- Description: "Engineering expertise and detailed planning to support complex lifting, rigging and industrial operations."
- Label: KEY CAPABILITIES
- Chips: Critical Lift Planning · Engineered Lift Plans · Rigging Diagrams · Ground-Bearing Studies · Wind Condition Assessments · Lift Feasibility Studies · Transport Route Studies · Specialized Equipment Design · Custom Fabrication, where available
- Scope note: "Engineering deliverables are scoped per project; confirm what your project needs with our team."
- Offered directly by: TNT · Southway · RMS · JMS
- Button: **Request a Quote**

**06 · INDUSTRIAL STORAGE**
- **No photo.** Use the photo-pending tile: gradient #000 → #242424, a 48px gold warehouse/storage icon centred, and under it "FACILITY PHOTO PENDING" in 10px Geist Mono, White 50%, tracked.
- Description: "Equipment storage, staging and handling at selected TNT facilities, backed by crane and rigging resources."
- Label: KEY CAPABILITIES
- Chips: Indoor Storage · Outdoor Storage · Climate-Controlled Storage, where available · Equipment Staging · Industrial Equipment Handling · Crane and Rigging Support
- Expandable "Storage locations": Buda, TX (two sites) · Houston, TX · Dallas, TX · Conyers, GA · Henderson, CO
- Scope note: "Storage features differ by facility. Confirm current availability for your location."
- Offered directly by: TNT · Southway · RMS
- Button: **Request a Quote**

**Extra state:** a "targeted" variant of the card with a 2px Gold outline, shown when the visitor arrives from a link to that service.

### 04 — Specialized Capabilities (Graphite)

**Header:**
- **Desktop:** 2 columns, bottom-aligned, 80px gap.
- **Left:** Eyebrow **SPECIALIZED CAPABILITIES**, then H2 **SPECIALIZED SOLUTIONS** / **FOR COMPLEX PROJECTS**.
- **Right:** Lead: "Regional and industry-specific capabilities within the TNT family. Each one is offered by the company named on it, not across every location."

**Grid:** 3 per row desktop, 2 tablet, 1 mobile, 20px gap. 5 cards, so the last row has 2.

**Specialized Card:** Black fill, 1px White 10% border, radius 12, padding 24, gold border on hover. Contents, top to bottom:
- Provider tag
- 20px gap, then title (Display S, white)
- Bullet list: 4px gold dots, 14px White 65%, 6px between items
- Optional note (Caption, White 55%)
- Link button, pinned to the bottom

**Cards:**
1. **WIND ENERGY**
   - Tag: "RMS Cranes wind division · regional support elsewhere"
   - Bullets: Wind Turbine Component Lifting · Rotor Assembly · Nacelle Lifting · Maintenance Support · Repowering · Decommissioning · Gearbox and Component Handling
   - Link: **Discuss a wind project**
2. **TOWER CRANES**
   - Tag: "RMS Cranes"
   - Bullets: Self-Erecting Tower Cranes · Flat-Top Tower Cranes · Hammerhead Tower Cranes · Luffing Tower Cranes · Erection and Dismantling Support
   - Link: **See tower cranes in the fleet**
3. **RAIL CRANE SERVICES**
   - Tag: "Eagle West Crane & Rigging"
   - Bullets: Rail Infrastructure Lifting · Road-and-Rail Crane Operations · Railway Construction Support
   - Link: **Talk to our team**
4. **PRECAST CONCRETE**
   - Tag: "Eagle West Crane & Rigging · Chilliwack, BC"
   - Bullets: Road Barriers · OCTA-BLOC Products · Parking Curbs · Related Precast Products
   - Note: "A product and installation offering, not crane rental."
   - Link: **Ask about precast products**
5. **CUSTOM FABRICATION**
   - Tag: "JMS Crane & Rigging"
   - Bullets: Custom Equipment Design · Special Fabrication · Project-Specific Equipment Solutions
   - Link: **See Lift Planning & Engineering**

### 05 — Crane Rental Preview (Black)

**Header:**
- **Desktop:** copy on the left (max width about 672), buttons on the right, bottom-aligned.
- Eyebrow: **CRANE RENTAL**
- H2: **FIND THE RIGHT CRANE** / **FOR YOUR PROJECT**
- Lead: "TNT's range of crane solutions for construction, industrial, infrastructure and specialized lifting. Availability varies by location."
- Buttons: Primary **Explore Crane Rental**; Secondary **Search Load Charts**.

**Grid:** 6 Crane Type Cards, 3 per row desktop, 2 tablet, 1 mobile, 20px gap, 48px below the header.

**Crane Type Card** (the whole card is one link):
- Slate fill, 1px White 10% border, radius 12.
- Photo at 16:10 aspect ratio.
- Body, padding 20:
  - Title: Display S, white
  - Application line: 14px White 65%
  - Gold link text with an arrow, pinned to the bottom

**Photo states:**
- **Real photo.**
- **Stock photo:** add a small tag at bottom-right reading "STOCK PHOTO" in 10px mono, White 70%, on black 70%, radius 4.
- **Photo pending:** gradient tile with "PHOTO PENDING" centred, 10px mono, White 45%.

**Cards:**
1. **ALL-TERRAIN CRANES**: "Road-legal telescopic cranes with off-road capability, for sites that need a crane on the move."
   - Photo: real, red TNT all-terrain crane lifting in downtown Houston.
   - Link: **View load charts**
2. **CRAWLER CRANES**: "Tracked lattice-boom cranes for heavy, long-duration lifts on prepared ground."
   - Photo: real, TNT crawler crane setting bridge girders over a creek.
   - Link: **Explore**
3. **ROUGH-TERRAIN CRANES**: "Compact four-wheel-drive cranes for unpaved and uneven job sites."
   - Photo: **stock**, mobile crane boom and hook against the sky.
   - Link: **Explore**
4. **HYDRAULIC TRUCK CRANES**: "Telescopic cranes that travel on public roads and set up quickly on arrival."
   - Photo: real, a line of TNT hydraulic truck cranes lifting a pipeline section.
   - Link: **Explore**
5. **CARRY DECK CRANES**: "Low-profile pick-and-carry cranes for plants, warehouses and tight spaces."
   - Photo: **pending**.
   - Link: **Explore**
6. **BOOM TRUCKS**: "Truck-mounted cranes for lighter picks, deliveries and material placement."
   - Photo: **stock**, truck-mounted boom crane at a residential job site.
   - Link: **Ask about boom trucks**

### 06 — How We Work (Slate)

**Header** (max width about 672):
- Eyebrow: **HOW WE WORK**
- H2: **FROM PLANNING** / **TO PROJECT EXECUTION**
- Lead: "A typical engagement. Your team will confirm the steps for your project."

**Steps:** 4 in a row on desktop, 2×2 on tablet, stacked on mobile. 32px column gap, 40px row gap, 48px below the header.

**Step component:**
- 2px White 80% rule on top, 20px padding below it
- "STEP 01" in 14px Geist Mono, Gold
- Title: Display S, white
- Body: 16px White 65%

**Steps:**
1. **DISCUSS YOUR REQUIREMENTS**: "Share your project scope, location, equipment needs and anticipated schedule."
2. **PLAN THE SOLUTION**: "Technical teams assess lifting requirements, equipment suitability and site constraints."
3. **COORDINATE RESOURCES**: "Equipment, people and support are lined up to match the service scope and availability."
4. **EXECUTE THE PROJECT**: "The responsible operating team carries out the planned lift, rig, move or haul."

### 07 — Regional Service Availability (Black)

**Header:**
- **Desktop:** 2 columns, bottom-aligned.
- **Left:** Eyebrow **REGIONAL SERVICE AVAILABILITY**, then H2 **LOCAL EXPERTISE.** / **CONNECTED CAPABILITIES.**
- **Right:** Lead: "TNT's regional network connects you with the right teams, equipment and services for your project location. Choose a company to see what it offers." Below it, 24px down, the link button **Find a branch on the map**.

**Company tabs:**
- 6 tabs in one row on desktop, a 3×2 grid on tablet, and a sideways-scrolling row on mobile (each tab at least 176 wide, snaps, first tab 16px from the edge). 8px gap. 48px below the header.

**Company Tab** (radius 8, padding 12 × 16, left-aligned):
- Line 1: short name, Display tab style
- Line 2: territory, 12px

**Tab variants:**
- **Selected:** Gold fill, Gold border, black text, territory in black 65%.
- **Default:** White 4% fill, 1px White 12% border, white text, territory White 55%.
- **Hover:** gold border.
- **Focus:** gold ring.

**Tabs:**

| Short name | Territory |
|---|---|
| TNT | Texas · Louisiana · Oklahoma |
| SOUTHWAY | Georgia · Alabama · South Carolina · Florida |
| RMS | Colorado · Wyoming · New Mexico |
| JMS | Montana · South Dakota |
| TNT CANADA | Alberta |
| EAGLE WEST | British Columbia |

**Panel** (Slate fill, 1px White 10% border, radius 12, 24px below the tabs):

- **Panel header** (padding 32, 1px White 10% bottom divider):
  - Left:
    - Meta line (12px semibold, tracked, uppercase, White 55%): "UNITED STATES · TEXAS · LOUISIANA · OKLAHOMA"
    - Company full name: Display M, white
    - For TNT Canada only: a line in 14px White 65%, "Service details for this company haven't been confirmed yet. Contact our team to confirm service availability for your project location."
  - Right: Secondary button **Contact TNT** (uses the selected company's short name).
- **Six Availability Rows** (padding 16 × 32, 1px White 10% dividers):
  - Left: service name (16px semibold white; gold and underlined on hover), with an optional note under it in 13px White 55%.
  - Right: status badge, then a 13px semibold Gold link. The link reads "Request a quote", or "Ask us" when the status is "Contact us to confirm".

**Panel data:** design every company's state as its own frame or variant.

| Service | TNT | Southway | RMS | JMS | TNT Canada | Eagle West |
|---|---|---|---|---|---|---|
| Crane Rental | Direct | Direct | Direct, note: "Including a dedicated wind division and tower cranes" | Direct, note: "Including bare crane rental" | Confirm | Direct, note: "Rail crane services; crawler cranes through the TNT network" |
| Specialized Rigging | Direct | Direct | Direct | Direct, note: "Jack and slide" | Confirm | Confirm |
| Machinery Moving | Direct | Direct | Direct | Direct, note: "Machinery and equipment relocation" | Confirm | Direct, note: "Industrial moving" |
| Heavy Haul & Transport | Confirm | Confirm | Direct, note: "Heavy-haul trucking" | Direct, note: "Heavy haul and on-site transport" | Confirm | Confirm |
| Lift Planning & Engineering | Direct | Direct | Direct, note: "Lift planning" | Direct, note: "Engineering services and custom fabrication" | Confirm | Confirm |
| Industrial Storage | Direct, note: "Buda (two sites), Houston and Dallas, TX" | Direct, note: "Conyers, GA" | Direct, note: "Henderson, CO" | Confirm | Confirm | Confirm |

"Direct" is the **Offered directly** badge; "Confirm" is the **Contact us to confirm** badge.

**Legend** (24px below the panel, 3 columns on desktop, stacked on mobile, 13px White 65%):
- [Offered directly] "Listed on the company's own services."
- [Through the TNT network] "Sourced through another TNT company."
- [Contact us to confirm] "Not yet confirmed. It may still be available, so ask our team."

### 08 — Projects (Graphite)

**Header:**
- Eyebrow: **PROJECTS**
- H2: **PROVEN CAPABILITIES.** / **REAL-WORLD PROJECTS.**

**Grid:** 3 Project Cards, 3 across on desktop, stacked on mobile, 20px gap.

**Project Card:** Black fill, 1px White 10% border, radius 12.
- Photo at 4:3
- Body, padding 20:
  - Service label: Label style, Gold
  - Title: Display XS, white
  - Pill (1px White 15% border, 12px White 55%): "Project details coming soon"

**Cards:**
1. **Crane Rental**, title **INFRASTRUCTURE · BRIDGE GIRDER SETTING**. Photo: TNT all-terrain crane setting a bridge girder over water.
2. **Specialized Rigging**, title **INDUSTRIAL · VESSEL PLACEMENT**. Photo: TNT hydraulic gantry lifting a vessel-sized load.
3. **Wind Energy**, title **RENEWABLES · TURBINE ERECTION**. Photo: two crawler cranes erecting a wind turbine tower section.

### 09 — Safety & Engineering (Slate)

**Header:**
- Eyebrow: **SAFETY & ENGINEERING**
- H2: **SAFETY AND PRECISION** / **AT EVERY STAGE**

**Layout:** two cards, side by side on desktop, stacked on mobile, 24px gap. Each has radius 12, padding 40 desktop / 32 mobile, and the button pinned to the bottom.

**Card 1 (Black fill, 1px Gold 60% border):**
- Icon well: 48×48, radius 8, Gold 15% fill, 24px gold engineering icon.
- Title: **ENGINEERING EXPERTISE** (Display M, white)
- Body: "Complex lifting operations call for careful planning, technical analysis and the right equipment for the job."
- Bullets (6px gold dots, 15px White 80%): Critical lift planning · Engineered lifting solutions · Equipment selection · Ground condition assessment · Project-specific technical support
- Button: Primary **Explore Engineering**

**Card 2 (Black fill, 1px White 10% border):**
- iCARE safety badge: 64–80px wide, on a small white rounded tile so the dark artwork stays visible.
- Title: **SAFETY COMMITMENT**
- Body: "Safety is an essential consideration throughout TNT's lifting, rigging and industrial operations, and iCARE is the program every company in the family works to."
- Bullets: Safety-focused planning · Qualified operating teams · Established safety procedures · Project-specific risk considerations
- Button: Primary **Our Safety Commitment**

### 10 — Request a Quote (Gold)

**Layout:**
- **Desktop:** copy on the left (max width about 672), buttons on the right, bottom-aligned.
- **Mobile:** stacked.

**Content:**
- Eyebrow, **black 70%** (not gold, because it sits on gold): **REQUEST A QUOTE**
- H2, black: **LET'S PLAN** / **YOUR NEXT PROJECT**
- Lead, black 75%: "Tell us about your project and our team can help identify the right service and next steps."
- Buttons (On Gold variants):
  - Primary **Request a Quote**
  - Secondary **Contact Our Team**
  - Secondary, no arrow: **Call 1-800-799-2505**

---

## D. PAGE 2 — Crane Rental

### Band sequence (top to bottom)

| Section | Background |
|---|---|
| A Intro | Black |
| B Crane Types | Slate |
| C Across the Family | Black |
| D Specialized Crane Work | Graphite |
| E Related Services | Slate |
| Quote | Gold |

### A — Intro (Black)

**Layout:**
- **Desktop:** 2 equal columns, vertically centred, 64px gap.
- **Mobile:** text first, then the photo.

**Left column:**
- Eyebrow: **CORE SERVICE 01**
- **H1**, Display XL (72 desktop / 60 mobile, line height 0.95): **CRANE RENTAL**
- Lead (max width about 576): "Mobile, crawler, rough-terrain and specialized crane rental for construction, infrastructure and industrial lifting."
- Two rental options side by side on desktop, stacked on mobile, 16px gap, 32px above. Each has a 2px White 80% top rule, a Display XS title and 15px White 65% text:
  - **OPERATED CRANE RENTAL**: "The crane comes with an operator from the TNT team running it on your site."
  - **BARE CRANE RENTAL, WHERE AVAILABLE**: "The crane only, for your own qualified crew. JMS Crane & Rigging lists bare rental directly; confirm availability for other locations and crane types."
- Buttons, 40px above:
  - Primary **Request a Crane Rental Quote** (scrolls to the quote section)
  - Secondary **Find a Branch**
- **No "All services" back link.**

**Right column:** photo at 4:3, radius 12. TNT all-terrain crane mid-lift at a commercial site.

### B — Crane Types (Slate)

**Header** (same layout as overview section 05):
- Eyebrow: **CRANE TYPES**
- H2: **FIND THE RIGHT CRANE** / **FOR YOUR PROJECT**
- Lead: "Crane types are group-level categories. Not every type, or bare rental, is available at every location."
- Buttons: Primary **Explore the Fleet**; Secondary **Search Load Charts**

**Grid:** the same 6 Crane Type Cards as overview section 05, but with a **Black card fill** because they sit on Slate.

**Under the grid** (40px gap, 1px White 10% top divider, 32px padding):
- Label (White 55%): **ALSO ACROSS THE NETWORK**
- Chips with a Black fill: Tower Cranes · Telescopic Crawler Cranes · Stiff-Boom Cranes · Folding / Knuckle-Boom Cranes

### C — Crane Rental Across the Family (Black)

**Header:**
- **Desktop:** 2 columns, bottom-aligned.
- **Left:** Eyebrow **TNT FAMILY OF COMPANIES**, then H2 **CRANE RENTAL** / **ACROSS THE FAMILY**.
- **Right:** Lead: "Who offers crane rental, and what each company lists. Where a company's own services don't say, ask our team. Contact our team to confirm service availability for your project location."

**Company list:** one bordered list (Slate fill, 1px White 10% border, radius 12, White 10% row dividers), 48px below the header.

**Company Row** (padding 20 × 32):
- **Desktop:** 3 columns (about 1.1 : 1.4 : auto), centred vertically.
- **Mobile:** stacked. Leave out the note line when there is no note.
- **Column 1:** company name (Display XS, white), with "United States · territory" or "Canada · territory" under it in 13px White 55%.
- **Column 2:** note, 14px White 65%.
- **Column 3**, right-aligned: status badge, then a Gold "Contact {short name}" link.

**Rows:**

| Company | Country · territory | Status | Note | Link |
|---|---|---|---|---|
| TNT CRANE & RIGGING | United States · Texas · Louisiana · Oklahoma | Offered directly | — | Contact TNT |
| SOUTHWAY CRANE & RIGGING | United States · Georgia · Alabama · South Carolina · Florida | Offered directly | — | Contact Southway |
| RMS CRANES | United States · Colorado · Wyoming · New Mexico | Offered directly | "Including a dedicated wind division and tower cranes" | Contact RMS |
| JMS CRANE & RIGGING | United States · Montana · South Dakota | Offered directly | "Including bare crane rental" | Contact JMS |
| TNT CRANE & RIGGING CANADA | Canada · Alberta | Contact us to confirm | — | Contact TNT Canada |
| EAGLE WEST CRANE & RIGGING | Canada · British Columbia | Offered directly | "Rail crane services; crawler cranes through the TNT network" | Contact Eagle West |

### D — Specialized Crane Work (Graphite)

**Header** (max width about 672):
- Eyebrow: **SPECIALIZED CRANE WORK**
- H2: **REGIONAL SPECIALTIES**
- Lead: "Crane work offered by specific companies in the family, not at every location."

**Cards:** 3 Specialized Cards (Black fill), 3 across on desktop, stacked on mobile. Use the same Wind Energy, Tower Cranes and Rail Crane Services content as overview section 04.

### E — Related Services (Slate)

**Header:**
- Eyebrow: **RELATED SERVICES**
- H2, Display 48: **OFTEN PAIRED WITH CRANE RENTAL**

**Cards:** 2 Related Cards, side by side on desktop, stacked on mobile, 20px gap, 40px below the header. The whole card is a link.

**Related Card** (Black fill, 1px White 10% border, radius 12, padding 24, gold border on hover):
- Left: 48×48 icon well, radius 8, Gold 10% fill, 24px gold icon.
- Right:
  - Title: Display S, white
  - Description: 15px White 60%
  - "LEARN MORE" in 14px semibold white with a gold arrow, turning gold on hover

**Cards:**
1. **LIFT PLANNING & ENGINEERING** (engineering icon): "Critical lift plans, rigging diagrams and ground-bearing studies before equipment mobilizes."
2. **SPECIALIZED RIGGING** (rigging/hook icon): "Hydraulic gantries, jack-and-slide and precision positioning for loads a crane alone can't place."

### Quote section (Gold)

**Layout:**
- **Desktop:** 2 columns (about 0.8 : 1.2), 64px gap.
- **Mobile:** stacked.

**Left column:**
- Eyebrow, black 70%: **REQUEST A QUOTE**
- H2, black: **GET A CRANE** / **RENTAL QUOTE**
- Lead, black 75%: "Tell us the load, the site and the window. If you know the lift weight, radius and height, include them and our team can size the crane faster."
- Buttons, 32px above:
  - Primary On Gold, no arrow: **Call 1-800-799-2505**
  - Secondary On Gold: **Regional contacts**

**Right column — Quote form card** (Black fill, 1px White 10% border, radius 16, padding 32):

- **Tabs:** two pill toggles, **Request a Quote** (selected: gold fill, black text) and **General Enquiry** (unselected: White 12% border, white text).
- **Note:** "* Required field" in 13px White 60%. Every asterisk is Gold.
- **Field style:**
  - Label: 11px semibold tracked uppercase, White 60%, with a Gold asterisk when required and "(optional)" in plain case when optional.
  - Input: Black fill, 1px White 15% border, radius 6, 12 × 16 padding, 14px white text, White 40% placeholder, gold border and ring on focus.
- **Fields** (two columns on desktop, one on mobile):
  - Full name *, Company
  - Email *, Phone *
  - Jobsite ZIP / postal code *, Crane type * (a dropdown)
  - Load weight (tons) (optional), placeholder "e.g. 80"; Lift radius (ft) (optional)
  - "Services required": a multi-select chip group (full width) with Crane Rental · Specialized Rigging · Machinery Moving · Heavy Haul & Transport · Lift Planning & Engineering · Industrial Storage · Other / Not Sure. **Crane Rental is preselected**, shown as a gold-filled chip.
  - Start date (date input), Estimated duration
  - Project description (multi-line, full width)
  - Attach a drawing or spec (optional): a file input
- **Submit button:** Primary (gold) **Request a Quote**.

**Form states (design each one):**
1. Default.
2. Field error: 1px maroon #781514 border, or Gold if maroon fails contrast on black, plus a red-orange error line under the field and an error summary box at the top.
3. Submitting: the button reads "Submitting…".
4. **Not sent.** The form isn't connected yet, so this is the real post-submit state. Show a notice reading "Online submissions aren't connected yet, so nothing has been delivered to our team. Your details are still in the form. Please reach us directly:", followed by a **Call 1-800-799-2505** button and an **Email these details** button.

**There must be no "Thank you, we've received your request" success state.**

---

## E. Responsive rules (both pages)

- **Breakpoints:** Mobile under 640, Tablet 640–1023, Desktop 1024 and up.
- Two-column headers stack on tablet and mobile, with 32–48px gaps.
- Card grids go 3 → 2 → 1 (or 2 → 1). Card heights stay equal within a row.
- Headings step down (Display XL 72 → 60 → 48; Display L 60 → 48). Body sizes stay the same.
- Button groups wrap; buttons keep their size and are never full-width, except where a section stacks.
- No horizontal scrolling anywhere, except the company tab strip on mobile, which scrolls on purpose.
- Touch targets are at least 44px tall.

## F. Interaction and accessibility notes for handoff

- **Hover:** cards get a gold border and a 2px lift, photos zoom to 103%, button arrows slide 4px, links turn gold.
- **Focus:** a 2px gold focus ring on every interactive element.
- **Expandable rows:** the gold arrow rotates 90° when open.
- **Company tabs:** switch with click or the arrow keys, and only the panel content changes.
- **Reduced motion:** no lift, zoom or slide.
- **Contrast:** body text no lower than White 60% at 13px and below. Gold text on black is fine. Never put white text on gold; use black on gold.
- **Images:** every photo has descriptive alt text; the descriptions in this brief are the alt text.

## G. Content rules (do not break)

- Use only the copy in this brief. Don't add statistics, capacities, fleet counts, certifications, testimonials, customer names or project results.
- "Contact us to confirm" means *unconfirmed*, never "not offered".
- Keep every "where available" or "selected facilities" qualifier.
- Stock photos must keep the "Stock photo" tag. Pending photos must keep the "Photo pending" placeholder.

## H. Deliverables

1. **Local styles:** colours and text styles.
2. **Component set** with variants: Button (5 variants × default/hover/focus/pressed), Eyebrow, Chip, Status Badge (4), Provider Tag, Index Tag, Service Card (with photo / photo pending / targeted), Specialized Card, Crane Type Card (real / stock / pending), Step, Company Tab (selected / default / hover / focus), Availability Row, Project Card, Company Row, Related Card, Form Field (default / focus / error), Quote Form (4 states).
3. **Services overview** page frames at Desktop 1440, Tablet 768 and Mobile 375.
4. **Crane Rental** page frames at Desktop 1440, Tablet 768 and Mobile 375.
5. **Regional Availability panel:** all 6 company states.

Before you start, confirm you have the fonts **Impact**, **Open Sans** and **Geist Mono**. If any is missing, tell me which one, and don't substitute it silently.
