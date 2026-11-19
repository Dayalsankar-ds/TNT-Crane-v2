"use client";

/**
 * FIGMA "LET'S LIFT WHAT'S NEXT." LAYOUT (2026-11-04, on request — "pick the
 * design from Figma for the Request a Quote section and follow our code
 * design. Use the same image for now"). From "Section — Request a Quote
 * (Light)" (node 1053:3518) of the TNT Figma file's "TNT Home screen":
 *   - Left: "Request a Quote" eyebrow, "Let's Lift / What's Next.", intro,
 *     three gold-outline icon rows (Fast Response, Expert Solutions, Safe &
 *     Reliable) and "Big Projects / Stronger Partners." at the foot.
 *   - Centre: the form as a white card with the design's grey filled inputs
 *     and "Project Details" header — but OUR fields (the 2026-11-04 list:
 *     Name, Company, Email, Phone, City, State required; Project name,
 *     Address, Start date, Duration, Attach a file, Comments optional), not
 *     the design's two-step First/Last name, load weight, service picker
 *     form. So no "Step 1 of 2" indicator — the form is one step.
 *   - Right: the design's photo (public/photos/quote/
 *     quote-all-terrain-houston.jpg, exported from Figma) behind a white
 *     panel + 50% white band on the design's slant, with "People /
 *     Equipment / Expertise / Safer Outcomes" and "From Plans / To
 *     Progress." over it (desktop only).
 *   - Submit button is the site's black primary (the design's is gold),
 *     matching the black CTAs chosen for Services and the Fleet.
 *   - Side inset 4.45vw, like the other full-width sections.
 *   - The left statement is sticky on desktop and travels with the form as
 *     it scrolls (added the same day, on request).
 * Still front-end only: submitting shows "Request received" without
 * sending anything (see the TODO in onSubmit). The previous layout is in the
 * session scratchpad (RequestQuote.before-figma.tsx).
 *
 * REQUEST A QUOTE — the primary conversion action (was entirely missing).
 *
 * Enerblock "tell us about your project" band, in our design system. Front-end
 * only: on submit it shows a success state — there is NO backend yet, so wire
 * the handler to a real endpoint/email service before launch. Services are
 * multi-select chips (reusing the Coverage filter-pill treatment).
 *
 * LIGHT-MODE SHELL IS `bg-tnt-gray` (2026-09-26, on request — same "add grey
 * bg" ask SafetyCulture.tsx got, for the same reason: this section sat right
 * after ContactSection, both `bg-white`, so they ran together with no
 * visible seam. `tnt-gray` (#f7f7f7, was #eeeeee) is globals.css's own token for exactly
 * this — "alternating section backgrounds". The form/success card underneath
 * stays `bg-white` — it now reads as a card floating on the grey band rather
 * than blending into it, same pattern the floating map cards use.
 *
 * REQUIRED FIELDS (2026-09-29, from the desktop comparison review against
 * maximcrane.com): name, email, phone, jobsite ZIP and crane type are
 * required and marked with an asterisk, keyed by a "* Required" note at the
 * top of the form. Phone moved from optional to required — sales calls back.
 * Jobsite ZIP and crane type were added so a rep can route the lead to a
 * branch and a fleet class without a follow-up question. Load and radius are
 * their own optional fields (they used to live only in the description
 * placeholder) — a visitor who knows them saves a call; one who doesn't
 * shouldn't be blocked.
 *
 * FIELDS MATCH THE LIVE SITE (2026-10-26, on request — "bring the same
 * content... no need to show any unnecessary information"): the form now asks
 * exactly what tntcrane.com/contact's "Contact TNT" form asks, in its order:
 * Name, Email, Phone, Company/Organization, Project Name, Project Location
 * (all required); Services Required (optional, the live site's five); Start
 * Date and Estimated Duration (required); File Upload (optional,
 * image/video/audio like the live form); job details (required); and the live
 * SMS-consent wording. Dropped: jobsite ZIP, crane type, load and radius. The
 * CRANE_TYPES / POSTAL_PATTERN / field-style exports stay — /contact's
 * ContactForm still imports them.
 *
 * FIELD LIST REWORKED (2026-11-04, from a list the user supplied). Required:
 * Name, Company, Email, Phone, City, State. Optional: Start Date, Project
 * Name, Comments (summary field), Duration, Address, Attach a file. Nothing
 * else is asked: Project Location (replaced by City/State/Address) and the
 * Services Required chips were dropped; the SMS-consent checkbox stays (it's
 * an opt-in, not a field). Required fields come first, optional ones under
 * their own "Project details (optional)" heading.
 */

import QuoteForm from "./QuoteForm";

// The six classes in the nav's Load Chart menu, so the form and the fleet
// speak the same taxonomy. "Not sure" is a real answer — a rep will recommend.
// Exported (with `field`, `label`, `Req`, `Opt` below) for /contact's
// ContactForm, so both forms share one field style and one crane taxonomy
// (2026-10-08). Export keywords only — nothing here renders differently.
export const CRANE_TYPES = [
  "All-Terrain Crane",
  "Crawler Crane",
  "Hydraulic Truck Crane",
  "Rough-Terrain Crane",
  "Carry Deck Crane",
  "Tower Crane",
  "Not sure — recommend one",
];

// US ZIP (12345 or 12345-6789) or Canadian postal code (A1A 1A1) — TNT
// Canada and Eagle West quote Canadian jobsites.
export const POSTAL_PATTERN = "\\d{5}(-\\d{4})?|[A-Za-z]\\d[A-Za-z] ?\\d[A-Za-z]\\d";

export const field =
  "w-full rounded-md border border-black/15 bg-white px-4 py-3 font-body text-sm text-black placeholder:text-tnt-meta focus:border-tnt-amber focus:ring-1 focus:ring-tnt-amber focus:outline-none";
export const label =
  "block font-body text-[11px] font-semibold tracking-[0.16em] text-tnt-meta uppercase";

/** Visual required marker. aria-hidden: the input's own `required` is what
 *  assistive tech announces, so the star would only be read as "star". */
export function Req() {
  return (
    <span aria-hidden="true" className="ml-1 text-tnt-maroon">
      *
    </span>
  );
}

/** Quiet "optional" tag for the fields a visitor may reasonably not know. */
export function Opt() {
  return (
    <span className="ml-1 font-normal tracking-normal normal-case">(optional)</span>
  );
}


const FEATURES: { title: string; text: string; icon: "clock" | "gear" | "shield" }[] = [
  { title: "Fast Response", text: "Get a quote from our team quickly.", icon: "clock" },
  { title: "Expert Solutions", text: "The right equipment for your unique needs.", icon: "gear" },
  { title: "Safe & Reliable", text: "Backed by the TNT family of companies.", icon: "shield" },
];

/** FILLED ICONS ON BLACK (2026-11-12, on request — "filled yellow icon with
 *  dark bg"): solid brand-yellow shapes with their details cut out in the
 *  black of the badge behind them. Replaces the design's 24px gold line
 *  icons (exported from Figma) inside an amber-outlined circle. */
const ICON_Y = "#F8AE1C";
const ICON_D = "#000000";

function FeatureIcon({ name }: { name: "clock" | "gear" | "shield" }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="h-6 w-6">
      {name === "clock" && (
        <>
          <circle cx="12" cy="12" r="11" fill={ICON_Y} />
          <path d="M12 5.5V12L16.5 14.5" stroke={ICON_D} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </>
      )}
      {name === "gear" && (
        <>
          {[0, 45, 90, 135].map((deg) => (
            <rect key={deg} x="10" y="1" width="4" height="22" rx="1" fill={ICON_Y} transform={`rotate(${deg} 12 12)`} />
          ))}
          <circle cx="12" cy="12" r="7.5" fill={ICON_Y} />
          <circle cx="12" cy="12" r="3" fill={ICON_D} />
        </>
      )}
      {name === "shield" && (
        <>
          <path d="M22 5.5L12 1L2 5.5V12C2 17 6.5 21.2 12 23C17.5 21.2 22 17 22 12V5.5Z" fill={ICON_Y} />
          <path d="M7.5 12L10.8 15.3L16.8 8.8" stroke={ICON_D} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
        </>
      )}
    </svg>
  );
}

export default function RequestQuote() {
  return (
    <section id="quote" className="relative scroll-mt-[var(--chrome-h)] overflow-clip bg-tnt-gray text-black">
      {/* ── PHOTO + WHITE PANELS (desktop) ─────────────────────────── */}
      <div aria-hidden="true" className="absolute inset-0 hidden lg:block">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/photos/quote/quote-all-terrain-houston.jpg"
          alt=""
          className="absolute inset-y-0 right-0 left-[14%] h-full w-[86%] object-cover"
        />
        <div className="absolute inset-0 bg-tnt-gray/50 [clip-path:polygon(0_0,79.44%_0,54.78%_100%,0_100%)]" />
        <div className="absolute inset-0 bg-tnt-gray [clip-path:polygon(0_0,68.82%_0,43.96%_100%,0_100%)]" />
        <div className="absolute top-[clamp(2rem,6vh,3.5rem)] right-[5%] font-body text-sm leading-6 font-medium text-white [text-shadow:0_1px_6px_rgba(0,0,0,0.5)]">
          <p>People</p>
          <p>Equipment</p>
          <p>Expertise</p>
          <p>Safer Outcomes</p>
          <span className="mt-2 block h-0.5 w-6 bg-tnt-amber" />
        </div>
        <div className="absolute right-[12%] bottom-[clamp(2rem,6vh,3.5rem)] font-body text-sm leading-6 font-medium text-white [text-shadow:0_1px_6px_rgba(0,0,0,0.5)]">
          <p>From Plans</p>
          <p>To Progress.</p>
          <span className="mt-2 block h-0.5 w-6 bg-tnt-amber" />
        </div>
      </div>

      <div className="relative grid gap-12 px-4 py-20 sm:px-6 sm:py-24 lg:grid-cols-[minmax(0,24rem)_minmax(0,1fr)] lg:gap-[2.4vw] xl:grid-cols-[minmax(0,1fr)_minmax(0,min(44rem,48vw))_minmax(0,1fr)] lg:px-[4.45vw] lg:py-16">
        {/* ── LEFT — statement ─────────────────────────────────────── */}
        {/* STICKY STATEMENT (2026-11-04, on request — "the content … needs
            to act as sticky-at-the-top … travel along with the form"): the
            left column stretches the full height of the form, and its
            content block sticks just under the fixed header while the form
            scrolls. The block's wrapper ends above "Big Projects / Stronger
            Partners.", so it stops short of that tagline instead of sliding
            over it (same pattern as the Services heading). Desktop only. */}
        <div className="flex flex-col justify-between">
          <div className="lg:flex-1">
          <div className="lg:sticky lg:top-[calc(var(--chrome-h)+2rem)]">
            <p className="flex items-center gap-3 font-body text-[13px] font-bold tracking-[0.18em] text-black uppercase">
              <span aria-hidden="true" className="h-0.5 w-6 bg-tnt-amber" />
              Request a Quote
            </p>
            <h2 className="mt-6 font-display text-5xl leading-[1.02] text-black uppercase">
              Let&rsquo;s Lift
              <br />
              <span className="text-tnt-amber">What&rsquo;s Next.</span>
            </h2>
            <p className="mt-6 font-body text-base leading-relaxed text-tnt-body sm:text-lg">
              Tell us about your project and our team will get back to you with
              a tailored solution.
            </p>
            <ul className="mt-8 space-y-7">
              {FEATURES.map((f) => (
                <li key={f.title} className="flex items-center gap-4">
                  <span className="flex h-[50px] w-[50px] shrink-0 items-center justify-center rounded-full bg-black">
                    <FeatureIcon name={f.icon} />
                  </span>
                  <span>
                    <span className="block font-body text-sm font-semibold text-black">{f.title}</span>
                    <span className="mt-0.5 block font-body text-sm text-tnt-body">{f.text}</span>
                  </span>
                </li>
              ))}
            </ul>
            <p className="mt-8 font-body text-sm text-tnt-body">
              Prefer to talk it through? Call{" "}
              <a href="tel:+18007992505" className="font-semibold text-black underline-offset-2 hover:underline">
                1-800-799-2505
              </a>{" "}
              — 24/7.
            </p>
          </div>
          </div>
          <p className="mt-12 hidden font-body text-xs leading-relaxed text-black/70 lg:block">
            <span aria-hidden="true" className="mb-2 block h-0.5 w-6 bg-black/40" />
            Big Projects
            <br />
            Stronger Partners.
          </p>
        </div>

        {/* ── CENTRE — form card (shared QuoteForm, 2026-11-13) ──────── */}
        <QuoteForm />
      </div>
    </section>
  );
}
