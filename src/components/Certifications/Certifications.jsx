import "./Certifications.css";
import certifications from "../../data/certifications";

function Certifications() {
  return (
    <section className="certifications" id="certifications">
      <h2 className="section-title">Certifications</h2>

      <div className="certification-grid">
        {certifications.map((certificate) => (
          <div className="certificate-card" key={certificate.id}>
            <h3>{certificate.title}</h3>

            <h4>{certificate.issuer}</h4>

            <span>{certificate.year}</span>

            <p>{certificate.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Certifications;