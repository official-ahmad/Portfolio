import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [isLight, setIsLight] = useState(false);

  // Toggle the 'light' class on the HTML tag
  useEffect(() => {
    if (isLight) {
      document.documentElement.classList.add("light");
    } else {
      document.documentElement.classList.remove("light");
    }
  }, [isLight]);

  return (
    <header className="nav glass">
      <div className="container nav-inner">
        <div className="brand">
          <div className="logo">A</div>
          <div>
            <strong>Ahmad Ali</strong>
            <br />
            <small className="tag">Full‑Stack (MERN)</small>
          </div>
        </div>
        <nav>
          <ul>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
        <button className="theme-toggle" onClick={() => setIsLight(!isLight)}>
          {isLight ? "🌙" : "☀️"}
        </button>
      </div>
    </header>
  );
};

export default Navbar;
