import React, {
  useEffect,
  useLayoutEffect,
  useMemo,
  useState,
} from "react";

import {
  FaReact,
  FaNodeJs,
  FaJava,
  FaGitAlt,
} from "react-icons/fa";

import {
  SiMongodb,
  SiJavascript,
} from "react-icons/si";

import { VscVscode } from "react-icons/vsc";

import "./LoadingScreen.css";


/* =========================================================
   PORTRAIT
========================================================= */

const PORTRAIT_IMAGE = "/about/aboutme.png";


/* =========================================================
   GET CURRENT THEME
========================================================= */

function getTheme() {
  const savedTheme = localStorage.getItem("theme");

  /*
    Navbar se manually selected theme
    saved hai to usko priority do.
  */
  if (
    savedTheme === "light" ||
    savedTheme === "dark"
  ) {
    return savedTheme;
  }


  /*
    Saved theme nahi hai,
    to system theme detect karo.
  */
  const prefersDark = window.matchMedia(
    "(prefers-color-scheme: dark)"
  ).matches;


  return prefersDark
    ? "dark"
    : "light";
}


/* =========================================================
   TECH ICONS
========================================================= */

const TECH_ICONS = [
  {
    icon: <FaReact />,
    color: "#61DAFB",
  },

  {
    icon: <SiMongodb />,
    color: "#47A248",
  },

  {
    icon: <VscVscode />,
    color: "#007ACC",
  },

  {
    icon: <FaJava />,
    color: "#E76F00",
  },

  {
    icon: <FaNodeJs />,
    color: "#339933",
  },

  {
    icon: <SiJavascript />,
    color: "#F7DF1E",
  },

  {
    icon: <FaGitAlt />,
    color: "#F05032",
  },
];


/* =========================================================
   LOADING SCREEN
========================================================= */

export default function LoadingScreen({
  onFinish,
  duration = 2200,
}) {

  const [progress, setProgress] = useState(0);

  const [bursting, setBursting] =
    useState(false);

  const [fadeOut, setFadeOut] =
    useState(false);

  const [theme, setTheme] =
    useState(() => getTheme());


  /* =======================================================
     APPLY THEME BEFORE FIRST PAINT
  ======================================================= */

  useLayoutEffect(() => {
    const root =
      document.documentElement;


    /*
      Get saved theme or system theme
    */
    const currentTheme =
      getTheme();


    /*
      Apply to <html>
    */
    root.setAttribute(
      "data-theme",
      currentTheme
    );


    /*
      Keep React state in sync
    */
    setTheme(currentTheme);


  }, []);


  /* =======================================================
     WATCH SYSTEM THEME
  ======================================================= */

  useEffect(() => {

    const mediaQuery =
      window.matchMedia(
        "(prefers-color-scheme: dark)"
      );


    const handleSystemThemeChange = () => {

      /*
        Check whether Navbar has manually
        saved a theme.
      */
      const savedTheme =
        localStorage.getItem("theme");


      /*
        Manual theme exists:
        DON'T override it.
      */
      if (
        savedTheme === "light" ||
        savedTheme === "dark"
      ) {
        return;
      }


      /*
        No manual choice:
        follow system theme.
      */
      const newTheme =
        mediaQuery.matches
          ? "dark"
          : "light";


      document.documentElement.setAttribute(
        "data-theme",
        newTheme
      );


      setTheme(newTheme);
    };


    mediaQuery.addEventListener(
      "change",
      handleSystemThemeChange
    );


    return () => {

      mediaQuery.removeEventListener(
        "change",
        handleSystemThemeChange
      );

    };

  }, []);


  /* =======================================================
     LOADING PROGRESS
  ======================================================= */

  useEffect(() => {

    const startTime =
      Date.now();


    let finishTimeout = null;

    let fadeTimeout = null;


    const interval =
      setInterval(() => {

        const elapsed =
          Date.now() - startTime;


        const percentage =
          Math.min(
            100,
            (elapsed / duration) * 100
          );


        setProgress(
          percentage
        );


        /* ================================================
           LOADING COMPLETE
        ================================================= */

        if (percentage >= 100) {

          clearInterval(
            interval
          );


          /*
            First:
            icons burst outward
          */
          setBursting(true);


          /*
            Then:
            loading screen fades
          */
          finishTimeout =
            setTimeout(() => {

              setFadeOut(true);


              /*
                After fade:
                send control back to App
              */
              fadeTimeout =
                setTimeout(() => {

                  if (onFinish) {
                    onFinish();
                  }

                }, 500);

            }, 600);
        }

      }, 16);


    /* ================================================
       CLEANUP
    ================================================= */

    return () => {

      clearInterval(
        interval
      );


      if (finishTimeout) {
        clearTimeout(
          finishTimeout
        );
      }


      if (fadeTimeout) {
        clearTimeout(
          fadeTimeout
        );
      }

    };

  }, [
    duration,
    onFinish,
  ]);


  /* =======================================================
     PARTICLES
  ======================================================= */

  const particles = useMemo(() => {

    const count =
      window.innerWidth < 480
        ? 10
        : 18;


    return Array.from(
      {
        length: count,
      },
      (_, index) => {

        return {
          id: index,

          left:
            `${Math.random() * 100}%`,

          delay:
            `${Math.random() * 4}s`,

          duration:
            `${4 + Math.random() * 4}s`,
        };

      }
    );

  }, []);


  /* =======================================================
     THEME CLASS
  ======================================================= */

  const themeClass =
    theme === "light"
      ? "loading-screen--light"
      : "loading-screen--dark";


  /* =======================================================
     RENDER
  ======================================================= */

  return (
    <div
      className={[
        "loading-screen",
        themeClass,
        fadeOut
          ? "fade-out"
          : "",
      ]
        .join(" ")
        .trim()}
    >

      {/* ===================================================
          PORTRAIT BACKGROUND
      =================================================== */}

      <div
        className="loading-portrait"
        style={{
          backgroundImage:
            `url(${PORTRAIT_IMAGE})`,
        }}
      />


      {/* ===================================================
          FLOATING PARTICLES
      =================================================== */}

      <div className="particles">

        {particles.map((particle) => (

          <span
            key={particle.id}
            className="particle"
            style={{
              left:
                particle.left,

              animationDelay:
                particle.delay,

              animationDuration:
                particle.duration,
            }}
          />

        ))}

      </div>


      {/* ===================================================
          ORBIT
      =================================================== */}

      <div className="tech-orbit">

        <div
          className={[
            "orbit-ring",
            bursting
              ? "paused"
              : "",
          ]
            .join(" ")
            .trim()}
        >

          {TECH_ICONS.map(
            (item, index) => {

              const angle =
                (360 /
                  TECH_ICONS.length) *
                index;


              return (
                <div
                  key={index}
                  className={[
                    "orbit-icon",
                    bursting
                      ? "burst"
                      : "",
                  ]
                    .join(" ")
                    .trim()}
                  style={{
                    "--angle":
                      `${angle}deg`,

                    transitionDelay:
                      bursting
                        ? `${index * 40}ms`
                        : "0ms",
                  }}
                >

                  <div
                    className="orbit-icon-inner"
                    style={{
                      color:
                        item.color,
                    }}
                  >
                    {item.icon}
                  </div>

                </div>
              );

            }
          )}

        </div>


        {/* =================================================
            CENTER CONTENT
        ================================================= */}

        <div
          className={[
            "loading-content",
            bursting
              ? "hide"
              : "",
          ]
            .join(" ")
            .trim()}
        >

          <h1 className="loading-initials">
            MG
          </h1>


          {/* Progress */}

          <div className="progress-track">

            <div
              className="progress-fill"
              style={{
                width:
                  `${progress}%`,
              }}
            />

          </div>


          {/* Caption */}

          <p className="loading-caption">
            Build · Learn · Grow
          </p>

        </div>

      </div>

    </div>
  );
}