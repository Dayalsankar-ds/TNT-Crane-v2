/**
 * SAFETY CULTURE — iCARE, FIGMA DESIGN IN LIGHT (2026-11-04, on request:
 * "bring the icon section in the light theme, which we have on Figma … change
 * to the light theme and remove that icon text … the same image and
 * everything the same"). Built from "Section — iCARE Safety Culture" (node
 * 1053:3169) of the TNT Figma file's "TNT Home screen" artboard:
 *   - Left: "iCare / Safety Culture", "Every Lift. Every Person. Home Safe.",
 *     the intro line, "Our Safety Commitment" button, the three icon points
 *     (Incident & Injury-Free, Training & Certification, Continuous
 *     Improvement) and "People / Process / A Safer Tomorrow".
 *   - Right: the design's crawler-crane bridge-girder photo, the crew
 *     cut-out over it (bottom right; see the crew image's own note for the
 *     user-supplied cut-out that replaced the Figma PNG), "A Safer Tomorrow /
 *     Builds Stronger Communities" bottom right, and "Care for the people. / Plan the work. / Protect the
 *     outcome." top right.
 *   - LIGHT: the design's black diagonal panel and black-to-clear band are
 *     white here (solid panel + white fade band on the same slant), text is
 *     black, accents stay gold — the same treatment About the Fleet got.
 *   - REMOVED: the large outlined "iCARE" lettering laid over the photo
 *     (on request — "remove that icon text").
 *   - Images and icons exported from the Figma file: public/photos/safety/
 *     icare-bridge-girder-crawler.jpg, icare-crew.png, and public/icons/
 *     icare-{incident-free,training,improvement}.svg.
 *   - One screen tall on desktop (100svh minus --chrome-h, min 560px),
 *     type and spacing scaled by viewport height, like the sections above.
 *   - Button is the site's black primary (the design's is a gold outline),
 *     matching the black CTAs the user picked for Services and the Fleet;
 *     it opens the About page's safety section (/about#safety).
 * The previous badge/pillar/certification version is kept below for
 * history; a copy of the file as it was is in the session scratchpad
 * (SafetyCulture.before-figma.tsx).
 *
 * ── EARLIER HISTORY ─────────────────────────────────────────────────────

 * SAFETY CULTURE — iCARE.
 *
 * TNT's safety program, given its own moment right before the homepage's
 * convert beat (CaseStudies "prove it" → this → ContactSection "convert").
 * Same maroon contrast-band pattern ClientSelfService established: the band
 * color itself marks the section, eyebrow + h2 + subline up top, then a
 * supporting row below.
 *
 * Logo: Assets/PNG Logos/iCARE_Badge-Logo (copied to public/brand/icare-badge.png).
 * The Badge variant was used instead of Primary/Secondary because both of
 * those bake "Safety Culture Starts With Me" in as black text on a
 * transparent background — illegible on this section's maroon fill. The
 * Badge is a self-contained shield (works on any background), so the
 * tagline is set here as real text instead, in the site's own type.
 *
 * LIGHT BY DEFAULT (2026-09-15, on request — "iCARE needs to be in light
 * theme"): every white/N text/border utility that existed to read against a
 * dark fill is the equivalent black/N, and the pillar/badge chip fills are
 * `bg-black/5`. The iCARE badge PNG and the amber accents are unchanged —
 * both read fine on either fill. This used to be conditional on a
 * "Theme 1/2" toggle (Theme 2 swapping the band to dark slate) — that
 * toggle was removed project-wide 2026-09-23, on request, so the section
 * now always renders its Theme 1 (light) look. The Light/Dark toggle was
 * removed too (2026-10-01), so there is no dark variant.
 *
 * LIGHT-MODE SHELL IS `bg-tnt-gray` (2026-09-24, on request — "add grey bg
 * on this section, we are not showing difference on bg between the
 * sections"): was `bg-white`, same as CoverageMap/BranchLocator above it and
 * ContactSection below it, so three sections in a row read as one
 * undifferentiated block. `tnt-gray` (#eeeeee) is the token globals.css
 * itself documents for exactly this — "alternating section backgrounds".
 *
 * 2026-07-30: the certification-chip row briefly moved to a new strip right
 * after the hero (CertificationsStrip), to avoid the same five badges
 * appearing twice on one page. That strip couldn't get real, rights-cleared
 * logos for these credentials on short notice (see its own history — moved
 * from fabricated seal art to a "pending" placeholder rather than risk an
 * unverified compliance claim), so the strip was repurposed to show TNT's
 * own Family of Companies logos instead, and the certification chips moved
 * back here — their original, and now only, home.
 */

import Button from "./Button";

const POINTS: { icon: string; label: [string, string] }[] = [
  { icon: "/icons/icare-incident-free.svg", label: ["Incident &", "Injury-Free"] },
  { icon: "/icons/icare-training.svg", label: ["Training &", "Certification"] },
  { icon: "/icons/icare-improvement.svg", label: ["Continuous", "Improvement"] },
];

export default function SafetyCulture() {
  return (
    <section
      id="safety"
      className="relative flex scroll-mt-[var(--chrome-h)] flex-col overflow-hidden bg-tnt-gray text-black lg:block lg:h-[calc(100svh-var(--chrome-h))] lg:min-h-[560px]"
    >
      {/* ── PHOTO LAYERS ──────────────────────────────────────────────
          Below lg these sit in their own block under the copy; from lg up
          they fill the section behind the white diagonal panel. */}
      <div className="relative order-2 aspect-[16/10] overflow-hidden lg:absolute lg:inset-0 lg:aspect-auto">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/photos/safety/icare-bridge-girder-crawler.jpg"
          alt="TNT crawler crane setting bridge girders over a highway interchange"
          className="absolute top-[-3.46%] left-[-0.97%] h-[106.79%] w-[102.92%] max-w-none object-cover"
        />
        {/* Background photo at the design's exact frame too: x −14,
            y −27, 1482×833 in the 1440×780 frame. */}
        {/* The design's two diagonal panels, light: a white fade band and a
            solid white panel on the same slant. */}
        <div
          aria-hidden="true"
          className="absolute inset-0 hidden lg:block lg:[clip-path:polygon(0_0,67.15%_0,55.5%_100%,0_100%)]"
          style={{ background: "linear-gradient(to right, #eeeeee 26.2%, rgba(238,238,238,0) 67.15%)" }}
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 hidden bg-tnt-gray lg:block lg:[clip-path:polygon(0_0,51.74%_0,42.75%_100%,0_100%)]"
        />
        {/* Crew cut-out — THE USER'S OWN CUT-OUT, LARGER (2026-11-04, on
            request: "increase the size of that image … it does not match the
            background … edges look cut out"). public/photos/safety/
            icare-crew-v2.webp is the 2000×938 transparent cut-out the user
            supplied: cleaner edges than the Figma "image 3" PNG
            (icare-crew.png, kept on disk) and cropped tight to the four
            workers, with no tagline baked in. Sized ~12% larger than the
            people in the Figma layer: right edge kept at the design's −1.94%,
            hard hats kept at the design's height (~38% down), so it's 70% of
            the section tall and runs 8.5% past the bottom. The left-most
            worker sits partly behind the icon labels, as in the exact-Figma
            version the user chose to keep. */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/photos/safety/icare-crew-v2.webp"
          alt="TNT crew in hard hats reviewing a lift plan together"
          className="absolute right-[-2%] bottom-[-4%] h-[82%] w-auto max-w-none lg:right-[-1.94%] lg:bottom-[-8.5%] lg:h-[70%]"
        />

        {/* Tagline, bottom right (the Figma's own text layer — the new
            cut-out doesn't carry it baked in like image 3 did). */}
        <div className="absolute right-[4%] bottom-[clamp(1.25rem,5vh,2.5rem)] hidden text-right lg:block">
          <p className="font-body text-sm leading-snug font-medium text-white [text-shadow:0_1px_6px_rgba(0,0,0,0.6)]">
            A Safer Tomorrow
            <br />
            Builds Stronger Communities
          </p>
          <span aria-hidden="true" className="mt-2 ml-auto block h-0.5 w-6 bg-tnt-amber" />
        </div>

        {/* Top-right lines with the gold rule (desktop only). */}
        <div className="absolute top-[clamp(1.5rem,7vh,3.5rem)] right-[4%] hidden gap-5 lg:flex">
          <span aria-hidden="true" className="w-0.5 bg-tnt-amber" />
          <ul className="space-y-3 font-body text-sm leading-snug font-medium text-black/80">
            <li>Care for<br />the people.</li>
            <li>Plan the work.</li>
            <li>Protect<br />the outcome.</li>
          </ul>
        </div>
      </div>

      {/* ── COPY ─────────────────────────────────────────────────────── */}
      <div className="relative z-10 order-1 flex flex-col justify-between px-4 py-14 sm:px-6 lg:h-full lg:w-[44%] lg:py-[clamp(1rem,5vh,3.5rem)] lg:pr-6 lg:pl-[4.45vw]">
        <div>
          <p className="font-display text-4xl leading-none text-black lg:text-[clamp(2rem,5.4vh,3rem)]">
            iCare
          </p>
          <p className="mt-2 font-body text-sm text-black/60">Safety Culture</p>
          <span aria-hidden="true" className="mt-3 block h-0.5 w-6 bg-tnt-amber" />

          <h2 className="mt-7 font-display text-5xl leading-[1.02] text-black uppercase sm:text-6xl lg:mt-[3.2vh] lg:text-[min(4vw,3.5rem,5.8vh)]">
            Every Lift.
            <br />
            Every Person.
            <br />
            <span className="text-tnt-amber">Home Safe.</span>
          </h2>
          <p className="mt-6 max-w-md font-body text-base leading-relaxed text-tnt-body lg:mt-[3vh] lg:text-[min(1.0625rem,2vh)]">
            Safety is more than a requirement. It&rsquo;s a shared commitment
            built into how we plan, communicate and work — every day.
          </p>
          <div className="mt-7 lg:mt-[3.2vh]">
            <Button href="/about#safety" variant="primary" className="px-6 py-3.5">
              Our Safety Commitment
            </Button>
          </div>

          <ul className="mt-9 grid max-w-md grid-cols-3 lg:mt-[3.6vh]">
            {POINTS.map((p, i) => (
              <li key={p.icon} className={`pr-4 ${i > 0 ? "border-l border-black/15 pl-5" : ""}`}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={p.icon} alt="" className="h-8 w-8 object-contain lg:h-[clamp(1.5rem,3.6vh,2rem)] lg:w-[clamp(1.5rem,3.6vh,2rem)]" />
                <p className="mt-2.5 font-body text-[13px] leading-snug text-black lg:text-[clamp(0.75rem,1.5vh,0.8125rem)]">
                  {p.label[0]}
                  <br />
                  {p.label[1]}
                </p>
                <span aria-hidden="true" className="mt-2.5 block h-px w-5 bg-black/30" />
              </li>
            ))}
          </ul>
        </div>

        <p className="mt-10 hidden font-body text-xs text-black/50 lg:block">
          People&nbsp;&nbsp;/&nbsp;&nbsp;Process&nbsp;&nbsp;/&nbsp;&nbsp;A Safer Tomorrow
        </p>
      </div>
    </section>
  );
}
