"use client";

import { certificates, education, personal } from "@/data/portfolio";
import { AwardIcon, GraduationIcon } from "@/components/Icons";

export default function Education() {
  return (
    <section id="education" className="w-full max-w-6xl mx-auto py-20 px-6">
      {/* Header */}
      <div className="mb-12">
        <p className="section-label mb-2">— LEARNING</p>
        <h2 className="text-[clamp(2rem,5vw,3.2rem)] font-extrabold tracking-[-0.02em]">
          Education &amp; <span className="text-zinc-400">Certificates</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Education */}
        <div>
          <div className="flex items-center gap-2 mb-6">
            <GraduationIcon size={18} />
            <h3 className="text-[0.8rem] font-bold tracking-[0.1em] uppercase">
              Education
            </h3>
          </div>

          <div className="flex flex-col gap-4">
            {education.map((edu, i) => (
              <div
                key={i}
                className="border border-zinc-100 rounded-xl p-5 bg-white transition-colors duration-300 hover:border-zinc-300"
              >
                <p className="text-[0.95rem] font-bold mb-1.5">
                  {edu.degree}
                </p>
                <p className="text-[0.8rem] text-zinc-500 mb-1.5">
                  {edu.institution}
                </p>
                <span className="text-[0.65rem] text-zinc-400 font-medium">
                  {edu.period}
                </span>
              </div>
            ))}
          </div>

          {/* Languages */}
          <div className="mt-8">
            <p className="text-[0.7rem] font-bold tracking-[0.12em] uppercase text-zinc-400 mb-4">
              Languages
            </p>
            <div className="flex flex-col gap-2.5">
              {personal.languages.map((lang) => (
                <div
                  key={lang.name}
                  className="flex justify-between items-center px-4 py-2.5 border border-zinc-100 rounded-lg bg-white"
                >
                  <span className="text-[0.85rem] font-semibold">
                    {lang.name}
                  </span>
                  <span className="text-[0.65rem] text-zinc-500 font-medium">
                    {lang.level}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Certificates */}
        <div>
          <div className="flex items-center gap-2 mb-6">
            <AwardIcon size={18} />
            <h3 className="text-[0.8rem] font-bold tracking-[0.1em] uppercase">
              Certificates
            </h3>
          </div>

          <div className="flex flex-col gap-4">
            {certificates.map((cert, i) => (
              <div
                key={i}
                className="border border-zinc-100 rounded-xl p-5 bg-white transition-colors duration-300 hover:border-zinc-300"
              >
                <p className="text-[0.95rem] font-bold mb-1.5">
                  {cert.title}
                </p>
                <p className="text-[0.8rem] text-zinc-500 mb-1.5">
                  {cert.issuer}
                </p>
                <span className="text-[0.65rem] text-zinc-400 font-medium">
                  {cert.period}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
