import { skills } from "../data";
import Reveal from "./Reveal";
import "./Section.css";
import "./Skills.css";

/* =========================================================
   COLORFUL TECHNOLOGY ICONS
========================================================= */

const ICONS = {
  JavaScript: (
    <svg viewBox="0 0 24 24" width="30" height="30">
      <rect width="24" height="24" rx="4" fill="#F7DF1E" />
      <text
        x="12"
        y="17"
        textAnchor="middle"
        fontSize="10"
        fontWeight="900"
        fill="#111"
      >
        JS
      </text>
    </svg>
  ),

  Java: (
    <svg viewBox="0 0 24 24" width="30" height="30">
      <path
        d="M5 17c2 1 4.5 1.5 7 1.5S17 18 19 17"
        stroke="#E76F00"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M7 20c2 0.8 3.5 1 5 1s3-.2 5-1"
        stroke="#E76F00"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M9 12c.5-2 2.2-2.8 2.2-4.8 0-1.7-1.2-2.8-1.2-3.7 0 0 2.8 1.2 2.8 3.4 0 2.2-1.8 3.6-1.2 5.1"
        stroke="#E76F00"
        strokeWidth="1.8"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  ),

  "C++": (
    <svg viewBox="0 0 24 24" width="30" height="30">
      <polygon
        points="12,2 22,7 22,17 12,22 2,17 2,7"
        fill="#00599C"
      />
      <text
        x="12"
        y="15"
        textAnchor="middle"
        fontSize="7"
        fontWeight="900"
        fill="#fff"
      >
        C++
      </text>
    </svg>
  ),

  "C#": (
    <svg viewBox="0 0 24 24" width="30" height="30">
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
        y="15.5"
        textAnchor="middle"
        fontSize="8"
        fontWeight="900"
        fill="#fff"
      >
        C#
      </text>
    </svg>
  ),

  "React.js": (
    <svg
      viewBox="-12 -12 24 24"
      width="32"
      height="32"
    >
      <circle
        cx="0"
        cy="0"
        r="2.2"
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
  ),

  HTML: (
    <svg viewBox="0 0 24 24" width="30" height="30">
      <path
        d="M3 2l1.7 18L12 22l7.3-2L21 2H3z"
        fill="#E44D26"
      />
      <path
        d="M12 5v14.1l4.8-1.3.9-10.8H12z"
        fill="#F16529"
      />
      <path
        d="M6.7 7h10.7l-.3 3H9.8l.2 2h7.1l-.5 5.8-3.6 1"
        fill="none"
        stroke="#fff"
        strokeWidth="1.3"
      />
    </svg>
  ),

  HTML5: (
    <svg viewBox="0 0 24 24" width="30" height="30">
      <path
        d="M3 2l1.7 18L12 22l7.3-2L21 2H3z"
        fill="#E44D26"
      />
      <path
        d="M12 5v14.1l4.8-1.3.9-10.8H12z"
        fill="#F16529"
      />
      <path
        d="M6.7 7h10.7l-.3 3H9.8l.2 2h7.1l-.5 5.8-3.6 1"
        fill="none"
        stroke="#fff"
        strokeWidth="1.3"
      />
    </svg>
  ),

  CSS: (
    <svg viewBox="0 0 24 24" width="30" height="30">
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
        fontSize="7"
        fontWeight="900"
        fill="#fff"
      >
        CSS
      </text>
    </svg>
  ),

  CSS3: (
    <svg viewBox="0 0 24 24" width="30" height="30">
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
        fontSize="7"
        fontWeight="900"
        fill="#fff"
      >
        CSS
      </text>
    </svg>
  ),

  "Node.js": (
    <svg viewBox="0 0 24 24" width="30" height="30">
      <path
        d="M12 2L3 7.2v9.6L12 22l9-5.2V7.2L12 2z"
        fill="#339933"
      />
      <path
        d="M12 4.5l6.5 3.8v7.4L12 19.5 5.5 15.7V8.3L12 4.5z"
        fill="#000"
        opacity=".18"
      />
      <text
        x="12"
        y="15.2"
        textAnchor="middle"
        fontSize="7"
        fontWeight="900"
        fill="#fff"
      >
        JS
      </text>
    </svg>
  ),

  "Express.js": (
    <svg viewBox="0 0 24 24" width="30" height="30">
      <rect
        x="2"
        y="2"
        width="20"
        height="20"
        rx="4"
        fill="#222"
      />
      <text
        x="12"
        y="14.5"
        textAnchor="middle"
        fontSize="7"
        fontWeight="800"
        fill="#fff"
      >
        EX
      </text>
    </svg>
  ),

  "ASP.NET": (
    <svg viewBox="0 0 24 24" width="30" height="30">
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
        fontSize="5.3"
        fontWeight="800"
        fill="#0078D7"
      >
        ASP.NET
      </text>
    </svg>
  ),

  MongoDB: (
    <svg viewBox="0 0 24 24" width="30" height="30">
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

  MySQL: (
    <svg viewBox="0 0 24 24" width="30" height="30">
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
    <svg viewBox="0 0 24 24" width="30" height="30">
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
        fill="#fff"
      >
        SQL
      </text>
    </svg>
  ),

  Git: (
    <svg viewBox="0 0 24 24" width="30" height="30">
      <path
        d="M21.6 10.9L13.1 2.4c-.8-.8-2.1-.8-2.9 0L8.5 4.1l3.7 3.7c.6-.2 1.3 0 1.7.5.5.5.6 1.2.3 1.8l3.6 3.6c.6-.3 1.3-.2 1.8.3.7.7.7 1.8 0 2.5s-1.8.7-2.5 0c-.5-.5-.6-1.3-.3-1.8l-3.3-3.3v5.2c.3.2.5.6.5 1 0 .8-.7 1.5-1.5 1.5s-1.5-.7-1.5-1.5c0-.5.2-.9.5-1.2V9.8c-.3-.2-.5-.6-.5-1 0-.6.4-1.1.9-1.4L8.1 3.7.8 11c-.8.8-.8 2.1 0 2.9l8.5 8.5c.8.8 2.1.8 2.9 0l9.4-9.4c.8-.8.8-2.1 0-2.9z"
        fill="#F05032"
      />
    </svg>
  ),

  GitHub: (
    <svg viewBox="0 0 24 24" width="30" height="30">
      <circle
        cx="12"
        cy="12"
        r="10"
        fill="#181717"
      />
      <path
        d="M8 18c-.5-2 1-2.5 1-4 0-1.1-.5-1.8-1.1-2.4C7.1 10.8 7.3 8.4 9 7.2c1-.7 2-.7 3-.3 1-.4 2-.4 3 .3 1.7 1.2 1.9 3.6 1.1 4.4-.6.6-1.1 1.3-1.1 2.4 0 1.5 1.5 2 1 4"
        stroke="#fff"
        strokeWidth="1.3"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  ),

  "Visual Studio": (
    <svg viewBox="0 0 24 24" width="30" height="30">
      <path
        d="M17.5 2L7 11.5 2.5 8 1 9.5l4.5 4.5L1 18.5 2.5 20l4.5-3.5L17.5 26 23 23V5l-5.5-3zM17.5 19L9.5 14l8-5v10z"
        fill="#68217A"
        transform="scale(.92) translate(1 0)"
      />
    </svg>
  ),

  "VS Code": (
    <svg viewBox="0 0 24 24" width="30" height="30">
      <path
        d="M17.5 2L7 11.5 2.5 8 1 9.5l4.5 4.5L1 18.5 2.5 20l4.5-3.5L17.5 26 23 23V5l-5.5-3zM17.5 19L9.5 14l8-5v10z"
        fill="#007ACC"
        transform="scale(.92) translate(1 0)"
      />
    </svg>
  ),

  Render: (
    <svg viewBox="0 0 24 24" width="30" height="30">
      <path
        d="M5 6.5C5 4.6 6.6 3 8.5 3c1.5 0 2.8.9 3.3 2.2C12.4 3.9 13.8 3 15.5 3 17.4 3 19 4.6 19 6.5c0 .4-.1.8-.2 1.2 1.3.5 2.2 1.7 2.2 3.1 0 1.9-1.6 3.5-3.5 3.5H6.5C4.6 14.3 3 12.7 3 10.8c0-1.6 1.1-3 2.6-3.4-.4-.3-.6-.6-.6-.9Z"
        fill="#46E3B7"
      />
    </svg>
  ),
};


/* =========================================================
   CATEGORY NAMES
========================================================= */

const GROUP_NAMES = {
  Languages: "Programming Languages",
  "Programming Languages": "Programming Languages",

  Frontend: "Frontend Development",
  "Frontend Development": "Frontend Development",

  Backend: "Backend Development",
  "Backend Development": "Backend Development",

  Database: "Databases",
  Databases: "Databases",

  Tools: "Tools & Platforms",
  "Tools & Platforms": "Tools & Platforms",
};


/* =========================================================
   SKILLS
========================================================= */

export default function Skills() {
  const skillGroups = Object.entries(skills);

  return (
    <section
      id="skills"
      className="section section--alt skills-section"
    >
      {/* Header */}

      <Reveal className="skills__top">

        <div>
          <h2 className="skills__title">
            My <span>Skills</span>
          </h2>

          <p className="skills__subtitle">
            Technologies I work with
          </p>
        </div>


        <div className="skills__annotation">
          <span>Skills</span>
          <span>Build</span>
          <span>Opportunities</span>
          <i />
        </div>

      </Reveal>


      {/* Skills */}

      <div className="skills__grid">

        {skillGroups.map(([group, items], index) => (

          <Reveal
            key={group}
            className={`skills__card ${
              index === skillGroups.length - 1
                ? "skills__card--wide"
                : ""
            }`}
          >

            <h4>
              {GROUP_NAMES[group] || group}
            </h4>


            <div className="skills__items">

              {items.map((item) => (

                <div
                  className="skill__item"
                  key={item}
                >

                  <div className="skill__icon">
                    {ICONS[item] || (
                      <svg
                        viewBox="0 0 24 24"
                        width="30"
                        height="30"
                      >
                        <circle
                          cx="12"
                          cy="12"
                          r="9"
                          fill="var(--accent)"
                        />
                      </svg>
                    )}
                  </div>


                  <span>
                    {item}
                  </span>

                </div>

              ))}

            </div>

          </Reveal>

        ))}

      </div>


      {/* Quote */}

      <Reveal className="skills__quote">

        <span className="quote quote--left">
          “
        </span>

        <p>
          The more you learn, the more you can create.
        </p>

        <span className="quote quote--right">
          ”
        </span>

      </Reveal>

    </section>
  );
}