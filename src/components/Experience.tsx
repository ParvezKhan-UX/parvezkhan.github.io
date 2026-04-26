"use client";

import { experiences } from "@/data/portfolio";
import { CheckIcon } from "@/components/Icons";

export default function Experience() {
  return (
    <section id="experience" className="w-full max-w-6xl mx-auto py-20 px-6">
      {/* Header */}
      <div className="mb-12">
        <p className="section-label mb-2">— WORK &amp; IMPACT</p>
        <h2 className="text-[clamp(2rem,5vw,3.2rem)] font-extrabold tracking-[-0.02em]">
          Experience <span className="text-zinc-400">Timeline</span>
        </h2>
      </div>

      {/* Timeline */}
      <div className="flex flex-col gap-5">
        {experiences.map((exp, i) => (
          <div key={i} className="border border-zinc-100 rounded-2xl p-6 md:px-8 bg-white transition-colors duration-300 hover:border-zinc-300">
            {/* Role + company + period row */}
            <div className="flex justify-between items-start mb-2 flex-wrap gap-2">
              <div>
                <div className="flex items-center gap-2.5">
                  <h3 className="text-base font-bold">
                    {exp.role}
                  </h3>
                  {exp.isCurrent && (
                    <span className="text-[0.58rem] font-bold tracking-[0.1em] px-2.5 py-0.5 bg-green-100 text-green-800 rounded-full">
                      CURRENT
                    </span>
                  )}
                </div>
                <p className="text-[0.82rem] font-semibold text-zinc-500 mt-1">
                  {exp.company}{" "}
                  <span className="text-[0.75rem] font-normal text-zinc-400">
                    — {exp.location}
                  </span>
                </p>
              </div>

              <span className="text-[0.7rem] font-medium text-zinc-400 px-3 py-1 border border-zinc-200 rounded-full whitespace-nowrap">
                {exp.period}
              </span>
            </div>

            {/* Accomplishments */}
            <ul className="list-none p-0 my-3 flex flex-col gap-1.5">
              {exp.accomplishments.map((item, j) => (
                <li
                  key={j}
                  className="flex items-start gap-2 text-[0.83rem] text-zinc-500 leading-[1.65]"
                >
                  <span className="mt-1 text-zinc-400 shrink-0">
                    <CheckIcon size={12} />
                  </span>
                  {item}
                </li>
              ))}
            </ul>

            {/* Skill tags */}
            <div className="flex gap-1.5 flex-wrap mt-4">
              {exp.skills.map((tag) => (
                <span
                  key={tag}
                  className="text-[0.62rem] font-semibold px-2.5 py-1 bg-zinc-100 rounded-full text-zinc-600"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
