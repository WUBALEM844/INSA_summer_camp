import "./Experience.css";
import experience from "../../data/experience";

function Experience() {
  return (
    <section className="experience" id="experience">
      <h2 className="section-title">Experience</h2>

      <div className="timeline">
        {experience.map((item) => (
          <div className="timeline-item" key={item.id}>
            <span className="timeline-date">{item.period}</span>

            <h3>{item.title}</h3>

            <h4>{item.company}</h4>

            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;