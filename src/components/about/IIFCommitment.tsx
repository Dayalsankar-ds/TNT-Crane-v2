import Image from "next/image";

/**
 * INCIDENT & INJURY FREE (2026-11-16, on request): replaces the About page's
 * "Our Footprint" section (states table + stats + photo strip) with TNT's
 * IIF commitment from the live tntcrane.com About page, rebuilt in this
 * site's look: a white band (light theme, between two grey sections), Impact
 * heading with the second line in brand yellow, the six "We will create…"
 * commitments as numbered cards, and a crew safety-briefing photo.
 *
 * The commitment wording is the live site's, verbatim. The IIF badge here is
 * a typographic stand-in, NOT TNT's IIF® logo (no logo file is in the
 * project) — swap in the real artwork when it's supplied.
 */

const COMMITMENTS = [
  "We will create a world where we hold human life and its preservation as the highest of values.",
  "We will create an environment where Incident and Injury-Free is our way of life.",
  "We will create an organization in which “who we are” sends an unwavering message throughout the industry that we do what’s “right” because it’s the right thing to do and sets the standards for safety and performance in our industry.",
  "We will create a culture that places the utmost value upon our families, coworkers, and ourselves.",
  "We will create a world where our commitment to excellence equally drives our personal and professional lives.",
  "We will create a reality where we live Incident and Injury-Free by choice, rather than mandate.",
];

export default function IIFCommitment() {
  return (
    <section
      id="incident-injury-free"
      aria-labelledby="iif-heading"
      className="relative scroll-mt-32 overflow-hidden bg-white text-black"
    >
      <div className="px-4 py-20 sm:px-6 sm:py-28 lg:px-[4.45vw]">
        <p className="flex items-center gap-4 font-body text-[13px] font-bold tracking-[0.18em] text-tnt-amber uppercase">
          <span aria-hidden="true" className="h-px w-9 bg-tnt-amber" />
          Incident &amp; Injury Free
        </p>
        <h2
          id="iif-heading"
          className="mt-6 max-w-6xl font-display text-5xl leading-[0.95] tracking-wide uppercase sm:text-6xl xl:text-7xl"
        >
          TNT Crane &amp; Rigging is committed to the{" "}
          <span className="text-tnt-amber">elimination of workplace injuries.</span>
        </h2>

        <div className="mt-14 grid gap-10 lg:grid-cols-[minmax(0,0.75fr)_minmax(0,1.25fr)] lg:gap-16">
          {/* Badge + crew */}
          <div className="flex flex-col">
            <div className="flex items-center gap-6 rounded-2xl border border-black/10 bg-[#f7f7f7] p-7 sm:p-8">
              {/* Wrapper sized to the rotated square diagonal (~1.41x), so the
                  diamond doesn't spill past the card edge. */}
              <div className="flex h-28 w-28 shrink-0 items-center justify-center sm:h-32 sm:w-32">
                <div className="flex h-20 w-20 rotate-45 items-center justify-center rounded-lg bg-tnt-amber sm:h-[5.5rem] sm:w-[5.5rem]">
                  <span className="-rotate-45 font-display text-4xl leading-none text-black sm:text-5xl">IIF</span>
                </div>
              </div>
              <div>
                <p className="font-display text-3xl leading-none uppercase sm:text-4xl">Ask me about it.</p>
                <p className="mt-3 font-body text-sm leading-relaxed text-black/60">
                  Incident &amp; Injury-Free is how every TNT crew works, on every job, by choice.
                </p>
              </div>
            </div>
            {/* Safety-briefing photo (2026-11-16, on request — "change that
                image … any other relatable one"): a crew in hard hats and
                hi-vis at a site safety talk. Replaces the flipped crew
                cut-out. Landscape 4:3 frame on desktop so the
                whole briefing (crew and speaker) stays in shot. */}
            <div className="relative mt-4 aspect-[16/10] overflow-hidden rounded-2xl lg:aspect-[4/3]">
              <Image
                src="/photos/news/figma-news-02-safety-award.jpg"
                alt="A TNT crew in hard hats and high-visibility vests listening to a site safety briefing"
                fill
                sizes="(min-width: 1024px) 35vw, 100vw"
                className="object-cover object-[60%_50%]"
              />
            </div>
          </div>

          {/* Commitments */}
          <ol className="grid gap-4 sm:grid-cols-2">
            {COMMITMENTS.map((text, i) => (
              <li
                key={i}
                className="group flex flex-col rounded-2xl border border-black/10 bg-[#f7f7f7] p-6 transition-colors hover:border-tnt-amber hover:bg-white sm:p-7"
              >
                <span className="font-display text-4xl leading-none text-tnt-amber">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span aria-hidden="true" className="mt-4 block h-0.5 w-8 bg-black/15 transition-colors group-hover:bg-tnt-amber" />
                <p className="mt-4 font-body text-base leading-relaxed text-black/70">{text}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
