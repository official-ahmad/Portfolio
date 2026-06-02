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
  const textColor = isLightTheme
    ? "rgba(26, 31, 46, 0.95)"
    : "rgba(255, 255, 255, 0.9)";
  const mutedColor = isLightTheme
    ? "rgba(90, 99, 112, 0.7)"
    : "rgba(255, 255, 255, 0.5)";
  const bgGradient = isLightTheme
    ? "linear-gradient(135deg, rgba(255,255,255,0.6), rgba(255,255,255,0.4))"
    : "linear-gradient(135deg, rgba(255,255,255,0.08), rgba(255,255,255,0.02))";
  const borderColor = isLightTheme
    ? "rgba(26, 31, 46, 0.1)"
    : "rgba(255, 255, 255, 0.1)";
  const shadowColor = isLightTheme
    ? "0 8px 32px rgba(0, 0, 0, 0.06), inset 0 1px 2px rgba(255, 255, 255, 0.84), 0 0 1px rgba(26, 31, 46, 0.1)"
    : "0 8px 32px rgba(0, 0, 0, 0.15), inset 0 1px 2px rgba(255, 255, 255, 0.15)";
  const quoteColor = isLightTheme
    ? "rgba(26, 31, 46, 0.12)"
    : "rgba(255, 255, 255, 0.12)";
  const dividerBg = isLightTheme
    ? "linear-gradient(90deg, transparent, rgba(26,31,46,0.08), transparent)"
    : "linear-gradient(90deg, transparent, rgba(255,255,255,0.08), transparent)";
  const githubBg = isLightTheme
    ? "rgba(26, 31, 46, 0.04)"
    : "rgba(255, 255, 255, 0.05)";
  const githubBorder = isLightTheme
    ? "rgba(26, 31, 46, 0.08)"
    : "rgba(255, 255, 255, 0.1)";
  const githubColor = isLightTheme
    ? "rgba(26, 31, 46, 0.6)"
    : "rgba(255, 255, 255, 0.6)";

  return (
    <article
      className="testimonial-card"
      style={{
        display: "flex",
        flexDirection: "column",
        // Dono side ka andruni gap maintain rakhne ke liye precise equal padding
        padding: "1.75rem",
        width: "100%",
        minWidth: "300px",
        maxWidth: "350px",
        boxSizing: "border-box",
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
        e.currentTarget.style.transform = "translateY(-6px)";
        const hoverShadow = isLightTheme
          ? "0 16px 36px rgba(0, 0, 0, 0.1), inset 0 1px 3px rgba(255, 255, 255, 1)"
          : `0 16px 36px rgba(0, 0, 0, 0.25), inset 0 1px 2px rgba(255, 255, 255, 0.2), 0 0 12px ${avatarColor}20`;
        e.currentTarget.style.boxShadow = hoverShadow;
        e.currentTarget.style.borderColor = isLightTheme
          ? "rgba(26, 31, 46, 0.15)"
          : "rgba(255, 255, 255, 0.2)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = shadowColor;
        e.currentTarget.style.borderColor = borderColor;
      }}
    >
      {/* Decorative Gradient Glow */}
      <div
        style={{
          position: "absolute",
          top: "-50px",
          right: "-50px",
          width: "140px",
          height: "140px",
          borderRadius: "50%",
          background: `radial-gradient(circle, ${avatarColor}, transparent)`,
          filter: "blur(45px)",
          opacity: isLightTheme ? 0.08 : 0.12,
          pointerEvents: "none",
        }}
      />

      {/* Quote Icon */}
      <div
        style={{
          fontSize: "3rem",
          fontFamily: "Georgia, serif",
          color: quoteColor,
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

      {/* Review Text Area - Auto wrapping without strict height forces */}
      <div style={{ position: "relative", zIndex: 1, width: "100%" }}>
        <p
          style={{
            fontSize: "0.92rem",
            lineHeight: "1.65",
            color: textColor,
            fontStyle: "italic",
            fontWeight: "400",
            margin: "0 0 1.2rem 0",
          }}
        >
          {testimonial.review}
        </p>
      </div>

      {/* Symmetric Divider */}
      <div
        style={{
          height: "1px",
          background: dividerBg,
          marginBottom: "1.2rem",
          width: "100%",
        }}
      />

      {/* User Info Section */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "0.85rem",
          position: "relative",
          zIndex: 1,
          marginTop: "auto", // Elements push down naturally
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
            boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
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
              color: textColor,
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
              width: "32px",
              height: "32px",
              borderRadius: "8px",
              background: githubBg,
              border: `1px solid ${githubBorder}`,
              transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
              color: githubColor,
              textDecoration: "none",
              flexShrink: 0,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = isLightTheme
                ? "rgba(26, 31, 46, 0.08)"
                : "rgba(255, 255, 255, 0.15)";
              e.currentTarget.style.borderColor = isLightTheme
                ? "rgba(26, 31, 46, 0.2)"
                : "rgba(255, 255, 255, 0.3)";
              e.currentTarget.style.color = isLightTheme
                ? "rgba(26, 31, 46, 0.9)"
                : "#ffffff";
              e.currentTarget.style.transform = "scale(1.08)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = githubBg;
              e.currentTarget.style.borderColor = githubBorder;
              e.currentTarget.style.color = githubColor;
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
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.002 12.002 0 0 0 24 12c0-6.63-5.37-12-12-12Z" />
            </svg>
          </a>
        )}
      </div>
    </article>
  );
};

export default TestimonialCard;
