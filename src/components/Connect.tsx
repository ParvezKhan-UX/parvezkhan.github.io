"use client";

import { contact } from "@/data/portfolio";
import { LinkedInIcon, BehanceIcon, MailIcon, PhoneIcon } from "@/components/Icons";

function getIcon(type: string) {
  switch (type) {
    case "mail":
      return <MailIcon />;
    case "linkedin":
      return <LinkedInIcon />;
    case "behance":
      return <BehanceIcon />;
    case "phone":
      return <PhoneIcon />;
    default:
      return null;
  }
}

export default function Connect() {
  return (
    <section id="connect" className="w-full max-w-6xl mx-auto pt-20 pb-32 px-6">
      {/* Header */}
      <div className="mb-12">
        <p className="section-label mb-2">— AVAILABLE FOR WORK</p>
        <h2 className="text-[clamp(2.2rem,6vw,3.8rem)] font-black tracking-[-0.02em]">
          Get In <span className="text-zinc-400">Touch</span>
        </h2>
      </div>

      {/* Intro blurb */}
      <p className="text-[0.95rem] text-zinc-500 leading-relaxed max-w-[480px] mb-12">
        I&apos;m always open to discussing new projects, creative ideas, or
        opportunities to be part of your vision. Feel free to reach out!
      </p>

      {/* Contact rows */}
      <div>
        {contact.map(({ id, label, value, href, type }) => (
          <a
            key={id}
            href={href}
            className="flex items-center justify-between py-5 border-b border-zinc-100 cursor-pointer transition-colors duration-300 no-underline text-inherit hover:border-black group"
            target={type !== "phone" && type !== "mail" ? "_blank" : undefined}
            rel={
              type !== "phone" && type !== "mail"
                ? "noopener noreferrer"
                : undefined
            }
          >
            <div className="flex items-center gap-6">
              <span className="text-[0.7rem] text-zinc-400 font-medium min-w-[22px]">
                {id}
              </span>
              <div>
                <p className="text-[0.6rem] font-bold tracking-[0.12em] uppercase text-zinc-400">
                  {label}
                </p>
                <p className="text-[0.92rem] font-bold text-black mt-0.5">
                  {value}
                </p>
              </div>
            </div>
            <span className="text-zinc-400">{getIcon(type)}</span>
          </a>
        ))}
      </div>
    </section>
  );
}
