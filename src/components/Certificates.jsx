import { useEffect, useState } from "react";
import { certificates } from "../data";
import Reveal from "./Reveal";

import "./Section.css";
import "./Certificates.css";

export default function Certificates() {
  const [selectedCertificate, setSelectedCertificate] = useState(null);


  /* =========================================
     OPEN CERTIFICATE
  ========================================= */

  const openCertificate = (cert) => {
    if (!cert.image) return;

    setSelectedCertificate({
      image: cert.image,
      title: cert.title,
      issuer: cert.issuer,
    });

    document.body.style.overflow = "hidden";
  };


  /* =========================================
     CLOSE CERTIFICATE
  ========================================= */

  const closeCertificate = () => {
    setSelectedCertificate(null);
    document.body.style.overflow = "";
  };


  /* =========================================
     ESC KEY
  ========================================= */

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        closeCertificate();
      }
    };

    if (selectedCertificate) {
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedCertificate]);


  return (
    <>
      {/* =====================================
          CERTIFICATES SECTION
      ===================================== */}

      <section
        id="certificates"
        className="section certificates-section"
      >

        {/* =====================================
            HEADER
        ===================================== */}

        <Reveal className="certificates__header">

          <div>

            <h2 className="certificates__title">
              Achievements &{" "}
              <span>Certifications</span>
            </h2>

            <p className="certificates__subtitle">
              Milestones that reflect my learning journey
            </p>

          </div>


          {/* Handwritten annotation */}

          <div className="certificates__annotation">

            <span>Learn</span>
            <span>Earn</span>
            <span>Grow</span>

            <i />

          </div>

        </Reveal>


        {/* =====================================
            CERTIFICATE GRID
        ===================================== */}

        <div className="certificates__grid">

          {certificates.map((cert) => (

            <Reveal
              key={cert.title}
              className="certificate-card"
            >

              {/* =================================
                  CERTIFICATE IMAGE
              ================================= */}

              <button
                type="button"
                className="certificate-card__image"
                onClick={() => openCertificate(cert)}
                disabled={!cert.image}
                aria-label={`View ${cert.title} certificate`}
              >

                {cert.image ? (

                  <img
                    src={cert.image}
                    alt={`${cert.title} certificate`}
                  />

                ) : (

                  <div className="certificate-card__placeholder">
                    Certificate
                  </div>

                )}


                {/* Zoom icon */}

                {cert.image && (

                  <span
                    className="certificate-card__zoom"
                    aria-hidden="true"
                  >
                    ⛶
                  </span>

                )}

              </button>


              {/* =================================
                  CERTIFICATE CONTENT
              ================================= */}

              <div className="certificate-card__content">

                {/* Title */}

                <h3>
                  {cert.title}
                </h3>


                {/* Issuer */}

                <p className="certificate-card__issuer">
                  {cert.issuer}
                </p>


                {/* Date */}

                <div className="certificate-card__date">
                  <span>◉</span>
                  {cert.date}
                </div>


                {/* Detail */}

                <p className="certificate-card__detail">
                  {cert.detail}
                </p>

              </div>

            </Reveal>

          ))}

        </div>

      </section>


      {/* =====================================
          CERTIFICATE LIGHTBOX
      ===================================== */}

      {selectedCertificate && (

        <div
          className="certificate-lightbox"
          onClick={closeCertificate}
          role="dialog"
          aria-modal="true"
          aria-label={`${selectedCertificate.title} certificate preview`}
        >

          <div
            className="certificate-lightbox__content"
            onClick={(event) => event.stopPropagation()}
          >

            {/* Close */}

            <button
              type="button"
              className="certificate-lightbox__close"
              onClick={closeCertificate}
              aria-label="Close certificate"
            >
              ×
            </button>


            {/* Full certificate */}

            <img
              src={selectedCertificate.image}
              alt={`${selectedCertificate.title} full certificate`}
            />


            {/* Title */}

            <div className="certificate-lightbox__caption">

              <strong>
                {selectedCertificate.title}
              </strong>

              <span>
                {selectedCertificate.issuer}
              </span>

            </div>

          </div>

        </div>

      )}
    </>
  );
}