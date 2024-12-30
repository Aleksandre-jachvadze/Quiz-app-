import { useEffect, useState } from "react";

type Theme = "light" | "dark";

export default function ThemeSwitcher() {
  const prefersDarkScheme = window.matchMedia(
    "(prefers-color-scheme: dark)"
  ).matches;
  // const defaultTheme = prefersDarkScheme.matches ? "dark" : "light";

  const [theme, setTheme] = useState<Theme>("light");
  const [translate, setTranslate] = useState<string>("translate(0px)");

  const sunIconLight = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        // fill="#fff"
        d="M12 1.5a.75.75 0 0 1 .75.75v1.5a.75.75 0 1 1-1.5 0v-1.5A.75.75 0 0 1 12 1.5Zm0 15a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Zm0-1.5a3 3 0 1 1 0-6 3 3 0 0 1 0 6Zm9.75-2.25a.75.75 0 1 0 0-1.5h-1.5a.75.75 0 1 0 0 1.5h1.5ZM12 19.5a.75.75 0 0 1 .75.75v1.5a.75.75 0 1 1-1.5 0v-1.5a.75.75 0 0 1 .75-.75Zm-8.25-6.75a.75.75 0 1 0 0-1.5h-1.5a.75.75 0 1 0 0 1.5h1.5Zm.969-8.031a.75.75 0 0 1 1.062 0l1.5 1.5a.751.751 0 0 1-1.062 1.062l-1.5-1.5a.75.75 0 0 1 0-1.062Zm1.062 14.562a.75.75 0 1 1-1.062-1.06l1.5-1.5a.75.75 0 1 1 1.062 1.06l-1.5 1.5Zm13.5-14.562a.75.75 0 0 0-1.062 0l-1.5 1.5a.751.751 0 0 0 1.062 1.062l1.5-1.5a.75.75 0 0 0 0-1.062Zm-1.062 14.562a.75.75 0 0 0 1.062-1.06l-1.5-1.5a.75.75 0 0 0-1.062 1.06l1.5 1.5Z"
      />
    </svg>
  );
  const moonIconLight = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        // fill="#fff"
        d="M11.775 4.522A7.5 7.5 0 1 1 4.898 16.09c2.104-.57 4.974-1.953 6.24-5.326.828-2.211.876-4.408.637-6.241ZM20.184 12a8.997 8.997 0 0 0-9.315-8.994.75.75 0 0 0-.713.888c.345 1.821.42 4.092-.424 6.342-1.2 3.201-4.203 4.26-6.115 4.606a.75.75 0 0 0-.542 1.066A9 9 0 0 0 20.184 12Z"
      />
    </svg>
  );

  function clickHandler() {
    if (theme === "light") {
      setTheme("dark");
      setTranslate("translate(100%)");
    }
    if (theme === "dark") {
      setTheme("light");
      setTranslate("translate(0px)");
    }
  }

  function lightThemeHandler() {
    setTheme("light");
    setTranslate("translate(0px)");
  }
  function darkThemeHandler() {
    setTheme("dark");
    setTranslate("translate(100%)");
  }

  useEffect(() => {
    if (prefersDarkScheme) {
      darkThemeHandler();
    }
  }, [prefersDarkScheme]);

  useEffect(() => {
    if (theme === "dark") {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [theme]);

  return (
    <div className="theme-switcher">
      <div className="theme-switcher__icon" onClick={lightThemeHandler}>
        {sunIconLight}
      </div>
      <div className="theme-switcher__track" onClick={clickHandler}>
        <div
          className="theme-switcher__thumb"
          style={{ transform: `${translate}` }}
        ></div>
      </div>
      <div className="theme-switcher__icon" onClick={darkThemeHandler}>
        {moonIconLight}
      </div>
    </div>
  );
}