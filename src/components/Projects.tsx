"use client";

import { useState } from "react";
import Image from "next/image";
import { projects } from "@/data/portfolio";
import { ArrowRight, ExternalLinkIcon } from "@/components/Icons";

type Filter = "all" | "work" | "personal";

const FILTERS: { id: Filter; label: string; prefix: string }[] = [
  { id: "all", label: "All", prefix: "◈" },
  { id: "work", label: "Client Work", prefix: "⚙" },
  { id: "personal", label: "Personal", prefix: "◇" },
];

export default function Projects() {
  const [active, setActive] = useState<Filter>("all");

  const filtered =
    active === "all" ? projects : projects.filter((p) => p.type === active);

  return (
    <section
      id="projects"
      style={{ maxWidth: 920, margin: "0 auto", padding: "5rem 1.5rem" }}
    >
      {/* Header + filter row */}
      <div
        style={{
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "space-between",
          marginBottom: "3rem",
          flexWrap: "wrap",
          gap: "1rem",
        }}
      >
        <div>
          <p className="section-label" style={{ marginBottom: "0.5rem" }}>
            — PORTFOLIO
          </p>
          <h2
            style={{
              fontSize: "clamp(2rem, 5vw, 3.2rem)",
              fontWeight: 800,
              letterSpacing: "-0.02em",
            }}
          >
            Featured <span style={{ color: "#a1a1aa" }}>Works</span>
          </h2>
        </div>

        {/* Filter buttons */}
        <div style={{ display: "flex", gap: "0.5rem" }}>
          {FILTERS.map(({ id, label, prefix }) => (
            <button
              key={id}
              className={`filter-btn ${active === id ? "active" : ""}`}
              onClick={() => setActive(id)}
            >
              <span style={{ opacity: 0.7 }}>{prefix}</span> {label}
            </button>
          ))}
        </div>
      </div>

      {/* Project grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: "1.5rem",
        }}
      >
        {filtered.map((proj) => (
          <div key={proj.id} className="project-card">
            {/* Preview image */}
            <div
              style={{
                position: "relative",
                aspectRatio: "16/10",
                background: "#f4f4f5",
              }}
            >
              <Image
                src={proj.image}
                alt={proj.name}
                fill
                sizes="(max-width: 920px) 50vw, 440px"
                style={{ objectFit: "cover" }}
              />
              {/* Status badge */}
              <span
                style={{
                  position: "absolute",
                  top: "0.75rem",
                  right: "0.75rem",
                  fontSize: "0.6rem",
                  fontWeight: 700,
                  letterSpacing: "0.08em",
                  padding: "0.2rem 0.6rem",
                  borderRadius: "9999px",
                  background:
                    proj.status === "Live"
                      ? "#dcfce7"
                      : proj.status === "Case Study"
                      ? "#dbeafe"
                      : "#fef9c3",
                  color:
                    proj.status === "Live"
                      ? "#166534"
                      : proj.status === "Case Study"
                      ? "#1e40af"
                      : "#854d0e",
                }}
              >
                {proj.status}
              </span>
            </div>

            {/* Card body */}
            <div style={{ padding: "1.25rem" }}>
              {/* Category */}
              <p
                style={{
                  fontSize: "0.6rem",
                  fontWeight: 700,
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: "#a1a1aa",
                  marginBottom: "0.35rem",
                }}
              >
                {proj.category === "ux"
                  ? "UX DESIGN"
                  : proj.category === "mobile"
                  ? "MOBILE APP"
                  : "WEB APP"}
              </p>

              <h3
                style={{
                  fontSize: "1rem",
                  fontWeight: 700,
                  marginBottom: "0.4rem",
                }}
              >
                {proj.name}
              </h3>

              <p
                style={{
                  fontSize: "0.82rem",
                  color: "#71717a",
                  lineHeight: 1.65,
                  marginBottom: "1rem",
                }}
              >
                {proj.description}
              </p>

              {/* Tags */}
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "0.35rem",
                  marginBottom: proj.links.length > 0 ? "1rem" : 0,
                }}
              >
                {proj.tags.map((tag) => (
                  <span
                    key={tag}
                    style={{
                      fontSize: "0.6rem",
                      fontWeight: 600,
                      padding: "0.18rem 0.55rem",
                      background: "#f4f4f5",
                      borderRadius: "9999px",
                      color: "#52525b",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Links */}
              {proj.links.length > 0 && (
                <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
                  {proj.links.map((link) => (
                    <a
                      key={link.url}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "0.3rem",
                        fontSize: "0.75rem",
                        fontWeight: 600,
                        color: "#000",
                        textDecoration: "none",
                        transition: "opacity 0.2s",
                      }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.opacity = "0.7")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.opacity = "1")
                      }
                    >
                      {link.label} <ExternalLinkIcon />
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Behance CTA */}
      <div style={{ textAlign: "center", marginTop: "2.5rem" }}>
        <a
          href="https://www.behance.net/mpkhasan62"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.5rem",
            fontSize: "0.8rem",
            fontWeight: 600,
            color: "#52525b",
            textDecoration: "none",
            letterSpacing: "0.04em",
            transition: "color 0.2s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "#000")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "#52525b")}
        >
          VIEW ALL ON BEHANCE <ArrowRight />
        </a>
      </div>
    </section>
  );
}
