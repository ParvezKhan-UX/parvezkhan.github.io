"use client";

import { skills } from "@/data/portfolio";

export default function Skills() {
  return (
    <section
      id="skills"
      style={{ maxWidth: 920, margin: "0 auto", padding: "5rem 1.5rem" }}
    >
      {/* Header */}
      <div style={{ marginBottom: "3rem" }}>
        <p className="section-label" style={{ marginBottom: "0.5rem" }}>
          — INVENTORY
        </p>
        <h2
          style={{
            fontSize: "clamp(2rem, 5vw, 3.2rem)",
            fontWeight: 800,
            letterSpacing: "-0.02em",
          }}
        >
          Tech <span style={{ color: "#a1a1aa" }}>Stack</span>
        </h2>
      </div>

      {/* Skill tags */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.6rem" }}>
        {skills.map((skill) => (
          <span key={skill} className="skill-tag">
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}
