import React from "react";
import {
  SiReact,
  SiHtml5,
  SiCss,
  SiJavascript,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiGit,
  SiGithub,
} from "react-icons/si";
import { TbBrandVscode } from "react-icons/tb";

const TECH = [
  { icon: SiReact, name: "React", color: "#61DBFB" },
  { icon: SiHtml5, name: "HTML5", color: "#E34F26" },
  { icon: SiCss, name: "CSS3", color: "#1572B6" },
  { icon: SiJavascript, name: "JavaScript", color: "#F7DF1E" },
  { icon: SiNodedotjs, name: "Node.js", color: "#3C873A" },
  { icon: SiExpress, name: "Express", color: "#aaaaaa" },
  { icon: SiMongodb, name: "MongoDB", color: "#4DB33D" },
  { icon: SiGit, name: "Git", color: "#F05032" },
  { icon: SiGithub, name: "GitHub", color: "#c9c9c9" },
  { icon: TbBrandVscode, name: "VS Code", color: "#007ACC" },
];

const Skills = () => (
  <section id="skills">
    <div className="section-title">
      <span className="tag">Skills</span>
      <h2>What I use</h2>
    </div>
    <div className="skills-marquee">
      <div className="skills-track">
        {[...TECH, ...TECH].map(({ icon: Icon, name, color }, i) => (
          <div className="skill-item" key={`${name}-${i}`} style={{ "--icon-color": color }}>
            <div className="skill-icon-card">
              <Icon size={40} color={color} />
            </div>
            <span>{name}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
