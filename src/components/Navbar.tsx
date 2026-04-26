"use client";

import { personal } from "@/data/portfolio";
import { LinkedInIcon, BehanceIcon } from "@/components/Icons";

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
    <nav
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        background: "rgba(255,255,255,0.88)",
        backdropFilter: "blur(14px)",
        WebkitBackdropFilter: "blur(14px)",
        borderBottom: "1px solid #f4f4f5",
      }}
    >
      <div
        style={{
          maxWidth: 1152,
          margin: "0 auto",
          padding: "0 1.5rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: 60,
        }}
      >
        {/* Logo */}
        <div style={{ display: "flex", flexDirection: "column", lineHeight: 1.15 }}>
          <span
            style={{
              fontSize: "0.82rem",
              fontWeight: 900,
              letterSpacing: "0.04em",
              color: "#000",
            }}
          >
            {personal.nameFirst}{" "}
            <span style={{ color: "#a1a1aa" }}>{personal.nameLast}</span>
          </span>
          <span
            style={{
              fontSize: "0.52rem",
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "#a1a1aa",
              fontWeight: 600,
            }}
          >
            {personal.title}
          </span>
        </div>

        {/* Nav links */}
        <div style={{ display: "flex", gap: "1.75rem", alignItems: "center" }}>
          {NAV_LINKS.map(({ label, href }) => (
            <a key={label} href={href} className="nav-link">
              {label}
            </a>
          ))}
          {/* Social shortcuts */}
          <div style={{ display: "flex", gap: "0.75rem", marginLeft: "0.5rem" }}>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              style={{ color: "#a1a1aa", transition: "color 0.2s", display: "inline-flex" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#000")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#a1a1aa")}
            >
              <LinkedInIcon size={15} />
            </a>
            <a
              href={personal.behance}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Behance"
              style={{ color: "#a1a1aa", transition: "color 0.2s", display: "inline-flex" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#000")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#a1a1aa")}
            >
              <BehanceIcon size={16} />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
