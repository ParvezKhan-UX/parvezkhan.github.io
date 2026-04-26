"use client";

import { personal } from "@/data/portfolio";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-100 py-8 px-6 bg-white">
      <div className="w-full max-w-6xl mx-auto flex items-center justify-between flex-wrap gap-4">
        <span className="text-[0.75rem] text-zinc-400">
          © {new Date().getFullYear()} {personal.nameShort}. All rights reserved.
        </span>
        <div className="flex gap-6 items-center">
          <a
            href={personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[0.72rem] text-zinc-400 no-underline font-medium transition-colors duration-200 hover:text-black"
          >
            LinkedIn
          </a>
          <a
            href={personal.behance}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[0.72rem] text-zinc-400 no-underline font-medium transition-colors duration-200 hover:text-black"
          >
            Behance
          </a>
          <a
            href={`mailto:${personal.email}`}
            className="text-[0.72rem] text-zinc-400 no-underline font-medium transition-colors duration-200 hover:text-black"
          >
            Email
          </a>
        </div>
        <span className="text-[0.75rem] text-zinc-400">
          Designed &amp; Built with ♥
        </span>
      </div>
    </footer>
  );
}
