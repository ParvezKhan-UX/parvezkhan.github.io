"use client";

import { motion, Variants } from "framer-motion";
import { personal } from "@/data/portfolio";
import { LinkedInIcon, BehanceIcon, MailIcon, ArrowRight, DownloadIcon, MapPinIcon } from "@/components/Icons";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Hero() {
  return (
    <section id="hero" className="w-full max-w-6xl mx-auto pt-24 pb-16 px-6 relative">
      <div className="glow-left" />
      <div className="glow-right" />

      <motion.div variants={containerVariants} initial="hidden" animate="show">
        {/* Available badge */}
        <motion.div variants={itemVariants} className="flex items-center gap-2 mb-8">
          <span className="inline-block w-2 h-2 rounded-full bg-green-500 pulse-dot" />
          <span className="text-[0.62rem] font-bold tracking-[0.18em] uppercase text-zinc-600">
            AVAILABLE FOR PROJECTS
          </span>
        </motion.div>

        {/* Two-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* Left — name + title + buttons */}
          <div>
            <motion.h1
              variants={itemVariants}
              className="text-[clamp(3.5rem,8vw,6.5rem)] font-black leading-none tracking-[-0.03em] uppercase mb-6"
            >
              <span className="text-black">{personal.nameFirst.toUpperCase()}</span>
              <br />
              <span className="text-zinc-400">{personal.nameLast.toUpperCase()}</span>
            </motion.h1>

            {/* Role badge */}
            <motion.div variants={itemVariants} className="flex items-center gap-3 mb-8">
              <div className="w-7 h-px bg-zinc-400" />
              <div>
                <div className="text-[0.68rem] font-bold tracking-[0.1em] uppercase text-black">
                  {personal.title.toUpperCase()}
                </div>
                <div className="text-[0.63rem] font-semibold tracking-[0.08em] uppercase text-zinc-400">
                  5+ YEARS EXPERIENCE
                </div>
              </div>
            </motion.div>

            {/* CTA buttons */}
            <motion.div variants={itemVariants} className="flex gap-3 flex-wrap mt-4">
              <a href="#connect" className="inline-flex items-center gap-2 px-6 py-2.5 bg-black text-white border border-black rounded-full text-[0.85rem] font-semibold tracking-[0.02em] no-underline transition-[padding] duration-250 ease-in-out hover:pr-8">
                COLLABORATE <ArrowRight />
              </a>
              <a
                href={personal.behance}
                className="inline-flex items-center gap-2 px-6 py-2.5 bg-white text-black border-[1.5px] border-black rounded-full text-[0.85rem] font-semibold no-underline transition-colors duration-200 hover:bg-zinc-50"
                target="_blank"
                rel="noopener noreferrer"
              >
                VIEW WORK <DownloadIcon />
              </a>
            </motion.div>
          </div>

          {/* Right — tagline + location + social */}
          <div className="flex flex-col justify-between gap-6 h-full pt-4 md:pl-10">
            <motion.p
              variants={itemVariants}
              className="text-[0.95rem] text-zinc-600 leading-relaxed max-w-[340px]"
            >
              {personal.tagline}
            </motion.p>

            <motion.div variants={itemVariants}>
              {/* Location chip */}
              <div className="inline-flex items-center gap-1.5 text-[0.75rem] text-zinc-500 font-medium mb-6">
                <MapPinIcon size={14} />
                {personal.location}
              </div>

              {/* Social icons */}
              <div className="flex gap-5">
                {[
                  { href: personal.linkedin, icon: <LinkedInIcon />, label: "LinkedIn" },
                  { href: personal.behance, icon: <BehanceIcon />, label: "Behance" },
                  { href: `mailto:${personal.email}`, icon: <MailIcon />, label: "Email" },
                ].map(({ href, icon, label }) => (
                  <a
                    key={label}
                    href={href}
                    target={label !== "Email" ? "_blank" : undefined}
                    rel={label !== "Email" ? "noopener noreferrer" : undefined}
                    aria-label={label}
                    className="text-zinc-400 transition-colors duration-200 hover:text-black inline-flex"
                  >
                    {icon}
                  </a>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
