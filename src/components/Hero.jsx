import React, { useEffect, useState } from "react";
import myPhoto from "../assets/image.png";
import "./hero.css";

const ROLES = [
  "Full‑Stack Developer",
  "MERN Stack Developer",
  "React Developer",
  "Backend Engineer",
];

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const currentRole = ROLES[roleIndex];
    let speed = deleting ? 40 : 80;

    if (!deleting && charIndex === currentRole.length) {
      speed = 1800;
      const t = setTimeout(() => setDeleting(true), speed);
      return () => clearTimeout(t);
    }

    if (deleting && charIndex === 0) {
      setDeleting(false);
      setRoleIndex((prev) => (prev + 1) % ROLES.length);
      return;
    }

    const t = setTimeout(() => {
      setCharIndex((prev) => prev + (deleting ? -1 : 1));
    }, speed);
    return () => clearTimeout(t);
  }, [charIndex, deleting, roleIndex]);

  return (
    <section className="hero">
      <div className="hero-copy">
        <span className="tag">Hello! I'm Ahmad 👋</span>
        <h1>
          <span className="typed-text">
            {ROLES[roleIndex].substring(0, charIndex)}
          </span>
          <span className="cursor">|</span>
          <br />
          crafting clean, fast, and modern web apps.
        </h1>
        <p>
          I build products with <strong>MongoDB</strong>,{" "}
          <strong>Express</strong>, <strong>React</strong>, and{" "}
          <strong>Node.js</strong>. Passionate about performance, accessibility,
          and delightful UX.
        </p>
        <div className="meta">
          <span className="tag">Open to Internships</span>
          <span className="tag">Remote / On‑site</span>
          <span className="tag">Based in Pakistan</span>
        </div>
        <div className="actions">
          <a className="btn primary" href="#projects">
            View Projects
          </a>
          <a className="btn ghost" href="#contact">
            Contact Me
          </a>
          <a
            className="btn ghost"
            href="/resume.pdf"
            download
            title="Download Resume"
          >
            📄 Resume
          </a>
        </div>
      </div>
      <div className="hero-visual">
        <div
          className="hero-blob "
          style={{
            padding: "0",
            overflow: "hidden",
            borderRadius: "50%",
            border: "5px solid #58a6ff",
          }}
        >
          <img src={myPhoto} alt="Ahmad Ali" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
