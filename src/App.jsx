import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProjectCard from "./components/ProjectCard";
import Skills from "./components/Skills";
import { PROJECTS } from "./data";

function App() {
  return (
    <>
      <Navbar />
      <main className="container">
        <Hero />

        <section id="projects">
          <div className="section-title">
            <span className="tag">Projects</span>
            <h2>Featured Work</h2>
          </div>

          <div className="grid cards">
            {PROJECTS.map((item, index) => (
              <ProjectCard key={index} project={item} />
            ))}
          </div>
        </section>

        <Skills />
      </main>

      <footer
        style={{ textAlign: "center", padding: "2rem", color: "var(--muted)" }}
      >
        © {new Date().getFullYear()} Ahmad Ali — Built with React
      </footer>
    </>
  );
}

export default App;
