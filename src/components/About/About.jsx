import "./About.css";
import aboutImage from "../../assets/images/about.jpg";

function About() {
  return (
    <section className="about" id="about">
      <div className="about-container">

        <div className="about-image">
          <img src={aboutImage} alt="About Wubalem" />
        </div>

        <div className="about-content">

          <h4>About Me</h4>

          <h2>Who Am I?</h2>

          <p>
            I'm <strong>Wubalem Gashaw</strong>, an Information Technology
            student at Wolkite University with a passion for building modern,
            responsive, and user-friendly web applications.
          </p>

          <p>
            I enjoy learning new technologies and have experience with React,
            JavaScript, Node.js, Express.js, MySQL, Git, and Material UI. I
            enjoy solving real-world problems through software development.
          </p>

          <div className="about-info">

            <div className="info-card">
              <h3>Education</h3>
              <p>BSc in Information Technology</p>
              <span>Wolkite University</span>
            </div>

            <div className="info-card">
              <h3>Interests</h3>
              <p>Web Development</p>
              <span>Full Stack Development</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default About;