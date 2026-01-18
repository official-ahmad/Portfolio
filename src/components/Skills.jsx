import React from "react";
import { SKILLS } from "../data"; // Make sure the path to data.js is correct

const Skills = () => {
  return (
    <section id="skills">
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
                  width: skill.level,
                  display: "block",
                  height: "100%",
                  background: "var(--brand)",
                }}
              ></i>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
