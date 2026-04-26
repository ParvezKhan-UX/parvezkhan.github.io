"use client";

import { skills } from "@/data/portfolio";

export default function Skills() {
  return (
    <section id="skills" className="w-full max-w-6xl mx-auto py-20 px-6">
      {/* Header */}
      <div className="mb-12">
        <p className="section-label mb-2">— INVENTORY</p>
        <h2 className="text-[clamp(2rem,5vw,3.2rem)] font-extrabold tracking-[-0.02em]">
          Tech <span className="text-zinc-400">Stack</span>
        </h2>
      </div>

      {/* Skill tags */}
      <div className="flex flex-wrap gap-2.5">
        {skills.map((skill) => (
          <span key={skill} className="inline-flex items-center px-3.5 py-1.5 border border-zinc-200 rounded-full text-[0.8rem] font-medium text-zinc-800 bg-white transition-colors duration-200 hover:border-black hover:bg-zinc-50">
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}
