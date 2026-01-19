import React from "react";
import ThemeSwitch from "./ThemeSwitch";

const Navbar = ({ isLight, setIsLight }) => {
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
        <ThemeSwitch isLight={isLight} setIsLight={setIsLight} />
      </div>
    </header>
  );
};

export default Navbar;
