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
 * visible seam. `tnt-gray` (#eeeeee) is globals.css's own token for exactly
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

import { useState, type FormEvent } from "react";
import Button from "./Button";

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


/** Figma input look: grey filled box, no border until focus. */
const fField =
  "w-full rounded-md border border-transparent bg-[#ececee] px-4 py-3 font-body text-base text-black placeholder:text-black/40 focus:border-tnt-amber focus:bg-white focus:ring-1 focus:ring-tnt-amber focus:outline-none";
const fLabel = "block font-body text-[13px] font-semibold text-black";

function Star() {
  return (
    <span aria-hidden="true" className="ml-1 text-tnt-amber">
      *
    </span>
  );
}

function OptTag() {
  return <span className="ml-1 font-normal text-black/45">(optional)</span>;
}

const FEATURES: { title: string; text: string; icon: "clock" | "gear" | "shield" }[] = [
  { title: "Fast Response", text: "Get a quote from our team quickly.", icon: "clock" },
  { title: "Expert Solutions", text: "The right equipment for your unique needs.", icon: "gear" },
  { title: "Safe & Reliable", text: "Backed by the TNT family of companies.", icon: "shield" },
];

/** The design's own 24px gold line icons (exported from Figma). */
function FeatureIcon({ name }: { name: "clock" | "gear" | "shield" }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="h-6 w-6">
      {name === "clock" && (
        <>
          <circle cx="12" cy="12" r="10.2" stroke="#F8AE1C" strokeWidth="1.6" />
          <path d="M12 6V12L17 14" stroke="#F8AE1C" strokeWidth="1.6" />
        </>
      )}
      {name === "gear" && (
        <>
          <circle cx="12" cy="12" r="4.2" stroke="#F8AE1C" strokeWidth="1.6" />
          {[
            [22, 12], [19.07, 19.07], [12, 22], [4.93, 19.07],
            [2, 12], [4.93, 4.93], [12, 2], [19.07, 4.93],
          ].map(([cx, cy]) => (
            <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="1.5" fill="#F8AE1C" />
          ))}
        </>
      )}
      {name === "shield" && (
        <>
          <path d="M22 6L12 1.5L2 6V12L12 22.5L22 12V6Z" stroke="#F8AE1C" strokeWidth="1.6" />
          <path d="M8 12L11 15L17 8" stroke="#F8AE1C" strokeWidth="1.8" />
        </>
      )}
    </svg>
  );
}

export default function RequestQuote() {
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    // TODO: POST to a real endpoint / email service.
    setSubmitted(true);
  };

  return (
    <section id="quote" className="relative scroll-mt-[var(--chrome-h)] overflow-clip bg-white text-black">
      {/* ── PHOTO + WHITE PANELS (desktop) ─────────────────────────── */}
      <div aria-hidden="true" className="absolute inset-0 hidden lg:block">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/photos/quote/quote-all-terrain-houston.jpg"
          alt=""
          className="absolute inset-y-0 right-0 left-[14%] h-full w-[86%] object-cover"
        />
        <div className="absolute inset-0 bg-white/50 [clip-path:polygon(0_0,79.44%_0,54.78%_100%,0_100%)]" />
        <div className="absolute inset-0 bg-white [clip-path:polygon(0_0,68.82%_0,43.96%_100%,0_100%)]" />
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

      <div className="relative grid gap-12 px-4 py-20 sm:px-6 sm:py-24 lg:grid-cols-[minmax(0,26rem)_minmax(0,34rem)] lg:gap-[2.4vw] lg:px-[4.45vw] lg:py-16">
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
                  <span className="flex h-[50px] w-[50px] shrink-0 items-center justify-center rounded-full border border-tnt-amber">
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

        {/* ── CENTRE — form card ───────────────────────────────────── */}
        {submitted ? (
          <div className="flex flex-col items-start justify-center rounded-2xl border border-black/10 bg-white p-8 shadow-[0_12px_40px_rgba(0,0,0,0.12)] sm:p-10">
            <span className="font-display text-3xl text-black uppercase sm:text-4xl">Request received</span>
            <p className="mt-3 max-w-md font-body text-base text-tnt-body">
              Thanks — a TNT Sales Representative will be in touch shortly. For
              anything urgent, call{" "}
              <a href="tel:+18007992505" className="font-semibold text-black underline-offset-2 hover:underline">
                1-800-799-2505
              </a>
              .
            </p>
          </div>
        ) : (
          <form
            onSubmit={onSubmit}
            className="rounded-2xl border border-black/10 bg-white p-6 shadow-[0_12px_40px_rgba(0,0,0,0.12)] sm:p-9"
          >
            <div className="flex items-end justify-between gap-4 border-b border-black/15 pb-5">
              <h3 className="font-display text-2xl leading-none text-black uppercase">Project Details</h3>
              <p className="font-body text-xs text-black/55">
                <span aria-hidden="true" className="text-tnt-amber">*</span> Required
              </p>
            </div>

            <div className="mt-6 grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="q-name" className={fLabel}>Name<Star /></label>
                <input id="q-name" name="name" required autoComplete="name" placeholder="John Doe" className={`mt-2 ${fField}`} />
              </div>
              <div>
                <label htmlFor="q-company" className={fLabel}>Company<Star /></label>
                <input id="q-company" name="company" required autoComplete="organization" placeholder="Your company" className={`mt-2 ${fField}`} />
              </div>
              <div>
                <label htmlFor="q-email" className={fLabel}>Email<Star /></label>
                <input id="q-email" name="email" type="email" required autoComplete="email" placeholder="you@company.com" className={`mt-2 ${fField}`} />
              </div>
              <div>
                <label htmlFor="q-phone" className={fLabel}>Phone<Star /></label>
                <input id="q-phone" name="phone" type="tel" required autoComplete="tel" placeholder="(123) 456-7890" className={`mt-2 ${fField}`} />
              </div>
              <div>
                <label htmlFor="q-city" className={fLabel}>City<Star /></label>
                <input id="q-city" name="city" required autoComplete="address-level2" placeholder="City" className={`mt-2 ${fField}`} />
              </div>
              <div>
                <label htmlFor="q-state" className={fLabel}>State<Star /></label>
                <input id="q-state" name="state" required autoComplete="address-level1" placeholder="State" className={`mt-2 ${fField}`} />
              </div>
            </div>

            <fieldset className="mt-7 border-t border-black/10 pt-6">
              <legend className="sr-only">Project details (optional)</legend>
              <p aria-hidden="true" className="font-body text-sm font-semibold text-black">
                More about the job <span className="font-normal text-black/45">(optional)</span>
              </p>
              <div className="mt-5 grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="q-project" className={fLabel}>Project name<OptTag /></label>
                  <input id="q-project" name="projectName" className={`mt-2 ${fField}`} />
                </div>
                <div>
                  <label htmlFor="q-address" className={fLabel}>Address<OptTag /></label>
                  <input id="q-address" name="address" autoComplete="street-address" className={`mt-2 ${fField}`} />
                </div>
                <div>
                  <label htmlFor="q-start" className={fLabel}>Start date<OptTag /></label>
                  <input id="q-start" name="start" type="date" className={`mt-2 ${fField}`} />
                </div>
                <div>
                  <label htmlFor="q-duration" className={fLabel}>Duration<OptTag /></label>
                  <input id="q-duration" name="duration" placeholder="e.g. 3 days, 2 weeks" className={`mt-2 ${fField}`} />
                </div>
              </div>

              <div className="mt-5">
                <label htmlFor="q-comments" className={fLabel}>Comments<OptTag /></label>
                <textarea
                  id="q-comments"
                  name="comments"
                  rows={3}
                  placeholder="A short summary of the job: what's being lifted, weight, site conditions"
                  className={`mt-2 ${fField} resize-y`}
                />
              </div>

              {/* Attach row, in the design's "@ Attach Files" style. */}
              <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
                <label htmlFor="q-file" className="flex cursor-pointer items-start gap-2.5">
                  <span aria-hidden="true" className="mt-0.5 font-body text-sm font-semibold text-black">@</span>
                  <span>
                    <span className="block font-body text-sm font-semibold text-black">Attach a file</span>
                    <span className="block font-body text-xs text-black/55">Plans, drawings or site photos (optional)</span>
                  </span>
                </label>
                <input
                  id="q-file"
                  name="file"
                  type="file"
                  accept="image/*,video/*,audio/*,.pdf,.doc,.docx,.xls,.xlsx"
                  className="max-w-full font-body text-xs text-black/60 file:mr-3 file:rounded-md file:border-0 file:bg-[#ececee] file:px-3 file:py-2 file:font-semibold file:text-black hover:file:bg-black/10"
                />
              </div>
            </fieldset>

            <label className="mt-6 flex items-start gap-3 font-body text-xs leading-relaxed text-black/60">
              <input type="checkbox" name="consent" className="mt-0.5 h-4 w-4 shrink-0 accent-tnt-amber" />
              <span>
                By checking this box, I agree to receive conversational text
                messages from TNT Crane and Rigging related services. Reply STOP
                to opt-out at any time. For assistance, text HELP. Message and
                data rates may apply. Message frequency varies. Please view our
                Privacy Policy and Terms &amp; Conditions for more information.
              </span>
            </label>

            <Button type="submit" variant="primary" className="mt-6 w-full justify-center py-3.5 text-base!">
              Request a Quote
            </Button>
          </form>
        )}
      </div>
    </section>
  );
}
