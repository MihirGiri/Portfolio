import { profile, education } from "../data";
import Reveal from "./Reveal";
import "./Section.css";
import "./About.css";

const PERSONAL_INFO = [
  {
    label: "Location",
    value: profile.location,
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },

  {
    label: "Education",
    value: "MCA (2026-2028)",
    subValue: "Srinath University",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path
          d="M22 10L12 5 2 10l10 5 10-5z"
          strokeLinejoin="round"
        />
        <path
          d="M6 12v5c0 1.5 2.5 3 6 3s6-1.5 6-3v-5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },

  {
    label: "Availability",
    value: "Open to Opportunities",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path
          d="M9 12l2 2 4-4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

const SOFT_SKILLS = [
  {
    name: "Problem Solving",
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path
          d="M16 18l6-6-6-6M8 6l-6 6 6 6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },

  {
    name: "Teamwork",
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87" />
        <path d="M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
  },

  {
    name: "Communication",
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
      </svg>
    ),
  },

  {
    name: "Quick Learner",
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path
          d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"
          strokeLinecap="round"
        />
      </svg>
    ),
  },

  {
    name: "Adaptability",
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M12 2l2.9 6.3 6.9.7-5.2 4.6 1.6 6.8L12 16.9l-6.2 3.5 1.6-6.8L2.2 9l6.9-.7L12 2z" />
      </svg>
    ),
  },
];


/* =========================================================
   TECH ICONS
========================================================= */

function ReactIcon() {
  return (
    <svg viewBox="-12 -12 24 24">
      <circle
        cx="0"
        cy="0"
        r="2.1"
        fill="#61DAFB"
      />

      <g
        stroke="#61DAFB"
        strokeWidth="1.2"
        fill="none"
      >
        <ellipse rx="11" ry="4.2" />
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
  );
}


function HtmlIcon() {
  return (
    <svg viewBox="0 0 24 24">

      <path
        d="M3 2l1.7 18L12 22l7.3-2L21 2H3z"
        fill="#E44D26"
      />

      <path
        d="M12 5v14.1l4.8-1.3.9-10.8H12z"
        fill="#F16529"
      />

      <path
        d="M7 8h10l-.3 3H10l.2 2h6.2"
        fill="none"
        stroke="#fff"
        strokeWidth="1.2"
        strokeLinecap="round"
      />

    </svg>
  );
}


function CssIcon() {
  return (
    <svg viewBox="0 0 24 24">

      <path
        d="M3 2l1.7 18L12 22l7.3-2L21 2H3z"
        fill="#1572B6"
      />

      <path
        d="M12 5v14l4.8-1.3.9-10.8H12z"
        fill="#33A9DC"
      />

      <path
        d="M7 8h10l-.3 3H10l.2 2h6.2"
        fill="none"
        stroke="#fff"
        strokeWidth="1.2"
        strokeLinecap="round"
      />

    </svg>
  );
}


function JavaScriptIcon() {
  return (
    <svg viewBox="0 0 24 24">

      <rect
        width="24"
        height="24"
        rx="3"
        fill="#F7DF1E"
      />

      <text
        x="12"
        y="17"
        textAnchor="middle"
        fontSize="9"
        fontWeight="900"
        fill="#111"
      >
        JS
      </text>

    </svg>
  );
}


function NodeIcon() {
  return (
    <svg viewBox="0 0 24 24">

      <path
        d="M12 2L3 7.2v9.6L12 22l9-5.2V7.2L12 2z"
        fill="#339933"
      />

      <path
        d="M12 4.7l6.2 3.6v7.2L12 19.1 5.8 15.5V8.3L12 4.7z"
        fill="#111"
        opacity="0.16"
      />

      <text
        x="12"
        y="15.2"
        textAnchor="middle"
        fontSize="6.5"
        fontWeight="900"
        fill="#fff"
      >
        JS
      </text>

    </svg>
  );
}


function JavaIcon() {
  return (
    <svg viewBox="0 0 24 24">

      <path
        d="M7 15.5c3 1.2 7 1.2 10 0"
        fill="none"
        stroke="#E76F00"
        strokeWidth="1.8"
        strokeLinecap="round"
      />

      <path
        d="M6.5 19c3 1.3 8 1.3 11 0"
        fill="none"
        stroke="#E76F00"
        strokeWidth="1.8"
        strokeLinecap="round"
      />

      <path
        d="M9 12c.5-1.7 2-2.7 2-4.4 0-1.5-1-2.4-1-3.4 0 0 2.7 1.1 2.7 3.5 0 2-1.5 3.2-1 4.3"
        fill="none"
        stroke="#E76F00"
        strokeWidth="1.6"
        strokeLinecap="round"
      />

    </svg>
  );
}


function MongoIcon() {
  return (
    <svg viewBox="0 0 24 24">

      <path
        d="M12 2C11.8 2 11.4 5.8 11.4 8.8C11.4 13.2 8 16 8 19.5C8 21.5 9.8 23 12 23C14.2 23 16 21.5 16 19.5C16 16 12.6 13.2 12.6 8.8C12.6 5.8 12.2 2 12 2Z"
        fill="#47A248"
      />

      <path
        d="M12 2V23C12.1 23 12.4 22.8 12.6 22.5C14.8 21.2 16 19.5 16 19.5C16 16 12.6 13.2 12.6 8.8C12.6 5.8 12.2 2 12 2Z"
        fill="#3F9142"
      />

    </svg>
  );
}


/* =========================================================
   ABOUT
========================================================= */

export default function About() {
  return (
    <section
      id="about"
      className="about-section"
    >

      <div className="about__container">

        {/* =========================================
            HEADER
        ========================================== */}

        <Reveal>

          <div className="about__header">

            <div>
              <h2 className="about__title">
                About <span>Me</span>
              </h2>

              <p className="about__subtitle">
                Know more about my journey
              </p>
            </div>

            <div className="about__header-note">
              <span>Think</span>
              <span>Build</span>
              <span>Improve</span>
              <i />
            </div>

          </div>

        </Reveal>


        {/* =========================================
            BIO + ANIMATED PERSON
        ========================================== */}

        <div className="about__hero-grid">

          {/* BIO */}

          <Reveal className="about__bio">

            <p>
              I am <strong>Mihir Giri</strong>, currently pursuing MCA
              (2026-2028) from Srinath University, Jamshedpur. I am a
              passionate and self-driven developer with a strong interest
              in Full Stack Web Development.
            </p>

            <p>
              I have hands-on experience in MERN Stack and ASP.NET through
              two internships and live deployed projects. I enjoy solving
              real-world problems, learning new technologies, and building
              impactful web applications.
            </p>

            <p>
              I am eager to contribute to a dynamic tech team as a Software
              Developer or Web Development Intern.
            </p>

          </Reveal>


          {/* =========================================
              CHARACTER
          ========================================== */}

          <Reveal className="about__photo-card">

            <div className="about__photo-frame">

              {/* Glow */}

              <div className="about__glow" />
              <div className="about__glow about__glow--small" />


              {/* Elliptical rings */}

              <div className="about__orbit about__orbit--one" />
              <div className="about__orbit about__orbit--two" />


              {/* =====================================
                  ELLIPTICAL ORBIT SYSTEM
              ====================================== */}

              <div className="about__orbit-system">

                <div className="about__tech about__tech--html">
                  <HtmlIcon />
                </div>

                <div className="about__tech about__tech--css">
                  <CssIcon />
                </div>

                <div className="about__tech about__tech--js">
                  <JavaScriptIcon />
                </div>

                <div className="about__tech about__tech--react">
                  <ReactIcon />
                </div>

                <div className="about__tech about__tech--mongo">
                  <MongoIcon />
                </div>

                <div className="about__tech about__tech--node">
                  <NodeIcon />
                </div>

                <div className="about__tech about__tech--java">
                  <JavaIcon />
                </div>

              </div>


              {/* =====================================
                  PERSON
              ====================================== */}

              <img
                className="about__person"
                src="/about/aboutme.png"
                alt="Mihir Giri"
              />


              {/* Ground glow */}

              <div className="about__ground-glow" />


              {/* Bottom label */}

              <div className="about__photo-label">

                <span>Code</span>

                <span>•</span>

                <span className="about__photo-label-accent">
                  Create
                </span>

                <span>•</span>

                <span>Grow</span>

              </div>

            </div>

          </Reveal>

        </div>


        {/* =========================================
            QUOTE
        ========================================== */}

        <Reveal className="about__quote-wrapper">

          <div className="about__quote-card">

            <span className="about__quote-marks">
              ““
            </span>

            <span className="about__quote-dash">
              —
            </span>

            <blockquote className="about__quote-text">
              "{profile.tagline}"
            </blockquote>

          </div>

        </Reveal>


        {/* =========================================
            PERSONAL INFO
        ========================================== */}

        <Reveal className="about__info-card">

          <div className="about__info-grid">

            {PERSONAL_INFO.map((item) => (

              <div
                key={item.label}
                className="info-item"
              >

                <div className="info-item__icon">
                  {item.icon}
                </div>

                <div className="info-item__content">

                  <span className="info-item__label">
                    {item.label}
                  </span>

                  <p className="info-item__value">
                    {item.value}
                  </p>

                  {item.subValue && (
                    <p className="info-item__subvalue">
                      {item.subValue}
                    </p>
                  )}

                </div>

              </div>

            ))}

          </div>

        </Reveal>


        {/* =========================================
            SOFT SKILLS
        ========================================== */}

        <Reveal className="about__skills-bar">

          <div className="about__skills-grid">

            {SOFT_SKILLS.map((skill) => (

              <div
                key={skill.name}
                className="soft-skill-item"
              >

                <div className="soft-skill-item__icon">
                  {skill.icon}
                </div>

                <span className="soft-skill-item__name">
                  {skill.name}
                </span>

              </div>

            ))}

          </div>

        </Reveal>


        {/* =========================================
            EDUCATION
        ========================================== */}

        <Reveal className="about__header about__header--spaced">

          <div>

            <h2 className="about__title">
              My <span>Education</span>
            </h2>

            <p className="about__subtitle">
              My academic journey
            </p>

          </div>

        </Reveal>


        <div className="about__timeline-container">

          <div className="about__timeline-line" />

          <div className="about__timeline-list">

            {education.map((ed) => (

              <Reveal
                key={ed.degree}
                className="edu-timeline-item"
              >

                <div className="edu-timeline-node">
                  <div className="edu-timeline-node__inner" />
                </div>


                <div className="edu-timeline-card">

                  <div className="edu-timeline-icon">

                    {ed.logo ? (

                      <img
                        src={ed.logo}
                        alt={`${ed.place} logo`}
                      />

                    ) : (

                      <svg
                        width="30"
                        height="30"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >

                        <path
                          d="M22 10L12 5 2 10l10 5 10-5z"
                          strokeLinejoin="round"
                        />

                        <path
                          d="M6 12v5c0 1.5 2.5 3 6 3s6-1.5 6-3v-5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />

                      </svg>

                    )}

                  </div>


                  <div className="edu-timeline-body">

                    <h4>
                      {ed.place}
                    </h4>

                    <p className="edu-timeline-degree">
                      {ed.degree}
                    </p>

                    <p className="edu-timeline-detail">
                      {ed.detail}
                    </p>

                  </div>


                  <div className="edu-timeline-period">
                    {ed.period}
                  </div>

                </div>

              </Reveal>

            ))}

          </div>

        </div>

      </div>
    </section>
  );
}