import React, { useState } from "react";
import ThemeSwitch from "./ThemeSwitch";
import myPhoto from "../assets/image.png";

const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

const Navbar = ({ isLight, setIsLight, activeSection }) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleLinkClick = () => setMobileOpen(false);

  return (
    <header className="nav glass">
      <div className="container nav-inner">
        <div className="brand">
          <div className="logo">
            <img src={myPhoto} alt="Ahmad Ali" />
          </div>
          <strong>Ahmad Ali</strong>
        </div>

        <nav>
          <ul>
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={
                    activeSection === link.href.slice(1) ? "active" : ""
                  }
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="nav-right">
          <ThemeSwitch isLight={isLight} setIsLight={setIsLight} />

          <button
            className="menu-toggle"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            <span className={`hamburger ${mobileOpen ? "open" : ""}`}>
              <span />
              <span />
              <span />
            </span>
          </button>
        </div>
      </div>

      {mobileOpen && (
        <nav className="mobile-nav">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={activeSection === link.href.slice(1) ? "active" : ""}
              onClick={handleLinkClick}
            >
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Navbar;
