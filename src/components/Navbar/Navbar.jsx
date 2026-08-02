import { FaMoon, FaSun } from "react-icons/fa";
import "./Navbar.css";

function Navbar({ theme, toggleTheme }) {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">
          <h2>WG.</h2>
        </div>

        <div className="nav-actions">
          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>

          <button className="theme-toggle" onClick={toggleTheme} type="button">
            {theme === "dark" ? <FaSun /> : <FaMoon />}
            <span>{theme === "dark" ? "Light" : "Dark"}</span>
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;