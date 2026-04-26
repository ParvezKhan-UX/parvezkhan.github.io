"use client";

import Image from "next/image";
import { personal, skills as allSkills } from "@/data/portfolio";
import { ArrowRight, MapPinIcon } from "@/components/Icons";

export default function About() {
  // Show a curated subset as mini pills in the about section
  const topTools = ["Figma", "Adobe XD", "Adobe Photoshop", "Adobe Illustrator", "Adobe Illustrator"];
  const displayTools = allSkills.filter((s) =>
    ["Figma", "Adobe XD", "Adobe Photoshop", "Adobe Illustrator", "UI Design", "UX Design"].includes(s)
  );

  return (
    <section id="about" style={{ maxWidth: 1152, margin: "0 auto", padding: "5rem 1.5rem" }}>
      {/* Header */}
      <div style={{ marginBottom: "3rem" }}>
        <p className="section-label" style={{ marginBottom: "0.5rem" }}>— BIOGRAPHY</p>
        <h2
          style={{
            fontSize: "clamp(2rem, 5vw, 3.2rem)",
            fontWeight: 800,
            letterSpacing: "-0.02em",
          }}
        >
          What I <span style={{ color: "#a1a1aa" }}>Do</span>
        </h2>
      </div>

      {/* Photo + content */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "220px 1fr",
          gap: "4rem",
          alignItems: "start",
        }}
      >
        {/* Photo */}
        <div
          style={{
            borderRadius: 16,
            overflow: "hidden",
            border: "1px solid #f4f4f5",
            aspectRatio: "4/5",
            position: "relative",
            background: "#f4f4f5",
            flexShrink: 0,
          }}
        >
          <Image
            src={personal.profileImage}
            alt={personal.nameShort}
            fill
            sizes="220px"
            style={{ objectFit: "cover" }}
            priority
          />
        </div>

        {/* Content */}
        <div>
          <p
            style={{
              fontSize: "0.6rem",
              fontWeight: 700,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "#a1a1aa",
              marginBottom: "1rem",
            }}
          >
            ● THE DIGITAL ARCHITECT
          </p>

          <h3
            style={{
              fontSize: "clamp(1.25rem, 2.5vw, 1.75rem)",
              fontWeight: 700,
              lineHeight: 1.4,
              marginBottom: "1.25rem",
              letterSpacing: "-0.01em",
            }}
          >
            Building refined{" "}
            <em style={{ fontStyle: "italic", color: "#52525b" }}>user-centered</em>{" "}
            digital products with 5+ years of experience.
          </h3>

          <p
            style={{
              fontSize: "0.9rem",
              color: "#71717a",
              lineHeight: 1.85,
              marginBottom: "2rem",
              maxWidth: 500,
            }}
          >
            {personal.bio}
          </p>

          {/* Meta grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "1.25rem",
              marginBottom: "2rem",
            }}
          >
            {[
              { label: "LOCATION", value: personal.location, icon: <MapPinIcon size={12} /> },
              { label: "STATUS", value: personal.status },
              { label: "EMAIL", value: personal.email },
              { label: "INTERESTS", value: personal.interests.join(", ") },
            ].map(({ label, value, icon }) => (
              <div key={label}>
                <p
                  style={{
                    fontSize: "0.58rem",
                    fontWeight: 700,
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    color: "#a1a1aa",
                    marginBottom: "0.3rem",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.3rem",
                  }}
                >
                  {icon}
                  {label}
                </p>
                <p
                  style={{
                    fontSize: "0.82rem",
                    fontWeight: 600,
                    color: "#000",
                    wordBreak: "break-word",
                  }}
                >
                  {value}
                </p>
              </div>
            ))}
          </div>

          {/* Tool pills */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "0.45rem",
              marginBottom: "2rem",
            }}
          >
            {displayTools.map((s) => (
              <span
                key={s}
                style={{
                  fontSize: "0.65rem",
                  fontWeight: 600,
                  letterSpacing: "0.04em",
                  padding: "0.22rem 0.65rem",
                  border: "1px solid #e4e4e7",
                  borderRadius: "9999px",
                  color: "#52525b",
                  background: "#fafafa",
                }}
              >
                {s}
              </span>
            ))}
          </div>

          <a href="#connect" className="btn-primary" style={{ display: "inline-flex" }}>
            GET IN TOUCH <ArrowRight />
          </a>
        </div>
      </div>
    </section>
  );
}
