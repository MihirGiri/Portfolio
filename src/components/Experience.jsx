import { experience } from "../data";
import Reveal from "./Reveal";
import "./Section.css";
import "./Experience.css";

export default function Experience() {
  return (
    <section id="experience" className="section experience-section">

      {/* Header */}
      <Reveal className="experience__header">
        <div>
          <h2 className="experience__title">
            Internship <span>Experience</span>
          </h2>

          <p className="experience__subtitle">
            Real-world learning, real impact
          </p>
        </div>

        <div className="experience__annotation">
          <span>Learn</span>
          <span>Build</span>
          <span>Grow</span>
          <span>Repeat</span>
          <i />
        </div>
      </Reveal>


      {/* Experience List */}
      <div className="experience__list">

        {experience.map((job) => (
          <Reveal
            key={job.company}
            className="experience-card"
          >

            {/* Company Logo */}
            <div className="experience-card__image">

              {job.logo ? (
                <img
                  src={job.logo}
                  alt={`${job.company} logo`}
                />
              ) : (
                <div className="experience-card__logo-placeholder">
                  {job.company
                    .split(" ")
                    .map((word) => word[0])
                    .slice(0, 2)
                    .join("")
                    .toUpperCase()}
                </div>
              )}

            </div>


            {/* Content */}
            <div className="experience-card__content">

              <div className="experience-card__top">

                <div className="experience-card__heading">

                  <h3>
                    {job.role}
                  </h3>

                  <p className="experience-card__company">
                    {job.company}
                  </p>

                  <p className="experience-card__location">
                    ◉ {job.place}
                  </p>

                </div>

                <span className="experience-card__period">
                  {job.period}
                </span>

              </div>


              {/* Experience Points */}
              <div className="experience-card__description">

                {job.points.map((point) => (
                  <p key={point}>
                    {point}
                  </p>
                ))}

              </div>

            </div>

          </Reveal>
        ))}

      </div>


      {/* Quote */}
      <Reveal className="experience__quote">

        <span className="experience__quote-mark">
          “
        </span>

        <p>
          Every experience adds a new skill to my journey.
        </p>

        <span className="experience__quote-line" />

      </Reveal>

    </section>
  );
}