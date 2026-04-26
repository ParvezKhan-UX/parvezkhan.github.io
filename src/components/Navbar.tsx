"use client";

import { personal } from "@/data/portfolio";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Connect", href: "#connect" },
];

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-zinc-100">
      <div className="w-full max-w-6xl mx-auto px-6 h-[60px] flex items-center justify-between">
        {/* Logo */}
        <div className="flex flex-col leading-tight">
          <span className="text-[0.82rem] font-black tracking-[0.04em] text-black">
            {personal.nameFirst}{" "}
            <span className="text-zinc-400">{personal.nameLast}</span>
          </span>
          <span className="text-[0.52rem] tracking-[0.22em] uppercase text-zinc-400 font-semibold mt-0.5">
            {personal.title}
          </span>
        </div>

        {/* Nav links */}
        <div className="flex gap-7 items-center">
          {NAV_LINKS.map(({ label, href }) => (
            <a key={label} href={href} className="text-[0.72rem] font-semibold tracking-[0.14em] uppercase text-zinc-500 no-underline relative pb-0.5 transition-colors duration-300 hover:text-black after:content-[''] after:absolute after:w-0 after:h-[1.5px] after:bottom-0 after:left-0 after:bg-black after:transition-[width] after:duration-300 after:ease-in-out hover:after:w-full">
              {label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
