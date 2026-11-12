"use client";

/**
 * FAMILY BENTO (2026-11-12, on request — "Build the Bento grid"): replaces
 * the About page's old Family of Companies section (parent card + company
 * profiles with branch lists, which repeated the location details shown
 * elsewhere on the page). One asymmetric grid tells the same story at a
 * glance:
 *
 *   ┌───────────────┬────────┬────────┐
 *   │  41 (photo    │ cranes │ photo  │
 *   │  through the  ├────────┤ (tall) │
 *   │  numerals)    │ people │        │
 *   ├───────┬───────┼────────┴────────┤
 *   │origin │ cust. │   CTA (yellow)  │
 *   ├───────┴───────┴─────────────────┤
 *   │   family logo marquee           │
 *   └─────────────────────────────────┘
 *
 * Below lg it collapses to two columns, then one.
 *
 * Figures: 700+ cranes and 1,750+ employees match the page's own STATS;
 * "one 18-ton crane" in 1985 and 4,000+ customers come from TNT's previous
 * About page (supplied by the user as a reference). Years are computed from
 * 1985, so the big number stays current.
 *
 * Motion: counters tick up once when they first scroll into view; the logo
 * marquee loops slowly and pauses on hover; the photo tile zooms slightly on
 * hover. All of it is off under prefers-reduced-motion (counters just show
 * their final value, which is also what the server renders).
 */

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const FOUNDED = 1985;
const YEARS = new Date().getFullYear() - FOUNDED;

const LOGOS = [
  { src: "/brand/tnt.svg", alt: "TNT Crane & Rigging" },
  { src: "/brand/southway.svg", alt: "Southway Crane & Rigging" },
  { src: "/brand/rms-cranes.svg", alt: "RMS Cranes" },
  { src: "/brand/eagle-west.svg", alt: "Eagle West Crane & Rigging" },
  { src: "/brand/jms.svg", alt: "JMS Crane & Rigging" },
];

/** Counts from 0 to `to` the first time it scrolls into view. Renders the
 *  final value on the server and whenever motion is reduced, so the number
 *  is never wrong or blank without JS. */
function CountUp({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [value, setValue] = useState(to);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const r = el.getBoundingClientRect();
    if (r.top < window.innerHeight && r.bottom > 0) return; // already visible: leave final value
    setValue(0);
    let raf = 0;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        io.disconnect();
        const start = performance.now();
        const DURATION = 1600;
        const tick = (now: number) => {
          const t = Math.min(1, (now - start) / DURATION);
          const eased = 1 - Math.pow(1 - t, 3);
          setValue(Math.round(to * eased));
          if (t < 1) raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [to]);

  return (
    <span ref={ref} className="tabular-nums">
      {value.toLocaleString("en-US")}
      {suffix && <span className="text-tnt-amber">{suffix}</span>}
    </span>
  );
}

const tile = "relative overflow-hidden rounded-2xl";

export default function FamilyBento() {
  return (
    <div className="grid gap-3 sm:grid-cols-2 sm:gap-4 lg:auto-rows-[minmax(12.5rem,auto)] lg:grid-cols-4">
      {/* A — years, photo through the numerals */}
      <div className={`${tile} flex flex-col justify-between bg-white p-7 sm:col-span-2 sm:p-9 lg:row-span-2`}>
        <p className="font-body text-xs font-bold tracking-[0.18em] text-black/50 uppercase">
          Since {FOUNDED} · Houston, Texas
        </p>
        <p
          aria-hidden="true"
          suppressHydrationWarning
          className="my-4 bg-cover bg-center bg-clip-text font-display text-[12rem] leading-[0.8] text-transparent sm:text-[16rem] lg:text-[clamp(14rem,24vw,24rem)]"
          style={{ backgroundImage: "url(/photos/about/about-hero-crawler-sunset.webp)" }}
        >
          {YEARS}
        </p>
        <div>
          <p className="font-display text-3xl text-black uppercase sm:text-4xl">
            <span className="sr-only" suppressHydrationWarning>{YEARS} </span>
            Years of lifting
          </p>
          <p className="mt-2 max-w-md font-body text-base text-black/60">
            Four decades of planning lifts, training crews and growing a family of regional
            companies across North America.
          </p>
        </div>
      </div>

      {/* B — cranes */}
      <div className={`${tile} flex flex-col justify-between bg-black p-7 text-white`}>
        <p className="font-body text-xs font-bold tracking-[0.18em] text-white/50 uppercase">The fleet</p>
        <div>
          <p className="font-display text-6xl leading-none sm:text-7xl">
            <CountUp to={700} suffix="+" />
          </p>
          <p className="mt-2 font-body text-sm text-white/70">Cranes today, from just one in {FOUNDED}.</p>
        </div>
      </div>

      {/* D — tall photo */}
      <div className={`${tile} group min-h-[22rem] bg-black sm:row-span-2 lg:min-h-0`}>
        <Image
          src="/photos/fleet/all-terrain-crane.jpg"
          alt="A red TNT crane working between high-rise buildings"
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
        />
        <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/80 to-transparent" />
        <p className="absolute bottom-6 left-6 right-6 font-display text-2xl text-white uppercase">
          Local crews.
          <br />
          <span className="text-tnt-amber">Big-city lifts.</span>
        </p>
      </div>

      {/* C — people */}
      <div className={`${tile} flex flex-col justify-between bg-white p-7`}>
        <p className="font-body text-xs font-bold tracking-[0.18em] text-black/50 uppercase">Our people</p>
        <div>
          <p className="font-display text-6xl leading-none text-black sm:text-7xl">
            <CountUp to={1750} suffix="+" />
          </p>
          <p className="mt-2 font-body text-sm text-black/60">Operators, riggers, engineers and crews.</p>
        </div>
      </div>

      {/* F — origin */}
      <div className={`${tile} flex flex-col justify-between bg-black p-7 text-white`}>
        <p className="font-body text-xs font-bold tracking-[0.18em] text-tnt-amber uppercase">Where it started</p>
        <p className="mt-6 font-display text-3xl leading-[1.05] uppercase">
          One 18-ton crane.
          <br />
          One city.
          <br />
          <span className="text-tnt-amber">{FOUNDED}.</span>
        </p>
      </div>

      {/* E — customers */}
      <div className={`${tile} flex flex-col justify-between bg-white p-7`}>
        <p className="font-body text-xs font-bold tracking-[0.18em] text-black/50 uppercase">Who we lift for</p>
        <div>
          <p className="font-display text-6xl leading-none text-black sm:text-7xl">
            <CountUp to={4000} suffix="+" />
          </p>
          <p className="mt-2 font-body text-sm text-black/60">Customers who trust the TNT family.</p>
        </div>
      </div>

      {/* CTA */}
      <Link
        href="/#quote"
        className={`${tile} group flex flex-col justify-between bg-tnt-amber p-7 text-black transition-colors hover:bg-black hover:text-white focus-visible:bg-black focus-visible:text-white sm:col-span-2 sm:p-9`}
      >
        <p className="font-body text-xs font-bold tracking-[0.18em] uppercase opacity-70">Work with us</p>
        <div className="mt-6 flex items-end justify-between gap-6">
          <p className="font-display text-4xl leading-[1] uppercase sm:text-5xl">
            One call.
            <br />
            The whole family.
          </p>
          <span
            aria-hidden="true"
            className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-black text-tnt-amber transition-transform duration-300 group-hover:translate-x-1 group-hover:bg-tnt-amber group-hover:text-black"
          >
            <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
              <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        </div>
        <span className="sr-only">Contact us for a quote</span>
      </Link>

      {/* Logo marquee */}
      <div className={`${tile} group bg-white py-7 sm:col-span-2 lg:col-span-4`}>
        <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-1 px-7 sm:px-9">
          <p className="font-body text-xs font-bold tracking-[0.18em] text-black/50 uppercase">
            The TNT family
          </p>
          <p className="font-body text-xs font-semibold tracking-[0.12em] text-black/50 uppercase">
            6 companies · 45+ locations · 2 countries
          </p>
        </div>
        <div className="relative mt-6 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
          <ul className="flex w-max animate-[tnt-marquee_32s_linear_infinite] items-center group-hover:[animation-play-state:paused] motion-reduce:animate-none">
            {[...LOGOS, ...LOGOS].map((l, i) => (
              <li key={i} aria-hidden={i >= LOGOS.length} className="shrink-0 px-10 sm:px-14">
                <Image src={l.src} alt={i >= LOGOS.length ? "" : l.alt} width={180} height={56} className="h-10 w-auto sm:h-12" />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
