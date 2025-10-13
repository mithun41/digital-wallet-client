import React, { useEffect, useState } from "react";
import { MdDarkMode } from "react-icons/md";
import { CiLight } from "react-icons/ci";

const Theme = () => {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    const theme = darkMode ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [darkMode]);

  return (
    <div onClick={() => setDarkMode(!darkMode)}>
      {darkMode ? (
        <CiLight className="w-10 h-10 cursor-pointer" />
      ) : (
        <MdDarkMode className="w-10 h-10 cursor-pointer" />
      )}
    </div>
  );
};

export default Theme;
