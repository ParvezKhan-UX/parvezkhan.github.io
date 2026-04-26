"use client";

import { useState } from "react";
import Image from "next/image";
import { projects } from "@/data/portfolio";
import { ArrowRight, ExternalLinkIcon } from "@/components/Icons";

type Filter = "all" | "work" | "personal";

const FILTERS: { id: Filter; label: string; prefix: string }[] = [
  { id: "all", label: "All", prefix: "◈" },
  { id: "work", label: "Client Work", prefix: "⚙" },
  { id: "personal", label: "Personal", prefix: "◇" },
];

export default function Projects() {
  const [active, setActive] = useState<Filter>("all");

  const filtered =
    active === "all" ? projects : projects.filter((p) => p.type === active);

  return (
    <section id="projects" className="w-full max-w-6xl mx-auto py-20 px-6">
      {/* Header + filter row */}
      <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
        <div>
          <p className="section-label mb-2">— PORTFOLIO</p>
          <h2 className="text-[clamp(2rem,5vw,3.2rem)] font-extrabold tracking-[-0.02em]">
            Featured <span className="text-zinc-400">Works</span>
          </h2>
        </div>

        {/* Filter buttons */}
        <div className="flex gap-2">
          {FILTERS.map(({ id, label, prefix }) => (
            <button
              key={id}
              className={`inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-[0.75rem] font-medium border transition-all duration-200 cursor-pointer ${
                active === id
                  ? "bg-black text-white border-black"
                  : "bg-white text-zinc-600 border-zinc-200 hover:bg-black hover:text-white hover:border-black"
              }`}
              onClick={() => setActive(id)}
            >
              <span className="opacity-70">{prefix}</span> {label}
            </button>
          ))}
        </div>
      </div>

      {/* Project grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filtered.map((proj) => (
          <div key={proj.id} className="border border-zinc-100 rounded-xl overflow-hidden bg-white transition-all duration-300 cursor-pointer hover:border-zinc-300 hover:shadow-[0_8px_32px_rgba(0,0,0,0.07)]">
            {/* Preview image */}
            <div className="relative aspect-[16/10] bg-zinc-100">
              <Image
                src={proj.image}
                alt={proj.name}
                fill
                sizes="(max-width: 920px) 100vw, 50vw"
                className="object-cover"
              />
              {/* Status badge */}
              <span
                className={`absolute top-3 right-3 text-[0.6rem] font-bold tracking-[0.08em] px-2.5 py-1 rounded-full ${
                  proj.status === "Live"
                    ? "bg-green-100 text-green-800"
                    : proj.status === "Case Study"
                    ? "bg-blue-100 text-blue-800"
                    : "bg-yellow-100 text-yellow-800"
                }`}
              >
                {proj.status}
              </span>
            </div>

            {/* Card body */}
            <div className="p-5">
              {/* Category */}
              <p className="text-[0.6rem] font-bold tracking-[0.15em] uppercase text-zinc-400 mb-1.5">
                {proj.category === "ux"
                  ? "UX DESIGN"
                  : proj.category === "mobile"
                  ? "MOBILE APP"
                  : "WEB APP"}
              </p>

              <h3 className="text-base font-bold mb-1.5">
                {proj.name}
              </h3>

              <p className="text-[0.82rem] text-zinc-500 leading-[1.65] mb-4 line-clamp-2">
                {proj.description}
              </p>

              {/* Tags */}
              <div
                className={`flex flex-wrap gap-1.5 ${proj.links.length > 0 ? "mb-4" : "mb-0"}`}
              >
                {proj.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[0.6rem] font-semibold px-2 py-1 bg-zinc-100 rounded-full text-zinc-600"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Links */}
              {proj.links.length > 0 && (
                <div className="flex gap-3 flex-wrap">
                  {proj.links.map((link) => (
                    <a
                      key={link.url}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-[0.75rem] font-semibold text-black no-underline transition-opacity duration-200 hover:opacity-70"
                    >
                      {link.label} <ExternalLinkIcon />
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Behance CTA */}
      <div className="text-center mt-10">
        <a
          href="https://www.behance.net/mpkhasan62"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-[0.8rem] font-semibold text-zinc-600 no-underline tracking-[0.04em] transition-colors duration-200 hover:text-black"
        >
          VIEW ALL ON BEHANCE <ArrowRight />
        </a>
      </div>
    </section>
  );
}
