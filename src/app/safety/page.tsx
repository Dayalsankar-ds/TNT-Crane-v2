import type { Metadata } from "next";
import Image from "next/image";
import Button from "@/components/site/Button";
import { Icon, Kicker } from "@/components/site/primitives";
import RequestQuote from "@/components/site/RequestQuote";
import Reveal from "@/components/site/Reveal";
import ParallaxFrame from "@/components/site/ParallaxFrame";
import ScrollButton from "@/components/about/ScrollButton";
import { STORIES, SOURCES, formatDate } from "@/components/news/newsData";
import {
  HERO_FACTS,
  ICARE_PRINCIPLES,
  IIF_COMMITMENTS,
  LIFT_STEPS,
  MEMBERSHIPS,
  RECOGNITION,
  STANDARDS,
  TRAINING,
} from "@/components/safety/safetyData";

/**
 * /safety — the TNT family's safety page. First built 2026-11-19 from the
 * family-site safety review; REDESIGNED the same day, on request ("not that
 * much I expected" — not visual enough, layout generic, doesn't match home).
 *
 * Each section now borrows one of the home screen's own visual patterns,
 * so no two sections look alike:
 *
 *   01 Hero              full-height photo faded into white + side words
 *                        + fact strip (EquipmentGuide's category strip)
 *   02 Incident & Injury sticky heading, commitments as a numbered list
 *      Free
 *   03 iCare culture     diagonal light panels over a photo
 *                        (EquipmentGuide / SafetyCulture)
 *   04 Training          tall parallax photo beside the two regions
 *   05 Lift safety       slanted photo frame + numbered rows (CoreServices)
 *   06 Standards         three panels, big award year (Hero stat style)
 *   07 Insights          LatestNews card style
 *   08 Request a Quote   the home page's own section
 *
 * LIGHT THEME ONLY (2026-11-19, on request — "I want only light theme"):
 * no dark bands. Sections alternate white / tnt-gray, ending white before
 * the grey quote section.
 *
 * Content is unchanged and lives in safetyData.ts.
 */

export const metadata: Metadata = {
  title: "Safety | TNT Crane & Rigging",
  description:
    "Incident & Injury Free, the iCare safety culture, operator certification and the lift-safety process used across the TNT family of companies.",
  alternates: { canonical: "/safety" },
};

/** CoreServices' slanted photo frame. */
const SLANT = "polygon(6% 0, 100% 0, 94% 100%, 0 100%)";
/** The /services hero's eased fade, in white: solid at the start, clear at the end. */
function lightFade(direction: string) {
  const stops: [number, number][] = [
    [1, 0], [0.987, 8.1], [0.951, 15.5], [0.896, 22.5], [0.825, 29], [0.741, 35.3],
    [0.648, 41.2], [0.55, 47.1], [0.45, 52.9], [0.352, 58.8], [0.259, 64.7],
    [0.175, 71], [0.104, 77.5], [0.049, 84.5], [0.013, 91.9], [0, 100],
  ];
  return `linear-gradient(${direction}, ${stops.map(([a, p]) => `rgba(255,255,255,${a}) ${p}%`).join(", ")})`;
}

const pad = (i: number) => String(i + 1).padStart(2, "0");

/** Photos this page already shows, so an article card never repeats one. */
const PAGE_PHOTOS = new Set([
  "/photos/news/figma-news-02-safety-award.jpg",
  "/photos/fleet/hydraulic-truck-crane.jpg",
  "/photos/rigging/cantilever-spreader-bar.jpg",
  "/photos/footer/footer-lets-talk.jpg", // site footer
  "/photos/fleet/crawler-crane.jpg",
  "/photos/cases/tnt-098-wind-farm-turbine-erection.jpg",
]);

/** Newest "Crane Safety" stories, one per photo, none repeating a page photo. */
const SAFETY_STORIES = (() => {
  const seen = new Set(PAGE_PHOTOS);
  return STORIES.filter((s) => s.topic === "Crane Safety" || s.tags.includes("Crane Safety"))
    .sort((a, b) => b.date.localeCompare(a.date))
    .filter((s) => (seen.has(s.photo) ? false : (seen.add(s.photo), true)))
    .slice(0, 3);
})();

const H2 = "mt-4 font-display text-5xl leading-[1.02] uppercase sm:text-6xl";

export default function SafetyPage() {
  return (
    <>
      {/* 01 — HERO. -mt-10 below lg: same nav-height correction as /services. */}
      <section
        aria-labelledby="safety-hero-heading"
        className="relative -mt-10 flex flex-col overflow-hidden bg-white text-black lg:mt-0 lg:h-[calc(100svh-var(--chrome-h))] lg:min-h-[640px]"
      >
        <div className="relative flex flex-1 flex-col lg:block">
          {/* Photo: right side on desktop, faded into white on its left edge;
              stacked under the copy below lg. */}
          <div className="relative order-2 aspect-[16/10] lg:absolute lg:inset-y-0 lg:right-0 lg:left-[36%] lg:aspect-auto">
            <Image
              src="/photos/news/figma-news-02-safety-award.jpg"
              alt="A TNT crew in hard hats and high-visibility vests at a site safety briefing"
              fill
              priority
              sizes="(min-width: 1024px) 64vw, 100vw"
              className="object-cover object-[60%_40%]"
            />
            <div aria-hidden="true" className="absolute inset-y-0 -left-0.5 hidden w-[calc(40%+2px)] lg:block" style={{ backgroundImage: lightFade("to right") }} />
            <div aria-hidden="true" className="absolute inset-x-0 -top-0.5 h-[calc(30%+2px)] lg:hidden" style={{ backgroundImage: lightFade("to bottom") }} />
            {/* Side words on the photo (EquipmentGuide's pattern). */}
            <div aria-hidden="true" className="absolute top-10 right-[4.45vw] hidden gap-5 lg:flex">
              <span className="w-0.5 bg-tnt-amber" />
              <ul className="space-y-3 font-body text-sm leading-snug font-semibold text-white [text-shadow:0_1px_6px_rgba(0,0,0,0.6)]">
                <li>Plan the lift.</li>
                <li>Inspect the gear.</li>
                <li>Brief the crew.</li>
                <li>Go home safe.</li>
              </ul>
            </div>
          </div>

          <div className="relative z-10 order-1 flex flex-col justify-center px-4 pt-24 pb-10 sm:px-6 lg:h-full lg:w-[52%] lg:px-[4.45vw] lg:py-0">
            <Kicker>Safety</Kicker>
            <h1 id="safety-hero-heading" className="mt-6 font-display text-6xl leading-[0.98] text-black uppercase sm:text-7xl xl:text-8xl">
              Every lift.
              <br />
              Every person.
              <br />
              <span className="text-tnt-amber">Home safe.</span>
            </h1>
            <p className="mt-8 max-w-xl font-body text-lg leading-relaxed text-tnt-body">
              Across the TNT family of companies, safety is planned into every lift before a crane
              arrives on site — by trained, certified crews who treat every incident as preventable.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <ScrollButton targetId="incident-injury-free">Our Commitment</ScrollButton>
              <Button href="/contact#contact-form" variant="secondary">
                Talk to Our Team
              </Button>
            </div>
          </div>
        </div>

        {/* Fact strip along the bottom (EquipmentGuide's category strip). */}
        <ul className="relative z-10 grid grid-cols-2 border-t border-black/10 bg-white text-black lg:grid-cols-4">
          {HERO_FACTS.map((f, i) => (
            <li
              key={f.label}
              className={`flex flex-col gap-1 px-4 py-5 sm:px-6 lg:px-[2.2vw] lg:py-6 ${i > 0 ? "lg:border-l" : ""} ${i % 2 === 1 ? "border-l" : ""} ${i > 1 ? "border-t lg:border-t-0" : ""} border-black/10 first:lg:pl-[4.45vw]`}
            >
              <span className="font-display text-3xl leading-none text-black uppercase sm:text-4xl">{f.value}</span>
              <span className="font-body text-sm leading-snug text-tnt-body">{f.label}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* 02 — INCIDENT & INJURY FREE: sticky heading + numbered list. */}
      <section
        id="incident-injury-free"
        aria-labelledby="iif-heading"
        className="relative scroll-mt-32 overflow-hidden bg-tnt-gray text-black"
      >
        <div className="relative grid gap-14 px-4 py-20 sm:px-6 sm:py-28 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-20 lg:px-[4.45vw]">
          <Reveal className="lg:sticky lg:top-[calc(var(--chrome-h)+2.5rem)] lg:self-start">
            <Kicker>Incident &amp; Injury Free</Kicker>
            <h2 className={`${H2} text-black`}>
              <span id="iif-heading">
                Committed to
                <br />
                the elimination
                <br />
                <span className="text-tnt-amber">of workplace injuries.</span>
              </span>
            </h2>
            <p className="mt-8 max-w-md font-body text-lg leading-relaxed text-tnt-body">
              The commitment every company in the TNT family shares — six statements our crews hold
              themselves to on every job.
            </p>
          </Reveal>
          <ol className="divide-y divide-black/10 border-y border-black/10">
            {IIF_COMMITMENTS.map((text, i) => (
              <li key={i}>
                <Reveal delay={i * 60} className="group grid grid-cols-[4.5rem_1fr] items-start gap-4 py-7 sm:grid-cols-[6rem_1fr] sm:gap-6">
                  <span className="font-display text-5xl leading-none text-[#7c8794] transition-colors group-hover:text-tnt-amber sm:text-6xl">
                    <span className="sr-only">Commitment </span>
                    {pad(i)}
                  </span>
                  <p className="pt-1 font-body text-lg leading-relaxed text-black/75 sm:text-xl">{text}</p>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* 03 — iCARE: diagonal light panels over a photo (home pattern). */}
      <section
        id="icare"
        aria-labelledby="icare-heading"
        className="relative flex scroll-mt-32 flex-col overflow-hidden bg-white text-black lg:block lg:min-h-[calc(100svh-var(--chrome-h))]"
      >
        <div className="relative order-2 aspect-[16/10] overflow-hidden lg:absolute lg:inset-0 lg:aspect-auto">
          <Image
            src="/photos/rigging/cantilever-spreader-bar.jpg"
            alt="A crawler crane setting a cantilever spreader bar at the edge of a high-rise floor"
            fill
            sizes="100vw"
            className="object-cover object-right"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 hidden bg-white/40 lg:block lg:[clip-path:polygon(0_0,64%_0,56%_100%,0_100%)]"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 hidden bg-white lg:block lg:[clip-path:polygon(0_0,55%_0,47%_100%,0_100%)]"
          />
          <div className="absolute right-[4%] bottom-8 hidden text-right lg:block">
            <p className="font-body text-sm leading-snug font-medium text-white [text-shadow:0_1px_6px_rgba(0,0,0,0.6)]">
              Noticing hazards.
              <br />
              Speaking up.
              <br />
              Looking after each other.
            </p>
            <span aria-hidden="true" className="mt-2 ml-auto block h-0.5 w-6 bg-tnt-amber" />
          </div>
        </div>

        <div className="relative z-10 order-1 px-4 py-20 sm:px-6 lg:w-[50%] lg:py-[clamp(3rem,9vh,6rem)] lg:pr-0 lg:pl-[4.45vw]">
          <Reveal>
            <div className="flex items-center gap-5">
              <Image src="/brand/icare-badge.png" alt="TNT iCARE safety program badge" width={976} height={1170} sizes="4rem" className="h-auto w-14" />
              <div>
                <p className="font-display text-4xl leading-none text-black">iCare</p>
                <p className="mt-1 font-body text-sm text-black/60">Safety Culture</p>
              </div>
            </div>
            <h2 className={`${H2} mt-8 max-w-xl text-black`}>
              <span id="icare-heading">
                Safety is a habit,
                <br />
                <span className="text-tnt-amber">not a rulebook.</span>
              </span>
            </h2>
            <p className="mt-6 max-w-lg font-body text-lg leading-relaxed text-tnt-body">
              iCare runs through every level of the company — the everyday habit behind the
              commitment.
            </p>
          </Reveal>
          <ul className="mt-10 max-w-lg divide-y divide-black/10 border-t border-black/10">
            {ICARE_PRINCIPLES.map((p, i) => (
              <li key={p.title}>
                <Reveal delay={i * 80} className="flex items-start gap-5 py-5">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={p.icon} alt="" className="mt-1 h-9 w-9 shrink-0 object-contain" />
                  <div>
                    <h3 className="font-display text-2xl leading-tight text-black uppercase">{p.title}</h3>
                    <p className="mt-1.5 font-body text-base leading-relaxed text-tnt-body">{p.body}</p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 04 — TRAINING: tall parallax photo beside the two regions. */}
      <section id="training" aria-labelledby="training-heading" className="scroll-mt-32 bg-tnt-gray">
        <div className="grid gap-12 px-4 py-20 sm:px-6 sm:py-28 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-stretch lg:gap-16 lg:px-[4.45vw]">
          <ParallaxFrame
            id="/photos/fleet/crawler-crane.jpg"
            alt="A TNT crawler crane with its boom raised on a job site"
            className="relative aspect-[4/5] overflow-hidden rounded-2xl lg:aspect-auto lg:min-h-[40rem]"
          >
            <div className="absolute inset-x-4 bottom-4 rounded-xl bg-white p-6 sm:inset-x-6 sm:bottom-6 sm:p-8">
              <p className="font-display text-4xl leading-[1.02] text-black uppercase sm:text-5xl">
                Certified
                <br />
                <span className="text-tnt-amber">operators only.</span>
              </p>
              <p className="mt-3 max-w-sm font-body text-base leading-snug text-tnt-body">
                No crane is assigned to an operator without the right certification.
              </p>
            </div>
          </ParallaxFrame>

          <div className="flex flex-col justify-center">
            <Reveal>
              <Kicker>Training &amp; Certification</Kicker>
              <h2 className={`${H2} text-black`}>
                <span id="training-heading">
                  Certified crews,
                  <br />
                  <span className="text-tnt-amber">both sides of the border.</span>
                </span>
              </h2>
              <p className="mt-6 max-w-xl font-body text-lg leading-relaxed text-tnt-body">
                Certification follows the rules where the work happens, so US and Canadian crews
                qualify through different programs.
              </p>
            </Reveal>
            <div className="mt-12 space-y-10">
              {TRAINING.map((t, i) => (
                <Reveal key={t.region} delay={i * 100} className="border-t border-black/10 pt-8">
                  <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
                    <h3 className="font-display text-4xl text-black uppercase">{t.region}</h3>
                    <p className="font-body text-xs font-semibold tracking-[0.12em] text-tnt-meta uppercase">{t.companies}</p>
                  </div>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {t.badges.map((b) => (
                      <li key={b} className="rounded-full border border-tnt-amber px-3.5 py-1.5 font-body text-xs font-semibold tracking-[0.06em] text-black uppercase">
                        {b}
                      </li>
                    ))}
                  </ul>
                  <ul className="mt-5 space-y-2.5">
                    {t.points.map((p) => (
                      <li key={p} className="flex items-start gap-3 font-body text-base leading-relaxed text-black/75">
                        <span aria-hidden="true" className="mt-2.5 h-0.5 w-4 shrink-0 bg-tnt-amber" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 05 — LIFT SAFETY: CoreServices' slanted photo + numbered rows. */}
      <section id="lift-safety" aria-labelledby="lift-heading" className="scroll-mt-32 bg-white">
        <div className="grid gap-12 px-4 py-20 sm:px-6 sm:py-28 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-16 lg:px-[4.45vw]">
          <div className="lg:sticky lg:top-[calc(var(--chrome-h)+2.5rem)] lg:self-start">
            <Reveal>
              <Kicker>Lift Safety</Kicker>
              <h2 className={`${H2} text-black`}>
                <span id="lift-heading">
                  Six checks.
                  <br />
                  <span className="text-tnt-amber">Before every lift.</span>
                </span>
              </h2>
              <p className="mt-6 max-w-lg font-body text-lg leading-relaxed text-tnt-body">
                The same process runs on every job, whatever its size — so nothing is left to the
                moment the load leaves the ground.
              </p>
            </Reveal>
            <div className="relative mt-10 aspect-[16/10] bg-black/20" style={{ clipPath: SLANT }}>
              <div className="absolute inset-px overflow-hidden" style={{ clipPath: SLANT }}>
                <Image
                  src="/photos/cases/tnt-098-wind-farm-turbine-erection.jpg"
                  alt="TNT crane erecting a wind turbine"
                  fill
                  sizes="(min-width: 1024px) 45vw, 100vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          <ol className="border-t border-black/10">
            {LIFT_STEPS.map((step, i) => (
              <li key={step.title} className="border-b border-black/10">
                <Reveal delay={i * 60} className="group grid grid-cols-[4.5rem_1fr] items-start gap-4 py-7 sm:grid-cols-[6rem_1fr] sm:gap-6">
                  <span className="font-display text-5xl leading-none text-[#7c8794] sm:text-6xl">
                    <span className="sr-only">Step </span>
                    {pad(i)}
                  </span>
                  <div className="pt-1">
                    <span aria-hidden="true" className="block h-0.5 w-5 bg-tnt-amber" />
                    <h3 className="mt-2 font-display text-2xl text-black uppercase transition-colors group-hover:text-tnt-amber sm:text-3xl">
                      {step.title}
                    </h3>
                    <p className="mt-1.5 max-w-lg font-body text-base leading-relaxed text-tnt-body">{step.body}</p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* 06 — STANDARDS, MEMBERSHIPS & RECOGNITION: three panels. Memberships
          are named chips — no member logo artwork is in the project. */}
      <section id="standards" aria-labelledby="standards-heading" className="scroll-mt-32 bg-tnt-gray text-black">
        <div className="px-4 py-20 sm:px-6 sm:py-28 lg:px-[4.45vw]">
          <Reveal className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-end lg:gap-20">
            <div>
              <Kicker>Standards &amp; Memberships</Kicker>
              <h2 className={`${H2} text-black`}>
                <span id="standards-heading">
                  Measured against
                  <br />
                  <span className="text-tnt-amber">outside standards.</span>
                </span>
              </h2>
            </div>
            <p className="font-body text-lg leading-relaxed text-tnt-body lg:pb-2">
              Our safety programs are held to provincial and industry standards and audited through
              the contractor-safety networks our customers use.
            </p>
          </Reveal>

          <div className="mt-16 grid gap-5 lg:gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.5fr)_minmax(0,1fr)]">
            <div className="rounded-2xl bg-white p-8 lg:p-10">
              <p className="font-body text-xs font-semibold tracking-[0.14em] text-tnt-meta uppercase">Standards we follow</p>
              <ul className="mt-6 space-y-6">
                {STANDARDS.map((s) => (
                  <li key={s.name}>
                    <p className="font-display text-3xl leading-none text-black uppercase">{s.name}</p>
                    <p className="mt-2 font-body text-sm leading-relaxed text-tnt-body">{s.detail}</p>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl bg-white p-8 lg:p-10">
              <p className="font-body text-xs font-semibold tracking-[0.14em] text-tnt-meta uppercase">Safety memberships</p>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {MEMBERSHIPS.map((m) => (
                  <li key={m.name} className="rounded-xl border border-black/10 bg-tnt-gray/60 px-4 py-3.5 transition-colors hover:border-tnt-amber">
                    <p className="font-body text-base font-semibold leading-snug text-black">{m.name}</p>
                    <p className="mt-1 font-body text-xs tracking-[0.06em] text-tnt-meta uppercase">{m.detail}</p>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col rounded-2xl bg-tnt-amber p-8 text-black lg:p-10">
              <Icon name="trophy" className="h-10 w-10" strokeWidth={1.5} />
              <p className="mt-6 font-display text-8xl leading-none">{RECOGNITION.year}</p>
              <h3 className="mt-4 font-display text-3xl uppercase">{RECOGNITION.title}</h3>
              <p className="mt-1 font-body text-sm font-semibold tracking-[0.08em] uppercase">{RECOGNITION.company}</p>
              <p className="mt-4 flex-1 font-body text-base leading-relaxed text-black/75">{RECOGNITION.body}</p>
              <a
                href={RECOGNITION.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-2 self-start rounded-md bg-white px-5 py-3 font-body text-sm font-semibold tracking-wide text-black uppercase transition-colors hover:bg-black hover:text-white"
              >
                Read the announcement
                <Icon name="arrow" className="h-3.5 w-3.5" strokeWidth={2.5} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 07 — SAFETY INSIGHTS: LatestNews card style, newest "Crane Safety"
          stories from the family sites (newsroom data). */}
      <section id="insights" aria-labelledby="insights-heading" className="scroll-mt-32 bg-white">
        <div className="px-4 py-20 sm:px-6 sm:py-28 lg:px-[4.45vw]">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <Reveal>
              <Kicker>Safety Insights</Kicker>
              <h2 className={`${H2} text-black`}>
                <span id="insights-heading">
                  From our
                  <br />
                  <span className="text-tnt-amber">crews&rsquo; experience</span>
                </span>
              </h2>
            </Reveal>
            <a href="/news" className="group inline-flex items-center gap-2 font-body text-base font-semibold text-black transition-colors hover:text-tnt-amber">
              View All News
              <Icon name="arrow" className="h-3.5 w-3.5 text-tnt-amber transition-transform group-hover:translate-x-1" strokeWidth={2.5} />
            </a>
          </div>
          <ul className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {SAFETY_STORIES.map((s, i) => (
              <li key={s.id}>
                <Reveal delay={i * 80} className="h-full">
                  <a href={s.url} target="_blank" rel="noopener noreferrer" className="group flex h-full flex-col">
                    <div className="relative aspect-[379/200] overflow-hidden rounded-lg bg-black/5">
                      <Image
                        src={s.photo}
                        alt={s.alt}
                        fill
                        sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw"
                        className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                      />
                    </div>
                    <span className="mt-4 self-start rounded-full border border-tnt-amber px-3 py-1.5 font-body text-[11px] font-semibold tracking-[0.06em] text-black uppercase">
                      {SOURCES[s.source].short}
                    </span>
                    <h3 className="mt-4 font-display text-xl leading-snug text-black uppercase transition-colors group-hover:text-tnt-amber">
                      {s.title}
                    </h3>
                    <div className="mt-auto flex items-center justify-between pt-4">
                      <time dateTime={s.date} className="font-body text-sm text-black/50">
                        {formatDate(s.date)}
                      </time>
                      <span className="inline-flex items-center gap-1.5 font-body text-sm font-semibold text-black">
                        Read More
                        <Icon name="arrow" className="h-3 w-3 text-tnt-amber transition-transform group-hover:translate-x-1" strokeWidth={2.5} />
                      </span>
                    </div>
                  </a>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 08 — REQUEST A QUOTE (home page's own section) */}
      <RequestQuote />
    </>
  );
}
