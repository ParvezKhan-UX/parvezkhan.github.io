"use client";

import { contact, personal } from "@/data/portfolio";
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
    <section
      id="connect"
      style={{ maxWidth: 1152, margin: "0 auto", padding: "5rem 1.5rem 8rem" }}
    >
      {/* Header */}
      <div style={{ marginBottom: "3rem" }}>
        <p className="section-label" style={{ marginBottom: "0.5rem" }}>
          — AVAILABLE FOR WORK
        </p>
        <h2
          style={{
            fontSize: "clamp(2.2rem, 6vw, 3.8rem)",
            fontWeight: 900,
            letterSpacing: "-0.02em",
          }}
        >
          Get In <span style={{ color: "#a1a1aa" }}>Touch</span>
        </h2>
      </div>

      {/* Intro blurb */}
      <p
        style={{
          fontSize: "0.95rem",
          color: "#71717a",
          lineHeight: 1.8,
          maxWidth: 480,
          marginBottom: "3rem",
        }}
      >
        I&apos;m always open to discussing new projects, creative ideas, or
        opportunities to be part of your vision. Feel free to reach out!
      </p>

      {/* Contact rows */}
      <div>
        {contact.map(({ id, label, value, href, type }) => (
          <a
            key={id}
            href={href}
            className="contact-row"
            target={type !== "phone" && type !== "mail" ? "_blank" : undefined}
            rel={
              type !== "phone" && type !== "mail"
                ? "noopener noreferrer"
                : undefined
            }
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "1.5rem",
              }}
            >
              <span
                style={{
                  fontSize: "0.7rem",
                  color: "#a1a1aa",
                  fontWeight: 500,
                  minWidth: 22,
                }}
              >
                {id}
              </span>
              <div>
                <p
                  style={{
                    fontSize: "0.6rem",
                    fontWeight: 700,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: "#a1a1aa",
                  }}
                >
                  {label}
                </p>
                <p
                  style={{
                    fontSize: "0.92rem",
                    fontWeight: 700,
                    color: "#000",
                  }}
                >
                  {value}
                </p>
              </div>
            </div>
            <span style={{ color: "#a1a1aa" }}>{getIcon(type)}</span>
          </a>
        ))}
      </div>
    </section>
  );
}
