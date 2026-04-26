"use client";

import { personal } from "@/data/portfolio";

export default function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid #f4f4f5",
        padding: "2rem 1.5rem",
        background: "#fff",
      }}
    >
      <div
        style={{
          maxWidth: 1152,
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "1rem",
        }}
      >
        <span style={{ fontSize: "0.75rem", color: "#a1a1aa" }}>
          © {new Date().getFullYear()} {personal.nameShort}. All rights reserved.
        </span>
        <div
          style={{
            display: "flex",
            gap: "1.5rem",
            alignItems: "center",
          }}
        >
          <a
            href={personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontSize: "0.72rem",
              color: "#a1a1aa",
              textDecoration: "none",
              fontWeight: 500,
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#000")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#a1a1aa")}
          >
            LinkedIn
          </a>
          <a
            href={personal.behance}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontSize: "0.72rem",
              color: "#a1a1aa",
              textDecoration: "none",
              fontWeight: 500,
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#000")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#a1a1aa")}
          >
            Behance
          </a>
          <a
            href={`mailto:${personal.email}`}
            style={{
              fontSize: "0.72rem",
              color: "#a1a1aa",
              textDecoration: "none",
              fontWeight: 500,
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#000")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#a1a1aa")}
          >
            Email
          </a>
        </div>
        <span style={{ fontSize: "0.75rem", color: "#a1a1aa" }}>
          Designed &amp; Built with ♥
        </span>
      </div>
    </footer>
  );
}
