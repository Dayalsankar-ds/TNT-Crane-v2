/**
 * SERVICES — FIGMA "BUILT TO GET IT DONE" (2026-11-04, on request: "replace
 * the current design with the Figma design for the service section"). Built
 * from the "Section — Built to Get It Done" frame (node 1053:3043) of the TNT
 * Figma file's "TNT Home screen" artboard:
 *   - Left: "Services" eyebrow, "Built To / Get It Done." heading, intro
 *     line, amber "Explore our services" button (→ /services), and the
 *     "People. Equipment. Expertise. A Stronger Tomorrow." tagline.
 *   - Right: 5 numbered rows, each a slanted photo, number, title, one-line
 *     description and a round arrow button; "Built for What's Next." below.
 *   - Text exactly as the design (on request — "Figma's 5, exact text"),
 *     NOT services.ts's six-service catalog, so this section no longer reads
 *     services.ts. The nav and /services page still use the catalog.
 *   - Photos exported from the Figma file (on request) into
 *     public/photos/services/figma-0N-*.jpg, resized to 1400px wide.
 *   - FITS ONE SCREEN, ALL FIVE ROWS VISIBLE (2026-11-04, final, on request
 *     — "I can't see the fifth engineering card … even though I have a
 *     16-inch MacBook Pro"). From lg up the section is 100svh minus
 *     --chrome-h (min 560px), the five rows share that height equally, and
 *     row/heading type scales with viewport height. This supersedes the
 *     sticky version described next: with the section exactly one screen
 *     tall there's nothing to scroll past, so the sticky heading (still in
 *     the markup, harmless) no longer visibly moves.
 *   - BOTTOM WHITE SPACE (2026-11-04, on request — "add some white space
 *     below the engineering card … I need to have some separation between
 *     each section"): the section pads its own bottom (5vh, 24–56px; 48px
 *     on phones) inside its one-screen height, so the last row and the
 *     "Built for What's Next." tagline sit clear of About the Fleet below.
 *     The same space was added at the top (same request, "all sections"):
 *     About Us above ends on a full-bleed photo, so without it the rows
 *     started 14px under that photo.
 *   - (Superseded) LEFT SIDE PINS WHILE THE ROWS SCROLL (2026-11-04, on request — "the
 *     left-side part … needs to be sticky to the top"; chosen option: "pin
 *     while rows scroll"). From lg up the left column runs the full height
 *     of the section and only its heading block (eyebrow, heading, intro,
 *     button) is sticky, just under the fixed header; as the five 190px rows
 *     scroll past, the heading holds in place and travels down until it
 *     meets the "People. Equipment. Expertise." tagline at the column's
 *     foot (fixed the same day, on request — the first version pinned the
 *     whole screen-tall column, which only held for ~260px of scroll).
 *     This replaced the earlier same-day "fit one screen" version (rows
 *     sharing the screen height), which left nothing to scroll.
 *   - Fonts stay Impact + Poppins per CLAUDE.md.
 * Row links: the design names don't match the catalog one-to-one, so each
 * row points at the closest /services entry: Crane Rental → its own page;
 * Rigging → #specialized-rigging; Heavy Lift → #heavy-haul-transport;
 * Industrial Services → #machinery-moving (its photo is a machinery move);
 * Engineering → #lift-planning-engineering. Industrial Storage has no row.
 * The previous 6-card version is kept below for history, and a copy of the
 * file as it was is in the session scratchpad (CoreServices.before-figma.tsx).
 *
 * ── EARLIER HISTORY ─────────────────────────────────────────────────────

 * SECTION 5 — FULL-SCOPE CAPABILITY  (project lifecycle)
 *
 * 2026-10-09 — NOW READS services.ts, and every card links to its detail
 * block on the new /services page (/services#<id>). The six changed with it,
 * on request: Heavy Haul & Transport replaces Wind Energy (now a Specialized
 * Capability on /services), in the brief's order LIFT → RIG → MOVE → HAUL →
 * PLAN → STORE. Blurbs are the catalog's one-liners; the unverified "8 to
 * 1,300 tons" and "stamped … by in-house engineers" claims went with the old
 * copy. The broken /crane-rental link (no such route existed) is gone too.
 * Notes below that mention Wind Energy, /crane-rental or `?service=` links
 * describe the previous version.
 *
 * REVERTED TO THE ICON-CARD DESIGN (2026-09-23, on request — a reference
 * screenshot: "FULL-SCOPE CAPABILITY" eyebrow, "ONE PARTNER, END TO END"
 * heading, 6 plain icon cards in a 3×2 grid, solid-amber closing CTA panel).
 * This replaces the "REAL SOLUTIONS FOR A HEAVIER TOMORROW" photo-card
 * redesign from 2026-09-22 (5 cards, real TNT photos, header tag list,
 * skewed CTA banner) — that version is still in git history
 * (`git show d44e684^:src/components/site/CoreServices.tsx` for the
 * pre-photo icon-card version this restores, or `git show
 * 9e69379^:src/components/site/CoreServices.tsx` for the photo-card
 * version this replaces) if either is ever wanted back instead.
 *
 * "ONE PARTNER, END TO END" is a genuine restoration, not just a copy of
 * the last icon-card version: that heading (with its own <RevealText>
 * animation) was removed entirely on 2026-09-11, before the photo-card
 * redesign ever happened. The reference screenshot shows it present, so
 * it's back here as a plain heading (no RevealText — that component's
 * animation was tied to copy this rewrite doesn't reintroduce elsewhere).
 *
 * SIX SERVICES, NOT FIVE: the 2026-09-22 redesign had dropped Wind Energy
 * after confirming against tntcrane.com that TNT's real, current service
 * list is five (Crane Rental, Specialized Rigging, Machinery Moving,
 * Industrial Storage, Engineering) — Wind Energy isn't one of them. The
 * reference screenshot for THIS restoration shows Wind Energy as card 06,
 * so it's back here on request; navigation.ts's Services panel was updated
 * to match (see that file's own note). Flagging the tension rather than
 * quietly resolving it: this section and the nav now show a service that
 * tntcrane.com's own site doesn't list.
 *
 * CRANE RENTAL KEEPS ITS DEDICATED PAGE: unlike the rest of this restored
 * design, Crane Rental's card still links to `/crane-rental` (added
 * 2026-09-18, its own real sub-page) via next/link's <Link>, not a plain
 * <a> — a plain <a> was measured forcing a full page reload instead of
 * Next's client-side route swap (see that page's own docblock). Every
 * other card still uses the shared `?service=...#quote` stretched-link
 * pattern, since none of them have a dedicated page.
 *
 * The lifecycle — LIFT → PLAN → RIG → MOVE → STORE → RENEWABLE — is carried
 * by the STAGE labels and the numbering, not by a drawn spine. Stage
 * numbering is JOURNEY order, and navigation.ts's Services panel matches —
 * the panel and this section are one numbering system or neither means
 * anything.
 *
 * THE GRID REINSTATES THE ANCHOR COLLISION a chained layout would avoid.
 * Three cards share a row, so /services#crane-rental and
 * /services#specialized-rigging resolve to the same scroll position.
 * <TargetHighlight> is what keeps the click legible — it outlines the
 * requested card even when the page cannot move. Do not remove it while
 * this layout stands.
 *
 * NO SHADOWS anywhere in this section, by request: depth is a hairline
 * border that goes gold, a 4%-opacity gold wash, and a 2px lift.
 *
 * Palette: black / white / gold. NOT navy — the brand book has no navy, and
 * the retired #071034 was removed site-wide on 2026-07-28.
 *
 * LIGHT ONLY: bg-white/text-black, black/N opacity utilities,
 * black-fill/amber-glyph icon-well hover. The site-wide Light/Dark toggle
 * (and this section's dark variant) was removed 2026-10-01, on request.
 */

import Link from "next/link";
import Button from "./Button";

type Row = {
  index: string;
  title: string;
  text: string;
  photo: string;
  alt: string;
  href: string;
};

const ROWS: Row[] = [
  {
    index: "01",
    title: "Crane Rental",
    text: "A modern fleet for projects of any size.",
    photo: "/photos/services/figma-01-crane-rental.jpg",
    alt: "TNT all-terrain crane set up beside a glass office building",
    href: "/services/crane-rental",
  },
  {
    index: "02",
    title: "Rigging",
    text: "Engineered solutions for complex lifts.",
    photo: "/photos/services/figma-02-rigging.jpg",
    alt: "TNT hydraulic gantry lifting a concrete vault off a trailer",
    href: "/services#specialized-rigging",
  },
  {
    index: "03",
    title: "Heavy Lift",
    text: "Proven capability for the toughest challenges.",
    photo: "/photos/services/figma-03-heavy-lift.jpg",
    alt: "Large crawler crane rigged for a heavy lift at an industrial plant",
    href: "/services#heavy-haul-transport",
  },
  {
    index: "04",
    title: "Industrial Services",
    text: "Keeping industry moving forward.",
    photo: "/photos/services/figma-04-industrial-services.jpg",
    alt: "TNT forklift unloading a large wrapped component from a trailer",
    href: "/services#machinery-moving",
  },
  {
    index: "05",
    title: "Engineering",
    text: "Lift planning and engineering for safer, smarter outcomes.",
    photo: "/photos/services/figma-05-engineering.jpg",
    alt: "All-terrain crane setting a bridge girder over a river",
    href: "/services#lift-planning-engineering",
  },
];

/** The design's slanted photo frame (top edge shifted right, bottom left). */
const SLANT = "polygon(6% 0, 100% 0, 94% 100%, 0 100%)";

export default function CoreServices() {
  return (
    <section
      id="services"
      className="scroll-mt-[var(--chrome-h)] bg-white pb-12 text-black lg:h-[calc(100svh-var(--chrome-h))] lg:min-h-[560px] lg:pt-[clamp(1.5rem,5vh,3.5rem)] lg:pb-[clamp(1.5rem,5vh,3.5rem)]"
    >
      <div className="grid lg:h-full lg:grid-cols-[36%_1fr]">
        {/* ── LEFT — statement ─────────────────────────────────────── */}
        <div className="flex flex-col justify-between px-4 pt-14 pb-8 sm:px-6 lg:min-h-0 lg:py-[clamp(1rem,4vh,3rem)] lg:pr-10 lg:pl-[4.45vw]">
          {/* Sticky heading block: the left column stretches the full height
              of the section, so this block holds just under the header
              while the rows scroll, and travels down until it meets the
              "People. Equipment. Expertise." tagline at the column's foot. */}
          {/* Wrapper = the sticky block's track. It ends above the tagline,
              so the heading stops just short of it instead of sliding over. */}
          <div className="lg:flex-1">
          <div className="lg:sticky lg:top-[calc(var(--chrome-h)+2.5rem)]">
            <p className="flex items-center gap-3 font-body text-[13px] font-bold tracking-[0.18em] text-black uppercase">
              <span aria-hidden="true" className="h-0.5 w-6 bg-tnt-amber" />
              Services
            </p>
            <h2 className="mt-4 font-display text-5xl leading-[1.02] text-black uppercase sm:text-6xl lg:mt-[1.6vh] lg:text-[min(4.15vw,3.75rem,6.2vh)]">
              Built To
              <br />
              <span className="text-tnt-amber">Get It Done.</span>
            </h2>
            <p className="mt-5 max-w-md font-body text-base leading-relaxed text-tnt-body lg:mt-[1.8vh] lg:text-[min(1.0625rem,2vh)]">
              From equipment rental to engineered solutions, we provide the
              expertise to keep your projects moving forward.
            </p>
            {/* Black fill (2026-11-04, on request — "needs to be in black"):
                Button's primary-on-light skin, black with white text; was the
                design's amber (primary-on-dark). */}
            <div className="mt-7 lg:mt-[3vh]">
              <Button href="/services" variant="primary" className="px-6 py-3.5 tracking-[0.06em] uppercase">
                Explore our services
              </Button>
            </div>
          </div>

          </div>

          <p className="mt-6 hidden items-start gap-3 font-body text-xs leading-relaxed tracking-[0.12em] text-black/70 uppercase lg:flex">
            <span aria-hidden="true" className="mt-2 h-0.5 w-6 shrink-0 bg-tnt-amber" />
            <span>
              People. Equipment. Expertise.
              <br />A Stronger Tomorrow.
            </span>
          </p>
        </div>

        {/* ── RIGHT — the five service rows ─────────────────────────── */}
        <div className="flex flex-col lg:min-h-0 lg:py-[clamp(0.5rem,1.6vh,1.25rem)]">
          <ul className="flex flex-col divide-y divide-black/10 border-t border-black/10 lg:min-h-0 lg:flex-1 lg:border-t-0">
            {ROWS.map((r) => (
              <li key={r.index} className="lg:min-h-0 lg:flex-1">
                <Link
                  href={r.href}
                  className="group grid h-full grid-cols-1 gap-5 px-4 py-6 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-tnt-amber sm:px-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-center lg:gap-[4%] lg:py-[1.1vh] lg:pr-[clamp(1.5rem,4vw,4.5rem)] lg:pl-0"
                >
                  {/* Slanted photo with the design's thin dark outline: a
                      black slanted plate with the photo clipped 1px inside. */}
                  <div
                    className="relative aspect-[3/1] bg-black/80 lg:aspect-auto lg:h-full lg:min-h-[72px]"
                    style={{ clipPath: SLANT }}
                  >
                    <div className="absolute inset-px overflow-hidden" style={{ clipPath: SLANT }}>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={r.photo}
                        alt={r.alt}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                      />
                    </div>
                  </div>

                  <div className="flex items-start gap-5 lg:gap-[clamp(1rem,2.5vw,2.75rem)]">
                    <span className="font-display text-5xl leading-none text-[#7c8794] lg:text-[clamp(2rem,5.6vh,3.25rem)]">
                      {r.index}
                    </span>
                    <div className="min-w-0 flex-1 pt-1">
                      <span aria-hidden="true" className="block h-0.5 w-5 bg-tnt-amber" />
                      <h3 className="mt-2 font-display text-2xl leading-tight text-black uppercase transition-colors group-hover:text-tnt-amber group-focus-visible:text-tnt-amber lg:text-[clamp(1.1rem,2.7vh,1.5rem)]">
                        {r.title}
                      </h3>
                      <p className="mt-1 max-w-[16rem] font-body text-sm leading-snug text-tnt-body lg:text-[clamp(0.8rem,1.6vh,0.9375rem)]">
                        {r.text}
                      </p>
                    </div>
                    <span
                      aria-hidden="true"
                      className="mt-auto flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-black/15 text-lg text-black transition-colors group-hover:border-black group-hover:bg-black group-hover:text-white group-focus-visible:border-black group-focus-visible:bg-black group-focus-visible:text-white lg:h-[clamp(2.25rem,5vh,3rem)] lg:w-[clamp(2.25rem,5vh,3rem)]"
                    >
                      →
                    </span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>

          <p className="flex items-center gap-3 px-4 py-6 font-body text-xs tracking-[0.12em] text-black/70 uppercase sm:px-6 lg:py-[clamp(0.5rem,1.4vh,1rem)] lg:pl-[4%]">
            <span aria-hidden="true" className="h-0.5 w-6 bg-tnt-amber" />
            Built for What&apos;s Next.
          </p>
        </div>
      </div>
    </section>
  );
}
