/**
 * LATEST FROM TNT — FIGMA DESIGN IN WHITE (2026-11-04, on request: "bring
 * that Latest From TNT section with a white theme next to this safety
 * section"). Built from "Section — Latest News" (node 1053:3212) of the TNT
 * Figma file's "TNT Home screen" artboard:
 *   - "News & Updates" eyebrow, "Latest From TNT." heading ("TNT." gold),
 *     "View All News" link, and three cards: photo, tag pill, headline, date
 *     and "Read More".
 *   - WHITE THEME: the design's near-black band is white here; text black,
 *     tag pills outlined in gold, accents gold.
 *   - Photos exported from the Figma file into public/photos/news/.
 *   - Side inset 4.45vw, the same full-width treatment as Services and the
 *     map (the design's 120px margin was the old centred-container look).
 *
 * REAL POSTS (2026-11-04, on request — "use real posts"): the Figma's three
 * placeholder stories were replaced with tntcrane.com/news's three latest
 * posts as of 2026-11-04 — title, date and category (the post's own
 * articleSection) from each post page, featured image downloaded from the
 * post (1000×500) into public/photos/news/tnt-news-*.jpg. Each card links
 * to its post on tntcrane.com; "View All News" links to tntcrane.com/news/.
 * All open in a new tab — this site has no news route yet (the nav's News
 * item has href: null). These are a snapshot: newer posts won't appear
 * until this list is updated (or wired to the live feed). The Figma
 * placeholder photos are still on disk (public/photos/news/figma-news-*).
 */

const NEWS_URL = "https://tntcrane.com/news/";

const STORIES: { photo: string; alt: string; tag: string; title: string; date: string; iso: string; url: string }[] = [
  {
    photo: "/photos/news/tnt-news-how-lift-plans-are-created.jpg",
    alt: "Engineered crane lift plan drawing",
    tag: "Crane Safety",
    title: "How Lift Plans Are Created",
    date: "Jul 14, 2026",
    iso: "2026-07-14",
    url: "https://tntcrane.com/how-lift-plans-are-created/",
  },
  {
    photo: "/photos/news/tnt-news-mobile-cranes-heavy-equipment.jpg",
    alt: "Two TNT mobile cranes lifting equipment at an industrial plant",
    tag: "Mobile Cranes",
    title: "Mobile Cranes for Heavy Equipment Installations",
    date: "Jun 25, 2026",
    iso: "2026-06-25",
    url: "https://tntcrane.com/mobile-cranes-for-heavy-equipment-installations/",
  },
  {
    photo: "/photos/news/tnt-news-how-crane-counterweights-work.jpg",
    alt: "TNT 900-ton crane setting bridge girders",
    tag: "Crane Safety",
    title: "How Crane Counterweights Work",
    date: "May 29, 2026",
    iso: "2026-05-29",
    url: "https://tntcrane.com/how-crane-counterweights-work/",
  },
];

function Arrow({ className = "" }: { className?: string }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 12 12" className={`fill-current ${className}`}>
      <path d="M3 1.5v9L10 6z" />
    </svg>
  );
}

export default function LatestNews() {
  return (
    <section id="news" className="scroll-mt-[var(--chrome-h)] bg-white text-black">
      <div className="w-full px-4 py-20 sm:px-6 sm:py-24 lg:px-[4.45vw] lg:py-[clamp(4rem,10vh,6.5rem)]">
        {/* Header */}
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="flex items-center gap-3 font-body text-[13px] font-bold tracking-[0.18em] text-black uppercase">
              <span aria-hidden="true" className="h-0.5 w-6 bg-tnt-amber" />
              News &amp; Updates
            </p>
            <h2 className="mt-3 font-display text-4xl leading-none text-black uppercase sm:text-5xl">
              Latest From <span className="text-tnt-amber">TNT.</span>
            </h2>
          </div>
          <a
            href={NEWS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 font-body text-base font-semibold text-black transition-colors hover:text-tnt-amber"
          >
            View All News
            <Arrow className="h-3.5 w-3.5 text-tnt-amber transition-transform group-hover:translate-x-1" />
            <span className="sr-only"> (opens tntcrane.com in a new tab)</span>
          </a>
        </div>

        {/* Cards */}
        <ul className="mt-10 grid gap-10 sm:grid-cols-2 lg:mt-12 lg:grid-cols-3 lg:gap-8">
          {STORIES.map((s) => (
            <li key={s.title}>
              <a href={s.url} target="_blank" rel="noopener noreferrer" className="group flex h-full flex-col">
                <div className="aspect-[379/200] overflow-hidden rounded-lg bg-black/5">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={s.photo}
                    alt={s.alt}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                  />
                </div>
                <span className="mt-4 self-start rounded-full border border-tnt-amber px-3 py-1.5 font-body text-[11px] font-semibold tracking-[0.06em] text-black uppercase">
                  {s.tag}
                </span>
                <h3 className="mt-4 font-display text-xl leading-snug text-black uppercase transition-colors group-hover:text-tnt-amber">
                  {s.title}
                </h3>
                <div className="mt-auto flex items-center justify-between pt-4">
                  <time dateTime={s.iso} className="font-body text-sm text-black/50">
                    {s.date}
                  </time>
                  <span className="inline-flex items-center gap-1.5 font-body text-sm font-semibold text-black">
                    Read More
                    <Arrow className="h-3 w-3 text-tnt-amber transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
                <span className="sr-only"> (opens tntcrane.com in a new tab)</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
