import {
  useLayoutEffect,
  useState,
} from "react";

import LoadingScreen from "./components/LoadingScreen";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Certificates from "./components/Certificates";
import Contact from "./components/Contact";
import Footer from "./components/Footer";


function getInitialTheme() {
  const savedTheme =
    localStorage.getItem("theme");

  if (
    savedTheme === "light" ||
    savedTheme === "dark"
  ) {
    return savedTheme;
  }

  return window.matchMedia(
    "(prefers-color-scheme: dark)"
  ).matches
    ? "dark"
    : "light";
}


export default function App() {
  const [loading, setLoading] = useState(true);

  const [theme] = useState(
    getInitialTheme
  );


  /* Apply theme before paint */
  useLayoutEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      theme
    );
  }, [theme]);


  /* Follow system only when no manual choice exists */
  useLayoutEffect(() => {
    const mediaQuery =
      window.matchMedia(
        "(prefers-color-scheme: dark)"
      );

    const handleSystemChange = () => {
      const savedTheme =
        localStorage.getItem("theme");

      if (
        savedTheme === "light" ||
        savedTheme === "dark"
      ) {
        return;
      }

      document.documentElement.setAttribute(
        "data-theme",
        mediaQuery.matches
          ? "dark"
          : "light"
      );
    };

    mediaQuery.addEventListener(
      "change",
      handleSystemChange
    );

    return () => {
      mediaQuery.removeEventListener(
        "change",
        handleSystemChange
      );
    };
  }, []);


  if (loading) {
    return (
      <LoadingScreen
        onFinish={() => setLoading(false)}
      />
    );
  }


  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Certificates />
      <Contact />
      <Footer />
    </>
  );
}