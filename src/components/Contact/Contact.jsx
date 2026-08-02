import { useState } from "react";
import "./Contact.css";

function Contact() {

  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    setMessage("Message sent successfully! ✅");

    e.target.reset();

    setTimeout(() => {
      setMessage("");
    }, 4000);
  };


  return (
    <section className="contact" id="contact">

      <h2 className="section-title">
        Contact Me
      </h2>


      <div className="contact-container">
        <div className="contact-card contact-info">
          <h3>Let's Work Together</h3>

          <p>
            I am interested in frontend development, full-stack projects, and
            creating modern web applications that feel polished and useful.
          </p>

          <div className="contact-item">
            <strong>Email:</strong>
            <span>wubalemgashaw@gmail.com</span>
          </div>

          <div className="contact-item">
            <strong>Phone:</strong>
            <span>+251 964 494 233</span>
          </div>

          <div className="contact-item">
            <strong>Location:</strong>
            <span>Wolkite, Southern Nations, Ethiopia</span>
          </div>

          <div className="social-links">
            <a
              href="https://github.com/WUBALEM844"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/wubalem-gashaw-ba4a37362/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>

        <form className="contact-card contact-form" onSubmit={handleSubmit}>

          <input
            type="text"
            placeholder="Your Name"
            required
          />


          <input
            type="email"
            placeholder="Your Email"
            required
          />


          <textarea
            placeholder="Your Message"
            rows="5"
            required
          ></textarea>



          <button type="submit">
            Send Message
          </button>


          {
            message && (
              <p className="success-message">
                {message}
              </p>
            )
          }


        </form>


      </div>


    </section>
  );
}

export default Contact;