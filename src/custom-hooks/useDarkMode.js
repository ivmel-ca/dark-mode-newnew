import { useState, useEffect } from "react";

/*
 * This custom hook creates an instance of
 * the dark-mode flag in the local storage
 * as well as in the state of this hook so
 * it can be scalable
 */

export const useDarkMode = () => {
  // check local storage for already existing value
  const lsDarkThemeValue =
    JSON.parse(localStorage.getItem("darkTheme")) || false;

  const [isDarkTheme, setDarkTheme] = useState(lsDarkThemeValue);

  useEffect(() => {
    // set dark-theme based on the value of the state
    isDarkTheme
      ? document.documentElement.classList.add("dark-mode")
      : document.documentElement.classList.remove("dark-mode");
  }, [isDarkTheme]);

  const toggleDarkTheme = () => {
    // update the value of the state along with
    // localStorage value for persistence
    setDarkTheme(!isDarkTheme);
    localStorage.setItem("darkTheme", JSON.stringify(!isDarkTheme));
  };

  return [isDarkTheme, toggleDarkTheme];
};
