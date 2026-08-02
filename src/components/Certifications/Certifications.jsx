import "./Certifications.css";
import certifications from "../../data/certifications";

function Certifications() {
  return (
    <section className="certifications" id="certifications">
      <h2 className="section-title">Certifications</h2>

      <div className="certification-grid">
        {certifications.map((certificate) => (
          <div className="certificate-card" key={certificate.id}>
            <iframe
              className="certificate-preview"
              src={certificate.pdf}
              title={certificate.title}
              loading="lazy"
            />

            <h3>{certificate.title}</h3>

            <h4>{certificate.issuer}</h4>

            <span>{certificate.year}</span>

            <p>{certificate.description}</p>

            <a
              className="certificate-link"
              href={certificate.pdf}
              target="_blank"
              rel="noreferrer"
            >
              Open PDF
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Certifications;