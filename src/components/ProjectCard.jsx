import React from "react";

const ProjectCard = ({ project }) => {
  if (!project) return null;

  return (
    <article
      className="card reveal"
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        boxSizing: "border-box",
        padding: "1.5rem",
        background: "var(--bg-soft)",
        borderRadius: "20px",
        border: "1px solid var(--border)",
        overflow: "hidden",
      }}
    >
      <div
        className="thumb"
        style={{
          overflow: "hidden",
          borderRadius: "12px",
          marginBottom: "1.5rem",
          height: "180px",
          flexShrink: 0,
          background: "linear-gradient(145deg, var(--bg-soft), var(--bg))",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          border: "1px solid var(--border)",
        }}
      >
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "top",
              display: "block",
            }}
          />
        ) : (
          <div style={{ fontSize: "3rem" }}>🚀</div>
        )}
      </div>

      <div style={{ flex: "1 0 auto" }}>
        <h3
          style={{
            marginBottom: "0.75rem",
            color: "var(--text)",
            fontSize: "1.2rem",
          }}
        >
          {project.title}
        </h3>
        <p
          style={{
            fontSize: "0.9rem",
            lineHeight: "1.6",
            color: "var(--muted)",
            marginBottom: "1.25rem",
          }}
        >
          {project.desc}
        </p>
      </div>

      <div
        className="badges"
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "0.5rem",
          marginBottom: "2rem",
        }}
      >
        {project.tags &&
          project.tags.map((tag, index) => (
            <span
              key={index}
              className="tag"
              style={{
                fontSize: "0.7rem",
                padding: "4px 10px",
                borderRadius: "50px",
                background: "var(--card)",
                border: "1px solid var(--border)",
              }}
            >
              {tag}
            </span>
          ))}
      </div>

      <div style={{ marginTop: "auto", width: "100%" }}>
        <a
          href={project.link || "#"}
          target="_blank"
          rel="noopener noreferrer"
          className="project-button"
        >
          View Project
        </a>
      </div>
    </article>
  );
};

export default ProjectCard;
