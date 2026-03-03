import React from "react";
import "./About.css";
const About = () => {
  return (
    <section id="about" className="reveal">
      <div className="section-title">
        <span className="tag">Introduction</span>
        <h2>About Me</h2>
      </div>

      <div className="about-grid">
        <div className="about-text">
          <p
            style={{
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              padding: "2rem",
              background: "var(--card)",
              borderRadius: "22px",
              border: "1px solid var(--border)",
              fontSize: "1.1rem",
              lineHeight: "1.8",
              color: "var(--text)",
            }}
          >
            I’m <strong>Ahmad Ali</strong> a Certified Full-Stack Web Developer
            with a focus on building scalable, responsive, and high-performance
            web applications. I primarily work with modern technologies
            including <strong>React, Node.js, Express, and MongoDB</strong>{" "}
            delivering clean and efficient solutions.
          </p>

          <p
            style={{
              fontSize: "1.1rem",
              lineHeight: "1.8",
              color: "var(--text)",
              marginTop: "1rem",
            }}
          >
            I emphasize clean, maintainable code and intuitive user experiences.
            Driven by problem-solving, I continuously refine my skills by
            exploring emerging technologies, modern frameworks, and UI/UX best
            practices.
          </p>
        </div>

        <div className="about-details">
          <div
            className="hero-card"
            style={{
              padding: "1.5rem",
              marginBottom: "1.5rem",
              borderLeft: "4px solid var(--brand)",
            }}
          >
            <h4 style={{ color: "var(--brand)", marginBottom: "0.5rem" }}>
              Education
            </h4>
            <p>
              <strong>Intermediate in Computer Science (ICS)</strong>
            </p>
            <p style={{ color: "var(--muted)", fontSize: "0.9rem" }}>
              Punjab College • 2024 – 2026
            </p>
          </div>

          <div
            className="hero-card"
            style={{
              padding: "1.5rem",
              marginBottom: "1.5rem",
              borderLeft: "4px solid #a855f7",
            }}
          >
            <h4 style={{ color: "#a855f7", marginBottom: "0.5rem" }}>
              Certification
            </h4>
            <p>
              <strong>Full-Stack Web Development Certification</strong>
            </p>
            <p style={{ color: "var(--muted)", fontSize: "0.9rem" }}>
              Ideoversity, Arfa Karim Tower, Lahore • 2025
            </p>
          </div>

          <div
            className="hero-card"
            style={{ padding: "1.5rem", borderLeft: "4px solid #22c55e" }}
          >
            <h4 style={{ color: "#22c55e", marginBottom: "0.5rem" }}>
              Current Role
            </h4>
            <p>
              <strong>Junior Web Developer / Freelancer</strong>
            </p>
            <p style={{ color: "var(--muted)", fontSize: "0.9rem" }}>
              Self-Employed • Present
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
