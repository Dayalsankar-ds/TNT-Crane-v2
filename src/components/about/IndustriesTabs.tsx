"use client";

/**
 * INDUSTRIES — TABBED SECTORS (2026-11-12, on request: the user's reference
 * was the old site's Industries block — a photo, a vertical "INDUSTRIES"
 * label and three "+"-bulleted lists paged 1/2/3 — and they chose "A",
 * a modern redesign of it).
 *
 *   - Three large Impact tabs (Commercial / Industrial / Infrastructure),
 *     the active one underlined in brand yellow. Real ARIA tabs: arrow keys,
 *     Home/End move between them.
 *   - Left: a tall photo per sector with a slanted right edge (the same
 *     slant language as Our Journey). All three are stacked and cross-fade
 *     with a slight zoom, so switching never waits on a download.
 *   - Right: the sector's industries as chips with a yellow "+" mark,
 *     a one-line summary and a count.
 *
 * The industry lists are the old site's, verbatim. Photos are existing
 * project images (stock-tower-crane.jpg is a stock photo, not a TNT job, so
 * its alt text doesn't claim one).
 */

import Image from "next/image";
import { useId, useRef, useState } from "react";

type Sector = {
  id: string;
  name: string;
  summary: string;
  photo: string;
  alt: string;
  industries: string[];
};

const SECTORS: Sector[] = [
  {
    id: "commercial",
    name: "Commercial",
    summary: "From steel erection to data halls, the lifts that put buildings up.",
    photo: "/photos/fleet/stock-tower-crane.jpg",
    alt: "Tower cranes working around a high-rise under construction",
    industries: [
      "Structural Steel Construction",
      "Concrete Construction",
      "Corporate Office Buildings",
      "Educational Facilities",
      "Stadiums & Sporting Facilities",
      "Government Facilities",
      "Space Exploration Facilities",
      "Data Centers",
    ],
  },
  {
    id: "industrial",
    name: "Industrial",
    summary: "Heavy, high-consequence picks inside operating plants and energy sites.",
    photo: "/photos/cases/tnt-142-refinery-reactor-exchange.jpg",
    alt: "A yellow crawler crane rigged for a lift inside a refinery",
    industries: [
      "Refining & Petrochemical",
      "Oil & Gas",
      "Renewables (Wind & Solar)",
      "Mining",
      "Power Generation & Distribution",
      "Telecommunications",
      "HVAC & Mechanical",
      "Industrial Manufacturing",
      "Pulp & Paper",
    ],
  },
  {
    id: "infrastructure",
    name: "Infrastructure",
    summary: "Bridges, water and public works that communities depend on.",
    photo: "/photos/tnt-crawler-bridge-lift.jpg",
    alt: "TNT crawler crane setting bridge girders between concrete piers",
    industries: [
      "Bridge & Highway Construction",
      "Dam & Reservoir Construction",
      "Military Facilities & Equipment",
      "Water Treatment Plants",
      "Hospitals & Medical Facilities",
      "Waste Management",
    ],
  },
];

export default function IndustriesTabs() {
  const [active, setActive] = useState(0);
  const tabsRef = useRef<(HTMLButtonElement | null)[]>([]);
  const uid = useId();
  const sector = SECTORS[active];

  const onKeyDown = (e: React.KeyboardEvent) => {
    let next = active;
    if (e.key === "ArrowRight") next = (active + 1) % SECTORS.length;
    else if (e.key === "ArrowLeft") next = (active - 1 + SECTORS.length) % SECTORS.length;
    else if (e.key === "Home") next = 0;
    else if (e.key === "End") next = SECTORS.length - 1;
    else return;
    e.preventDefault();
    setActive(next);
    tabsRef.current[next]?.focus();
  };

  return (
    <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16">
      {/* Photo stack */}
      <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-black lg:aspect-auto lg:min-h-[34rem] lg:rounded-none lg:[clip-path:polygon(0_0,100%_0,90%_100%,0_100%)]">
        {SECTORS.map((s, i) => (
          <Image
            key={s.id}
            src={s.photo}
            alt={i === active ? s.alt : ""}
            aria-hidden={i !== active}
            fill
            sizes="(min-width: 1024px) 45vw, 100vw"
            className={`object-cover transition-[opacity,transform] duration-700 ease-out motion-reduce:transition-none ${
              i === active ? "scale-100 opacity-100" : "scale-105 opacity-0"
            }`}
          />
        ))}
        <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/70 to-transparent" />
        <p className="absolute bottom-6 left-6 font-display text-4xl text-white uppercase sm:text-5xl">
          <span className="text-tnt-amber">{String(active + 1).padStart(2, "0")}</span>
          <span className="text-white/40"> / {String(SECTORS.length).padStart(2, "0")}</span>
        </p>
      </div>

      {/* Tabs + panel */}
      <div className="flex min-w-0 flex-col">
        <div role="tablist" aria-label="Industry sectors" className="flex gap-x-6 overflow-x-auto border-b border-black/15 [scrollbar-width:none] sm:flex-wrap sm:gap-x-8 sm:gap-y-2 sm:overflow-visible" onKeyDown={onKeyDown}>
          {SECTORS.map((s, i) => {
            const selected = i === active;
            return (
              <button
                key={s.id}
                ref={(el) => {
                  tabsRef.current[i] = el;
                }}
                type="button"
                role="tab"
                id={`${uid}-tab-${s.id}`}
                aria-selected={selected}
                aria-controls={`${uid}-panel`}
                tabIndex={selected ? 0 : -1}
                onClick={() => setActive(i)}
                className={`relative shrink-0 pb-4 font-display text-[1.65rem] whitespace-nowrap uppercase transition-colors sm:-mb-px sm:text-4xl ${
                  selected ? "text-black" : "text-black/30 hover:text-black/60"
                }`}
              >
                {s.name}
                <span
                  aria-hidden="true"
                  className={`absolute inset-x-0 bottom-0 h-1 bg-tnt-amber transition-transform duration-300 origin-left motion-reduce:transition-none ${
                    selected ? "scale-x-100" : "scale-x-0"
                  }`}
                />
              </button>
            );
          })}
        </div>

        <div
          role="tabpanel"
          id={`${uid}-panel`}
          aria-labelledby={`${uid}-tab-${sector.id}`}
          className="mt-8"
        >
          <div key={sector.id} className="motion-safe:animate-[about-fade-up_0.5s_ease-out_both]">
            <div className="flex flex-wrap items-baseline justify-between gap-4">
              <p className="max-w-md font-body text-lg leading-relaxed text-black/70">{sector.summary}</p>
              <p className="font-body text-xs font-bold tracking-[0.18em] text-black/50 uppercase">
                {sector.industries.length} industries
              </p>
            </div>
            <ul className="mt-8 flex flex-wrap gap-3">
              {sector.industries.map((name) => (
                <li
                  key={name}
                  className="group flex items-center gap-2.5 rounded-full border border-black/10 bg-white py-2.5 pr-5 pl-2.5 font-body text-[15px] font-medium text-black transition-colors hover:border-tnt-amber"
                >
                  <span
                    aria-hidden="true"
                    className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-black text-tnt-amber transition-colors group-hover:bg-tnt-amber group-hover:text-black"
                  >
                    <svg viewBox="0 0 12 12" className="h-2.5 w-2.5" fill="none">
                      <path d="M6 1v10M1 6h10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  </span>
                  {name}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
