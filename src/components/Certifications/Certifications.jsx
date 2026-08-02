import "./Certifications.css";
import certifications from "../../data/certifications";

function Certifications() {
  return (
    <section className="certifications" id="certifications">
      <h2 className="section-title">Certifications</h2>

      <div className="certification-grid">
        {certifications.map((certificate) => (
          <div className="certificate-card" key={certificate.id}>
            <a
              className="certificate-preview"
              href={certificate.pdf}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="certificate-preview-placeholder">
                <span className="certificate-title">{certificate.title}</span>
                <span className="certificate-view-label">View certificate</span>
              </div>
            </a>

            <h3>{certificate.title}</h3>

            <h4>{certificate.issuer}</h4>

            <span>{certificate.year}</span>

            <p>{certificate.description}</p>

            <a
              className="certificate-link"
              href={certificate.pdf}
              target="_blank"
              rel="noopener noreferrer"
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