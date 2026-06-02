import React from "react";

const TestimonialCard = ({ testimonial }) => {
  if (!testimonial) return null;

  const getInitials = (name) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase();
  };

  const getAvatarColor = (name) => {
    const colors = [
      "#3b82f6", // Blue
      "#8b5cf6", // Purple
      "#ec4899", // Pink
      "#f59e0b", // Amber
      "#10b981", // Emerald
      "#06b6d4", // Cyan
      "#ef4444", // Red
      "#eab308", // Yellow
    ];
    const index = name.charCodeAt(0) % colors.length;
    return colors[index];
  };

  const initials = getInitials(testimonial.name);
  const avatarColor = getAvatarColor(testimonial.name);

  return (
    <article
      className="testimonial-card"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "between", // Elements ko evenly push karega
        height: "280px", // Fixed compact height for perfect layout symmetry
        width: "320px", // Clean standard compact width
        minWidth: "320px",
        maxWidth: "320px",
        boxSizing: "border-box",
        padding: "1.8rem",

        // Premium Glassmorphism
        background:
          "linear-gradient(135deg, rgba(255,255,255,0.06), rgba(255,255,255,0.01))",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        borderRadius: "20px",
        border: "1px solid rgba(255,255,255,0.08)",

        // Layered shadow for depth
        boxShadow: `
          0 8px 32px rgba(0, 0, 0, 0.15),
          inset 0 1px 2px rgba(255, 255, 255, 0.15)
        `,

        overflow: "hidden",
        transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
        position: "relative",
        cursor: "pointer",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-6px)";
        e.currentTarget.style.boxShadow = `
          0 16px 36px rgba(0, 0, 0, 0.3),
          inset 0 1px 3px rgba(255, 255, 255, 0.25),
          0 0 15px ${avatarColor}30
        `;
        e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.18)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = `
          0 8px 32px rgba(0, 0, 0, 0.15),
          inset 0 1px 2px rgba(255, 255, 255, 0.15)
        `;
        e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.08)";
      }}
    >
      {/* Decorative Gradient Glow */}
      <div
        style={{
          position: "absolute",
          top: "-50px",
          right: "-50px",
          width: "130px",
          height: "130px",
          borderRadius: "50%",
          background: `radial-gradient(circle, ${avatarColor}, transparent)`,
          filter: "blur(40px)",
          opacity: 0.12,
          pointerEvents: "none",
        }}
      />

      {/* Quote Icon */}
      <div
        style={{
          fontSize: "3rem",
          fontFamily: "Georgia, serif",
          color: "rgba(255, 255, 255, 0.15)",
          position: "absolute",
          top: "-10px",
          left: "15px",
          lineHeight: "1",
          pointerEvents: "none",
          userSelect: "none",
        }}
      >
        "
      </div>

      {/* Review Text Container with Auto-Clamp and Scroll hide */}
      <div
        style={{
          flex: "1 1 auto",
          overflowY: "auto",
          scrollbarWidth: "none", // Hide scrollbar for Firefox
          msOverflowStyle: "none", // Hide scrollbar for IE/Edge
          marginBottom: "1rem",
          position: "relative",
          zIndex: 1,
        }}
        className="hide-scrollbar"
      >
        <p
          style={{
            fontSize: "0.9rem",
            lineHeight: "1.6",
            color: "rgba(255, 255, 255, 0.85)",
            fontStyle: "italic",
            fontWeight: "400",
            margin: "0",
          }}
        >
          {testimonial.review}
        </p>
      </div>

      {/* Modern Subdued Divider */}
      <div
        style={{
          height: "1px",
          background:
            "linear-gradient(90deg, transparent, rgba(255,255,255,0.08), transparent)",
          marginBottom: "1rem",
          flexShrink: 0,
        }}
      />

      {/* User Info Section - Locked at the bottom for identical alignment */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "0.85rem",
          position: "relative",
          zIndex: 1,
          flexShrink: 0,
        }}
      >
        {/* Avatar Circle */}
        <div
          style={{
            width: "42px",
            height: "42px",
            borderRadius: "50%",
            background: testimonial.avatar
              ? `url(${testimonial.avatar})`
              : avatarColor,
            backgroundSize: "cover",
            backgroundPosition: "center",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
            fontSize: "0.85rem",
            fontWeight: "700",
            color: "#ffffff",
            boxShadow: `0 4px 12px rgba(0,0,0,0.2)`,
            border: "2px solid rgba(255, 255, 255, 0.15)",
          }}
        >
          {!testimonial.avatar && initials}
        </div>

        {/* Name & Designation */}
        <div style={{ flex: "1", minWidth: 0 }}>
          <h4
            style={{
              fontWeight: "600",
              fontSize: "0.9rem",
              color: "#ffffff",
              margin: "0 0 0.15rem 0",
              textOverflow: "ellipsis",
              overflow: "hidden",
              whiteSpace: "nowrap",
            }}
          >
            {testimonial.name}
          </h4>
          <p
            style={{
              fontSize: "0.75rem",
              color: "rgba(255, 255, 255, 0.45)",
              margin: "0",
              fontWeight: "500",
              textOverflow: "ellipsis",
              overflow: "hidden",
              whiteSpace: "nowrap",
            }}
          >
            {testimonial.designation}
          </p>
        </div>

        {/* GitHub Link */}
        {testimonial.github && (
          <a
            href={testimonial.github}
            target="_blank"
            rel="noopener noreferrer"
            title="View GitHub"
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              width: "32px",
              height: "32px",
              borderRadius: "8px",
              background: "rgba(255, 255, 255, 0.05)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
              color: "rgba(255, 255, 255, 0.6)",
              textDecoration: "none",
              flexShrink: 0,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "rgba(255, 255, 255, 0.12)";
              e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.4)";
              e.currentTarget.style.color = "#ffffff";
              e.currentTarget.style.transform = "scale(1.1)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "rgba(255, 255, 255, 0.05)";
              e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.1)";
              e.currentTarget.style.color = "rgba(255, 255, 255, 0.6)";
              e.currentTarget.style.transform = "scale(1)";
            }}
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="currentColor"
              style={{ pointerEvents: "none" }}
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.483 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.06.069-.06 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.137 20.162 22 16.418 22 12c0-5.523-4.477-10-10-10z"
              />
            </svg>
          </a>
        )}
      </div>
    </article>
  );
};

export default TestimonialCard;
