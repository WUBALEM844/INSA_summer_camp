import "./Footer.css";
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowUp } from "react-icons/fa";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-logo">
          <h2>Wubalem Gashaw</h2>
          <p>Frontend & Full Stack Developer</p>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>

          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="footer-social">
          <h3>Connect</h3>

          <a
            href="https://github.com/WUBALEM844"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub /> GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/wubalem-gashaw-ba4a37362/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin /> LinkedIn
          </a>

          <a href="mailto:wubalemgashaw@gmail.com">
            <FaEnvelope /> Email
          </a>
        </div>

      </div>

      <button
        className="back-top"
        onClick={() =>
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          })
        }
      >
        <FaArrowUp />
      </button>

      <div className="footer-bottom">
        © {year} Wubalem Gashaw. All Rights Reserved.
      </div>

    </footer>
  );
}

export default Footer;