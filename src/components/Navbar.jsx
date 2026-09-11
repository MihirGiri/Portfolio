import { useEffect, useState } from "react";
import { useTheme } from "../ThemeContext";
import { profile } from "../data";
import "./Navbar.css";

const LINKS = ["Home", "About", "Skills", "Projects", "Experience", "Certificates", "Contact"];

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("Home");

  useEffect(() => {
    const sections = LINKS.map((l) => document.getElementById(l.toLowerCase())).filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const match = LINKS.find((l) => l.toLowerCase() === entry.target.id);
            if (match) setActive(match);
          }
        });
      },
      { rootMargin: "-40% 0px -50% 0px" }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const handleNav = (id) => {
    setOpen(false);
    const el = document.getElementById(id.toLowerCase());
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="nav">
      <div className="nav__inner">
        <a
          className="nav__brand"
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleNav("home");
          }}
        >
          {profile.firstName} <span>{profile.lastName}</span>
        </a>

        <nav className="nav__links">
          {LINKS.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className={active === link ? "is-active" : ""}
              onClick={(e) => {
                e.preventDefault();
                handleNav(link);
              }}
            >
              {link}
            </a>
          ))}
        </nav>

        <div className="nav__actions">
          <button
            className="nav__theme-toggle"
            onClick={toggleTheme}
            aria-label="Toggle dark and light mode"
          >
            {theme === "dark" ? (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="4" />
                <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
              </svg>
            ) : (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 1020.354 15.354z" />
              </svg>
            )}
          </button>

          <a className="nav__resume" href="/resume.pdf" download>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 3v12m0 0l-4-4m4 4l4-4M4 19h16" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Download Resume
          </a>

          <button
            className={`nav__burger ${open ? "is-open" : ""}`}
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      <div className={`nav__mobile ${open ? "is-open" : ""}`}>
        {LINKS.map((link) => (
          <a
            key={link}
            href={`#${link.toLowerCase()}`}
            onClick={(e) => {
              e.preventDefault();
              handleNav(link);
            }}
          >
            {link}
          </a>
        ))}
      </div>
    </header>
  );
}
