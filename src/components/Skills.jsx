import React, { useEffect, useRef, useState } from "react";
import { SKILLS } from "../data";

const Skills = () => {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" ref={sectionRef}>
      <div className="section-title">
        <span className="tag">Skills</span>
        <h2>What I use</h2>
      </div>
      <div className="skills">
        {SKILLS.map((skill, index) => (
          <div className="skill" key={index}>
            <div className="row" style={{ justifyContent: "space-between" }}>
              <strong>{skill.name}</strong>
              <span className="tag">{skill.tags}</span>
            </div>
            <div className="meter">
              <i
                style={{
                  width: visible ? skill.level : "0%",
                  display: "block",
                  height: "100%",
                  background:
                    "linear-gradient(90deg, var(--brand), var(--brand-2))",
                  transition: `width 1.2s ease ${index * 0.2}s`,
                  borderRadius: "999px",
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
