import React, { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProjectCard from "./components/ProjectCard";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import About from "./components/About";
import { PROJECTS } from "./data";

const SECTIONS = ["about", "projects", "skills", "contact"];

function App() {
  const [showTopBtn, setShowTopBtn] = useState(false);
  const [filter, setFilter] = useState("All");
  const [isLight, setIsLight] = useState(() => {
    return localStorage.getItem("theme") === "light";
  });
  const [activeSection, setActiveSection] = useState("");
  const [scrollProgress, setScrollProgress] = useState(0);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (isLight) {
      document.documentElement.classList.add("light");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.remove("light");
      localStorage.setItem("theme", "dark");
    }
  }, [isLight]);

  const filteredProjects =
    filter === "All" ? PROJECTS : PROJECTS.filter((p) => p.category === filter);

  useEffect(() => {
    const handleScroll = () => {
      setShowTopBtn(window.scrollY > 400);
      const winScroll = document.documentElement.scrollTop;
      const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      setScrollProgress(height > 0 ? (winScroll / height) * 100 : 0);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px" },
    );
    SECTIONS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("active");
        });
      },
      { threshold: 0.1 },
    );
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [filter]);

  return (
    <div className={`app-wrapper ${loaded ? "loaded" : ""}`}>
      <div
        className="scroll-progress-bar"
        style={{ width: `${scrollProgress}%` }}
      />

      <Navbar
        isLight={isLight}
        setIsLight={setIsLight}
        activeSection={activeSection}
      />
      <main className="container">
        <div className="reveal">
          <Hero />
        </div>
        <div className="reveal">
          <About />
        </div>
        <section id="projects" className="reveal">
          <div className="section-title">
            <span className="tag">Portfolio</span>
            <h2>Featured Work</h2>
          </div>
          <div
            className="filter-container"
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "1rem",
              marginBottom: "3rem",
              flexWrap: "wrap",
            }}
          >
            {["All", "Full Stack", "Templates", "APIs"].map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`filter-btn ${filter === cat ? "active" : ""}`}
                style={{
                  padding: "0.6rem 1.2rem",
                  borderRadius: "50px",
                  border: "1px solid var(--brand)",
                  background: filter === cat ? "var(--brand)" : "transparent",
                  color: filter === cat ? "#fff" : "var(--text)",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  fontSize: "0.9rem",
                  fontWeight: "500",
                }}
              >
                {cat}
              </button>
            ))}
          </div>
          <div className="grid cards">
            {filteredProjects.length > 0 ? (
              filteredProjects.map((item, index) => (
                <ProjectCard key={`${filter}-${index}`} project={item} />
              ))
            ) : (
              <p
                style={{
                  textAlign: "center",
                  gridColumn: "1/-1",
                  color: "var(--muted)",
                }}
              >
                No projects in this category yet!
              </p>
            )}
          </div>
        </section>
        <div className="reveal">
          <Skills />
        </div>
        <div className="reveal">
          <Contact />
        </div>
      </main>
      {showTopBtn && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="top-btn"
        >
          ↑
        </button>
      )}
      <footer
        style={{
          textAlign: "center",
          padding: "4rem 2rem",
          color: "var(--muted)",
        }}
      >
        © {new Date().getFullYear()} official-ahmad — Built with React
      </footer>
    </div>
  );
}

export default App;
