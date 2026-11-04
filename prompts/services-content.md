Use the content below, word for word, to build the TNT Crane & Rigging Services pages: /services (overview) and /services/crane-rental. This is the complete, approved copy and data from the TNT Light project. Do not rewrite, shorten, add or invent anything: no capacities, fleet counts, certifications, statistics, testimonials or project results. Keep every caveat ("where available", "selected facilities", "contact us to confirm") exactly as written. Wherever a value says "from the availability table", compute it from DATA 3; don't hard-code it.

====================================================================
DATA 1 — THE SIX CORE SERVICES (in this order)
====================================================================
01  Crane Rental                 id: crane-rental                (has its own page: /services/crane-rental)
    Short line: Operated crane rental — and bare rental where available — for construction, infrastructure and industrial lifts.
02  Specialized Rigging          id: specialized-rigging
    Short line: Hydraulic gantries, jack-and-slide and precision positioning for loads a crane alone can't place.
03  Machinery Moving             id: machinery-moving
    Short line: Relocation, installation and precise positioning of industrial equipment and plant machinery.
04  Heavy Haul & Transport       id: heavy-haul-transport
    Short line: Oversized and overweight industrial loads moved by specialized trailers and on-site transport.
05  Lift Planning & Engineering  id: lift-planning-engineering
    Short line: Critical lift plans, rigging diagrams and ground-bearing studies before equipment mobilizes.
06  Industrial Storage           id: industrial-storage
    Short line: Indoor and outdoor equipment storage and staging at selected TNT facilities.

Link rule: a service with its own page links to it; every other service links to /services#<id>.
Form service options: the six labels above + "Other / Not Sure".

====================================================================
DATA 2 — OPERATING COMPANIES
====================================================================
TNT Crane & Rigging         short: TNT          territory: Texas · Louisiana · Oklahoma                 country: United States
Southway Crane & Rigging    short: Southway     territory: Georgia · Alabama · South Carolina · Florida  country: United States
RMS Cranes                  short: RMS          territory: Colorado · Wyoming · New Mexico               country: United States
JMS Crane & Rigging         short: JMS          territory: Montana · South Dakota                        country: United States
TNT Crane & Rigging Canada  short: TNT Canada   territory: Alberta                                       country: Canada
Eagle West Crane & Rigging  short: Eagle West   territory: British Columbia                              country: Canada

====================================================================
DATA 3 — AVAILABILITY (company × service)
====================================================================
Status labels:
- direct = "Offered directly"
- network = "Through the TNT network"
- unconfirmed = "Contact us to confirm"
- not_offered = "Not offered"

Any cell not listed below is UNCONFIRMED, never "Not offered". No cell is "Not offered".

TNT Crane & Rigging:
- Crane Rental: direct
- Specialized Rigging: direct
- Machinery Moving: direct
- Lift Planning & Engineering: direct
- Industrial Storage: direct. Note: "Buda (two sites), Houston and Dallas, TX"

Southway:
- Crane Rental: direct
- Specialized Rigging: direct
- Machinery Moving: direct
- Lift Planning & Engineering: direct
- Industrial Storage: direct. Note: "Conyers, GA"

RMS Cranes:
- Crane Rental: direct. Note: "Including a dedicated wind division and tower cranes"
- Specialized Rigging: direct
- Machinery Moving: direct
- Heavy Haul & Transport: direct. Note: "Heavy-haul trucking"
- Lift Planning & Engineering: direct. Note: "Lift planning"
- Industrial Storage: direct. Note: "Henderson, CO"

JMS:
- Crane Rental: direct. Note: "Including bare crane rental"
- Specialized Rigging: direct. Note: "Jack and slide"
- Machinery Moving: direct. Note: "Machinery and equipment relocation"
- Heavy Haul & Transport: direct. Note: "Heavy haul and on-site transport"
- Lift Planning & Engineering: direct. Note: "Engineering services and custom fabrication"

TNT Crane & Rigging Canada: (none confirmed; every service is unconfirmed)

Eagle West:
- Crane Rental: direct. Note: "Rail crane services; crawler cranes through the TNT network"
- Machinery Moving: direct. Note: "Industrial moving"

Fallback line: "Contact our team to confirm service availability for your project location."

====================================================================
PAGE 1 — /services
====================================================================
SEO
- Title: Crane Rental, Rigging & Industrial Services | TNT Crane & Rigging
- Description: Explore crane rental, specialized rigging, machinery moving, heavy-haul transport, engineering, and industrial storage solutions from TNT Crane & Rigging.
- Canonical: /services

01 HERO
- Eyebrow: Our Services
- H1: Full-scope lifting, / rigging & industrial solutions (gold accent on "industrial solutions")
- Body: From crane rental and specialized rigging to heavy transport, engineering and industrial storage, TNT Crane & Rigging brings together the capabilities of its family of companies to support complex projects across North America.
- Buttons:
  - "Explore Our Services" (smooth-scrolls to #core-services)
  - "Request a Quote" (/contact#contact-form)
- Photo: /photos/cases/tnt-142-refinery-reactor-exchange.jpg
  - Alt: "Large TNT crawler crane rigged for a heavy lift at a refinery"

02 INTRODUCTION
- Eyebrow: The TNT Network
- Heading: One network. / Complete project support.
- Body: TNT Crane & Rigging brings together specialized equipment, experienced teams and regional expertise for lifting, rigging, transportation, engineering and industrial projects. Through its family of companies, TNT connects customers with the capabilities their specific project requires.
- Key messages (title — body):
  - Connected regional expertise — Local teams who know their sites, backed by the wider TNT family.
  - Broad equipment capabilities — Cranes, rigging systems and transport across the network.
  - Integrated industrial services — Lifting, rigging, moving, hauling and storage under one conversation.
  - Project-specific technical support — Planning and engineering matched to what each job needs.

03 CORE SERVICES (id: core-services)
- Eyebrow: Core Services
- Heading: Our core services
- Subheading: Explore comprehensive lifting, rigging, transportation and industrial solutions.

Each of the six cards shows:
- photo with the index badge
- title and description
- list label + chips
- optional expandable second list
- scope caveat (small type)
- "Offered directly by:" + the short names of the companies with status direct, from the availability table; if none, "contact our team to confirm"
- button: "Explore Crane Rental" for Crane Rental (goes to its page); "Request a Quote" for the rest (/contact?service=<id>#contact-form)

Each card's anchor id is the service id.

Card 01 Crane Rental
- Description: Mobile, crawler, rough-terrain and specialized crane rental for construction, infrastructure and industrial lifting.
- List label: Crane types across the network
- Chips: All-Terrain Cranes · Hydraulic Truck Cranes · Crawler Cranes · Rough-Terrain Cranes · Carry Deck Cranes · Boom Trucks · Tower Cranes · Telescopic Crawler Cranes · Stiff-Boom Cranes · Folding / Knuckle-Boom Cranes
- Expandable "Rental options": Operated crane rental · Bare crane rental, where available
- Scope: Crane types are group-level categories. Not every type, or bare rental, is available at every location.
- Photo: /photos/services/crane-rental-at-crane-cooler-lift.jpg
  - Alt: "TNT Crane & Rigging all-terrain crane mid-lift at a commercial site"

Card 02 Specialized Rigging
- Description: Specialized lifting, positioning and load-handling for complex industrial equipment and heavy machinery.
- List label: Key capabilities
- Chips: Hydraulic Gantry Systems · Jack-and-Slide Systems · Hydraulic Jacks · Machinery Skates · Cantilever Bars · Specialized Rigging Forklifts · Self-Propelled Modular Transporters (SPMTs)
- Photo: /photos/rigging/hydraulic-gantry.jpg
  - Alt: "TNT hydraulic gantry setting a heavy vessel-sized load"

Card 03 Machinery Moving
- Description: Relocation, positioning and installation of industrial equipment in demanding plant and facility environments.
- List label: Applications
- Chips: Industrial Equipment Relocation · Plant Equipment Moving · Equipment Installation · Precision Positioning · Machinery Removal · Facility Relocation Support
- Expandable "Example equipment": CNC Machines · Industrial Presses · Generators · Transformers · Chillers · Data Center Equipment · MRI Equipment · Industrial Vaults
- Scope: Examples of typical applications, not a guarantee of availability at every location.
- Photo: /photos/rigging/versa-lift-machinery-moving.jpg
  - Alt: "TNT Versa-Lift moving a large transformer"

Card 04 Heavy Haul & Transport
- Description: Specialized transportation for oversized, overweight and complex industrial loads.
- List label: Key capabilities
- Chips: Heavy-Haul Trucking · Oversized Load Transportation · Specialized Trailers · Industrial Equipment Transportation · On-Site Heavy Transport · SPMT Transportation · Transport Planning
- Scope: RMS Cranes and JMS Crane & Rigging offer heavy haul directly. Transport capabilities differ across the rest of the network.
- Photo: /photos/rigging/spmt-modular-transport.jpg
  - Alt: "Self-propelled modular transporter carrying a large transformer"

Card 05 Lift Planning & Engineering
- Description: Engineering expertise and detailed planning to support complex lifting, rigging and industrial operations.
- List label: Key capabilities
- Chips: Critical Lift Planning · Engineered Lift Plans · Rigging Diagrams · Ground-Bearing Studies · Wind Condition Assessments · Lift Feasibility Studies · Transport Route Studies · Specialized Equipment Design · Custom Fabrication, where available
- Scope: Engineering deliverables are scoped per project; confirm what your project needs with our team.
- Photo: /photos/rigging/cantilever-spreader-bar.jpg
  - Alt: "TNT cantilever spreader bar rigged below a crawler crane hook beside a high-rise"

Card 06 Industrial Storage
- Description: Equipment storage, staging and handling at selected TNT facilities, backed by crane and rigging resources.
- List label: Key capabilities
- Chips: Indoor Storage · Outdoor Storage · Climate-Controlled Storage, where available · Equipment Staging · Industrial Equipment Handling · Crane and Rigging Support
- Expandable "Storage locations": Buda, TX (two sites) · Houston, TX · Dallas, TX · Conyers, GA · Henderson, CO
- Scope: Storage features differ by facility. Confirm current availability for your location.
- Photo: none. Show a storage icon tile labelled "Facility photo pending".

04 SPECIALIZED CAPABILITIES (id: specialized)
- Eyebrow: Specialized Capabilities
- Heading: Specialized solutions / for complex projects
- Body: Regional and industry-specific capabilities within the TNT family. Each one is offered by the company named on it, not across every location.
- Cards (title | provider tag | items | link):
  - Wind Energy
    - Provider: RMS Cranes wind division · regional support elsewhere
    - Items: Wind Turbine Component Lifting · Rotor Assembly · Nacelle Lifting · Maintenance Support · Repowering · Decommissioning · Gearbox and Component Handling
    - Link: "Discuss a wind project" → /contact
  - Tower Cranes
    - Provider: RMS Cranes
    - Items: Self-Erecting Tower Cranes · Flat-Top Tower Cranes · Hammerhead Tower Cranes · Luffing Tower Cranes · Erection and Dismantling Support
    - Link: "See tower cranes in the fleet" → /#tower-cranes
  - Rail Crane Services
    - Provider: Eagle West Crane & Rigging
    - Items: Rail Infrastructure Lifting · Road-and-Rail Crane Operations · Railway Construction Support
    - Link: "Talk to our team" → /contact
  - Precast Concrete
    - Provider: Eagle West Crane & Rigging · Chilliwack, BC
    - Items: Road Barriers · OCTA-BLOC Products · Parking Curbs · Related Precast Products
    - Note: A product and installation offering, not crane rental.
    - Link: "Ask about precast products" → /contact
  - Custom Fabrication
    - Provider: JMS Crane & Rigging
    - Items: Custom Equipment Design · Special Fabrication · Project-Specific Equipment Solutions
    - Link: "See Lift Planning & Engineering" → #lift-planning-engineering

05 CRANE RENTAL PREVIEW (id: crane-types)
- Eyebrow: Crane Rental
- Heading: Find the right crane / for your project
- Body: TNT's range of crane solutions for construction, industrial, infrastructure and specialized lifting. Availability varies by location.
- Buttons:
  - "Explore Crane Rental" → /services/crane-rental
  - "Search Load Charts" → /load-chart/all-terrain-cranes
- Crane type cards (name | application | photo | link). Stock photos carry a "Stock photo" tag; no photo shows "Photo pending".
  - All-Terrain Cranes
    - Application: Road-legal telescopic cranes with off-road capability, for sites that need a crane on the move.
    - Photo: /photos/fleet/all-terrain-crane.jpg (alt: "Red TNT all-terrain crane lifting in downtown Houston")
    - Link: "View load charts" → /load-chart/all-terrain-cranes
  - Crawler Cranes
    - Application: Tracked lattice-boom cranes for heavy, long-duration lifts on prepared ground.
    - Photo: /photos/fleet/crawler-crane.jpg (alt: "TNT crawler crane setting bridge girders over a creek")
    - Link: "Explore" → /#crawler-cranes
  - Rough-Terrain Cranes
    - Application: Compact four-wheel-drive cranes for unpaved and uneven job sites.
    - Photo (stock): https://images.unsplash.com/photo-1597089038854-6be9a836a40d?fm=jpg&q=70&w=800&auto=format&fit=crop (alt: "Mobile crane boom and hook block against the sky")
    - Link: "Explore" → /#rough-terrain-cranes
  - Hydraulic Truck Cranes
    - Application: Telescopic cranes that travel on public roads and set up quickly on arrival.
    - Photo: /photos/fleet/hydraulic-truck-crane.jpg (alt: "A line of TNT hydraulic truck cranes lifting a pipeline section")
    - Link: "Explore" → /#hydraulic-truck-cranes
  - Carry Deck Cranes
    - Application: Low-profile pick-and-carry cranes for plants, warehouses and tight spaces.
    - Photo: none ("Photo pending")
    - Link: "Explore" → /#carry-deck-cranes
  - Boom Trucks
    - Application: Truck-mounted cranes for lighter picks, deliveries and material placement.
    - Photo (stock): https://images.unsplash.com/photo-1583246820648-e06ee5e2c267?fm=jpg&q=70&w=800&auto=format&fit=crop (alt: "Truck-mounted boom crane working at a residential job site")
    - Link: "Ask about boom trucks" → /contact?service=crane-rental#contact-form

06 HOW WE WORK
- Eyebrow: How We Work
- Heading: From planning / to project execution
- Body: A typical engagement. Your team will confirm the steps for your project.
- Steps (labelled "Step 01" to "Step 04"):
  1. Discuss your requirements — Share your project scope, location, equipment needs and anticipated schedule.
  2. Plan the solution — Technical teams assess lifting requirements, equipment suitability and site constraints.
  3. Coordinate resources — Equipment, people and support are lined up to match the service scope and availability.
  4. Execute the project — The responsible operating team carries out the planned lift, rig, move or haul.

07 REGIONAL SERVICE AVAILABILITY (id: availability)
- Eyebrow: Regional Service Availability
- Heading: Local expertise. / Connected capabilities.
- Body: TNT's regional network connects you with the right teams, equipment and services for your project location. Choose a company to see what it offers.
- Link: "Find a branch on the map" → /#coverage
- Interactive tabs, one per company:
  - Tab shows the short name + territory.
  - Panel header: "<Country> · <territory>", the company name, and a "Contact <short name>" button → /contact#regional-contacts.
  - If the company has nothing confirmed, add: "Service details for this company haven't been confirmed yet. Contact our team to confirm service availability for your project location."
- Rows: all six services, each with:
  - its status badge and note, from the availability table
  - a link: "Request a quote" (or "Ask us" when unconfirmed) → /contact?service=<id>#contact-form
  - the service name links to its page or card
- Legend:
  - Offered directly — Listed on the company's own services.
  - Through the TNT network — Sourced through another TNT company.
  - Contact us to confirm — Not yet confirmed. It may still be available, so ask our team.

08 PROJECTS
- Eyebrow: Projects
- Heading: Proven capabilities. / Real-world projects.
- Each card shows the service label, the category, and a "Project details coming soon" pill. No project names or results.
  - Crane Rental | Infrastructure · Bridge girder setting
    - Photo: /photos/cases/tnt-211-bridge-girder-set.jpg (alt: "TNT all-terrain crane setting a bridge girder over water")
  - Specialized Rigging | Industrial · Vessel placement
    - Photo: /photos/cases/tnt-176-petrochemical-vessel-placement.jpg (alt: "TNT hydraulic gantry lifting a vessel-sized load")
  - Wind Energy | Renewables · Turbine erection
    - Photo: /photos/cases/tnt-098-wind-farm-turbine-erection.jpg (alt: "Two crawler cranes erecting a wind turbine tower section")

09 SAFETY & ENGINEERING
- Eyebrow: Safety & Engineering
- Heading: Safety and precision / at every stage
- Card "Engineering expertise":
  - Body: Complex lifting operations call for careful planning, technical analysis and the right equipment for the job.
  - Points: Critical lift planning · Engineered lifting solutions · Equipment selection · Ground condition assessment · Project-specific technical support
  - Button: "Explore Engineering" → #lift-planning-engineering
- Card "Safety commitment" (iCARE badge /brand/icare-badge.png, alt "TNT iCARE safety program badge"):
  - Body: Safety is an essential consideration throughout TNT's lifting, rigging and industrial operations, and iCARE is the program every company in the family works to.
  - Points: Safety-focused planning · Qualified operating teams · Established safety procedures · Project-specific risk considerations
  - Button: "Our Safety Commitment" → /#safety

10 QUOTE BAND (id: quote, gold)
- Label: Request a Quote
- Heading: Let's plan / your next project
- Body: Tell us about your project and our team can help identify the right service and next steps.
- Buttons:
  - "Request a Quote" → /contact#contact-form
  - "Contact Our Team" → /contact#regional-contacts
  - "Call 1-800-799-2505" → tel:+18007992505

Behaviour: old links to /services#crane-rental (including #crane-rental#crane-rental) redirect to /services/crane-rental.

====================================================================
PAGE 2 — /services/crane-rental
====================================================================
SEO
- Title: Crane Rental | TNT Crane & Rigging
- Description: Operated and bare crane rental across the TNT Crane & Rigging family: all-terrain, crawler, rough-terrain, hydraulic truck and carry deck cranes, boom trucks and more, in the US and Canada.
- Canonical: /services/crane-rental

A INTRO
- Eyebrow: Core Service 01
- H1: Crane Rental
- Body: Mobile, crawler, rough-terrain and specialized crane rental for construction, infrastructure and industrial lifting.
- Rental options:
  - Operated crane rental — The crane comes with an operator from the TNT team running it on your site.
  - Bare crane rental, where available — The crane only, for your own qualified crew. JMS Crane & Rigging lists bare rental directly; confirm availability for other locations and crane types.
- Buttons:
  - "Request a Crane Rental Quote" (scrolls to #quote)
  - "Find a Branch" → /#coverage
- Photo: /photos/services/crane-rental-at-crane-cooler-lift.jpg
  - Alt: "TNT Crane & Rigging all-terrain crane mid-lift at a commercial site"
- No "All services" back link.

B CRANE TYPES
- Eyebrow: Crane Types
- Heading: Find the right crane / for your project
- Body: Crane types are group-level categories. Not every type, or bare rental, is available at every location.
- Buttons:
  - "Explore the Fleet" → /#fleet-guide
  - "Search Load Charts" → /load-chart/all-terrain-cranes
- Crane type cards: the same six as /services section 05.
- "Also across the network" chips: Tower Cranes · Telescopic Crawler Cranes · Stiff-Boom Cranes · Folding / Knuckle-Boom Cranes

C CRANE RENTAL ACROSS THE FAMILY
- Eyebrow: TNT Family of Companies
- Heading: Crane rental / across the family
- Body: Who offers crane rental, and what each company lists. Where a company's own services don't say, ask our team. Contact our team to confirm service availability for your project location.
- One row per company: name; "<Country> · <territory>"; the crane rental note; status badge; "Contact <short name>" → /contact#regional-contacts.
- Crane rental status per company:
  - TNT: Offered directly
  - Southway: Offered directly
  - RMS: Offered directly — "Including a dedicated wind division and tower cranes"
  - JMS: Offered directly — "Including bare crane rental"
  - TNT Canada: Contact us to confirm
  - Eagle West: Offered directly — "Rail crane services; crawler cranes through the TNT network"

D SPECIALIZED CRANE WORK
- Eyebrow: Specialized Crane Work
- Heading: Regional specialties
- Body: Crane work offered by specific companies in the family, not at every location.
- Cards: Wind Energy, Tower Cranes and Rail Crane Services, exactly as in /services section 04 (same provider tags, items and links).

E RELATED SERVICES
- Eyebrow: Related Services
- Heading: Often paired with crane rental
- Link cards (icon, title, short line, "Learn more"):
  - Lift Planning & Engineering — Critical lift plans, rigging diagrams and ground-bearing studies before equipment mobilizes. → /services#lift-planning-engineering
  - Specialized Rigging — Hydraulic gantries, jack-and-slide and precision positioning for loads a crane alone can't place. → /services#specialized-rigging

QUOTE (id: quote, gold)
- Label: Request a Quote
- Heading: Get a crane / rental quote
- Body: Tell us the load, the site and the window. If you know the lift weight, radius and height, include them and our team can size the crane faster.
- Buttons:
  - "Call 1-800-799-2505" → tel:+18007992505
  - "Regional contacts" → /contact#regional-contacts
- Form: the site's quote form, inline, with "Crane Rental" preselected.
  - Service options: the six services + "Other / Not Sure".
  - Until a backend exists, it must say nothing was sent. Never show a fake success message.

====================================================================
SITE-WIDE LINKS THAT USE THIS CONTENT
====================================================================
- Nav "Services" → /services. Its menu lists the six services (Crane Rental → /services/crane-rental, the others → /services#<id>).
- Nav company filter: shows only a company's direct/network services, from DATA 3.
- Footer "Services" column: All Services (/services) + the six services, linked the same way.
- Homepage "Full-Scope Capability" cards:
  - the six services with stage words Lift · Rig · Move · Haul · Plan · Store
  - the short lines from DATA 1
  - each card links the same way
- Branch map: each branch lists its company's direct/network services, or the fallback line if none.
