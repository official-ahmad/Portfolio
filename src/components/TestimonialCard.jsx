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
      "#3b82f6",
      "#8b5cf6",
      "#ec4899",
      "#f59e0b",
      "#10b981",
      "#06b6d4",
      "#ef4444",
      "#eab308",
    ];
    const index = name.charCodeAt(0) % colors.length;
    return colors[index];
  };

  const initials = getInitials(testimonial.name);
  const avatarColor = getAvatarColor(testimonial.name);

  // Check if light theme
  const isLightTheme = document.documentElement.classList.contains("light");
  const textColor = isLightTheme ? "rgba(26, 31, 46, 0.95)" : "rgba(255, 255, 255, 0.9)";
  const mutedColor = isLightTheme ? "rgba(90, 99, 112, 0.7)" : "rgba(255, 255, 255, 0.5)";
  const bgGradient = isLightTheme
    ? "linear-gradient(135deg, rgba(255,255,255,0.6), rgba(255,255,255,0.4))"
    : "linear-gradient(135deg, rgba(255,255,255,0.08), rgba(255,255,255,0.02))";
  const borderColor = isLightTheme ? "rgba(26, 31, 46, 0.1)" : "rgba(255,255,255,0.1)";
  const shadowColor = isLightTheme
    ? "0 8px 32px rgba(0, 0, 0, 0.06), inset 0 1px 2px rgba(255, 255, 255, 0.8), 0 0 1px rgba(26, 31, 46, 0.1)"
    : "0 8px 32px rgba(0, 0, 0, 0.1), inset 0 1px 2px rgba(255, 255, 255, 0.2), 0 0 1px rgba(14, 165, 233, 0.2)";
  const quoteColor = isLightTheme ? "rgba(26, 31, 46, 0.15)" : "rgba(14, 165, 233, 0.3)";
  const dividerBg = isLightTheme
    ? "linear-gradient(90deg, transparent, rgba(26,31,46,0.1), transparent)"
    : "linear-gradient(90deg, transparent, rgba(255,255,255,0.15), transparent)";
  const githubBg = isLightTheme ? "rgba(26, 31, 46, 0.04)" : "rgba(255, 255, 255, 0.08)";
  const githubBorder = isLightTheme ? "rgba(26, 31, 46, 0.08)" : "rgba(255, 255, 255, 0.12)";
  const githubColor = isLightTheme ? "rgba(26, 31, 46, 0.6)" : "rgba(255, 255, 255, 0.7)";

  return (
    <article
      className="testimonial-card"
      style={{
        display: "flex",
        flexDirection: "column",
        height: "420px",
        minWidth: "340px",
        maxWidth: "340px",
        boxSizing: "border-box",
        padding: "2rem",
        background: bgGradient,
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        borderRadius: "20px",
        border: `1px solid ${borderColor}`,
        boxShadow: shadowColor,
        overflow: "hidden",
        transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
        position: "relative",
        cursor: "pointer",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-8px) scale(1.02)";
        const hoverShadow = isLightTheme
          ? "0 20px 48px rgba(0, 0, 0, 0.12), inset 0 1px 4px rgba(255, 255, 255, 1), 0 0 20px rgba(26, 31, 46, 0.2)"
          : "0 20px 48px rgba(0, 0, 0, 0.25), inset 0 1px 4px rgba(255, 255, 255, 0.3), 0 0 20px rgba(14, 165, 233, 0.4)";
        e.currentTarget.style.boxShadow = hoverShadow;
        e.currentTarget.style.borderColor = isLightTheme ? "rgba(26, 31, 46, 0.15)" : "rgba(255, 255, 255, 0.2)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0) scale(1)";
        e.currentTarget.style.boxShadow = shadowColor;
        e.currentTarget.style.borderColor = borderColor;
      }}
    >
      {/* Decorative Gradient Glow */}
      <div
        style={{
          position: "absolute",
          top: "-40px",
          right: "-40px",
          width: "150px",
          height: "150px",
          borderRadius: "50%",
          background: `radial-gradient(circle, ${avatarColor}, transparent)`,
          filter: "blur(50px)",
          opacity: isLightTheme ? 0.1 : 0.15,
          pointerEvents: "none",
        }}
      />

      {/* Quote Icon */}
      <div
        style={{
          fontSize: "3.5rem",
          fontFamily: "Georgia, serif",
          color: quoteColor,
          position: "absolute",
          top: "-15px",
          left: "15px",
          lineHeight: "1",
          pointerEvents: "none",
          userSelect: "none",
        }}
      >
        "
      </div>

      {/* Review Text */}
      <p
        style={{
          fontSize: "0.95rem",
          lineHeight: "1.75",
          color: textColor,
          marginBottom: "1.8rem",
          flex: "0 0 auto",
          height: "140px",
          overflow: "hidden",
          fontStyle: "italic",
          fontWeight: "400",
          position: "relative",
          zIndex: 1,
        }}
      >
        {testimonial.review}
      </p>

      {/* Spacer */}
      <div style={{ flex: "1 1 auto" }} />

      {/* Gradient Divider */}
      <div
        style={{
          height: "1px",
          background: dividerBg,
          margin: "1.2rem 0 1.5rem 0",
        }}
      />

      {/* User Info Section */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "1rem",
          position: "relative",
          zIndex: 1,
          flex: "0 0 auto",
        }}
      >
        {/* Avatar Circle */}
        <div
          style={{
            width: "48px",
            height: "48px",
            borderRadius: "50%",
            background: testimonial.avatar ? `url(${testimonial.avatar})` : avatarColor,
            backgroundSize: "cover",
            backgroundPosition: "center",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
            fontSize: "0.95rem",
            fontWeight: "700",
            color: "#ffffff",
            boxShadow: `0 4px 16px ${avatarColor}40, inset 0 1px 2px rgba(255,255,255,0.3)`,
            border: "2px solid rgba(255, 255, 255, 0.2)",
            letterSpacing: "-0.5px",
          }}
        >
          {!testimonial.avatar && initials}
        </div>

        {/* Name & Designation */}
        <div style={{ flex: "1", minWidth: 0 }}>
          <h4
            style={{
              fontWeight: "700",
              fontSize: "0.95rem",
              color: textColor,
              margin: "0 0 0.2rem 0",
              letterSpacing: "0.2px",
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
              color: mutedColor,
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
              width: "36px",
              height: "36px",
              borderRadius: "10px",
              background: githubBg,
              border: `1px solid ${githubBorder}`,
              transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
              color: githubColor,
              textDecoration: "none",
              flexShrink: 0,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = isLightTheme
                ? "rgba(26, 31, 46, 0.12)"
                : "rgba(14, 165, 233, 0.25)";
              e.currentTarget.style.borderColor = isLightTheme
                ? "rgba(26, 31, 46, 0.3)"
                : "rgba(14, 165, 233, 0.6)";
              e.currentTarget.style.color = isLightTheme ? "rgba(26, 31, 46, 0.9)" : "#ffffff";
              e.currentTarget.style.transform = "scale(1.2) translateY(-2px)";
              e.currentTarget.style.boxShadow = isLightTheme
                ? "0 8px 20px rgba(26, 31, 46, 0.2)"
                : "0 8px 20px rgba(14, 165, 233, 0.4)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = githubBg;
              e.currentTarget.style.borderColor = githubBorder;
              e.currentTarget.style.color = githubColor;
              e.currentTarget.style.transform = "scale(1) translateY(0)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="currentColor"
              style={{ pointerEvents: "none" }}
            >
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.002 12.002 0 0 0 24 12c0-6.63-5.37-12-12-12Z" />
            </svg>
          </a>
        )}
      </div>
    </article>
  );
};

export default TestimonialCard;
