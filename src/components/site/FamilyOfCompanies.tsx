/**
 * FAMILY OF COMPANIES — built 2026-10-04 from a supplied design, replacing
 * FamilyStripV2.tsx (the light logo shelf, now unrendered — see page.tsx).
 * Ported unchanged from the TNT Dark project the same day, on request — the
 * section is identical in both themes. TNT Canada (fifth company, recounted
 * stats, count-agnostic dividers, compact cells, centred lone last cell)
 * ported from TNT Dark 2026-10-17; TNT Light keeps its own colors and its
 * corrected JMS region (Montana and South Dakota).
 *
 * Split layout: a black brand panel on the left (eyebrow, "Different names.
 * One TNT." headline, TNT parent lockup, four stats) and a warm off-white
 * panel on the right holding the four operating companies in a 2×2 grid.
 * LIGHT LEFT PANEL (2026-10-04, on request — "I want to change the color
 * theme to light"): the design's black brand panel is white here, with its
 * text, dividers and stats flipped to black/N. The right panel keeps the
 * design's off-white (#f5f4f0), so the two halves still read as a split;
 * a black/10 hairline between them (vertical on desktop, horizontal when
 * stacked) marks the seam. The gold eyebrow stays gold — the same
 * gold-on-white eyebrow every other light section on this site uses.
 *
 * Carries `id="family"`: Hero.tsx's auto-scroll lands on it, SiteNav.tsx's
 * reveal check watches it, and the nav's "Family of Companies" link
 * (/#family) targets it.
 *
 * Copy (regions, states) is exactly as given in the design; the stats are
 * not — see STATS.
 */

import Button from "./Button";

/** Headings (`name`) and `location` are exactly as tntcrane.com's Family of
 *  Companies carousel shows them, in its order (2026-11-04, on request); TNT
 *  USA, which the live site doesn't list, stays first. Logos are this
 *  project's own marks, not the live site's PNGs. TNT USA and TNT Canada both
 *  use the plain TNT Crane & Rigging logo (the parent-company one on the
 *  left), not the live site's red-boom TNT logo. `url` is each company's own
 *  website as the live carousel links it; TNT USA links to tntcrane.com.
 *  `area` is this project's coverage line, kept for the STATS count. */
const COMPANIES: { name: string; logo: string; url: string; location: string; area: string; hidden?: boolean }[] = [
  // Added 2026-10-23, on request. Branches per branchLocatorData.ts ("TNT
  // Crane & Rigging": 12 in Texas, 2 in Louisiana, 2 in Oklahoma).
  // Hidden 2026-11-04 to match the live site's five, then shown again the
  // same day, on request ("Add that to the right side") — TNT Crane &
  // Rigging's own US operation. Set `hidden: true` to hide it again (and
  // recount STATS: TX, LA, OK leave with it → 11 states/provinces).
  {
    name: "TNT USA",
    logo: "/brand/tnt.svg",
    url: "https://tntcrane.com/",
    location: "Houston, TX",
    area: "Texas, Louisiana, Oklahoma",
  },
  {
    name: "Southway Crane & Rigging",
    logo: "/brand/southway.svg",
    url: "https://southwaycrane.com/",
    location: "Atlanta, GA",
    area: "Georgia, Alabama, South Carolina, Florida",
  },
  {
    name: "RMS Cranes",
    logo: "/brand/rms-cranes.svg",
    url: "https://rmscranes.com/",
    location: "Denver, CO",
    area: "Colorado, Wyoming, New Mexico",
  },
  {
    name: "JMS Crane & Rigging",
    logo: "/brand/jms.svg",
    url: "https://jmscraneandrigging.com/",
    location: "Billings, MT",
    area: "Montana and South Dakota",
  },
  // Branches per branchLocatorData.ts ("TNT Crane & Rigging Canada": Brooks,
  // Calgary, Edmonton, Fort McMurray, Lethbridge, Medicine Hat — all Alberta).
  {
    name: "TNT Canada",
    logo: "/brand/tnt.svg",
    url: "https://www.tntcrane.ca/",
    location: "Alberta, Canada",
    area: "Calgary, Edmonton, Fort McMurray",
  },
  {
    name: "Eagle West Crane & Rigging",
    logo: "/brand/eagle-west.svg",
    url: "https://www.eaglewestcranes.com/",
    location: "British Columbia, Canada",
    area: "Western Canada",
  },
];

/** The cards actually rendered: COMPANIES minus any marked `hidden`. */
const VISIBLE = COMPANIES.filter((c) => !c.hidden);

/** Family-specific figures, all counted from the visible COMPANIES above. The design's
 *  original four (700+ cranes, 45+ locations, 1,750+ employees, ACT 100
 *  No. 15) were replaced 2026-10-04, on request, because About Us
 *  (StorySlideshow.tsx) already shows every one of them. If a company or
 *  region changes above, recount these. */
const STATS: { value: string; label: string }[] = [
  { value: String(VISIBLE.length), label: "Regional operating companies" },
  { value: "2", label: "Countries, US and Canada" },
  // GA, AL, SC, FL, CO, WY, NM, MT, SD, TX, LA, OK + British Columbia,
  // Alberta (JMS covers Montana and South Dakota per its own site —
  // corrected from Idaho 2026-10-08; Alberta added with TNT Canada
  // 2026-10-17; TX, LA, OK come with TNT USA — 11 if it's hidden again).
  { value: "14", label: "States and provinces covered" },
  { value: "1", label: "Shared fleet and iCARE safety program" },
];

export default function FamilyOfCompanies() {
  return (
    <section id="family" className="grid bg-white lg:grid-cols-[2fr_3fr]">
      {/* Left — brand panel */}
      <div className="border-b border-black/10 px-6 py-16 sm:px-10 sm:py-20 lg:border-r lg:border-b-0 lg:px-16 lg:py-24 xl:px-20">
        <p className="flex items-center gap-4 font-body text-[13px] font-bold tracking-[0.18em] text-tnt-amber uppercase">
          <span aria-hidden="true" className="h-px w-9 bg-tnt-amber" />
          The TNT Family of Companies
        </p>
        <h2 className="mt-8 font-display text-6xl leading-[1.02] text-black uppercase sm:text-7xl">
          Different
          <br />
          names.
          <br />
          One TNT.
        </h2>
        <p className="mt-8 max-w-md font-body text-base leading-relaxed text-black/70 sm:text-lg">
          Regional operating companies with deep local roots, backed by the
          fleet, engineering and iCARE safety program of TNT Crane &amp; Rigging.
        </p>

        <div className="mt-10 flex items-center gap-6">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/brand/tnt.svg" alt="TNT Crane & Rigging" className="h-16 w-auto" />
          <div className="border-l border-black/15 pl-6">
            <p className="font-body text-xs font-semibold tracking-[0.16em] text-black/55 uppercase">
              Parent company
            </p>
            <p className="mt-1 font-body text-base text-black">Houston, Texas</p>
          </div>
        </div>

        <dl className="mt-12 grid max-w-md grid-cols-2 border-t border-black/15">
          {STATS.map((s, i) => (
            <div
              key={s.label}
              className={`py-7 ${i % 2 === 0 ? "border-r border-black/15 pr-6" : "pl-8"} ${
                i < 2 ? "border-b border-black/15" : ""
              }`}
            >
              <dt className="sr-only">{s.label}</dt>
              <dd>
                <span className="font-display text-4xl text-black sm:text-5xl">
                  {s.value}
                </span>
                <span className="mt-2 block font-body text-sm text-black/60">{s.label}</span>
              </dd>
            </div>
          ))}
        </dl>
      </div>

      {/* Right — operating companies */}
      <div className="bg-[#f5f4f0] px-6 py-16 sm:px-10 sm:py-20 lg:px-16 lg:py-24 xl:px-20">
        {/* The "Operating companies" label that sat left of this button was
            removed 2026-10-23, on request; the button stays right-aligned. */}
        <div className="flex items-center justify-end gap-4 border-b border-black/70 pb-8">
          <Button href="/#coverage" variant="primary" className="shrink-0">
            Find your nearest branch
          </Button>
        </div>

        <ul className="grid sm:grid-cols-2">
          {VISIBLE.map((c, i) => {
            // Dividers for any count, not just 2×2: a rule under every cell
            // except the last (stacked) or the last row (two columns), and a
            // vertical rule on a left-column cell only when it has a
            // right-hand neighbour.
            //
            // COMPACT CELLS (2026-10-17, on request — "adjust the spacing
            // between all logos and align inside the screen size"): adding
            // TNT Canada made a third row, and with each cell held to a 22rem
            // minimum the grid grew the section to ~1,320px at 1440×900. The
            // minimum is gone, padding and the logo→caption gap are tighter,
            // and logos are a touch smaller, so the grid fits inside the left
            // panel's height again.
            const n = VISIBLE.length;
            const lastRowStart = n % 2 === 0 ? n - 2 : n - 1;
            const left = i % 2 === 0;
            // A company left alone on the last row (odd count — TNT Canada
            // today) spans both columns and is centred in it, on request
            // 2026-10-17 ("Align it on center"). Phones stack one per row, so
            // it stays left-aligned there like the rest.
            const lone = n % 2 === 1 && i === n - 1;
            return (
            <li
              key={c.name}
              className={`flex flex-col gap-6 py-8 sm:py-10 ${
                lone
                  ? "sm:col-span-2 sm:items-center sm:text-center"
                  : left
                    ? `sm:pr-10 ${i + 1 < n ? "sm:border-r sm:border-black/15" : ""}`
                    : "sm:pl-10"
              } ${i < n - 1 ? "border-b border-black/15" : ""} ${i >= lastRowStart ? "sm:border-b-0" : ""}`}
            >
              {/* The whole cell links to the company's own site, as each card
                  does on tntcrane.com (added 2026-11-04). */}
              <a
                href={c.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`group flex flex-1 flex-col gap-6 rounded-sm outline-offset-8 focus-visible:outline-2 focus-visible:outline-tnt-amber ${lone ? "sm:items-center" : ""}`}
              >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={c.logo} alt="" className={`h-11 w-auto max-w-full self-start object-contain sm:h-12 ${lone ? "sm:self-center" : ""}`} />
              <div className="mt-auto">
                <p className="font-body text-xs font-normal tracking-[0.16em] text-black/55 uppercase">
                  A TNT Crane &amp; Rigging company
                </p>
                <h3 className="mt-2 font-display text-2xl leading-tight text-black uppercase transition-colors group-hover:text-tnt-amber">
                  {c.name}
                </h3>
                <p className="mt-2 font-body text-lg font-semibold text-black">{c.location}</p>
                <p className="mt-1 font-body text-base text-black/65">{c.area}</p>
                <span className="sr-only"> (opens in a new tab)</span>
              </div>
              </a>
            </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
