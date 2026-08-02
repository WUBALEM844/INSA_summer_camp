import { useEffect, useState } from "react";
import "./Footer.css";
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowUp } from "react-icons/fa";

function Footer() {
  const year = new Date().getFullYear();
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-logo">
          <h2>Wubalem Gashaw</h2>
          <p>Frontend & Full Stack Developer</p>
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

      {showBackToTop && (
        <button
          className="back-top"
          type="button"
          aria-label="Back to top"
          onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            })
          }
        >
          <FaArrowUp aria-hidden="true" />
        </button>
      )}

      <div className="footer-bottom">
        © {year} Wubalem Gashaw. All Rights Reserved.
      </div>

    </footer>
  );
}

export default Footer;