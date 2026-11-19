/**
 * Content for /safety (2026-11-19, on request — "build it", from the
 * family-site safety review the same day). Every fact here comes from a
 * family company's live site; nothing is estimated. Where a fact belongs to
 * one company or one country it is labelled that way (COR and the Canadian
 * certifications are TNT Canada / Eagle West; the Highwire award is RMS).
 *
 * No safety-performance numbers (EMR, TRIR): no family site publishes them,
 * so the page doesn't either. Add a section only when TNT supplies them.
 */

/** Incident & Injury Free commitments — the wording TNT, Southway and RMS
 *  all publish on their About pages, verbatim. Moved here from the About
 *  page's IIFCommitment section so it appears once on the site. */
export const IIF_COMMITMENTS = [
  "We will create a world where we hold human life and its preservation as the highest of values.",
  "We will create an environment where Incident and Injury-Free is our way of life.",
  "We will create an organization in which “who we are” sends an unwavering message throughout the industry that we do what’s “right” because it’s the right thing to do and sets the standards for safety and performance in our industry.",
  "We will create a culture that places the utmost value upon our families, coworkers, and ourselves.",
  "We will create a world where our commitment to excellence equally drives our personal and professional lives.",
  "We will create a reality where we live Incident and Injury-Free by choice, rather than mandate.",
];

/** iCare, as TNT Canada's FAQ and culture page and Eagle West's home page
 *  describe it. */
export const ICARE_PRINCIPLES: { icon: string; title: string; body: string }[] = [
  {
    icon: "/icons/icare-incident-free.svg",
    title: "Every incident is preventable",
    body: "Hazards are treated as avoidable, not as part of the job. Unsafe conditions get flagged before they become problems.",
  },
  {
    icon: "/icons/icare-training.svg",
    title: "Training for every person",
    body: "Every employee receives individual safety training, from the operator's seat to the rigging crew on the ground.",
  },
  {
    icon: "/icons/icare-improvement.svg",
    title: "Care beyond the job site",
    body: "The culture reaches past the lift itself, to the wellbeing of crews and the families waiting for them at home.",
  },
];

/** Hero fact strip. Each is a fact a family site publishes, labelled with
 *  who it applies to. */
export const HERO_FACTS: { value: string; label: string }[] = [
  { value: "IIF", label: "Incident & Injury Free, across the family" },
  { value: "NCCCO · NCCER", label: "Certified operators in the US" },
  { value: "COR", label: "Certified safety program in Canada" },
  { value: "Platinum", label: "Highwire Safety Award 2024, RMS Cranes" },
];

export const TRAINING: { region: string; companies: string; badges: string[]; points: string[] }[] = [
  {
    region: "United States",
    companies: "TNT Crane & Rigging · Southway · RMS Cranes",
    badges: ["NCCCO", "NCCER", "In-house evaluation"],
    points: [
      "Every operator passes an in-house operator evaluation program",
      "Operators hold NCCCO and NCCER certifications",
      "In-house, hands-on training combined with third-party industry training",
    ],
  },
  {
    region: "Canada",
    companies: "TNT Crane & Rigging Canada · Eagle West",
    badges: ["Alberta trade certificate", "Red Seal", "BC Crane Safe"],
    points: [
      "Operators hold a trade certificate recognized by Alberta Apprenticeship and Industry Training, or work as supervised registered apprentices",
      "Many operators carry Red Seal designations; BC crews hold BC Crane Safe credentials",
      "Operators are trained on load charts, hoisting signals, boom reach and ground bearing",
    ],
  },
];

/** The lift-safety process, assembled from TNT Canada's safety FAQ, Eagle
 *  West's pre-lift briefing article and RMS's rental-crane safety post. */
export const LIFT_STEPS: { title: string; body: string }[] = [
  {
    title: "Plan the lift",
    body: "Lift plans use the real load weight and geometry, checked against the crane's load chart before anything moves.",
  },
  {
    title: "Assess the ground",
    body: "Every site gets a ground and access assessment before setup, with mats or pads where the soil needs them.",
  },
  {
    title: "Inspect the crane",
    body: "A pre-operational inspection before each shift covers ropes, hooks, boom sections, brakes and safety devices.",
  },
  {
    title: "Check the rigging",
    body: "Slings, shackles and hardware are inspected and matched to their rated capacity for the load.",
  },
  {
    title: "Brief the crew",
    body: "Operator, lift supervisor, riggers and signal persons walk through the plan, exclusion zones and signals together.",
  },
  {
    title: "Lift with clear signals",
    body: "Standard hand signals or radios keep the operator and ground crew in contact, with agreed criteria to stop the lift.",
  },
];

export const STANDARDS: { name: string; detail: string }[] = [
  { name: "CSA Z150", detail: "Canadian standard for mobile cranes, followed by TNT Canada" },
  { name: "Alberta OHS Code", detail: "Crane provisions for work in Alberta" },
  { name: "WorkSafeBC", detail: "Workers Compensation Act and OHS Regulation in British Columbia" },
];

export const MEMBERSHIPS: { name: string; detail: string }[] = [
  { name: "Incident & Injury Free (IIF)", detail: "Family-wide" },
  { name: "ISNetworld", detail: "TNT Canada · Eagle West" },
  { name: "Avetta", detail: "TNT Canada · Eagle West" },
  { name: "ComplyWorks", detail: "TNT Canada · Eagle West" },
  { name: "COR Certified", detail: "TNT Canada · Eagle West" },
  { name: "Alberta Construction Safety Association", detail: "TNT Canada" },
  { name: "WCB Alberta", detail: "TNT Canada" },
  { name: "BC Construction Safety Alliance", detail: "Eagle West" },
];

export const RECOGNITION = {
  title: "Highwire Platinum Safety Award",
  year: "2024",
  company: "RMS Cranes",
  body: "Awarded to companies scoring 95–100 on Highwire's Safety Assessment, which reviews historic and current safety performance.",
  url: "https://rmscranes.com/rms-recognized-by-highwire-for-safest-contractor-and-vendor/",
};
