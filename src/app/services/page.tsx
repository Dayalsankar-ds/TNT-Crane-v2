import type { Metadata } from "next";
import Image from "next/image";
import Button from "@/components/site/Button";
import { Icon, Kicker, type IconName } from "@/components/site/primitives";
import RequestQuote from "@/components/site/RequestQuote";
import ScrollButton from "@/components/about/ScrollButton";
import HashScroll from "@/components/about/HashScroll";
import TargetHighlight from "@/components/site/TargetHighlight";
import RegionalAvailability from "@/components/services/RegionalAvailability";
import CraneTypeGrid from "@/components/services/CraneTypeGrid";
import HashRedirect from "@/components/services/HashRedirect";
import { COMPANIES, SERVICES, availability, serviceById, serviceHref } from "@/components/site/services";
import {
  PROJECTS,
  SERVICE_DETAILS,
  SPECIALIZED,
  STEPS,
} from "@/components/services/servicesPageData";

/**
 * /services — the Services Overview page. Built 2026-10-09 from the Services
 * Overview master brief; structure, data model and scope decisions approved
 * with the user the same day:
 *
 *   - One page, no /services/* sub-pages yet. Every service (and every nav,
 *     footer and homepage-card link) lands on its own block here:
 *     /services#crane-rental … /services#industrial-storage.
 *   - The six services and who offers them come from site/services.ts — the
 *     same table the nav panel, homepage map and forms read.
 *   - Projects show real photos with a "details coming soon" tag; their
 *     write-ups are placeholder, so no names, numbers or outcomes appear.
 *
 * Server component. Client islands: hash handling, the hero scroll CTA, the
 * targeted-card outline and the regional availability tabs. Nav and footer
 * come from the root layout. Section rhythm follows /about — no two adjacent
 * bands alike, one dark band mid-page, gold close.
 *
 * DEDICATED SERVICE PAGES (2026-10-09): Crane Rental has its own page,
 * /services/crane-rental; its card here links to it, and old
 * /services#crane-rental links redirect there (HashRedirect). The other five
 * still live only as cards here. A hash-switched "focus view" briefly did
 * this job on this page — replaced because search engines ignore fragments.
 *
 * Quote CTAs go to /contact (the honest form — it says nothing is sent until
 * a backend exists) with ?service= preselecting the service.
 */

export const metadata: Metadata = {
  title: "Crane Rental, Rigging & Industrial Services | TNT Crane & Rigging",
  description:
    "Explore crane rental, specialized rigging, machinery moving, heavy-haul transport, engineering, and industrial storage solutions from TNT Crane & Rigging.",
  alternates: { canonical: "/services" },
};

/** Same eased fade as /about's hero (see that file's easedFade note). */
function easedFade(direction: string) {
  const stops: [number, number][] = [
    [1, 0], [0.987, 8.1], [0.951, 15.5], [0.896, 22.5], [0.825, 29], [0.741, 35.3],
    [0.648, 41.2], [0.55, 47.1], [0.45, 52.9], [0.352, 58.8], [0.259, 64.7],
    [0.175, 71], [0.104, 77.5], [0.049, 84.5], [0.013, 91.9], [0, 100],
  ];
  return `linear-gradient(${direction}, ${stops.map(([a, p]) => `rgba(0,0,0,${a}) ${p}%`).join(", ")})`;
}

const KEY_MESSAGES: { title: string; body: string; icon: IconName }[] = [
  { title: "Connected regional expertise", icon: "pin", body: "Local teams who know their sites, backed by the wider TNT family." },
  { title: "Broad equipment capabilities", icon: "crawler", body: "Cranes, rigging systems and transport across the network." },
  { title: "Integrated industrial services", icon: "rigging", body: "Lifting, rigging, moving, hauling and storage under one conversation." },
  { title: "Project-specific technical support", icon: "engineering", body: "Planning and engineering matched to what each job needs." },
];

const ENGINEERING_POINTS = [
  "Critical lift planning",
  "Engineered lifting solutions",
  "Equipment selection",
  "Ground condition assessment",
  "Project-specific technical support",
];

const SAFETY_POINTS = [
  "Safety-focused planning",
  "Qualified operating teams",
  "Established safety procedures",
  "Project-specific risk considerations",
];

/** Companies that offer a service directly, by short name. */
function directProviders(id: (typeof SERVICES)[number]["id"]) {
  return COMPANIES.filter((c) => availability(c.id, id).status === "direct").map((c) => c.short);
}

function Chips({ items }: { items: string[] }) {
  return (
    <ul className="mt-3 flex flex-wrap gap-1.5">
      {items.map((i) => (
        <li
          key={i}
          className="rounded-md border border-black/10 bg-white px-2.5 py-1 font-body text-[12px] leading-snug text-black/70"
        >
          {i}
        </li>
      ))}
    </ul>
  );
}

export default function ServicesPage() {
  return (
    <>
      <HashScroll />
      <HashRedirect />
      <TargetHighlight selector=".svc-tile" />

      {/* 01 — HERO */}
      {/* -mt-10 below lg: same nav-height correction as /about's hero. */}
      <section
        aria-labelledby="services-hero-heading"
        className="relative -mt-10 flex flex-col overflow-hidden bg-black lg:mt-0 lg:min-h-[min(46rem,calc(100svh-var(--chrome-h)))] lg:flex-row lg:items-center"
      >
        <div className="relative order-2 aspect-[16/10] lg:absolute lg:inset-y-0 lg:right-0 lg:left-[32%] lg:aspect-auto">
          <Image
            src="/photos/cases/tnt-142-refinery-reactor-exchange.jpg"
            alt="Large TNT crawler crane rigged for a heavy lift at a refinery"
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
            Our Services
          </p>
          <h1 id="services-hero-heading" className="mt-8 font-display text-5xl leading-[1.02] text-white uppercase sm:text-6xl xl:text-7xl">
            Full-scope lifting,
            <br />
            rigging &amp; <span className="text-tnt-amber">industrial solutions</span>
          </h1>
          <p className="mt-8 max-w-lg font-body text-base leading-relaxed text-white/75 sm:text-lg">
            From crane rental and specialized rigging to heavy transport, engineering and industrial
            storage, TNT Crane &amp; Rigging brings together the capabilities of its family of
            companies to support complex projects across North America.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <ScrollButton targetId="core-services" onDark>
              Explore Our Services
            </ScrollButton>
            <Button href="/contact#contact-form" variant="secondary" onDark>
              Request a Quote
            </Button>
          </div>
        </div>
      </section>

      {/* 02 — INTRODUCTION. Redesigned 2026-11-18, on request: header row
          (heading left, intro right), then a bento grid — a tall photo tile
          carrying the family-company roll call (from COMPANIES, not
          hardcoded), and the four key messages as numbered icon cards. */}
      <section aria-labelledby="intro-heading" className="bg-tnt-gray">
        <div className="px-4 py-20 sm:px-6 sm:py-28 lg:px-[4.45vw]">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:items-end lg:gap-20">
            <div>
              <Kicker>The TNT Network</Kicker>
              <h2 className="mt-4 font-display text-5xl leading-[1.02] text-black uppercase sm:text-6xl">
                <span id="intro-heading">
                  One network.
                  <br />
                  <span className="text-tnt-amber">Complete project support.</span>
                </span>
              </h2>
            </div>
            <p className="font-body text-lg leading-relaxed text-tnt-body lg:pb-2">
              TNT Crane &amp; Rigging brings together specialized equipment, experienced teams and
              regional expertise for lifting, rigging, transportation, engineering and industrial
              projects. Through its family of companies, TNT connects customers with the capabilities
              their specific project requires.
            </p>
          </div>

          <div className="mt-14 grid gap-5 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:gap-6">
            {/* Photo tile + family roll call */}
            <div className="relative min-h-[26rem] overflow-hidden rounded-2xl bg-black lg:min-h-0">
              <Image
                src="/photos/tnt-crawler-bridge-lift.jpg"
                alt="A TNT crawler crane lifting a bridge section"
                fill
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="object-cover"
              />
              <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                <p className="flex items-baseline gap-3 text-white">
                  <span className="font-display text-7xl leading-none text-tnt-amber">{COMPANIES.length}</span>
                  <span className="font-body text-base leading-snug font-semibold">
                    operating companies
                    <br />
                    across the US &amp; Canada
                  </span>
                </p>
                <ul className="mt-6 flex flex-wrap gap-2">
                  {COMPANIES.map((c) => (
                    <li
                      key={c.id}
                      className="rounded-full border border-white/25 bg-white/10 px-3.5 py-1.5 font-body text-sm text-white backdrop-blur-sm"
                    >
                      {c.short}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Key messages */}
            <ul className="grid gap-5 sm:grid-cols-2 lg:gap-6">
              {KEY_MESSAGES.map((m, i) => (
                <li
                  key={m.title}
                  className="group flex flex-col rounded-2xl border border-black/[0.06] bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-tnt-amber hover:shadow-[0_18px_40px_-20px_rgba(0,0,0,0.35)] sm:p-7"
                >
                  <div className="flex items-start justify-between">
                    <span className="grid h-14 w-14 place-items-center rounded-xl bg-tnt-amber/15 text-black transition-colors group-hover:bg-tnt-amber">
                      <Icon name={m.icon} className="h-7 w-7" strokeWidth={1.6} />
                    </span>
                    <span aria-hidden="true" className="font-display text-4xl leading-none text-black/10 transition-colors group-hover:text-tnt-amber">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="mt-8 font-display text-2xl leading-tight text-black uppercase">{m.title}</h3>
                  <p className="mt-3 font-body text-base leading-relaxed text-tnt-body">{m.body}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 03 — CORE SERVICES */}
      <section id="core-services" aria-labelledby="core-heading" className="scroll-mt-32 bg-white">
        {/* Two columns from xl (2026-11-17, on request): A = the section
            header, sticky under the nav like the home page's Services
            column; B = the service cards, two across. Below xl it stacks. */}
        <div className="grid gap-12 px-4 py-20 sm:px-6 sm:py-28 lg:px-[4.45vw] xl:grid-cols-[minmax(0,20rem)_minmax(0,1fr)] xl:gap-16 2xl:grid-cols-[minmax(0,24rem)_minmax(0,1fr)]">
          {/* A */}
          <div className="max-w-3xl xl:sticky xl:top-[calc(var(--chrome-h)+2.5rem)] xl:self-start">
            <Kicker>Core Services</Kicker>
            <h2 className="mt-4 font-display text-5xl leading-[1.02] text-black uppercase sm:text-6xl">
              <span id="core-heading">Our core <span className="text-tnt-amber">services</span></span>
            </h2>
            <p className="mt-6 font-body text-lg leading-relaxed text-tnt-body">
              Explore comprehensive lifting, rigging, transportation and industrial solutions.
            </p>
          </div>

          {/* Two across, not three: each card carries its capability list, and
              at three across the chips wrap into a column of one-word rows.
              Not a stretched-link card — each has its own CTA and expandable
              list, so the card itself isn't one control. */}
          {/* B */}
          <ol className="grid gap-6 lg:grid-cols-2">
            {SERVICES.map((s) => {
              const d = SERVICE_DETAILS[s.id];
              const providers = directProviders(s.id);
              return (
                <li key={s.id} id={s.id} className="svc-tile scroll-mt-32 rounded-xl">
                  <article
                    aria-labelledby={`${s.id}-title`}
                    className="group flex h-full flex-col overflow-hidden rounded-xl border border-black/10 bg-white transition-[border-color,translate] duration-300 ease-out hover:-translate-y-0.5 hover:border-tnt-amber motion-reduce:transition-none motion-reduce:hover:translate-y-0"
                  >
                    <div className="relative aspect-[16/8] overflow-hidden bg-black">
                      {d.photo ? (
                        <Image
                          src={d.photo.src}
                          alt={d.photo.alt}
                          fill
                          sizes="(min-width: 1024px) 40vw, 100vw"
                          className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                        />
                      ) : (
                        <div className="flex h-full flex-col items-center justify-center gap-3 bg-[linear-gradient(135deg,#000_0%,#242424_100%)]">
                          <Icon name={s.icon} className="h-12 w-12 text-tnt-amber" />
                          <span className="font-body text-[10px] tracking-[0.16em] text-white/50 uppercase">
                            Facility photo pending
                          </span>
                        </div>
                      )}
                      <span className="absolute top-4 left-4 rounded-md bg-black/80 px-2.5 py-1 font-body text-xs tabular-nums text-tnt-amber">
                        {s.index}
                      </span>
                    </div>

                    <div className="flex flex-1 flex-col p-6 sm:p-8">
                      <h3 id={`${s.id}-title`} className="font-display text-3xl text-black uppercase">
                        {s.label}
                      </h3>
                      <p className="mt-3 font-body text-base leading-relaxed text-tnt-body">{d.description}</p>

                      <p className="mt-6 font-body text-[11px] font-semibold tracking-[0.16em] text-tnt-meta uppercase">
                        {d.listLabel}
                      </p>
                      <Chips items={d.items} />

                      {d.extra && (
                        <details className="group/more mt-5">
                          <summary className="flex cursor-pointer list-none items-center gap-2 font-body text-[13px] font-semibold text-black hover:text-tnt-amber focus-visible:ring-2 focus-visible:ring-tnt-amber focus-visible:outline-none [&::-webkit-details-marker]:hidden">
                            <Icon name="arrow" className="h-3.5 w-3.5 text-tnt-amber transition-transform group-open/more:rotate-90" />
                            {d.extra.label}
                          </summary>
                          <Chips items={d.extra.items} />
                        </details>
                      )}

                      {d.scope && (
                        <p className="mt-5 font-body text-[13px] leading-relaxed text-black/50">{d.scope}</p>
                      )}

                      <div className="mt-auto pt-6">
                        <div className="flex flex-col gap-4 border-t border-black/10 pt-5 sm:flex-row sm:items-center sm:justify-between">
                          <p className="font-body text-[13px] text-black/60">
                            <span className="font-semibold text-black">Offered directly by: </span>
                            {providers.length ? providers.join(" · ") : "contact our team to confirm"}
                          </p>
                          {/* A service with its own page sends people there
                              (the page carries the quote form); the rest go
                              straight to /contact with the service set. */}
                          {s.page ? (
                            <Button href={s.page} variant="primary" className="shrink-0">
                              Explore {s.label}
                            </Button>
                          ) : (
                            <Button href={`/contact?service=${s.id}#contact-form`} variant="primary" className="shrink-0">
                              Request a Quote<span className="sr-only"> for {s.label}</span>
                            </Button>
                          )}
                        </div>
                      </div>
                    </div>
                  </article>
                </li>
              );
            })}
          </ol>
        </div>
      </section>

      {/* 04 — SPECIALIZED CAPABILITIES */}
      <section id="specialized" aria-labelledby="specialized-heading" className="scroll-mt-32 bg-tnt-gray">
        <div className="px-4 py-20 sm:px-6 sm:py-28 lg:px-[4.45vw]">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-end lg:gap-20">
            <div>
              <Kicker>Specialized Capabilities</Kicker>
              <h2 className="mt-4 font-display text-5xl leading-[1.02] text-black uppercase sm:text-6xl">
                <span id="specialized-heading">
                  Specialized solutions
                  <br />
                  <span className="text-tnt-amber">for complex projects</span>
                </span>
              </h2>
            </div>
            <p className="font-body text-lg leading-relaxed text-tnt-body">
              Regional and industry-specific capabilities within the TNT family. Each one is offered
              by the company named on it, not across every location.
            </p>
          </div>

          <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {SPECIALIZED.map((c) => (
              <li key={c.id} id={c.id} className="scroll-mt-32">
                <article className="flex h-full flex-col rounded-xl border border-black/10 bg-white p-6 transition-colors duration-300 hover:border-tnt-amber">
                  <span className="inline-flex w-fit items-center gap-2 rounded-full border border-tnt-amber/50 bg-tnt-amber/10 px-3 py-1 font-body text-[11px] font-semibold text-black">
                    <Icon name="pin" className="h-3.5 w-3.5 text-tnt-amber" />
                    {c.provider}
                  </span>
                  <h3 className="mt-5 font-display text-2xl text-black uppercase">{c.title}</h3>
                  <ul className="mt-3 flex-1 space-y-1.5">
                    {c.items.map((i) => (
                      <li key={i} className="flex items-start gap-2 font-body text-[14px] text-black/65">
                        <span aria-hidden="true" className="mt-2 h-1 w-1 shrink-0 rounded-full bg-tnt-amber" />
                        {i}
                      </li>
                    ))}
                  </ul>
                  {c.note && <p className="mt-4 font-body text-[13px] text-black/50">{c.note}</p>}
                  <div className="mt-6">
                    <Button href={c.link.href} variant="link">
                      {c.link.label}
                    </Button>
                  </div>
                </article>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 05 — CRANE RENTAL PREVIEW (the one dark band) */}
      <section id="crane-types" aria-labelledby="cranes-heading" className="scroll-mt-32 bg-white">
        <div className="px-4 py-20 sm:px-6 sm:py-28 lg:px-[4.45vw]">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
            <div className="max-w-2xl">
              <Kicker>Crane Rental</Kicker>
              <h2 id="cranes-heading" className="mt-4 font-display text-5xl leading-[1.02] text-black uppercase sm:text-6xl">
                Find the right crane
                <br />
                <span className="text-tnt-amber">for your project</span>
              </h2>
              <p className="mt-6 font-body text-lg leading-relaxed text-tnt-body">
                TNT&rsquo;s range of crane solutions for construction, industrial, infrastructure and
                specialized lifting. Availability varies by location.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button href={serviceHref(serviceById("crane-rental"))} variant="primary">
                Explore Crane Rental
              </Button>
              <Button href="/load-chart/all-terrain-cranes" variant="secondary">
                Search Load Charts
              </Button>
            </div>
          </div>

          <CraneTypeGrid tone="light" />
        </div>
      </section>

      {/* 06 — HOW WE WORK */}
      <section aria-labelledby="process-heading" className="bg-tnt-gray">
        <div className="px-4 py-20 sm:px-6 sm:py-28 lg:px-[4.45vw]">
          <div className="max-w-2xl">
            <Kicker>How We Work</Kicker>
            <h2 className="mt-4 font-display text-5xl leading-[1.02] text-black uppercase sm:text-6xl">
              <span id="process-heading">
                From planning
                <br />
                <span className="text-tnt-amber">to project execution</span>
              </span>
            </h2>
            <p className="mt-6 font-body text-lg leading-relaxed text-tnt-body">
              A typical engagement. Your team will confirm the steps for your project.
            </p>
          </div>
          <ol className="mt-12 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {STEPS.map((step, i) => (
              <li key={step.title} className="border-t border-black/10 pt-6">
                <span className="font-display text-5xl leading-none text-[#7c8794]">
                  <span className="sr-only">Step </span>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span aria-hidden="true" className="mt-4 block h-0.5 w-5 bg-tnt-amber" />
                <h3 className="mt-3 font-display text-2xl text-black uppercase">{step.title}</h3>
                <p className="mt-2 font-body text-base leading-relaxed text-black/65">{step.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* 07 — REGIONAL AVAILABILITY */}
      <section id="availability" aria-labelledby="availability-heading" className="scroll-mt-32 bg-white">
        <div className="px-4 py-20 sm:px-6 sm:py-28 lg:px-[4.45vw]">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-end lg:gap-20">
            <div>
              <Kicker>Regional Service Availability</Kicker>
              <h2 className="mt-4 font-display text-5xl leading-[1.02] text-black uppercase sm:text-6xl">
                <span id="availability-heading">
                  Local expertise.
                  <br />
                  <span className="text-tnt-amber">Connected capabilities.</span>
                </span>
              </h2>
            </div>
            <div>
              <p className="font-body text-lg leading-relaxed text-tnt-body">
                TNT&rsquo;s regional network connects you with the right teams, equipment and services
                for your project location. Choose a company to see what it offers.
              </p>
              <div className="mt-6">
                <Button href="/#coverage" variant="link">
                  Find a branch on the map
                </Button>
              </div>
            </div>
          </div>
          <div className="mt-12">
            <RegionalAvailability />
          </div>
        </div>
      </section>

      {/* 08 — PROJECTS */}
      <section aria-labelledby="projects-heading" className="bg-tnt-gray">
        <div className="px-4 py-20 sm:px-6 sm:py-28 lg:px-[4.45vw]">
          <div className="max-w-2xl">
            <Kicker>Projects</Kicker>
            <h2 className="mt-4 font-display text-5xl leading-[1.02] text-black uppercase sm:text-6xl">
              <span id="projects-heading">
                Proven capabilities.
                <br />
                <span className="text-tnt-amber">Real-world projects.</span>
              </span>
            </h2>
          </div>
          <ul className="mt-12 grid gap-5 md:grid-cols-3">
            {PROJECTS.map((p) => (
              <li key={p.photo.src}>
                <article className="h-full overflow-hidden rounded-xl border border-black/10 bg-white">
                  <div className="relative aspect-[4/3]">
                    <Image src={p.photo.src} alt={p.photo.alt} fill sizes="(min-width: 768px) 30vw, 100vw" className="object-cover" />
                  </div>
                  <div className="p-5">
                    <p className="font-body text-[11px] font-semibold tracking-[0.16em] text-tnt-amber uppercase">{p.service}</p>
                    <h3 className="mt-2 font-display text-xl text-black uppercase">{p.category}</h3>
                    <p className="mt-3 inline-flex rounded-full border border-black/15 px-3 py-1 font-body text-[12px] text-black/55">
                      Project details coming soon
                    </p>
                  </div>
                </article>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 09 — SAFETY & ENGINEERING */}
      <section aria-labelledby="safety-eng-heading" className="bg-white">
        <div className="px-4 py-20 sm:px-6 sm:py-28 lg:px-[4.45vw]">
          <div className="max-w-2xl">
            <Kicker>Safety &amp; Engineering</Kicker>
            <h2 className="mt-4 font-display text-5xl leading-[1.02] text-black uppercase sm:text-6xl">
              <span id="safety-eng-heading">
                Safety and precision
                <br />
                <span className="text-tnt-amber">at every stage</span>
              </span>
            </h2>
          </div>
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <article className="flex flex-col rounded-xl bg-black p-8 text-white sm:p-10">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-tnt-amber/15 text-tnt-amber">
                <Icon name="engineering" className="h-6 w-6" />
              </span>
              <h3 className="mt-6 font-display text-3xl uppercase">Engineering expertise</h3>
              <p className="mt-3 font-body text-base leading-relaxed text-white/70">
                Complex lifting operations call for careful planning, technical analysis and the right
                equipment for the job.
              </p>
              <ul className="mt-6 flex-1 space-y-2">
                {ENGINEERING_POINTS.map((p) => (
                  <li key={p} className="flex items-start gap-3 font-body text-[15px] text-white/80">
                    <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-tnt-amber" />
                    {p}
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Button href="#lift-planning-engineering" variant="primary" onDark>
                  Explore Engineering
                </Button>
              </div>
            </article>

            <article className="flex flex-col rounded-xl bg-tnt-gray p-8 sm:p-10">
              <div>
                <Image
                  src="/brand/icare-badge.png"
                  alt="TNT iCARE safety program badge"
                  width={976}
                  height={1170}
                  sizes="5rem"
                  className="h-auto w-16 sm:w-20"
                />
              </div>
              <h3 className="mt-6 font-display text-3xl text-black uppercase">Safety commitment</h3>
              <p className="mt-3 font-body text-base leading-relaxed text-tnt-body">
                Safety is an essential consideration throughout TNT&rsquo;s lifting, rigging and
                industrial operations, and iCARE is the program every company in the family works to.
              </p>
              <ul className="mt-6 flex-1 space-y-2">
                {SAFETY_POINTS.map((p) => (
                  <li key={p} className="flex items-start gap-3 font-body text-[15px] text-black/75">
                    <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-tnt-amber" />
                    {p}
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Button href="/#safety" variant="primary">
                  Our Safety Commitment
                </Button>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* 10 — REQUEST A QUOTE: the home page's own quote section (2026-11-17,
          on request — match the home screen), replacing the gold CTA band. */}
      <RequestQuote />
    </>
  );
}
