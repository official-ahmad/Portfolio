import React from "react";

const ProjectCard = ({ project }) => {
  // Safety check: if project wasn't passed, don't render anything
  if (!project) return null;

  return (
    <article className="card reveal active">
      <div className="thumb" aria-hidden="true">
        {/* You can add an image or SVG here later */}
        <div
          style={{
            height: "100%",
            background:
              "linear-gradient(120deg, rgba(14,165,233,.25), rgba(99,102,241,.25))",
          }}
        ></div>
      </div>

      <h3>{project.title}</h3>
      <p>{project.desc}</p>

      <div className="badges">
        {/* The Safety Check: Only map if tags exists */}
        {project.tags &&
          project.tags.map((tag, index) => (
            <span key={index} className="tag">
              {tag}
            </span>
          ))}
      </div>
    </article>
  );
};

export default ProjectCard;
