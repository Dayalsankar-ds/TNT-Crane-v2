import type { Metadata } from "next";
import Image from "next/image";
import Button from "@/components/site/Button";
import { Eyebrow, Heading, Kicker } from "@/components/site/primitives";
import ScrollButton from "@/components/about/ScrollButton";
import HashScroll from "@/components/about/HashScroll";
import Timeline from "@/components/about/Timeline";
import FamilyBento from "@/components/about/FamilyBento";
import IndustriesTabs from "@/components/about/IndustriesTabs";
import CapabilityExplorer from "@/components/about/CapabilityExplorer";

/**
 * /about — TNT's story, the family of companies, combined capability, reach
 * and safety. Built 2026-10-08 from the About Us master brief.
 *
 * Server component; only the timeline, company selector, capability list,
 * scroll CTA and hash handling are client islands. Every fact is sourced in
 * src/components/about/aboutData.ts.
 *
 * Section rhythm (no two adjacent sections alike): split hero (black panel
 * + photo) → white story → grey timeline → off-white family → white
 * capabilities → off-white reach → grey safety → gold close.
 *
 * Outbound links all target homepage sections (/#services, /#coverage,
 * /#safety, /#quote) — there are no separate pages for those yet. Hero.tsx
 * skips its autoplay when the homepage is opened with a #hash, so these land
 * where they say.
 *
 * HERO IMAGE: /photos/fleet/fleet-cover-tower-crane-dusk.jpg — the tower
 * crane at dusk under a dark, cloudy sky (2026-11-12, on request: the user
 * sent their reference About hero and said "Images are not same"). It's the
 * same file About the Fleet (EquipmentGuide.tsx) uses as its cover. The
 * previous image, /photos/about/about-hero-crawler-sunset.webp (02.png from
 * the supplied TNT/Image folder, a rendered storyboard still), stays on disk.
 */

export const metadata: Metadata = {
  title: "About Us — TNT Crane & Rigging",
  description:
    "Since 1985, TNT Crane & Rigging has grown from Houston into a North American crane and rigging family: Southway, RMS Cranes, Eagle West, JMS and TNT Canada.",
};


/**
 * An eased black → transparent fade for the hero photo's edge. A plain
 * two-stop linear gradient fades at a constant rate, which the eye reads as
 * a band with a visible start line; these stops follow an ease-in-out curve
 * (the "easing gradients" technique), so the black thins out gradually and
 * there is no edge where the fade begins or ends. `rgb` is the colour being
 * faded from (black by default; the footprint section uses its off-white).
 */
function easedFade(direction: string, rgb = "0,0,0") {
  const stops: [number, number][] = [
    [1, 0], [0.987, 8.1], [0.951, 15.5], [0.896, 22.5], [0.825, 29], [0.741, 35.3],
    [0.648, 41.2], [0.55, 47.1], [0.45, 52.9], [0.352, 58.8], [0.259, 64.7],
    [0.175, 71], [0.104, 77.5], [0.049, 84.5], [0.013, 91.9], [0, 100],
  ];
  return `linear-gradient(${direction}, ${stops.map(([a, p]) => `rgba(${rgb},${a}) ${p}%`).join(", ")})`;
}

export default function AboutPage() {
  return (
    <>
      <HashScroll />

      {/* 01 — HERO */}
      {/* -mt-10 below lg: --chrome-h is a fixed 120px, but the nav is only
          80px tall until the lg utility strip appears, so <main>'s padding
          leaves a 40px white band above the hero on phones/tablets. Tucking
          the black hero up closes it (local fix — the shared variable also
          drives the homepage and Hero.tsx landing maths, so it's untouched). */}
      <section
        aria-labelledby="about-hero-heading"
        className="relative -mt-10 flex flex-col overflow-hidden bg-black lg:mt-0 lg:flex-row lg:min-h-[min(46rem,calc(100svh-var(--chrome-h)))] lg:items-center"
      >
        {/* Photo. Desktop: absolutely placed from 32% to the right edge, so
            it runs under the text column's edge and the eased fade below
            can blend it into the black over a wide band (no seam). Phones:
            in flow below the text, faded in from the top. Each fade starts
            2px outside the photo so a sub-pixel photo edge can't show as a
            hairline. */}
        <div className="relative order-2 aspect-[16/10] lg:absolute lg:inset-y-0 lg:right-0 lg:left-[32%] lg:aspect-auto">
          <Image
            src="/photos/fleet/fleet-cover-tower-crane-dusk.jpg"
            alt="Tower crane lit up against a dark, cloudy evening sky over a construction site"
            fill
            priority
            sizes="(min-width: 1024px) 68vw, 100vw"
            className="object-cover object-[65%_50%]"
          />
          <div aria-hidden="true" className="absolute inset-y-0 -left-0.5 hidden w-[calc(42%+2px)] lg:block" style={{ backgroundImage: easedFade("to right") }} />
          <div aria-hidden="true" className="absolute inset-x-0 -top-0.5 h-[calc(45%+2px)] lg:hidden" style={{ backgroundImage: easedFade("to bottom") }} />
        </div>

        <div className="relative z-10 order-1 flex flex-col justify-center px-4 py-16 sm:px-6 sm:py-20 lg:w-[46%] lg:px-[4.45vw]">
          <p className="flex items-center gap-4 font-body text-[13px] font-bold tracking-[0.18em] text-tnt-amber uppercase">
            <span aria-hidden="true" className="h-px w-9 bg-tnt-amber" />
            About TNT Crane &amp; Rigging
          </p>
          <h1 id="about-hero-heading" className="mt-8 font-display text-5xl leading-[1.02] text-white uppercase sm:text-6xl xl:text-7xl">
            Built on
            <br />
            local expertise.
            <br />
            <span className="text-tnt-amber">United by strength.</span>
          </h1>
          <p className="mt-8 max-w-lg font-body text-base leading-relaxed text-white/75 sm:text-lg">
            Since 1985, TNT Crane &amp; Rigging has grown from its Houston roots into a North American
            crane and rigging organization, bringing regional expertise, specialized equipment, and
            engineering capabilities together under one family.
          </p>
          <div className="mt-10">
            <ScrollButton targetId="our-story" onDark>
              Explore Our Story
            </ScrollButton>
          </div>
          {/* TNT Canada mark removed from the hero 2026-11-12, on request. */}
        </div>
      </section>

      {/* 02 — OUR STORY + TIMELINE */}
      {/* SPLIT LAYOUT WITH A SLANTED PHOTO (2026-11-12, on request — "Follow
          this design on our journey section"): text on the left inside the
          usual 7xl container; the photo runs full-height to the right edge
          from ~56% of the width, its left edge slanted (clip-path, 56% at
          the top → ~59% at the bottom, as in the reference). Second heading
          line in brand yellow. The photo is the red crawler crane setting
          bridge girders (public/photos/safety/icare-bridge-girder-crawler.jpg,
          also iCARE's); tnt-crawler-bridge-lift.jpg, the old rounded-card
          image here, stays on disk. Below lg the photo stacks under the
          text, unslanted. */}
      <section
        id="our-story"
        aria-labelledby="our-story-heading"
        className="relative scroll-mt-32 overflow-hidden bg-white"
      >
        <div className="px-4 py-20 sm:px-6 sm:py-28 lg:flex lg:min-h-[clamp(34rem,72vh,44rem)] lg:items-center lg:px-[4.45vw]">
          <div className="lg:w-[54%] lg:pr-10 xl:w-[52%]">
            <Eyebrow>Our Journey</Eyebrow>
            <Heading className="mt-4 text-5xl leading-[0.95] sm:text-6xl">
              <span id="our-story-heading">
                Four decades of
                <br />
                <span className="text-tnt-amber">lifting what matters.</span>
              </span>
            </Heading>
            <div className="mt-8 max-w-xl space-y-5 font-body text-lg leading-relaxed text-black/70">
              <p>
                TNT Crane &amp; Rigging was founded in 1985 in Houston, Texas. In the decades that
                followed, it grew through regional expansion and strategic acquisitions.
              </p>
              <p>
                Established regional businesses became part of the wider TNT family, keeping the
                names, crews and customer relationships their regions know. Their expertise,
                combined with TNT&apos;s fleet, engineering and safety program, makes up TNT&apos;s
                North American presence today.
              </p>
            </div>
          </div>
        </div>
        <div className="relative aspect-[16/10] w-full lg:absolute lg:inset-y-0 lg:right-0 lg:left-[55.6%] lg:aspect-auto lg:w-auto lg:[clip-path:polygon(0_0,100%_0,100%_100%,8.2%_100%)]">
          <Image
            src="/photos/safety/icare-bridge-girder-crawler.jpg"
            alt="TNT crawler crane setting bridge girders over a highway interchange"
            fill
            sizes="(min-width: 1024px) 45vw, 100vw"
            className="object-cover object-[80%_50%]"
          />
        </div>
      </section>

      {/* 03 — FAMILY OF COMPANIES */}
      {/* BENTO GRID (2026-11-12, on request): replaces the parent-company
          card + FamilyProfiles (branch lists per company) + "Find Our
          Locations" button — see FamilyBento.tsx. FamilyProfiles.tsx and
          PARENT in aboutData.ts stay on disk, unused here. */}
      <section id="family-of-companies" aria-labelledby="family-heading" className="scroll-mt-32 bg-[#f5f4f0]">
        <div className="px-4 pt-20 pb-16 sm:px-6 sm:pt-28 sm:pb-20 lg:px-[4.45vw] lg:pb-0">
          <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-end lg:gap-20">
            <div>
              <Eyebrow>The TNT Family</Eyebrow>
              <Heading className="mt-4 text-5xl leading-[0.95] sm:text-6xl">
                <span id="family-heading">
                  Different names.
                  <br />
                  <span className="text-tnt-amber">One TNT.</span>
                </span>
              </Heading>
            </div>
            <p className="max-w-xl font-body text-lg leading-relaxed text-black/70 lg:justify-self-end">
              Regional companies with deep local roots, each still known by the name its customers
              trust, and all backed by the fleet, engineering and iCARE safety program of TNT Crane
              &amp; Rigging.
            </p>
          </div>
          <div className="mt-12">
            <FamilyBento />
          </div>
        </div>
      </section>

      {/* 03b — TIMELINE ("The route so far"). MOVED BELOW THE FAMILY BENTO
          (2026-11-12, on request — "don't give any extra spaces above and
          below it"): it shares the family band's off-white so the two read
          as one block. On desktop the timeline's own sticky frame is a full
          viewport tall with its content centred, which already leaves room
          above and below — so the family section's bottom padding and this
          section's padding are both dropped at lg, instead of stacking on
          top of that. */}
      <section aria-label="TNT timeline" className="bg-[#f5f4f0]">
        <div className="px-4 pb-20 sm:px-6 sm:pb-24 lg:px-[4.45vw] lg:pb-0">
          <Timeline />
        </div>
      </section>

      {/* 04 — INTEGRATED CAPABILITIES */}
      <section id="capabilities" aria-labelledby="capabilities-heading" className="scroll-mt-32 bg-white">
        <div className="px-4 py-20 sm:px-6 sm:py-28 lg:px-[4.45vw]">
          <div className="max-w-2xl">
            <Eyebrow>What We Do</Eyebrow>
            <Heading className="mt-4 text-5xl leading-[0.95] sm:text-6xl">
              <span id="capabilities-heading">
                One partner.
                <br />
                End-to-end capability.
              </span>
            </Heading>
            <p className="mt-6 font-body text-lg leading-relaxed text-black/70">
              From the first lift plan to the final set, TNT carries a project through planning,
              lifting, rigging and equipment moving, with the specialist crews and machines each step
              needs.
            </p>
          </div>
          <div className="mt-12">
            <CapabilityExplorer />
          </div>
          <div className="mt-10">
            <Button href="/services" variant="primary">
              Explore Our Services
            </Button>
          </div>
        </div>
      </section>

      {/* 04b — INDUSTRIES (2026-11-12, on request — design "A": tabbed
          sectors with a photo swap; see IndustriesTabs.tsx). Grey band
          between the white capabilities section and the off-white reach. */}
      <section id="industries" aria-labelledby="industries-heading" className="scroll-mt-32 bg-tnt-gray">
        <div className="px-4 py-20 sm:px-6 sm:py-28 lg:px-[4.45vw]">
          <div className="max-w-2xl">
            <Eyebrow>Industries We Serve</Eyebrow>
            <Heading className="mt-4 text-5xl leading-[0.95] sm:text-6xl">
              <span id="industries-heading">
                Every sector.
                <br />
                <span className="text-tnt-amber">One standard.</span>
              </span>
            </Heading>
          </div>
          <div className="mt-12">
            <IndustriesTabs />
          </div>
        </div>
      </section>

      {/* 05 — INCIDENT & INJURY FREE. The full six-commitment section moved
          to /safety on 2026-11-19 (on request, so it isn't repeated); this
          is the short summary that links there. */}
      <section aria-labelledby="iif-summary-heading" className="bg-white">
        <div className="grid gap-8 px-4 py-20 sm:px-6 sm:py-24 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-end lg:gap-20 lg:px-[4.45vw]">
          <div>
            <Kicker>Incident &amp; Injury Free</Kicker>
            <h2 className="mt-4 font-display text-5xl leading-[1.02] text-black uppercase sm:text-6xl">
              <span id="iif-summary-heading">
                Committed to the elimination
                <br />
                <span className="text-tnt-amber">of workplace injuries.</span>
              </span>
            </h2>
          </div>
          <div className="lg:pb-2">
            <p className="font-body text-lg leading-relaxed text-tnt-body">
              Incident &amp; Injury Free is the commitment every company in the TNT family shares,
              backed by certified crews and a lift-safety process that runs before every job.
            </p>
            <div className="mt-8">
              <Button href="/safety" variant="primary">
                Our Safety Commitment
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 06 — "Our Commitment to Safety" (iCARE badge + four safety points)
          removed 2026-11-16, on request; the Incident & Injury Free section
          above now carries the safety story. */}

      {/* 07 — FINAL CTA */}
      <section id="work-with-us" aria-labelledby="cta-heading" className="scroll-mt-32 bg-tnt-amber">
        <div className="flex flex-col gap-10 px-4 py-20 sm:px-6 sm:py-24 lg:flex-row lg:items-end lg:justify-between lg:px-[4.45vw]">
          <div className="max-w-2xl">
            <p className="font-body text-[13px] font-bold tracking-[0.18em] text-black/70 uppercase">Let&apos;s Work Together</p>
            <h2 id="cta-heading" className="mt-4 font-display text-5xl leading-[0.95] tracking-wide text-black uppercase sm:text-6xl">
              Your next project.
              <br />
              Our next priority.
            </h2>
            <p className="mt-6 font-body text-lg leading-relaxed text-black/75">
              From lift planning and engineering to crane rental and specialized rigging, our teams
              are ready to help you move your next project forward.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <Button href="/#quote" variant="primary">
              Request a Quote
            </Button>
            <Button href="/#coverage" variant="secondary">
              Find a Location
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
