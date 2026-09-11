import { useState } from "react";
import { profile } from "../data";
import Reveal from "./Reveal";
import "./Section.css";
import "./Contact.css";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const subject = encodeURIComponent(
      form.subject || `Portfolio inquiry from ${form.name || "a visitor"}`
    );

    const body = encodeURIComponent(
      `${form.message}\n\n— ${form.name} (${form.email})`
    );

    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact__container">

        {/* =========================================
            LEFT SIDE
        ========================================== */}

        <div className="contact__left">

          <Reveal className="contact__intro">

            <h2 className="contact__title">
              Get <span>In Touch</span>
            </h2>

            <p className="contact__subtitle">
              Let's build something amazing together
            </p>

            <p className="contact__description">
              I'm always open to discussing new opportunities,
              interesting projects, or just a chat about technology.
            </p>

          </Reveal>


          {/* Contact Details */}

          <Reveal className="contact__details">

            {/* Email */}

            <a
              href={`mailto:${profile.email}`}
              className="contact__detail"
            >
              <span className="contact__detail-icon">

                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <rect
                    x="3"
                    y="5"
                    width="18"
                    height="14"
                    rx="2"
                  />

                  <polyline points="3,7 12,13 21,7" />
                </svg>

              </span>

              <span className="contact__detail-content">
                <span className="contact__detail-label">
                  Email
                </span>

                <span className="contact__detail-value">
                  {profile.email}
                </span>
              </span>
            </a>


            {/* Location */}

            <div className="contact__detail">

              <span className="contact__detail-icon">

                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>

              </span>

              <span className="contact__detail-content">

                <span className="contact__detail-label">
                  Location
                </span>

                <span className="contact__detail-value">
                  {profile.location}
                </span>

              </span>

            </div>


            {/* LinkedIn */}

            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="contact__detail"
            >

              <span className="contact__detail-icon">

                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M6.94 8.5H3.56V20h3.38V8.5zM5.25 3A2.25 2.25 0 103 5.25 2.25 2.25 0 005.25 3zM20.44 13.42c0-3.47-1.85-5.09-4.32-5.09-1.99 0-2.88 1.09-3.38 1.86V8.5H9.36V20h3.38v-5.69c0-1.5.28-2.95 2.14-2.95 1.83 0 1.86 1.71 1.86 3.05V20h3.7v-6.58z" />
                </svg>

              </span>

              <span className="contact__detail-content">

                <span className="contact__detail-label">
                  LinkedIn
                </span>

                <span className="contact__detail-value">
                  linkedin.com/in/mihir-giri
                </span>

              </span>

            </a>


            {/* GitHub */}

            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="contact__detail"
            >

              <span className="contact__detail-icon">

                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 .5a12 12 0 00-3.79 23.39c.6.11.82-.26.82-.58v-2.26c-3.34.73-4.04-1.42-4.04-1.42-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.74.08-.74 1.2.09 1.83 1.23 1.83 1.23 1.07 1.83 2.8 1.3 3.49.99.11-.77.42-1.3.76-1.6-2.67-.3-5.47-1.34-5.47-5.93 0-1.31.47-2.38 1.23-3.22-.12-.3-.53-1.52.12-3.18 0 0 1-.32 3.3 1.23a11.5 11.5 0 016 0c2.3-1.55 3.3-1.23 3.3-1.23.65 1.66.24 2.88.12 3.18.77.84 1.23 1.91 1.23 3.22 0 4.6-2.8 5.62-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.69.83.58A12 12 0 0012 .5z" />
                </svg>

              </span>

              <span className="contact__detail-content">

                <span className="contact__detail-label">
                  GitHub
                </span>

                <span className="contact__detail-value">
                  github.com/MihirGiri
                </span>

              </span>

            </a>

          </Reveal>


          {/* Quote */}

          <Reveal className="contact__quote">

            <span className="contact__quote-mark">
              “
            </span>

            <span className="contact__quote-line">
              —
            </span>

            <p>
              Let's turn ideas into real-world solutions.
            </p>

          </Reveal>

        </div>


        {/* =========================================
            CENTER - CONTACT FORM
        ========================================== */}

        <Reveal className="contact__form-wrap">

          <form
            className="contact__form"
            onSubmit={handleSubmit}
          >

            {/* Name */}

            <label>
              Your Name

              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                required
                value={form.name}
                onChange={handleChange}
              />

            </label>


            {/* Email */}

            <label>
              Your Email

              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                required
                value={form.email}
                onChange={handleChange}
              />

            </label>


            {/* Subject */}

            <label>
              Subject

              <input
                type="text"
                name="subject"
                placeholder="Enter subject"
                value={form.subject}
                onChange={handleChange}
              />

            </label>


            {/* Message */}

            <label>
              Message

              <textarea
                name="message"
                rows="4"
                placeholder="Write your message..."
                required
                value={form.message}
                onChange={handleChange}
              />

            </label>


            {/* Submit */}

            <button
              type="submit"
              className="contact__submit"
            >

              <svg
                width="17"
                height="17"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M21.4 2.6a1.5 1.5 0 00-1.53-.35L3.2 8.48a1.5 1.5 0 00.04 2.83l6.35 2.11 2.11 6.35a1.5 1.5 0 002.83.04l6.23-16.67a1.5 1.5 0 00-.36-1.54zM11.2 12.8l-4.84-1.61 10.82-4.04-5.98 5.65zm2.61 3.91l-1.61-4.84 5.65-5.98-4.04 10.82z" />
              </svg>

              Send Message

            </button>

          </form>

        </Reveal>


        {/* =========================================
            RIGHT CHARACTER
        ========================================== */}

        <Reveal className="contact__character">

          <div className="contact__character-image">

            <img
              src="/contact/contact-character.png"
              alt="Mihir Giri"
            />

          </div>


          {/* Character Text */}

          <div className="contact__character-note">
            <span>Same</span>
            <span>Person</span>
            <span>Bigger</span>
            <span>Goals</span>
          </div>


          <div className="contact__character-name">
            <h3>
              Mihir <span>Giri</span>
            </h3>

            <p>
              Full Stack Developer
            </p>

            <i />
          </div>

        </Reveal>

      </div>
    </section>
  );
}