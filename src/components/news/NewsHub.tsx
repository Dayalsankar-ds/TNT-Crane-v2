"use client";

/**
 * NEWS HUB (2026-11-17, on request — "follow this structure", news.google.com
 * as the inspiration). Google News's layout in this site's look:
 *
 *   Google News                    →  here
 *   search bar + section tabs      →  search + topic tabs (Home, Lift Planning…)
 *   "Your briefing" + date/weather →  "Your briefing" + date, TNT family card
 *   Top stories (clusters: lead    →  Top stories: one cluster per topic, lead
 *     story + related headlines)        story with photo + three related
 *   Local news (right rail)        →  "From the family": newest per company
 *   Picks for you                  →  Browse by topic
 *   More news                      →  every other story
 *
 * A topic tab, a company link or a search swaps the page to a filtered feed
 * (lead story + list), the way Google News's section pages do. Everything
 * links out to the article on the company's own site, in a new tab.
 * Data: newsData.ts (live-site snapshot).
 */

import Image from "next/image";
import { useMemo, useRef, useState, useSyncExternalStore } from "react";
import { SOURCES, STORIES, TOPICS, formatDate, type CompanyId, type Story, type Topic } from "./newsData";

type View = { kind: "home" } | { kind: "topic"; topic: Topic } | { kind: "source"; id: CompanyId };

const COMPANY_ORDER: CompanyId[] = ["tnt-us", "tnt-canada", "southway", "rms", "eagle-west"];
const CLUSTER_TOPICS: Topic[] = ["Lift Planning", "Crane Safety", "Crawler Cranes"];

/* ---------- small pieces ---------- */

function Chevron({ className = "" }: { className?: string }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 16 16" className={`fill-none stroke-current ${className}`} strokeWidth={2}>
      <path d="M6 3l5 5-5 5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function SourceTag({ id, small = false }: { id: CompanyId; small?: boolean }) {
  const s = SOURCES[id];
  return (
    <span className="flex min-w-0 items-center gap-2">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={s.logo} alt="" aria-hidden="true" className={`${small ? "h-3.5" : "h-4"} w-auto max-w-[4.5rem] shrink-0 object-contain`} />
      <span className={`truncate font-body font-semibold text-black/70 ${small ? "text-sm" : "text-base"}`}>{s.short}</span>
    </span>
  );
}

function Meta({ story }: { story: Story }) {
  return (
    <p className="mt-2 flex flex-wrap items-center gap-x-2 font-body text-base text-black/50">
      <time dateTime={story.date}>{formatDate(story.date)}</time>
      <span aria-hidden="true">·</span>
      <span>{story.topic}</span>
    </p>
  );
}

const newTab = { target: "_blank", rel: "noopener noreferrer" } as const;
const NEW_TAB_NOTE = <span className="sr-only"> (opens the company site in a new tab)</span>;

/**
 * Top-story cluster: lead photo beside the related headlines, lead text below
 * the photo. From md up the photo sits in the same grid row as the headlines
 * and stretches to their height (2026-11-17, on request: "match the image
 * height according to that content height"), instead of a fixed 16:10 frame
 * that ran taller than the list. Below md it stacks: photo, lead, headlines.
 */
function LeadCluster({ lead: story, related, priority = false }: { lead: Story; related: Story[]; priority?: boolean }) {
  return (
    <div className="grid gap-x-8 gap-y-4 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)]">
      {/* Photo link is a duplicate of the headline link: hidden from AT and tab order. */}
      <a
        href={story.url}
        {...newTab}
        aria-hidden="true"
        tabIndex={-1}
        className="group relative block aspect-[16/10] overflow-hidden rounded-xl bg-black/5 md:col-start-1 md:row-start-1 md:aspect-auto md:h-full md:min-h-56"
      >
        <Image
          src={story.photo}
          alt=""
          fill
          priority={priority}
          sizes="(min-width: 1280px) 30vw, (min-width: 768px) 45vw, 100vw"
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
        />
      </a>
      <a href={story.url} {...newTab} className="group block md:col-start-1 md:row-start-2">
        <SourceTag id={story.source} />
        <h3 className="mt-2 font-body text-2xl leading-snug font-semibold normal-case tracking-normal text-black transition-colors group-hover:text-tnt-amber sm:text-3xl">
          {story.title}
        </h3>
        <p className="mt-2 line-clamp-2 font-body text-lg leading-relaxed text-black/60">{story.summary}</p>
        <Meta story={story} />
        {NEW_TAB_NOTE}
      </a>
      <div className="mt-2 divide-y divide-black/10 border-t border-black/10 pt-4 md:col-start-2 md:row-start-1 md:mt-0 md:self-start md:border-t-0 md:pt-0">
        {related.map((s) => (
          <HeadlineRow key={s.id} story={s} />
        ))}
      </div>
    </div>
  );
}

/** Headline-only row (the related stories beside a lead). */
function HeadlineRow({ story }: { story: Story }) {
  return (
    <a href={story.url} {...newTab} className="group block py-4 first:pt-0 last:pb-0">
      <SourceTag id={story.source} small />
      <h4 className="mt-1.5 font-body text-xl normal-case tracking-normal leading-snug font-semibold text-black transition-colors group-hover:text-tnt-amber">
        {story.title}
      </h4>
      <Meta story={story} />
      {NEW_TAB_NOTE}
    </a>
  );
}

/** Row with a square thumbnail on the right (Local news / More news). */
function ThumbRow({ story }: { story: Story }) {
  return (
    <a href={story.url} {...newTab} className="group flex gap-4 py-4">
      <div className="min-w-0 flex-1">
        <SourceTag id={story.source} small />
        <h4 className="mt-1.5 line-clamp-3 font-body normal-case tracking-normal text-xl leading-snug font-semibold text-black transition-colors group-hover:text-tnt-amber">
          {story.title}
        </h4>
        <Meta story={story} />
      </div>
      <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-lg bg-black/5 sm:h-24 sm:w-24">
        <Image src={story.photo} alt="" fill sizes="96px" className="object-cover" />
      </div>
      {NEW_TAB_NOTE}
    </a>
  );
}

function Card({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={`rounded-2xl border border-black/[0.06] bg-white p-5 sm:p-7 ${className}`}>{children}</div>;
}

function CardTitle({ children, onClick }: { children: React.ReactNode; onClick?: () => void }) {
  const cls = "flex items-center gap-1.5 font-display text-3xl leading-none text-black uppercase sm:text-4xl";
  return onClick ? (
    <h2>
      <button type="button" onClick={onClick} className={`${cls} group transition-colors hover:text-tnt-amber`}>
        {children}
        <Chevron className="h-5 w-5 text-tnt-amber transition-transform group-hover:translate-x-0.5" />
      </button>
    </h2>
  ) : (
    <h2 className={cls}>{children}</h2>
  );
}

const noopSubscribe = () => () => {};
const todayLabel = () =>
  new Intl.DateTimeFormat("en-US", { weekday: "long", month: "long", day: "numeric" }).format(new Date());

/* ---------- main ---------- */

export default function NewsHub() {
  const [view, setView] = useState<View>({ kind: "home" });
  const [query, setQuery] = useState("");
  const top = useRef<HTMLDivElement>(null);

  // Today's date is the reader's: read on the client only (null on the
  // server), so it never mismatches the statically rendered page.
  const today = useSyncExternalStore(noopSubscribe, todayLabel, () => null);

  const go = (v: View) => {
    setView(v);
    setQuery("");
    top.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const q = query.trim().toLowerCase();
  const results = useMemo(
    () =>
      q
        ? STORIES.filter((s) =>
            [s.title, s.summary, s.topic, SOURCES[s.source].name, ...s.tags].some((t) => t.toLowerCase().includes(q)),
          )
        : [],
    [q],
  );

  const tabs: { label: string; v: View; active: boolean }[] = [
    { label: "Home", v: { kind: "home" }, active: view.kind === "home" && !q },
    ...TOPICS.map((t) => ({
      label: t,
      v: { kind: "topic", topic: t } as View,
      active: !q && view.kind === "topic" && view.topic === t,
    })),
  ];

  return (
    <div ref={top} className="scroll-mt-[var(--chrome-h)]">
      {/* Search + section tabs */}
      <div className="border-b border-black/10 bg-white">
        <div className="px-4 pt-6 sm:px-6 lg:px-[4.45vw]">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            <p className="flex items-center gap-3 font-body text-[13px] font-bold tracking-[0.18em] text-black uppercase">
              <span aria-hidden="true" className="h-0.5 w-6 bg-tnt-amber" />
              TNT Family Newsroom
            </p>
            <label className="relative block w-full lg:max-w-xl">
              <span className="sr-only">Search news</span>
              <svg aria-hidden="true" viewBox="0 0 20 20" className="pointer-events-none absolute top-1/2 left-4 h-5 w-5 -translate-y-1/2 fill-none stroke-black/45" strokeWidth={2}>
                <circle cx="9" cy="9" r="6" />
                <path d="M14 14l4 4" strokeLinecap="round" />
              </svg>
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search topics, companies, articles"
                className="w-full rounded-full border border-transparent bg-[#f1f1f1] py-3 pr-5 pl-12 font-body text-lg text-black placeholder:text-black/45 focus:border-tnt-amber focus:bg-white focus:outline-none"
              />
            </label>
          </div>
          <nav aria-label="News sections" className="-mx-4 mt-4 overflow-x-auto px-4 [scrollbar-width:none] sm:mx-0 sm:px-0">
            <ul className="flex min-w-max gap-1">
              {tabs.map((t) => (
                <li key={t.label}>
                  <button
                    type="button"
                    aria-current={t.active ? "page" : undefined}
                    onClick={() => go(t.v)}
                    className={`relative block px-3 py-3 font-body text-lg font-semibold whitespace-nowrap transition-colors sm:px-4 ${
                      t.active ? "text-black" : "text-black/55 hover:text-black"
                    }`}
                  >
                    {t.label}
                    <span
                      aria-hidden="true"
                      className={`absolute inset-x-3 bottom-0 h-[3px] rounded-t-full bg-tnt-amber transition-opacity sm:inset-x-4 ${t.active ? "opacity-100" : "opacity-0"}`}
                    />
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>

      <div className="bg-[#f5f5f3] px-4 pt-8 pb-20 sm:px-6 sm:pt-10 sm:pb-24 lg:px-[4.45vw]">
        {q ? (
          <Feed
            title={`Results for “${query.trim()}”`}
            subtitle={`${results.length} ${results.length === 1 ? "story" : "stories"}`}
            stories={results}
            onBack={() => setQuery("")}
          />
        ) : view.kind === "topic" ? (
          <Feed
            title={view.topic}
            subtitle={`${STORIES.filter((s) => s.topic === view.topic).length} stories from across the TNT family`}
            stories={STORIES.filter((s) => s.topic === view.topic)}
            onBack={() => go({ kind: "home" })}
          />
        ) : view.kind === "source" ? (
          <Feed
            title={SOURCES[view.id].name}
            subtitle={`${STORIES.filter((s) => s.source === view.id).length} stories`}
            stories={STORIES.filter((s) => s.source === view.id)}
            onBack={() => go({ kind: "home" })}
            extLink={{ href: SOURCES[view.id].newsUrl, label: `All ${SOURCES[view.id].short} news` }}
          />
        ) : (
          <Home today={today} go={go} />
        )}
      </div>
    </div>
  );
}

/* ---------- home view ---------- */

function Home({ today, go }: { today: string | null; go: (v: View) => void }) {
  const used = new Set<string>();
  const clusters = CLUSTER_TOPICS.map((topic) => {
    const list = STORIES.filter((s) => s.topic === topic && !used.has(s.id)).slice(0, 4);
    list.forEach((s) => used.add(s.id));
    return { topic, lead: list[0], related: list.slice(1) };
  });
  const latestBySource = COMPANY_ORDER.map((id) => STORIES.find((s) => s.source === id)!).filter(Boolean);
  const more = STORIES.filter((s) => !used.has(s.id));

  return (
    <>
      {/* Your briefing */}
      <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,22rem)] lg:items-end xl:grid-cols-[minmax(0,1fr)_minmax(0,26rem)]">
        <div>
          <h1 className="font-display text-5xl leading-none text-black uppercase sm:text-6xl">Your briefing</h1>
          <p className="mt-3 min-h-[1.5em] font-body text-xl text-black/55">
            {today ?? ""}
            {today && <span aria-hidden="true"> · </span>}
            Latest from TNT and its family of companies
          </p>
        </div>
        {/* Stats card (2026-11-17, on request): original styling, but sized to
            the right-rail column below (same grid track), so its white
            background lines up with the Browse by topic card. */}
        <div className="flex items-center justify-between gap-3 rounded-2xl border border-black/[0.06] bg-white px-4 py-4 sm:gap-4 sm:px-6">
          <div>
            <p className="font-display text-4xl leading-none text-black">{STORIES.length}</p>
            <p className="mt-1 font-body text-xs xl:text-sm font-semibold tracking-[0.08em] sm:tracking-[0.14em] text-black/50 uppercase">Stories</p>
          </div>
          <span aria-hidden="true" className="h-10 w-px bg-black/10" />
          <div>
            <p className="font-display text-4xl leading-none text-black">{COMPANY_ORDER.length}</p>
            <p className="mt-1 font-body text-xs xl:text-sm font-semibold tracking-[0.08em] sm:tracking-[0.14em] text-black/50 uppercase">Companies</p>
          </div>
          <span aria-hidden="true" className="h-10 w-px bg-black/10" />
          <div>
            <p className="font-body text-base xl:text-lg font-semibold whitespace-nowrap text-black">{formatDate(STORIES[0].date)}</p>
            <p className="mt-1 font-body text-xs xl:text-sm font-semibold tracking-[0.08em] sm:tracking-[0.14em] whitespace-nowrap text-black/50 uppercase">Last update</p>
          </div>
        </div>
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,22rem)] xl:grid-cols-[minmax(0,1fr)_minmax(0,26rem)]">
        {/* Top stories */}
        <Card>
          <CardTitle>
            Top stories
          </CardTitle>
          <div className="mt-6 divide-y divide-black/10">
            {clusters.map((c, i) => (
              <section key={c.topic} aria-labelledby={`cluster-${i}`} className="py-7 first:pt-0 last:pb-0">
                <h3 id={`cluster-${i}`}>
                  <button
                    type="button"
                    onClick={() => go({ kind: "topic", topic: c.topic })}
                    className="group flex items-center gap-1 font-display text-2xl text-black uppercase transition-colors hover:text-tnt-amber sm:text-3xl"
                  >
                    {c.topic}
                    <Chevron className="h-4 w-4 text-tnt-amber transition-transform group-hover:translate-x-0.5" />
                  </button>
                </h3>
                <div className="mt-4">
                  <LeadCluster lead={c.lead} related={c.related} priority={i === 0} />
                </div>
                <button
                  type="button"
                  onClick={() => go({ kind: "topic", topic: c.topic })}
                  className="mx-auto mt-6 flex items-center gap-2 rounded-full border border-black/15 px-5 py-2.5 font-body text-lg font-semibold text-black transition-colors hover:border-tnt-amber hover:bg-tnt-amber"
                >
                  See more on {c.topic}
                  <Chevron className="h-3.5 w-3.5" />
                </button>
              </section>
            ))}
          </div>
        </Card>

        {/* Right rail (2026-11-17, on request): sticks below the fixed
            header while Top stories scrolls past, with Browse by topic first.
            The rail is capped at the viewport height; on shorter screens the
            family list scrolls inside its own card (data-lenis-prevent so
            Lenis hands it the wheel) rather than the rail running off-screen. */}
        <div className="flex flex-col gap-6 lg:sticky lg:top-[calc(var(--chrome-h)+1.5rem)] lg:max-h-[calc(100dvh-var(--chrome-h)-3rem)] lg:self-start">
          <Card className="shrink-0">
            <CardTitle>Browse by topic</CardTitle>
            <ul className="mt-5 flex flex-wrap gap-2">
              {TOPICS.map((t) => (
                <li key={t}>
                  <button
                    type="button"
                    onClick={() => go({ kind: "topic", topic: t })}
                    className="inline-flex items-center gap-2 rounded-full border border-black/15 px-4 py-2 font-body text-lg font-semibold text-black transition-colors hover:border-tnt-amber hover:bg-tnt-amber"
                  >
                    {t}
                    <span className="font-normal text-black/45">{STORIES.filter((s) => s.topic === t).length}</span>
                  </button>
                </li>
              ))}
            </ul>
          </Card>

          <Card className="flex min-h-0 flex-col">
            <CardTitle>From the family</CardTitle>
            <p className="mt-2 font-body text-lg text-black/55">The newest story from each company.</p>
            <div data-lenis-prevent className="mt-3 min-h-0 divide-y divide-black/10 overflow-y-auto overscroll-contain [scrollbar-width:thin]">
              {latestBySource.map((s) => (
                <div key={s.id}>
                  <ThumbRow story={s} />
                  <button
                    type="button"
                    onClick={() => go({ kind: "source", id: s.source })}
                    className="-mt-1 mb-3 inline-flex items-center gap-1 font-body text-base font-semibold text-tnt-amber transition-colors hover:text-black"
                  >
                    More from {SOURCES[s.source].short}
                    <Chevron className="h-3 w-3" />
                  </button>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>

      {/* More news */}
      <Card className="mt-6">
        <CardTitle>More news</CardTitle>
        <div className="mt-3 grid md:grid-cols-2 md:gap-x-10 xl:grid-cols-3">
          {more.map((s) => (
            <div key={s.id} className="border-b border-black/10">
              <ThumbRow story={s} />
            </div>
          ))}
        </div>
      </Card>
    </>
  );
}

/* ---------- filtered feed (topic / company / search) ---------- */

function Feed({
  title,
  subtitle,
  stories,
  onBack,
  extLink,
}: {
  title: string;
  subtitle: string;
  stories: Story[];
  onBack: () => void;
  extLink?: { href: string; label: string };
}) {
  const [lead, ...rest] = stories;
  return (
    <>
      <button
        type="button"
        onClick={onBack}
        className="inline-flex items-center gap-1.5 font-body text-lg font-semibold text-black/60 transition-colors hover:text-black"
      >
        <Chevron className="h-3.5 w-3.5 rotate-180" />
        Back to briefing
      </button>
      <div className="mt-4 flex flex-wrap items-end justify-between gap-4">
        <div>
          <h1 className="font-display text-5xl leading-none text-black uppercase sm:text-6xl">{title}</h1>
          <p className="mt-3 font-body text-xl text-black/55">{subtitle}</p>
        </div>
        {extLink && (
          <a href={extLink.href} {...newTab} className="inline-flex items-center gap-1.5 font-body text-lg font-semibold text-black transition-colors hover:text-tnt-amber">
            {extLink.label}
            <Chevron className="h-3.5 w-3.5 text-tnt-amber" />
            {NEW_TAB_NOTE}
          </a>
        )}
      </div>

      {!lead ? (
        <Card className="mt-8">
          <p className="font-body text-xl text-black/60">No stories match. Try another word, or browse a topic above.</p>
        </Card>
      ) : (
        <Card className="mt-8">
          <a href={lead.url} {...newTab} className="group grid gap-6 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] md:items-center md:gap-10">
            <div className="relative aspect-[16/10] overflow-hidden rounded-xl bg-black/5">
              <Image src={lead.photo} alt={lead.alt} fill priority sizes="(min-width: 768px) 55vw, 100vw" className="object-cover transition-transform duration-500 group-hover:scale-[1.04]" />
            </div>
            <div>
              <SourceTag id={lead.source} />
              <h2 className="mt-3 font-body text-4xl leading-snug font-semibold normal-case tracking-normal text-black transition-colors group-hover:text-tnt-amber sm:text-4xl">
                {lead.title}
              </h2>
              <p className="mt-3 font-body text-xl leading-relaxed text-black/60">{lead.summary}</p>
              <Meta story={lead} />
            </div>
            {NEW_TAB_NOTE}
          </a>
          {rest.length > 0 && (
            <div className="mt-6 grid border-t border-black/10 md:grid-cols-2 md:gap-x-10 xl:grid-cols-3">
              {rest.map((s) => (
                <div key={s.id} className="border-b border-black/10">
                  <ThumbRow story={s} />
                </div>
              ))}
            </div>
          )}
        </Card>
      )}
    </>
  );
}
