"use client";

import Image from "next/image";
import { personal, skills as allSkills } from "@/data/portfolio";
import { ArrowRight, MapPinIcon } from "@/components/Icons";

export default function About() {
  const displayTools = allSkills.filter((s) =>
    ["Figma", "Adobe XD", "Adobe Photoshop", "Adobe Illustrator", "UI Design", "UX Design"].includes(s)
  );

  return (
    <section id="about" className="w-full max-w-6xl mx-auto py-20 px-6">
      {/* Header */}
      <div className="mb-12">
        <p className="section-label mb-2">— BIOGRAPHY</p>
        <h2 className="text-[clamp(2rem,5vw,3.2rem)] font-extrabold tracking-[-0.02em]">
          What I <span className="text-zinc-400">Do</span>
        </h2>
      </div>

      {/* Photo + content */}
      <div className="grid grid-cols-1 md:grid-cols-[220px_1fr] gap-16 items-start">
        {/* Photo */}
        <div className="rounded-2xl overflow-hidden border border-zinc-100 aspect-[4/5] relative bg-zinc-100 shrink-0 mx-auto md:mx-0 w-full max-w-[280px] md:max-w-none">
          <Image
            src={personal.profileImage}
            alt={personal.nameShort}
            fill
            sizes="(max-width: 768px) 280px, 220px"
            className="object-cover"
            priority
          />
        </div>

        {/* Content */}
        <div>
          <p className="text-[0.6rem] font-bold tracking-[0.18em] uppercase text-zinc-400 mb-4">
            ● THE DIGITAL ARCHITECT
          </p>

          <h3 className="text-[clamp(1.25rem,2.5vw,1.75rem)] font-bold leading-snug mb-5 tracking-[-0.01em]">
            Building refined{" "}
            <em className="italic text-zinc-600">user-centered</em>{" "}
            digital products with 5+ years of experience.
          </h3>

          <p className="text-[0.9rem] text-zinc-500 leading-[1.85] mb-8 max-w-[500px]">
            {personal.bio}
          </p>

          {/* Meta grid */}
          <div className="grid grid-cols-2 gap-5 mb-8">
            {[
              { label: "LOCATION", value: personal.location, icon: <MapPinIcon size={12} /> },
              { label: "STATUS", value: personal.status },
              { label: "EMAIL", value: personal.email },
              { label: "INTERESTS", value: personal.interests.join(", ") },
            ].map(({ label, value, icon }) => (
              <div key={label}>
                <p className="text-[0.58rem] font-bold tracking-[0.15em] uppercase text-zinc-400 mb-1 flex items-center gap-1">
                  {icon}
                  {label}
                </p>
                <p className="text-[0.82rem] font-semibold text-black break-words">
                  {value}
                </p>
              </div>
            ))}
          </div>

          {/* Tool pills */}
          <div className="flex flex-wrap gap-2 mb-8">
            {displayTools.map((s) => (
              <span
                key={s}
                className="text-[0.65rem] font-semibold tracking-[0.04em] px-2.5 py-1 border border-zinc-200 rounded-full text-zinc-600 bg-zinc-50"
              >
                {s}
              </span>
            ))}
          </div>

          <a href="#connect" className="inline-flex items-center gap-2 px-6 py-2.5 bg-black text-white border border-black rounded-full text-[0.85rem] font-semibold tracking-[0.02em] no-underline transition-[padding] duration-250 ease-in-out hover:pr-8">
            GET IN TOUCH <ArrowRight />
          </a>
        </div>
      </div>
    </section>
  );
}
