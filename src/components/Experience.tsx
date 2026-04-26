"use client";

import { experiences } from "@/data/portfolio";
import { CheckIcon } from "@/components/Icons";

export default function Experience() {
  return (
    <section
      id="experience"
      style={{ maxWidth: 1152, margin: "0 auto", padding: "5rem 1.5rem" }}
    >
      {/* Header */}
      <div style={{ marginBottom: "3rem" }}>
        <p className="section-label" style={{ marginBottom: "0.5rem" }}>
          — WORK &amp; IMPACT
        </p>
        <h2
          style={{
            fontSize: "clamp(2rem, 5vw, 3.2rem)",
            fontWeight: 800,
            letterSpacing: "-0.02em",
          }}
        >
          Experience <span style={{ color: "#a1a1aa" }}>Timeline</span>
        </h2>
      </div>

      {/* Timeline */}
      <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
        {experiences.map((exp, i) => (
          <div key={i} className="exp-card">
            {/* Role + company + period row */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
                marginBottom: "0.5rem",
                flexWrap: "wrap",
                gap: "0.5rem",
              }}
            >
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
                  <h3
                    style={{
                      fontSize: "1rem",
                      fontWeight: 700,
                    }}
                  >
                    {exp.role}
                  </h3>
                  {exp.isCurrent && (
                    <span
                      style={{
                        fontSize: "0.58rem",
                        fontWeight: 700,
                        letterSpacing: "0.1em",
                        padding: "0.15rem 0.55rem",
                        background: "#dcfce7",
                        color: "#166534",
                        borderRadius: "9999px",
                      }}
                    >
                      CURRENT
                    </span>
                  )}
                </div>
                <p
                  style={{
                    fontSize: "0.82rem",
                    fontWeight: 600,
                    color: "#71717a",
                    marginTop: "0.15rem",
                  }}
                >
                  {exp.company}{" "}
                  <span
                    style={{
                      fontSize: "0.75rem",
                      fontWeight: 400,
                      color: "#a1a1aa",
                    }}
                  >
                    — {exp.location}
                  </span>
                </p>
              </div>

              <span
                style={{
                  fontSize: "0.7rem",
                  fontWeight: 500,
                  color: "#a1a1aa",
                  padding: "0.2rem 0.75rem",
                  border: "1px solid #e4e4e7",
                  borderRadius: "9999px",
                  whiteSpace: "nowrap",
                }}
              >
                {exp.period}
              </span>
            </div>

            {/* Accomplishments */}
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: "0.75rem 0 1rem",
                display: "flex",
                flexDirection: "column",
                gap: "0.4rem",
              }}
            >
              {exp.accomplishments.map((item, j) => (
                <li
                  key={j}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "0.5rem",
                    fontSize: "0.83rem",
                    color: "#71717a",
                    lineHeight: 1.65,
                  }}
                >
                  <span
                    style={{
                      marginTop: "0.18rem",
                      color: "#a1a1aa",
                      flexShrink: 0,
                    }}
                  >
                    <CheckIcon size={12} />
                  </span>
                  {item}
                </li>
              ))}
            </ul>

            {/* Skill tags */}
            <div style={{ display: "flex", gap: "0.4rem", flexWrap: "wrap" }}>
              {exp.skills.map((tag) => (
                <span
                  key={tag}
                  style={{
                    fontSize: "0.62rem",
                    fontWeight: 600,
                    padding: "0.2rem 0.6rem",
                    background: "#f4f4f5",
                    borderRadius: "9999px",
                    color: "#52525b",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
