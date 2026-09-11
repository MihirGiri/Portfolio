import { useEffect, useState } from "react";
import { projects } from "../data";
import Reveal from "./Reveal";
import "./Section.css";
import "./Projects.css";


/* =========================================================
   COLORFUL TECHNOLOGY ICONS
   Same visual style as Hero section
========================================================= */

const TECH_ICONS = {

  MongoDB: (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M12 2C11.8 2 11.4 5.8 11.4 8.8C11.4 13.2 8 16 8 19.5C8 21.5 9.8 23 12 23C14.2 23 16 21.5 16 19.5C16 16 12.6 13.2 12.6 8.8C12.6 5.8 12.2 2 12 2Z"
        fill="#47A248"
      />

      <path
        d="M12 2V23C12.1 23 12.4 22.8 12.6 22.5C14.8 21.2 16 19.5 16 19.5C16 16 12.6 13.2 12.6 8.8C12.6 5.8 12.2 2 12 2Z"
        fill="#3F9142"
      />
    </svg>
  ),


  "Express.js": (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
    >
      <rect
        x="2"
        y="2"
        width="20"
        height="20"
        rx="4"
        fill="#1F1F1F"
      />

      <text
        x="12"
        y="15"
        textAnchor="middle"
        fontSize="6.7"
        fontWeight="800"
        fill="#FFFFFF"
      >
        EX
      </text>
    </svg>
  ),


  "React.js": (
    <svg
      width="20"
      height="20"
      viewBox="-11.5 -11.5 23 23"
    >
      <circle
        cx="0"
        cy="0"
        r="2"
        fill="#61DAFB"
      />

      <g
        stroke="#61DAFB"
        strokeWidth="1.2"
        fill="none"
      >
        <ellipse
          rx="11"
          ry="4.2"
        />

        <ellipse
          rx="11"
          ry="4.2"
          transform="rotate(60)"
        />

        <ellipse
          rx="11"
          ry="4.2"
          transform="rotate(120)"
        />
      </g>
    </svg>
  ),


  "Node.js": (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M12 2L3 7.2v9.6L12 22l9-5.2V7.2L12 2z"
        fill="#339933"
      />

      <path
        d="M12 4.5l6.5 3.8v7.4L12 19.5 5.5 15.7V8.3L12 4.5z"
        fill="#000"
        opacity="0.16"
      />

      <text
        x="12"
        y="15.2"
        textAnchor="middle"
        fontSize="6.8"
        fontWeight="900"
        fill="#fff"
      >
        JS
      </text>
    </svg>
  ),


  "ASP.NET": (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M3 7.5L9 3.5l6 6.5 6-6.5"
        stroke="#0078D7"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <text
        x="12"
        y="20"
        textAnchor="middle"
        fontSize="5"
        fontWeight="800"
        fill="#0078D7"
      >
        ASP.NET
      </text>
    </svg>
  ),


  "C#": (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
    >
      <rect
        x="2"
        y="2"
        width="20"
        height="20"
        rx="4"
        fill="#68217A"
      />

      <text
        x="12"
        y="15"
        textAnchor="middle"
        fontSize="8"
        fontWeight="900"
        fill="#FFFFFF"
      >
        C#
      </text>
    </svg>
  ),


  "C++": (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
    >
      <polygon
        points="12,2 22,7 22,17 12,22 2,17 2,7"
        fill="#00599C"
      />

      <text
        x="12"
        y="15"
        textAnchor="middle"
        fontSize="6.5"
        fontWeight="900"
        fill="#FFFFFF"
      >
        C++
      </text>
    </svg>
  ),


  HTML: (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
    >
      <path
        d="M3 2l1.7 18L12 22l7.3-2L21 2H3z"
        fill="#E44D26"
      />

      <path
        d="M12 5v14.1l4.8-1.3.9-10.8H12z"
        fill="#F16529"
      />

      <text
        x="12"
        y="15"
        textAnchor="middle"
        fontSize="6.5"
        fontWeight="900"
        fill="#FFFFFF"
      >
        5
      </text>
    </svg>
  ),


  CSS: (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
    >
      <path
        d="M3 2l1.7 18L12 22l7.3-2L21 2H3z"
        fill="#1572B6"
      />

      <path
        d="M12 5v14l4.8-1.3.9-10.8H12z"
        fill="#33A9DC"
      />

      <text
        x="12"
        y="15"
        textAnchor="middle"
        fontSize="6"
        fontWeight="900"
        fill="#FFFFFF"
      >
        3
      </text>
    </svg>
  ),


  JavaScript: (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
    >
      <rect
        width="24"
        height="24"
        rx="4"
        fill="#F7DF1E"
      />

      <text
        x="12"
        y="17"
        textAnchor="middle"
        fontSize="9"
        fontWeight="900"
        fill="#000000"
      >
        JS
      </text>
    </svg>
  ),


  MySQL: (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M12 3C7 3 3 6.5 3 11c0 3 2 5.5 5 6.5L7 21l4.5-2.5c.2 0 .5.1.8.1 5 0 9-3.5 9-8s-4-8-9.3-8z"
        fill="#00758F"
      />

      <text
        x="12"
        y="13.5"
        textAnchor="middle"
        fontSize="5.2"
        fontWeight="900"
        fill="#F29111"
      >
        MySQL
      </text>
    </svg>
  ),


  SQL: (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
    >
      <ellipse
        cx="12"
        cy="6"
        rx="8"
        ry="3"
        fill="#0B8ACB"
      />

      <path
        d="M4 6v11c0 1.7 3.6 3 8 3s8-1.3 8-3V6"
        fill="#0877B8"
      />

      <ellipse
        cx="12"
        cy="17"
        rx="8"
        ry="3"
        fill="#0B8ACB"
      />

      <text
        x="12"
        y="9.5"
        textAnchor="middle"
        fontSize="5"
        fontWeight="900"
        fill="#FFFFFF"
      >
        SQL
      </text>
    </svg>
  ),


  Git: (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M21.6 10.9L13.1 2.4c-.8-.8-2.1-.8-2.9 0L8.5 4.1l3.7 3.7c.6-.2 1.3 0 1.7.5.5.5.6 1.2.3 1.8l3.6 3.6c.6-.3 1.3-.2 1.8.3.7.7.7 1.8 0 2.5s-1.8.7-2.5 0c-.5-.5-.6-1.3-.3-1.8l-3.3-3.3v5.2c.3.2.5.6.5 1 0 .8-.7 1.5-1.5 1.5s-1.5-.7-1.5-1.5c0-.5.2-.9.5-1.2V9.8c-.3-.2-.5-.6-.5-1 0-.6.4-1.1.9-1.4L8.1 3.7.8 11c-.8.8-.8 2.1 0 2.9l8.5 8.5c.8.8 2.1.8 2.9 0l9.4-9.4c.8-.8.8-2.1 0-2.9z"
        fill="#F05032"
      />
    </svg>
  ),


  GitHub: (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
    >
      <circle
        cx="12"
        cy="12"
        r="10"
        fill="#181717"
      />

      <path
        d="M8 18c-.5-2 1-2.5 1-4 0-1.1-.5-1.8-1.1-2.4C7.1 10.8 7.3 8.4 9 7.2c1-.7 2-.7 3-.3 1-.4 2-.4 3 .3 1.7 1.2 1.9 3.6 1.1 4.4-.6.6-1.1 1.3-1.1 2.4 0 1.5 1.5 2 1 4"
        stroke="#FFFFFF"
        strokeWidth="1.3"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  ),


  "VS Code": (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
    >
      <path
        d="M17.5 2L7 11.5 2.5 8 1 9.5l4.5 4.5L1 18.5 2.5 20l4.5-3.5L17.5 26 23 23V5l-5.5-3zM17.5 19L9.5 14l8-5v10z"
        fill="#007ACC"
        transform="scale(.92) translate(1 0)"
      />
    </svg>
  ),


  "Visual Studio": (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
    >
      <path
        d="M17.5 2L7 11.5 2.5 8 1 9.5l4.5 4.5L1 18.5 2.5 20l4.5-3.5L17.5 26 23 23V5l-5.5-3zM17.5 19L9.5 14l8-5v10z"
        fill="#68217A"
        transform="scale(.92) translate(1 0)"
      />
    </svg>
  ),


  Java: (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#E76F00"
      strokeWidth="2"
      strokeLinecap="round"
    >
      <path d="M4 17c0 0 3 1.5 8 1.5s8-1.5 8-1.5" />
      <path d="M6 20c0 0 2.5 1 6 1s6-1 6-1" />
      <path d="M9 12c.5-2 2-3 2-5 0-2-1.5-3-1.5-4 0 0 3 1 3 3.5S10.5 10 12 12" />
    </svg>
  ),

};


/* =========================================================
   PROJECTS COMPONENT
========================================================= */

export default function Projects() {

  const [selectedImage, setSelectedImage] = useState(null);


  /* =======================================================
     OPEN IMAGE
  ======================================================= */

  const openImage = (project) => {

    if (!project.image) return;

    setSelectedImage({
      src: project.image,
      name: project.name,
    });

    document.body.style.overflow = "hidden";
  };


  /* =======================================================
     CLOSE IMAGE
  ======================================================= */

  const closeImage = () => {

    setSelectedImage(null);

    document.body.style.overflow = "";
  };


  /* =======================================================
     ESCAPE
  ======================================================= */

  useEffect(() => {

    const handleKeyDown = (event) => {

      if (event.key === "Escape") {
        closeImage();
      }

    };

    window.addEventListener(
      "keydown",
      handleKeyDown
    );

    return () => {
      window.removeEventListener(
        "keydown",
        handleKeyDown
      );
    };

  }, []);


  return (
    <>
      <section
        id="projects"
        className="section projects-section"
      >

        {/* ===============================================
            HEADER
        =============================================== */}

        <Reveal className="projects__header">

          <div className="projects__heading">

            <h2 className="projects__title">
              My <span>Projects</span>
            </h2>

            <p className="projects__subtitle">
              Turning ideas into real products
            </p>

          </div>


          <div className="projects__annotation">

            <span>Code</span>
            <span>Build</span>
            <span>Deploy</span>
            <span>Repeat</span>

            <i />

          </div>

        </Reveal>


        {/* ===============================================
            PROJECT LIST
        =============================================== */}

        <div className="projects__list">

          {projects.map((project) => (

            <Reveal
              key={project.name}
              className="project-card"
            >

              {/* =========================================
                  IMAGE
              ========================================= */}

              <button
                type="button"
                className="project-card__image"
                onClick={() => openImage(project)}
                aria-label={`View ${project.name} screenshot`}
              >

                {project.image ? (

                  <img
                    src={project.image}
                    alt={`${project.name} project preview`}
                  />

                ) : (

                  <div className="project-card__image-placeholder">
                    Project Preview
                  </div>

                )}


                {project.image && (

                  <span className="project-card__zoom">
                    ⛶
                  </span>

                )}

              </button>


              {/* =========================================
                  CONTENT
              ========================================= */}

              <div className="project-card__content">

                {/* TITLE */}

                <div className="project-card__top">

                  <div className="project-card__heading">

                    <h3>
                      {project.name}
                    </h3>

                    {project.type && (
                      <p className="project-card__type">
                        {project.type}
                      </p>
                    )}

                  </div>


                  {project.period && (

                    <span className="project-card__period">
                      {project.period}
                    </span>

                  )}

                </div>


                {/* DESCRIPTION */}

                <div className="project-card__description">

                  {project.points?.map((point) => (

                    <p key={point}>
                      {point}
                    </p>

                  ))}

                </div>


                {/* =========================================
                    TECHNOLOGY STACK
                ========================================= */}

                <div className="project-card__stack">

                  {project.stack?.map((tech) => (

                    <span
                      key={tech}
                      className="project-tech"
                    >

                      <span className="project-tech__icon">
                        {TECH_ICONS[tech] || (
                          <span className="project-tech__fallback">
                            •
                          </span>
                        )}
                      </span>

                      <span className="project-tech__name">
                        {tech}
                      </span>

                    </span>

                  ))}

                </div>


                {/* =========================================
                    BUTTONS
                ========================================= */}

                <div className="project-card__actions">

                  {project.live &&
                  project.live !== "#" ? (

                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="project-btn project-btn--primary"
                    >
                      ↗ Live Demo
                    </a>

                  ) : (

                    <span
                      className="project-btn project-btn--primary project-btn--disabled"
                    >
                      ↗ Live Demo
                    </span>

                  )}


                  {project.code &&
                  project.code !== "#" ? (

                    <a
                      href={project.code}
                      target="_blank"
                      rel="noreferrer"
                      className="project-btn project-btn--secondary"
                    >
                      ◇ View Code
                    </a>

                  ) : (

                    <span
                      className="project-btn project-btn--secondary project-btn--disabled"
                    >
                      ◇ View Code
                    </span>

                  )}

                </div>

              </div>

            </Reveal>

          ))}

        </div>

      </section>


      {/* ===============================================
          FULLSCREEN PROJECT IMAGE
      =============================================== */}

      {selectedImage && (

        <div
          className="image-lightbox"
          onClick={closeImage}
          role="dialog"
          aria-modal="true"
          aria-label={`${selectedImage.name} project preview`}
        >

          <div
            className="image-lightbox__content"
            onClick={(event) =>
              event.stopPropagation()
            }
          >

            <button
              type="button"
              className="image-lightbox__close"
              onClick={closeImage}
              aria-label="Close image"
            >
              ×
            </button>


            <img
              src={selectedImage.src}
              alt={`${selectedImage.name} full preview`}
            />


            <p className="image-lightbox__title">
              {selectedImage.name}
            </p>

          </div>

        </div>

      )}

    </>
  );
}