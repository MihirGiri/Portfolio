import { useEffect, useState } from "react";
import { profile, stats } from "../data";
import heroAnim from "../assets/hero-anim.mp4";
import heroStill from "../assets/hero-still.jpg";
import "./Hero.css";

const MOBILE_FRAMES = Object.entries(
  import.meta.glob("../assets/mobile-feames/ezgif-frame-*.jpg", {
    eager: true,
    import: "default",
    query: "?url",
  }),
)
  .sort(([first], [second]) => first.localeCompare(second, undefined, { numeric: true }))
  .map(([, frame]) => frame);

function MobileFrameAnimation() {
  const [frameIndex, setFrameIndex] = useState(0);

  useEffect(() => {
    if (MOBILE_FRAMES.length < 2) return undefined;

    const frameTimer = window.setInterval(() => {
      setFrameIndex((current) => (current + 1) % MOBILE_FRAMES.length);
    }, 42);

    return () => window.clearInterval(frameTimer);
  }, []);

  return (
    <img
      className="hero__bg-mobile-frames"
      src={MOBILE_FRAMES[frameIndex]}
      alt=""
      aria-hidden="true"
    />
  );
}

const TECH_ITEMS = [
  {
    name: "React.js",
    icon: (
      <svg width="28" height="28" viewBox="-11.5 -10.23174 23 20.46348">
        <circle cx="0" cy="0" r="2.05" fill="#61dafb" />
        <g stroke="#61dafb" strokeWidth="1" fill="none">
          <ellipse rx="11" ry="4.2" />
          <ellipse rx="11" ry="4.2" transform="rotate(60)" />
          <ellipse rx="11" ry="4.2" transform="rotate(120)" />
        </g>
      </svg>
    ),
  },
  {
    name: "Node.js",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <path d="M12 2L3 7.2v9.6L12 22l9-5.2V7.2L12 2z" fill="#339933" />
        <path d="M12 4.5l6.5 3.8v7.4L12 19.5 5.5 15.7V8.3L12 4.5z" fill="#000" opacity="0.2" />
        <text x="6" y="15" fontSize="7.5" fontWeight="900" fill="#fff">JS</text>
      </svg>
    ),
  },
  {
    name: "MongoDB",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <path d="M12 2C11.8 2 11.4 5.8 11.4 8.8C11.4 13.2 8 16 8 19.5C8 21.5 9.8 23 12 23C14.2 23 16 21.5 16 19.5C16 16 12.6 13.2 12.6 8.8C12.6 5.8 12.2 2 12 2Z" fill="#47A248" />
        <path d="M12 2V23C12.1 23 12.4 22.8 12.6 22.5C14.8 21.2 16 19.5 16 19.5C16 16 12.6 13.2 12.6 8.8C12.6 5.8 12.2 2 12 2Z" fill="#3F9142" />
      </svg>
    ),
  },
  {
    name: "ASP.NET",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <path d="M3 7.5L9 3.5l6 6.5 6-6.5" stroke="#0078D7" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <text x="1" y="21" fontSize="6.5" fontWeight="bold" fill="#0078D7">ASP.NET</text>
      </svg>
    ),
  },
  {
    name: "JavaScript",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="4" fill="#F7DF1E" />
        <text x="12" y="18" fontSize="11" fontWeight="bold" fill="#000">JS</text>
      </svg>
    ),
  },
  {
    name: "Java",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#E76F00" strokeWidth="2" strokeLinecap="round">
        <path d="M4 17c0 0 3 1.5 8 1.5s8-1.5 8-1.5" />
        <path d="M6 20c0 0 2.5 1 6 1s6-1 6-1" />
        <path d="M9 12c.5-2 2-3 2-5 0-2-1.5-3-1.5-4 0 0 3 1 3 3.5S10.5 10 12 12" />
      </svg>
    ),
  },
  {
    name: "C++",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <polygon points="12,2 22,7 22,17 12,22 2,17 2,7" fill="#00599C" />
        <text x="5" y="15" fontSize="8" fontWeight="bold" fill="#fff">C++</text>
      </svg>
    ),
  },
  {
    name: "MySQL",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <path d="M12 3C7 3 3 6.5 3 11c0 3 2 5.5 5 6.5L7 21l4.5-2.5c.2 0 .5.1.8.1 5 0 9-3.5 9-8s-4-8-9.3-8z" fill="#00758F" />
        <text x="5" y="13" fontSize="6" fontWeight="bold" fill="#F29111">MySQL</text>
      </svg>
    ),
  },
  {
    name: "Git",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <path d="M21.6 10.9L13.1 2.4c-.8-.8-2.1-.8-2.9 0L8.5 4.1l3.7 3.7c.6-.2 1.3 0 1.7.5.5.5.6 1.2.3 1.8l3.6 3.6c.6-.3 1.3-.2 1.8.3.7.7.7 1.8 0 2.5s-1.8.7-2.5 0c-.5-.5-.6-1.3-.3-1.8l-3.3-3.3v5.2c.3.2.5.6.5 1 0 .8-.7 1.5-1.5 1.5s-1.5-.7-1.5-1.5c0-.5.2-.9.5-1.2V9.8c-.3-.2-.5-.6-.5-1 0-.6.4-1.1.9-1.4L8.1 3.7.8 11c-.8.8-.8 2.1 0 2.9l8.5 8.5c.8.8 2.1.8 2.9 0l9.4-9.4c.8-.8.8-2.1 0-2.9z" fill="#F05032" />
      </svg>
    ),
  },
  {
    name: "VS Code",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <path d="M17.5 2L7 11.5 2.5 8 1 9.5l4.5 4.5L1 18.5 2.5 20l4.5-3.5L17.5 26 23 23V5l-5.5-3zM17.5 19L9.5 14l8-5v10z" fill="#007ACC" />
      </svg>
    ),
  },
];

const STAT_ICONS = {
  Internships: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M8 6L2 12l6 6M16 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  "Live Projects": (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M3 7a2 2 0 012-2h4l2 2h8a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V7z" strokeLinejoin="round" />
    </svg>
  ),
  "BCA CGPA": (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M22 10L12 5 2 10l10 5 10-5z" strokeLinejoin="round" />
      <path d="M6 12v5c0 1.5 2.5 3 6 3s6-1.5 6-3v-5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  "Cloud Arcade Legend": (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2l2.9 6.3 6.9.7-5.2 4.6 1.6 6.8L12 16.9l-6.2 3.5 1.6-6.8L2.2 9l6.9-.7L12 2z" />
    </svg>
  ),
};

export default function Hero() {
  return (
    <section id="home" className="hero">
      {/* Background Video Animation */}
      <div className="hero__bg">
        <video
          className="hero__bg-video"
          src={heroAnim}
          poster={heroStill}
          autoPlay
          muted
          loop
          playsInline
        />
        <MobileFrameAnimation />
        <div className="hero__bg-overlay" />
      </div>

      <div className="hero__grid">
        <div className="hero__left hero__anim" style={{ "--d": "0s" }}>
          <p className="hero__eyebrow hero__anim" style={{ "--d": "0s" }}>
            Hello, I'm
          </p>
          <h1 className="hero__anim" style={{ "--d": "0.08s" }}>
            {profile.firstName} <span>{profile.lastName}</span>
          </h1>
          <p className="hero__role hero__anim" style={{ "--d": "0.16s" }}>
            {profile.role.split("·").join("|")}
          </p>
          <p className="hero__summary hero__anim" style={{ "--d": "0.24s" }}>
            {profile.summary}
          </p>

          <div className="hero__cta hero__anim" style={{ "--d": "0.32s" }}>
            <a
              className="btn btn--primary"
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Hire Me
            </a>
            <a
              className="btn btn--ghost"
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              View Projects
            </a>
          </div>

          <div className="hero__socials hero__anim" style={{ "--d": "0.4s" }}>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M6.94 8.5H3.56V20h3.38V8.5zM5.25 3A2.25 2.25 0 103 5.25 2.25 2.25 0 005.25 3zM20.44 13.42c0-3.47-1.85-5.09-4.32-5.09-1.99 0-2.88 1.09-3.38 1.86V8.5H9.36V20h3.38v-5.69c0-1.5.28-2.95 2.14-2.95 1.83 0 1.86 1.71 1.86 3.05V20h3.7v-6.58z" />
              </svg>
            </a>
            <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub">
               <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 .5a12 12 0 00-3.79 23.39c.6.11.82-.26.82-.58v-2.26c-3.34.73-4.04-1.42-4.04-1.42-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.74.08-.74 1.2.09 1.83 1.23 1.83 1.23 1.07 1.83 2.8 1.3 3.49.99.11-.77.42-1.3.76-1.6-2.67-.3-5.47-1.34-5.47-5.93 0-1.31.47-2.38 1.23-3.22-.12-.3-.53-1.52.12-3.18 0 0 1-.32 3.3 1.23a11.5 11.5 0 016 0c2.3-1.55 3.3-1.23 3.3-1.23.65 1.66.24 2.88.12 3.18.77.84 1.23 1.91 1.23 3.22 0 4.6-2.8 5.62-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.69.83.58A12 12 0 0012 .5z" />
              </svg>
            </a>
            <a href={`mailto:${profile.email}`} aria-label="Email">
               <svg
                width="22"
                height="22"
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
            </a>
          </div>
        </div>

        <div className="hero__photo hero__anim" style={{ "--d": "0.2s" }}>
          <span className="hero__note hero__note--top">
            Better
            <br />
            Code
            <br />
            Brighter
            <br />
            Tomorrow
          </span>
          <span className="hero__note hero__note--bottom">
            Build
            <br />
            Learn
            <br />
            Grow
            <svg className="hero__note-underline" width="90" height="16" viewBox="0 0 90 16">
              <path d="M2 9c14-10 28-8 40-2s28 4 46-4" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" />
            </svg>
          </span>
        </div>

        <div className="hero__mobile-summary-gap" aria-hidden="true" />

        <div className="hero__right hero__anim" style={{ "--d": "0.32s" }}>
          <div className="edu-badge">
            <div className="edu-badge__icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 10L12 5 2 10l10 5 10-5z" strokeLinejoin="round" />
                <path d="M6 12v5c0 1.5 2.5 3 6 3s6-1.5 6-3v-5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div>
              <p className="edu-badge__kicker">Currently Pursuing</p>
              <h4>MCA (2026 – 2028)</h4>
              <p className="edu-badge__place">Srinath University, Jamshedpur</p>
            </div>
          </div>

          <blockquote className="hero__quote">"{profile.tagline}"</blockquote>

          <div className="hero__stats">
            {stats.map((s) => (
              <div key={s.label} className="stat-card">
                <div className="stat-card__icon">{STAT_ICONS[s.label]}</div>
                <div className="stat-card__value">{s.value}</div>
                <div className="stat-card__label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Tech Stack Bar Panel */}
      <div className="hero__stack-card hero__anim" style={{ "--d": "0.4s" }}>
        <div className="hero__stack-header">
          <span className="hero__stack-title">TECH STACK</span>
        </div>
        <div className="hero__stack-grid">
          {TECH_ITEMS.map((item) => (
            <div key={item.name} className="tech-item">
              <div className="tech-item__icon">{item.icon}</div>
              <span className="tech-item__name">{item.name}</span>
            </div>
          ))}
        </div>
        <span className="hero__stack-quote">"Code Create Contribute"</span>
      </div>

      <div className="hero__scroll">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="7" y="2" width="10" height="16" rx="5" />
          <circle cx="12" cy="7" r="1.2" fill="currentColor" />
        </svg>
        Scroll Down
      </div>
    </section>
  );
}
