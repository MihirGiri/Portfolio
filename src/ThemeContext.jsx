import {
  createContext,
  useContext,
  useEffect,
  useLayoutEffect,
  useState,
} from "react";

const ThemeContext = createContext(null);


/* =========================================================
   GET SYSTEM THEME
========================================================= */

function getSystemTheme() {
  return window.matchMedia(
    "(prefers-color-scheme: dark)"
  ).matches
    ? "dark"
    : "light";
}


/* =========================================================
   GET INITIAL THEME
========================================================= */

function getInitialTheme() {
  const savedTheme =
    localStorage.getItem("theme");

  /*
    User ne Navbar se manually theme select kiya hai.
    Us choice ko priority do.
  */

  if (
    savedTheme === "light" ||
    savedTheme === "dark"
  ) {
    return savedTheme;
  }


  /*
    Pehli visit:
    System theme use karo.
  */

  return getSystemTheme();
}


/* =========================================================
   PROVIDER
========================================================= */

export function ThemeProvider({ children }) {

  const [theme, setTheme] = useState(
    getInitialTheme
  );


  /* =======================================================
     APPLY THEME BEFORE PAINT
  ======================================================= */

  useLayoutEffect(() => {

    const root =
      document.documentElement;

    root.setAttribute(
      "data-theme",
      theme
    );

  }, [theme]);


  /* =======================================================
     SYSTEM THEME CHANGE
  ======================================================= */

  useEffect(() => {

    const mediaQuery =
      window.matchMedia(
        "(prefers-color-scheme: dark)"
      );


    const handleSystemThemeChange = () => {

      const savedTheme =
        localStorage.getItem("theme");


      /*
        User ne manually theme choose kiya hai,
        to system change usko overwrite nahi karega.
      */

      if (
        savedTheme === "light" ||
        savedTheme === "dark"
      ) {
        return;
      }


      const systemTheme =
        mediaQuery.matches
          ? "dark"
          : "light";


      setTheme(systemTheme);


      document.documentElement.setAttribute(
        "data-theme",
        systemTheme
      );

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
     TOGGLE THEME
  ======================================================= */

  const toggleTheme = () => {

    const newTheme =
      theme === "dark"
        ? "light"
        : "dark";


    /*
      React state
    */

    setTheme(newTheme);


    /*
      Apply immediately
    */

    document.documentElement.setAttribute(
      "data-theme",
      newTheme
    );


    /*
      Remember user's manual choice
    */

    localStorage.setItem(
      "theme",
      newTheme
    );

  };


  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}


/* =========================================================
   HOOK
========================================================= */

export function useTheme() {

  const context =
    useContext(ThemeContext);


  if (!context) {
    throw new Error(
      "useTheme must be used inside ThemeProvider"
    );
  }


  return context;
}