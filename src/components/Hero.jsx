import React from "react";
import myPhoto from "../assets/image.png";
import "./hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-copy">
        <span className="tag">Hello! I'm Ahmad 👋</span>
        <h1>Full‑Stack Developer crafting clean, fast, and modern web apps.</h1>
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
