import "./Hero.css";
import profile from "../../assets/images/profile.png";
import { TypeAnimation } from "react-type-animation";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">

        <div className="hero-text">

          <p className="greeting">Hello, I'm 👋</p>

          <h1>Wubalem Gashaw</h1>

          <TypeAnimation
            sequence={[
              "Information Technology Student",
              2000,
              "React Developer",
              2000,
              "Frontend Developer",
              2000,
              "Full Stack Learner",
              2000,
            ]}
            wrapper="h2"
            speed={50}
            repeat={Infinity}
            className="typing"
          />

          <p className="description">
            I build responsive, modern web applications using React,
            JavaScript, Node.js, Express.js, and MySQL.
          </p>

          <div className="hero-buttons">
            <a href="/cv.pdf" className="btn primary">
              Download CV
            </a>

            <a href="#contact" className="btn secondary">
              Contact Me
            </a>
          </div>

        </div>

        <div className="hero-image">
          <img src={profile} alt="Wubalem Gashaw" />
        </div>

      </div>
    </section>
  );
}

export default Hero;