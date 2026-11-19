import type { Metadata } from "next";
import Image from "next/image";
import Button from "@/components/site/Button";
import { Icon, Kicker } from "@/components/site/primitives";
import RequestQuote from "@/components/site/RequestQuote";
import ScrollButton from "@/components/about/ScrollButton";
import { STORIES, SOURCES, formatDate } from "@/components/news/newsData";
import {
  ICARE_PRINCIPLES,
  IIF_COMMITMENTS,
  LIFT_STEPS,
  MEMBERSHIPS,
  RECOGNITION,
  STANDARDS,
  TRAINING,
} from "@/components/safety/safetyData";

/**
 * /safety — the TNT family's safety page (2026-11-19, on request: "build
 * it … maintain same UI from our home screen style"). Sections, one topic
 * each, recommended from the family-site safety review the same day:
 *
 *   01 Hero · 02 Incident & Injury Free · 03 iCare culture ·
 *   04 Training & certification · 05 How we keep every lift safe ·
 *   06 Standards, memberships & recognition · 07 Safety insights ·
 *   08 Request a Quote
 *
 * Home-screen design language throughout: full-width inset
 * (lg:px-[4.45vw]), Kicker + Impact h2 with the last line in amber,
 * sections alternating tnt-gray / white (ending white before the grey quote), big grey index numbers with an
 * amber bar, and the home page's RequestQuote to close.
 *
 * The IIF commitments live only here now — the About page shows a short
 * summary that links in, and the home page's iCare section and the
 * Services page's safety card both point here rather than repeating it.
 * Customer safety testimonials were left out: no exact client quotes are
 * in the project yet.
 */

export const metadata: Metadata = {
  title: "Safety | TNT Crane & Rigging",
  description:
    "Incident & Injury Free, the iCare safety culture, operator certification and the lift-safety process used across the TNT family of companies.",
  alternates: { canonical: "/safety" },
};

/** Same eased fade as the /services and /about heroes. */
function easedFade(direction: string) {
  const stops: [number, number][] = [
    [1, 0], [0.987, 8.1], [0.951, 15.5], [0.896, 22.5], [0.825, 29], [0.741, 35.3],
    [0.648, 41.2], [0.55, 47.1], [0.45, 52.9], [0.352, 58.8], [0.259, 64.7],
    [0.175, 71], [0.104, 77.5], [0.049, 84.5], [0.013, 91.9], [0, 100],
  ];
  return `linear-gradient(${direction}, ${stops.map(([a, p]) => `rgba(0,0,0,${a}) ${p}%`).join(", ")})`;
}

const pad = (i: number) => String(i + 1).padStart(2, "0");

const SAFETY_STORIES = STORIES.filter((s) => s.topic === "Crane Safety" || s.tags.includes("Crane Safety"))
  .sort((a, b) => b.date.localeCompare(a.date))
  .slice(0, 4);

const H2 = "mt-4 font-display text-5xl leading-[1.02] text-black uppercase sm:text-6xl";
const INSET = "px-4 py-20 sm:px-6 sm:py-28 lg:px-[4.45vw]";

export default function SafetyPage() {
  return (
    <>
      {/* 01 — HERO. -mt-10 below lg: same nav-height correction as /services. */}
      <section
        aria-labelledby="safety-hero-heading"
        className="relative -mt-10 flex flex-col overflow-hidden bg-black lg:mt-0 lg:min-h-[min(46rem,calc(100svh-var(--chrome-h)))] lg:flex-row lg:items-center"
      >
        <div className="relative order-2 aspect-[16/10] lg:absolute lg:inset-y-0 lg:right-0 lg:left-[32%] lg:aspect-auto">
          <Image
            src="/photos/news/figma-news-02-safety-award.jpg"
            alt="A TNT crew in hard hats and high-visibility vests at a site safety briefing"
            fill
            priority
            sizes="(min-width: 1024px) 68vw, 100vw"
            className="object-cover object-[60%_50%]"
          />
          <div aria-hidden="true" className="absolute inset-y-0 -left-0.5 hidden w-[calc(42%+2px)] lg:block" style={{ backgroundImage: easedFade("to right") }} />
          <div aria-hidden="true" className="absolute inset-x-0 -top-0.5 h-[calc(45%+2px)] lg:hidden" style={{ backgroundImage: easedFade("to bottom") }} />
        </div>

        <div className="relative z-10 order-1 flex flex-col justify-center px-4 py-16 sm:px-6 sm:py-20 lg:w-[50%] lg:px-[4.45vw]">
          <p className="flex items-center gap-4 font-body text-[13px] font-bold tracking-[0.18em] text-tnt-amber uppercase">
            <span aria-hidden="true" className="h-px w-9 bg-tnt-amber" />
            Safety
          </p>
          <h1 id="safety-hero-heading" className="mt-8 font-display text-5xl leading-[1.02] text-white uppercase sm:text-6xl xl:text-7xl">
            Every lift.
            <br />
            Every person.
            <br />
            <span className="text-tnt-amber">Home safe.</span>
          </h1>
          <p className="mt-8 max-w-lg font-body text-base leading-relaxed text-white/75 sm:text-lg">
            Across the TNT family of companies, safety is planned into every lift before a crane
            arrives on site — by trained, certified crews who treat every incident as preventable.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <ScrollButton targetId="incident-injury-free" onDark>
              Our Commitment
            </ScrollButton>
            <Button href="/contact#contact-form" variant="secondary" onDark>
              Talk to Our Team
            </Button>
          </div>
        </div>
      </section>

      {/* 02 — INCIDENT & INJURY FREE */}
      <section id="incident-injury-free" aria-labelledby="iif-heading" className="scroll-mt-32 bg-tnt-gray">
        <div className={INSET}>
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-end lg:gap-20">
            <div>
              <Kicker>Incident &amp; Injury Free</Kicker>
              <h2 className={H2}>
                <span id="iif-heading">
                  Committed to the elimination
                  <br />
                  <span className="text-tnt-amber">of workplace injuries.</span>
                </span>
              </h2>
            </div>
            <p className="font-body text-lg leading-relaxed text-tnt-body lg:pb-2">
              Incident &amp; Injury Free is the commitment shared by every company in the TNT family.
              These six statements are how our crews hold themselves to it.
            </p>
          </div>
          <ol className="mt-14 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {IIF_COMMITMENTS.map((text, i) => (
              <li key={i} className="border-t border-black/10 pt-6">
                <span className="font-display text-5xl leading-none text-[#7c8794]">
                  <span className="sr-only">Commitment </span>
                  {pad(i)}
                </span>
                <span aria-hidden="true" className="mt-4 block h-0.5 w-5 bg-tnt-amber" />
                <p className="mt-4 font-body text-lg leading-relaxed text-black/75">{text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* 03 — iCARE CULTURE */}
      <section id="icare" aria-labelledby="icare-heading" className="scroll-mt-32 bg-white">
        <div className={`grid gap-12 ${INSET} lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-20`}>
          <div className="lg:sticky lg:top-[calc(var(--chrome-h)+2.5rem)] lg:self-start">
            <Kicker>Safety Culture</Kicker>
            <h2 className={H2}>
              <span id="icare-heading">
                The iCare
                <br />
                <span className="text-tnt-amber">culture.</span>
              </span>
            </h2>
            <p className="mt-6 max-w-xl font-body text-lg leading-relaxed text-tnt-body">
              iCare runs through every level of the company. It is the everyday habit behind the
              commitment — noticing hazards, speaking up, and looking after the people beside you.
            </p>
            <Image
              src="/brand/icare-badge.png"
              alt="TNT iCARE safety program badge"
              width={976}
              height={1170}
              sizes="6rem"
              className="mt-10 h-auto w-20 sm:w-24"
            />
          </div>
          <ul className="grid gap-5">
            {ICARE_PRINCIPLES.map((p, i) => (
              <li
                key={p.title}
                className="group flex items-start gap-6 rounded-2xl border border-black/[0.06] bg-tnt-gray p-6 transition duration-300 hover:-translate-y-1 hover:border-tnt-amber hover:bg-white hover:shadow-[0_18px_40px_-20px_rgba(0,0,0,0.35)] sm:p-8"
              >
                <span className="grid h-14 w-14 shrink-0 place-items-center rounded-xl bg-tnt-amber/15 transition-colors group-hover:bg-tnt-amber">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={p.icon} alt="" className="h-7 w-7 object-contain transition-[filter] group-hover:brightness-0" />
                </span>
                <div className="min-w-0 flex-1">
                  <h3 className="font-display text-2xl leading-tight text-black uppercase">{p.title}</h3>
                  <p className="mt-2 font-body text-base leading-relaxed text-tnt-body">{p.body}</p>
                </div>
                <span aria-hidden="true" className="hidden font-display text-4xl leading-none text-black/10 transition-colors group-hover:text-tnt-amber sm:block">
                  {pad(i)}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 04 — TRAINING & CERTIFICATION */}
      <section id="training" aria-labelledby="training-heading" className="scroll-mt-32 bg-tnt-gray">
        <div className={INSET}>
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-end lg:gap-20">
            <div>
              <Kicker>Training &amp; Certification</Kicker>
              <h2 className={H2}>
                <span id="training-heading">
                  Certified crews.
                  <br />
                  <span className="text-tnt-amber">On both sides of the border.</span>
                </span>
              </h2>
            </div>
            <p className="font-body text-lg leading-relaxed text-tnt-body lg:pb-2">
              Only certified operators are assigned to a crane. Certification follows the rules where
              the work happens, so US and Canadian crews qualify through different programs.
            </p>
          </div>
          <div className="mt-14 grid gap-5 lg:grid-cols-2 lg:gap-6">
            {TRAINING.map((t) => (
              <article key={t.region} className="flex flex-col rounded-2xl bg-white p-8 sm:p-10">
                <span aria-hidden="true" className="block h-0.5 w-6 bg-tnt-amber" />
                <h3 className="mt-4 font-display text-3xl text-black uppercase">{t.region}</h3>
                <p className="mt-2 font-body text-sm tracking-[0.08em] text-tnt-meta uppercase">{t.companies}</p>
                <ul className="mt-6 space-y-3">
                  {t.points.map((p) => (
                    <li key={p} className="flex items-start gap-3 font-body text-base leading-relaxed text-black/75">
                      <span aria-hidden="true" className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-tnt-amber" />
                      {p}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 05 — HOW WE KEEP EVERY LIFT SAFE */}
      <section id="lift-safety" aria-labelledby="lift-heading" className="scroll-mt-32 bg-white">
        <div className={INSET}>
          <div className="max-w-3xl">
            <Kicker>Lift Safety</Kicker>
            <h2 className={H2}>
              <span id="lift-heading">
                How we keep
                <br />
                <span className="text-tnt-amber">every lift safe</span>
              </span>
            </h2>
            <p className="mt-6 font-body text-lg leading-relaxed text-tnt-body">
              The same six steps come before every lift, whatever the size of the job.
            </p>
          </div>
          <ol className="mt-12 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {LIFT_STEPS.map((step, i) => (
              <li key={step.title} className="border-t border-black/10 pt-6">
                <span className="font-display text-5xl leading-none text-[#7c8794]">
                  <span className="sr-only">Step </span>
                  {pad(i)}
                </span>
                <span aria-hidden="true" className="mt-4 block h-0.5 w-5 bg-tnt-amber" />
                <h3 className="mt-3 font-display text-2xl text-black uppercase">{step.title}</h3>
                <p className="mt-2 font-body text-base leading-relaxed text-black/65">{step.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* 06 — STANDARDS, MEMBERSHIPS & RECOGNITION. Memberships are shown
          as named chips: no member logo artwork is in the project. */}
      <section id="standards" aria-labelledby="standards-heading" className="scroll-mt-32 bg-tnt-gray">
        <div className={INSET}>
          <div className="max-w-3xl">
            <Kicker>Standards &amp; Memberships</Kicker>
            <h2 className={H2}>
              <span id="standards-heading">
                Measured against
                <br />
                <span className="text-tnt-amber">outside standards.</span>
              </span>
            </h2>
          </div>
          <div className="mt-14 grid gap-5 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)_minmax(0,1fr)] lg:gap-6">
            <article className="rounded-2xl bg-white p-8">
              <h3 className="font-display text-2xl text-black uppercase">Standards we follow</h3>
              <ul className="mt-6 divide-y divide-black/10">
                {STANDARDS.map((s) => (
                  <li key={s.name} className="py-4 first:pt-0 last:pb-0">
                    <p className="font-body text-lg font-semibold text-black">{s.name}</p>
                    <p className="mt-1 font-body text-sm leading-relaxed text-tnt-body">{s.detail}</p>
                  </li>
                ))}
              </ul>
            </article>

            <article className="rounded-2xl bg-white p-8">
              <h3 className="font-display text-2xl text-black uppercase">Safety memberships</h3>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {MEMBERSHIPS.map((m) => (
                  <li key={m.name} className="rounded-xl bg-tnt-gray px-4 py-3">
                    <p className="font-body text-base font-semibold leading-snug text-black">{m.name}</p>
                    <p className="mt-1 font-body text-xs tracking-[0.06em] text-tnt-meta uppercase">{m.detail}</p>
                  </li>
                ))}
              </ul>
            </article>

            <article className="flex flex-col rounded-2xl bg-black p-8 text-white">
              <Icon name="trophy" className="h-10 w-10 text-tnt-amber" strokeWidth={1.5} />
              <p className="mt-6 font-display text-6xl leading-none text-tnt-amber">{RECOGNITION.year}</p>
              <h3 className="mt-3 font-display text-2xl text-white uppercase">{RECOGNITION.title}</h3>
              <p className="mt-1 font-body text-sm tracking-[0.08em] text-white/60 uppercase">{RECOGNITION.company}</p>
              <p className="mt-4 flex-1 font-body text-base leading-relaxed text-white/75">{RECOGNITION.body}</p>
              <a
                href={RECOGNITION.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 font-body text-sm font-semibold tracking-wide text-tnt-amber uppercase hover:text-white"
              >
                Read the announcement
                <Icon name="arrow" className="h-3.5 w-3.5" strokeWidth={2.5} />
              </a>
            </article>
          </div>
        </div>
      </section>

      {/* 07 — SAFETY INSIGHTS: newest "Crane Safety" stories from the
          family sites, via the newsroom's own data. */}
      <section id="insights" aria-labelledby="insights-heading" className="scroll-mt-32 bg-white">
        <div className={INSET}>
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <Kicker>Safety Insights</Kicker>
              <h2 className={H2}>
                <span id="insights-heading">
                  From our
                  <br />
                  <span className="text-tnt-amber">crews&rsquo; experience</span>
                </span>
              </h2>
            </div>
            <Button href="/news" variant="primary">
              All News
            </Button>
          </div>
          <ul className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-4 lg:gap-6">
            {SAFETY_STORIES.map((s) => (
              <li key={s.id}>
                <a
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex h-full flex-col overflow-hidden rounded-2xl border border-black/[0.06] bg-tnt-gray transition duration-300 hover:-translate-y-1 hover:border-tnt-amber hover:shadow-[0_18px_40px_-20px_rgba(0,0,0,0.35)]"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={s.photo}
                      alt={s.alt}
                      fill
                      sizes="(min-width: 1280px) 22vw, (min-width: 640px) 45vw, 100vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <p className="font-body text-xs tracking-[0.1em] text-tnt-meta uppercase">
                      {SOURCES[s.source].short} · {formatDate(s.date)}
                    </p>
                    <h3 className="mt-3 flex-1 font-body text-xl font-semibold leading-snug text-black normal-case tracking-normal transition-colors group-hover:text-tnt-amber">
                      {s.title}
                    </h3>
                    <span className="mt-5 inline-flex items-center gap-2 font-body text-sm font-semibold tracking-wide text-black uppercase">
                      Read article
                      <Icon name="arrow" className="h-3.5 w-3.5" strokeWidth={2.5} />
                    </span>
                  </div>
                </a>
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
