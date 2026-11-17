/**
 * NEWS DATA — the 40 newest articles across the TNT family's live news
 * pages, read 2026-11-17 from:
 *   tntcrane.com/news · southwaycrane.com/news · rmscranes.com/news ·
 *   tntcrane.ca/news (pp. 1–2) · eaglewestcranes.com/news (pp. 1–2)
 * JMS Crane & Rigging has no news section.
 *
 * Titles, dates and URLs are the live sites' own. Summaries are short
 * paraphrases of each listing's teaser, not article text. Every story links
 * out to its article on the company's site (this site hosts no article
 * bodies).
 *
 * TOPICS: tntcrane.ca and eaglewestcranes.com publish categories, and the
 * first one listed is used. tntcrane.com, southwaycrane.com and
 * rmscranes.com publish none, so those stories are filed by their title.
 *
 * PHOTOS: the listing pages carry no featured images, so each story uses
 * real TNT-family photography already in this project, chosen to match its
 * subject. The three tntcrane.com stories keep their own featured images
 * (downloaded 2026-11-04 for the homepage's Latest News). Swap in each
 * article's own image when they're collected.
 *
 * A snapshot: new posts won't appear until this list is updated (or wired
 * to the sites' feeds).
 */

export type CompanyId = "tnt-us" | "southway" | "rms" | "tnt-canada" | "eagle-west";

export type Source = {
  id: CompanyId;
  name: string;
  short: string;
  /** Brand mark in public/brand; TNT Canada shares TNT's. */
  logo: string;
  newsUrl: string;
};

export const SOURCES: Record<CompanyId, Source> = {
  "tnt-us": { id: "tnt-us", name: "TNT Crane & Rigging", short: "TNT", logo: "/brand/tnt.svg", newsUrl: "https://tntcrane.com/news/" },
  southway: { id: "southway", name: "Southway Crane & Rigging", short: "Southway", logo: "/brand/southway.svg", newsUrl: "https://southwaycrane.com/news/" },
  rms: { id: "rms", name: "RMS Cranes", short: "RMS", logo: "/brand/rms-cranes.svg", newsUrl: "https://rmscranes.com/news/" },
  "tnt-canada": { id: "tnt-canada", name: "TNT Crane & Rigging Canada", short: "TNT Canada", logo: "/brand/tnt.svg", newsUrl: "https://www.tntcrane.ca/news/" },
  "eagle-west": { id: "eagle-west", name: "Eagle West Crane & Rigging", short: "Eagle West", logo: "/brand/eagle-west.svg", newsUrl: "https://www.eaglewestcranes.com/news/" },
};

export const TOPICS = ["Lift Planning", "Crane Safety", "Crawler Cranes", "Rigging", "Crane Rental", "Construction"] as const;
export type Topic = (typeof TOPICS)[number];

export type Story = {
  id: string;
  source: CompanyId;
  title: string;
  /** ISO yyyy-mm-dd */
  date: string;
  topic: Topic;
  /** Every category the site lists (empty where it lists none). */
  tags: string[];
  summary: string;
  url: string;
  photo: string;
  alt: string;
};

// Photo pool: real TNT / RMS photography only (see photos.ts provenance).
const P = {
  liftPlan: { photo: "/photos/news/tnt-news-how-lift-plans-are-created.jpg", alt: "Engineered crane lift plan drawing" },
  mobileInstall: { photo: "/photos/news/tnt-news-mobile-cranes-heavy-equipment.jpg", alt: "Two TNT mobile cranes lifting equipment at an industrial plant" },
  counterweight: { photo: "/photos/news/tnt-news-how-crane-counterweights-work.jpg", alt: "TNT crane setting bridge girders" },
  engineering: { photo: "/photos/services/figma-05-engineering.jpg", alt: "Lift engineers reviewing a crane plan on site" },
  safetyBriefing: { photo: "/photos/news/figma-news-02-safety-award.jpg", alt: "A crew in hard hats and hi-vis at a site safety briefing" },
  crawlerBridge: { photo: "/photos/safety/icare-bridge-girder-crawler.jpg", alt: "Crawler crane setting a bridge girder" },
  crawler: { photo: "/photos/tnt-crawler-crane.jpg", alt: "TNT crawler crane on a job site" },
  crawlerWide: { photo: "/photos/tnt-crawler-crane-wide.jpg", alt: "TNT crawler crane with a long boom" },
  crawlerLift: { photo: "/photos/tnt-crawler-bridge-lift.jpg", alt: "Crawler crane lifting a bridge section" },
  fleetCrawler: { photo: "/photos/fleet/crawler-crane.jpg", alt: "Crawler crane in TNT's fleet" },
  boomHook: { photo: "/photos/tnt-crane-boom-hook.jpg", alt: "Crane boom and hook block" },
  rigging: { photo: "/photos/services/figma-02-rigging.jpg", alt: "Riggers preparing a load" },
  spreader: { photo: "/photos/rigging/cantilever-spreader-bar.jpg", alt: "Spreader bar rigging on a heavy load" },
  gantry: { photo: "/photos/rigging/hydraulic-gantry.jpg", alt: "Hydraulic gantry lifting machinery" },
  jackSlide: { photo: "/photos/rigging/jack-and-slide.jpg", alt: "Jack-and-slide system moving heavy equipment" },
  spmt: { photo: "/photos/rigging/spmt-modular-transport.jpg", alt: "Self-propelled modular transporter carrying a heavy load" },
  rental: { photo: "/photos/services/crane-rental-at-crane-cooler-lift.jpg", alt: "All-terrain crane lifting a cooler unit" },
  allTerrain: { photo: "/photos/fleet/all-terrain-crane.jpg", alt: "All-terrain crane in TNT's fleet" },
  truckCrane: { photo: "/photos/fleet/hydraulic-truck-crane.jpg", alt: "Hydraulic truck crane" },
  towerDusk: { photo: "/photos/fleet/fleet-cover-tower-crane-dusk.jpg", alt: "Tower crane at dusk" },
  quoteHouston: { photo: "/photos/quote/quote-all-terrain-houston.jpg", alt: "All-terrain crane working in Houston" },
  bridgeGirder: { photo: "/photos/cases/tnt-211-bridge-girder-set.jpg", alt: "Bridge girder being set by crane" },
  refinery: { photo: "/photos/cases/tnt-142-refinery-reactor-exchange.jpg", alt: "Refinery reactor exchange lift" },
  vessel: { photo: "/photos/cases/tnt-176-petrochemical-vessel-placement.jpg", alt: "Petrochemical vessel placement" },
  wind: { photo: "/photos/cases/tnt-098-wind-farm-turbine-erection.jpg", alt: "Wind turbine erection by crane" },
  heavyLift: { photo: "/photos/services/figma-03-heavy-lift.jpg", alt: "Heavy lift in progress" },
  industrial: { photo: "/photos/services/figma-04-industrial-services.jpg", alt: "Industrial crane services" },
  about: { photo: "/photos/about/about-hero-crawler-sunset.webp", alt: "Crawler crane at sunset" },
} as const;

type Row = [CompanyId, string, string, Topic, string[], string, string, keyof typeof P];

const ROWS: Row[] = [
  ["tnt-canada", "How to Read a Crane Load Chart", "2026-11-06", "Crane Safety", ["Crane Safety", "Lift Planning"],
    "Choosing a crane takes more than matching tonnage to load weight. Reading the load chart is where that decision starts.",
    "https://www.tntcrane.ca/how-to-read-a-crane-load-chart/", "boomHook"],
  ["eagle-west", "What Is a Tandem Lift and When Is It Required?", "2026-11-05", "Crane Safety", ["Crane Safety", "Lift Planning"],
    "When a load or a site calls for more than one crane, a tandem lift is the engineered answer — with the planning and coordination that come with it.",
    "https://www.eaglewestcranes.com/what-is-a-tandem-lift-and-when-is-it-required/", "vessel"],
  ["tnt-canada", "The Difference Between Wet and Dry Crane Rentals", "2026-10-20", "Crane Rental", ["Crane Rental"],
    "For project managers and procurement teams: how wet and dry rentals differ, and why the rental structure matters as much as the crane spec.",
    "https://www.tntcrane.ca/the-difference-between-wet-and-dry-crane-rentals/", "rental"],
  ["tnt-canada", "What Does a Lift Supervisor Actually Do?", "2026-10-13", "Crane Safety", ["Crane Safety", "Lift Planning"],
    "On a complex lift, the lift supervisor holds the full picture — a role separate from the operator and the rigging crew.",
    "https://www.tntcrane.ca/what-does-a-lift-supervisor-actually-do/", "safetyBriefing"],
  ["tnt-canada", "Radio Communication Best Practices for Crawler Crane Operations", "2026-10-06", "Crawler Cranes", ["Crawler Cranes"],
    "Long booms and jibs make communication harder, so radio protocol belongs in the lift plan for crawler crane work.",
    "https://www.tntcrane.ca/radio-communication-best-practices-for-crawler-crane-operations/", "crawlerWide"],
  ["eagle-west", "What Happens During a Pre-Lift Safety Briefing?", "2026-10-06", "Crane Safety", ["Crane Safety"],
    "The pre-lift briefing lines up everyone on site before a lift begins, whether the pick is simple or complex.",
    "https://www.eaglewestcranes.com/what-happens-during-a-pre-lift-safety-briefing/", "engineering"],
  ["tnt-canada", "How Rigging Hardware Gets Inspected and Rated", "2026-09-24", "Rigging", ["Crane Safety", "Rigging"],
    "Hardware inspection runs from specification to retirement — a continuous discipline, not a pre-lift formality.",
    "https://www.tntcrane.ca/how-rigging-hardware-gets-inspected-and-rated/", "spreader"],
  ["eagle-west", "Tips for Coordinating Multiple Crawler Cranes on One Project", "2026-09-24", "Lift Planning", ["Lift Planning"],
    "Running several crawler cranes on one site is a different job from running one, and coordination during planning decides how it goes.",
    "https://www.eaglewestcranes.com/tips-for-coordinating-multiple-crawler-cranes-on-one-project/", "crawlerLift"],
  ["tnt-canada", "What Is a Luffing Jib and When Does It Matter?", "2026-09-11", "Lift Planning", ["Lift Planning"],
    "On tight urban sites where boundary lines rule out a conventional setup, a luffing jib can make the lift possible.",
    "https://www.tntcrane.ca/what-is-a-luffing-jib-and-when-does-it-matter/", "towerDusk"],
  ["eagle-west", "How Rail Crane Services Reduce Track Maintenance Downtime", "2026-09-08", "Lift Planning", ["Lift Planning", "Transportation & Infrastructure"],
    "Track possession windows are fixed and delays spread fast. Rail crane services are one way to cut that downtime.",
    "https://www.eaglewestcranes.com/how-rail-crane-services-reduce-track-maintenance-downtime/", "bridgeGirder"],
  ["tnt-canada", "How Lift Planning Reduces Risk on Oil Sands Sites", "2026-08-26", "Lift Planning", ["Lift Planning"],
    "On oil sands sites, lowering risk starts with the hazards identified before the lift begins.",
    "https://www.tntcrane.ca/how-lift-planning-reduces-risk-on-oil-sands-sites/", "refinery"],
  ["tnt-canada", "What Is a Tandem Lift and When Is It Required?", "2026-08-18", "Crane Safety", ["Crane Safety", "Lift Planning", "Rigging"],
    "Splitting one load across two or more cranes changes what the plan has to cover. TNT Canada's take on when it's required.",
    "https://www.tntcrane.ca/what-is-a-tandem-lift-and-when-is-it-required/", "heavyLift"],
  ["tnt-canada", "Safety Protocols for Crawler Crane Night Operations", "2026-08-06", "Crane Safety", ["Crane Safety", "Crawler Cranes"],
    "Night lifts bring risks daytime planning doesn't cover, so iCare adds extra pre-shift assessment.",
    "https://www.tntcrane.ca/safety-protocols-for-crawler-crane-night-operations/", "about"],
  ["eagle-west", "When Does a Project Need Engineered Rigging?", "2026-08-06", "Construction", ["Construction Management", "Lift Planning"],
    "How to tell which lifts need an engineer's signature on the plan, from 35+ years of lift work in BC.",
    "https://www.eaglewestcranes.com/when-does-a-project-need-engineered-rigging/", "rigging"],
  ["tnt-canada", "Crane Capacity Ratings and Configuration Variables", "2026-07-30", "Lift Planning", ["Lift Planning"],
    "Rated capacity against load weight isn't the whole story — configuration variables change what a crane can do.",
    "https://www.tntcrane.ca/crane-capacity-ratings-and-configuration-variables/", "allTerrain"],
  ["eagle-west", "How Crawler Crane Slew Bearings Work", "2026-07-21", "Crawler Cranes", ["Crane Safety", "Crawler Cranes"],
    "What the slew bearing does on a crawler crane, and why it matters for lift planning and site evaluation.",
    "https://www.eaglewestcranes.com/how-crawler-crane-slew-bearings-work/", "fleetCrawler"],
  ["tnt-us", "How Lift Plans Are Created", "2026-07-14", "Lift Planning", [],
    "Every crane lift starts with a lift plan, and the quality of the plan drives the outcome.",
    "https://tntcrane.com/how-lift-plans-are-created/", "liftPlan"],
  ["southway", "Benefits of All-Terrain Cranes on Bridge Construction Projects", "2026-07-14", "Construction", [],
    "Why all-terrain cranes suit bridge construction work.",
    "https://southwaycrane.com/2026/07/14/benefits-of-all-terrain-cranes-on-bridge-construction-projects/", "crawlerBridge"],
  ["rms", "How to Avoid Common Lift Planning Mistakes", "2026-07-14", "Lift Planning", [],
    "Lift planning failures tend to surface as mobilization problems, not warnings. How to avoid the common ones.",
    "https://rmscranes.com/how-to-avoid-common-lift-planning-mistakes/", "industrial"],
  ["tnt-canada", "Swing Radius and Site Space Requirements for Cranes", "2026-07-14", "Crane Safety", ["Crane Safety"],
    "Site preparation has to plan for the crane itself — its swing radius and footprint — not just the lift.",
    "https://www.tntcrane.ca/swing-radius-and-site-space-requirements-for-cranes/", "quoteHouston"],
  ["eagle-west", "Ground Bearing Pressure Explained for Crane Operations", "2026-07-13", "Construction", ["Construction Management"],
    "Ground bearing pressure is an early check that drives equipment selection and outrigger setup.",
    "https://www.eaglewestcranes.com/ground-bearing-pressure-explained-for-crane-operations/", "truckCrane"],
  ["tnt-us", "Mobile Cranes for Heavy Equipment Installations", "2026-06-25", "Crane Rental", [],
    "Matching crane type to site and load for installations such as a refinery compressor set or power plant equipment.",
    "https://tntcrane.com/mobile-cranes-for-heavy-equipment-installations/", "mobileInstall"],
  ["southway", "The Role of Specialized Rigging in Modern Construction", "2026-06-25", "Rigging", [],
    "Where standard crane access isn't possible, specialized rigging fills the gap — working alongside project managers and general contractors.",
    "https://southwaycrane.com/2026/06/25/the-role-of-specialized-rigging-in-modern-construction/", "jackSlide"],
  ["rms", "Why Proper Crane Placement is Crucial for Project Success", "2026-06-25", "Lift Planning", [],
    "Ground conditions drive crane placement, and placement is decided before the equipment reaches site.",
    "https://rmscranes.com/why-proper-crane-placement-is-crucial-for-project-success/", "crawler"],
  ["tnt-canada", "Wire Rope Inspection Guidelines for Rigging Safety", "2026-06-25", "Rigging", ["Rigging"],
    "A systematic inspection protocol for wire rope, one of the most important load-bearing components on a lift.",
    "https://www.tntcrane.ca/wire-rope-inspection-guidelines-for-rigging-safety/", "boomHook"],
  ["tnt-canada", "WorkSafeBC Requirements for Crawler Crane Operations", "2026-06-18", "Crawler Cranes", ["Crawler Cranes"],
    "The regulatory layers behind crawler crane work: ground assessment, operator certification, lift documentation and supervision.",
    "https://www.tntcrane.ca/worksafebc-requirements-for-crawler-crane-operations/", "crawlerWide"],
  ["tnt-canada", "Lattice Boom vs. Telescopic Boom Configurations", "2026-06-12", "Crane Rental", ["Crane Rental", "Lift Planning"],
    "How lattice and telescopic booms compare on mobilization time, site needs, crew and total cost.",
    "https://www.tntcrane.ca/lattice-boom-vs-telescopic-boom-configurations/", "allTerrain"],
  ["eagle-west", "What is a Lift Plan and Why Does it Matter?", "2026-06-12", "Lift Planning", ["Lift Planning"],
    "What a lift plan accounts for — load weight, ground conditions, overhead hazards and crew coordination.",
    "https://www.eaglewestcranes.com/what-is-a-lift-plan-and-why-does-it-matter/", "engineering"],
  ["tnt-us", "How Crane Counterweights Work", "2026-05-29", "Crane Safety", [],
    "Safe lifting depends on a balanced counterweight system. How it works.",
    "https://tntcrane.com/how-crane-counterweights-work/", "counterweight"],
  ["southway", "How Mobile Cranes Provide Support in the Film Industry", "2026-05-29", "Crane Rental", [],
    "Film sets need big equipment moved in step with production. Where mobile cranes come in.",
    "https://southwaycrane.com/2026/05/29/how-mobile-cranes-provide-support-in-the-film-industry/", "quoteHouston"],
  ["rms", "Tips for Minimizing Risks in Rigging Operations", "2026-05-29", "Rigging", [],
    "Lower rigging risk through coordination, the right equipment and safety attention at every stage.",
    "https://rmscranes.com/tips-for-minimizing-risks-in-rigging-operations/", "gantry"],
  ["tnt-canada", "Understanding Centre of Gravity in Heavy Lifting Projects", "2026-05-22", "Lift Planning", ["Lift Planning"],
    "How weight is distributed within a load is central to a safe, efficient heavy lift.",
    "https://www.tntcrane.ca/understanding-centre-of-gravity-in-heavy-lifting-projects/", "spmt"],
  ["eagle-west", "How Crawler Crane Jibs Extend Reach on Complex Projects", "2026-05-22", "Crawler Cranes", ["Crawler Cranes"],
    "Jib setups help crawler cranes reach around obstacles, tight access and changing elevations.",
    "https://www.eaglewestcranes.com/how-crawler-crane-jibs-extend-reach-on-complex-projects/", "crawlerLift"],
  ["tnt-canada", "The Difference Between Static and Dynamic Loads", "2026-05-14", "Crane Safety", ["Crane Safety", "Lift Planning"],
    "How static and dynamic loads act on equipment, and why knowing the difference cuts risk.",
    "https://www.tntcrane.ca/the-difference-between-static-and-dynamic-loads/", "heavyLift"],
  ["eagle-west", "Lift Planning for Precast Concrete Installations", "2026-05-14", "Lift Planning", ["Lift Planning", "Precast Concrete"],
    "Precast placement needs a fully developed lift plan before the crane arrives on site.",
    "https://www.eaglewestcranes.com/lift-planning-for-precast-concrete-installations/", "bridgeGirder"],
  ["tnt-canada", "How Different Soil Types Affect Crane Support Requirements", "2026-04-22", "Crane Safety", ["Crane Safety", "Lift Planning"],
    "Soil type changes ground bearing pressure and outrigger requirements in the lift plan.",
    "https://www.tntcrane.ca/how-different-soil-types-affect-crane-support-requirements/", "truckCrane"],
  ["tnt-us", "When to Choose a Crawler Crane for Your Construction Project", "2026-04-20", "Crawler Cranes", [],
    "How project requirements point to a crawler crane.",
    "https://tntcrane.com/when-to-choose-a-crawler-crane-for-your-construction-project/", "crawler"],
  ["southway", "Understanding the Load Capacity of Rough-Terrain Cranes", "2026-04-20", "Crane Rental", [],
    "How to read the load capacity of a rough-terrain crane.",
    "https://southwaycrane.com/2026/04/20/understanding-the-load-capacity-of-rough-terrain-cranes/", "rental"],
  ["rms", "Mobile Cranes vs Tower Cranes", "2026-04-20", "Crane Rental", [],
    "How the choice between mobile and tower cranes shapes efficiency and project outcomes.",
    "https://rmscranes.com/mobile-cranes-vs-tower-cranes/", "towerDusk"],
  ["tnt-canada", "Tips for Operating Crawler Cranes on Soft Ground", "2026-04-15", "Crawler Cranes", ["Crawler Cranes"],
    "Soft ground affects crawler crane stability, capacity and safety — and planning is how you handle it.",
    "https://www.tntcrane.ca/tips-for-operating-crawler-cranes-on-soft-ground/", "fleetCrawler"],
];

export const STORIES: Story[] = ROWS.map(([source, title, date, topic, tags, summary, url, photo]) => ({
  id: url,
  source,
  title,
  date,
  topic,
  tags,
  summary,
  url,
  ...P[photo],
}));

const FMT = new Intl.DateTimeFormat("en-US", { month: "short", day: "numeric", year: "numeric", timeZone: "UTC" });
export const formatDate = (iso: string) => FMT.format(new Date(`${iso}T00:00:00Z`));
