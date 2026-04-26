"use client";

import { personal } from "@/data/portfolio";
import { LinkedInIcon, BehanceIcon, MailIcon, ArrowRight, DownloadIcon, MapPinIcon } from "@/components/Icons";

export default function Hero() {
  return (
    <section
      id="hero"
      style={{ maxWidth: 1152, margin: "0 auto", padding: "3rem 1.5rem" }}
    >
      <div
        className="hero-card"
        style={{
          borderRadius: 20,
          padding: "3rem 3rem 2.5rem",
          background: "#fff",
        }}
      >
        {/* Available badge */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            marginBottom: "2rem",
          }}
        >
          <span
            className="pulse-dot"
            style={{
              display: "inline-block",
              width: 8,
              height: 8,
              borderRadius: "50%",
              background: "#22c55e",
            }}
          />
          <span
            style={{
              fontSize: "0.62rem",
              fontWeight: 700,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "#52525b",
            }}
          >
            AVAILABLE FOR PROJECTS
          </span>
        </div>

        {/* Two-column grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "2rem",
            alignItems: "start",
          }}
        >
          {/* Left — name + title + buttons */}
          <div>
            <h1
              style={{
                fontSize: "clamp(2.8rem, 7vw, 5.5rem)",
                fontWeight: 900,
                lineHeight: 1,
                letterSpacing: "-0.03em",
                textTransform: "uppercase",
                marginBottom: "1.5rem",
              }}
            >
              <span style={{ color: "#000" }}>{personal.nameFirst.toUpperCase()}</span>
              <br />
              <span style={{ color: "#a1a1aa" }}>{personal.nameLast.toUpperCase()}</span>
            </h1>

            {/* Role badge */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.75rem",
                marginBottom: "2rem",
              }}
            >
              <div style={{ width: 28, height: 1, background: "#a1a1aa" }} />
              <div>
                <div
                  style={{
                    fontSize: "0.68rem",
                    fontWeight: 700,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "#000",
                  }}
                >
                  {personal.title.toUpperCase()}
                </div>
                <div
                  style={{
                    fontSize: "0.63rem",
                    fontWeight: 600,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    color: "#a1a1aa",
                  }}
                >
                  5+ YEARS EXPERIENCE
                </div>
              </div>
            </div>

            {/* CTA buttons */}
            <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
              <a href="#connect" className="btn-primary">
                COLLABORATE <ArrowRight />
              </a>
              <a
                href={personal.behance}
                className="btn-secondary"
                target="_blank"
                rel="noopener noreferrer"
              >
                VIEW WORK <DownloadIcon />
              </a>
            </div>
          </div>

          {/* Right — tagline + location + social */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              gap: "1.5rem",
            }}
          >
            <p
              style={{
                fontSize: "0.95rem",
                color: "#52525b",
                lineHeight: 1.75,
                maxWidth: 340,
              }}
            >
              {personal.tagline}
            </p>

            {/* Location chip */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.4rem",
                fontSize: "0.75rem",
                color: "#71717a",
                fontWeight: 500,
              }}
            >
              <MapPinIcon size={14} />
              {personal.location}
            </div>

            {/* Social icons */}
            <div style={{ display: "flex", gap: "1.25rem" }}>
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
                  style={{
                    color: "#a1a1aa",
                    transition: "color 0.2s",
                    display: "inline-flex",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#000")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#a1a1aa")}
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
