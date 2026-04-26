"use client";

import { certificates, education, personal } from "@/data/portfolio";
import { AwardIcon, GraduationIcon } from "@/components/Icons";

export default function Education() {
  return (
    <section
      id="education"
      style={{ maxWidth: 920, margin: "0 auto", padding: "5rem 1.5rem" }}
    >
      {/* Header */}
      <div style={{ marginBottom: "3rem" }}>
        <p className="section-label" style={{ marginBottom: "0.5rem" }}>
          — LEARNING
        </p>
        <h2
          style={{
            fontSize: "clamp(2rem, 5vw, 3.2rem)",
            fontWeight: 800,
            letterSpacing: "-0.02em",
          }}
        >
          Education &amp; <span style={{ color: "#a1a1aa" }}>Certificates</span>
        </h2>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "3rem",
        }}
      >
        {/* Education */}
        <div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              marginBottom: "1.5rem",
            }}
          >
            <GraduationIcon size={18} />
            <h3
              style={{
                fontSize: "0.8rem",
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
              }}
            >
              Education
            </h3>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {education.map((edu, i) => (
              <div
                key={i}
                style={{
                  border: "1px solid #f4f4f5",
                  borderRadius: 12,
                  padding: "1.25rem",
                  background: "#fff",
                  transition: "border-color 0.3s",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.borderColor = "#d4d4d8")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.borderColor = "#f4f4f5")
                }
              >
                <p
                  style={{
                    fontSize: "0.95rem",
                    fontWeight: 700,
                    marginBottom: "0.3rem",
                  }}
                >
                  {edu.degree}
                </p>
                <p
                  style={{
                    fontSize: "0.8rem",
                    color: "#71717a",
                    marginBottom: "0.4rem",
                  }}
                >
                  {edu.institution}
                </p>
                <span
                  style={{
                    fontSize: "0.65rem",
                    color: "#a1a1aa",
                    fontWeight: 500,
                  }}
                >
                  {edu.period}
                </span>
              </div>
            ))}
          </div>

          {/* Languages */}
          <div style={{ marginTop: "2rem" }}>
            <p
              style={{
                fontSize: "0.7rem",
                fontWeight: 700,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "#a1a1aa",
                marginBottom: "1rem",
              }}
            >
              Languages
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
              {personal.languages.map((lang) => (
                <div
                  key={lang.name}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "0.6rem 1rem",
                    border: "1px solid #f4f4f5",
                    borderRadius: 8,
                    background: "#fff",
                  }}
                >
                  <span
                    style={{ fontSize: "0.85rem", fontWeight: 600 }}
                  >
                    {lang.name}
                  </span>
                  <span
                    style={{
                      fontSize: "0.65rem",
                      color: "#71717a",
                      fontWeight: 500,
                    }}
                  >
                    {lang.level}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Certificates */}
        <div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              marginBottom: "1.5rem",
            }}
          >
            <AwardIcon size={18} />
            <h3
              style={{
                fontSize: "0.8rem",
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
              }}
            >
              Certificates
            </h3>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {certificates.map((cert, i) => (
              <div
                key={i}
                style={{
                  border: "1px solid #f4f4f5",
                  borderRadius: 12,
                  padding: "1.25rem",
                  background: "#fff",
                  transition: "border-color 0.3s",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.borderColor = "#d4d4d8")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.borderColor = "#f4f4f5")
                }
              >
                <p
                  style={{
                    fontSize: "0.95rem",
                    fontWeight: 700,
                    marginBottom: "0.3rem",
                  }}
                >
                  {cert.title}
                </p>
                <p
                  style={{
                    fontSize: "0.8rem",
                    color: "#71717a",
                    marginBottom: "0.4rem",
                  }}
                >
                  {cert.issuer}
                </p>
                <span
                  style={{
                    fontSize: "0.65rem",
                    color: "#a1a1aa",
                    fontWeight: 500,
                  }}
                >
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
