import React from "react";
import { Sun, Moon } from "lucide-react";
import { useDarkModeStore } from "../store/useDarkMode";
import { motion } from "motion/react";

const DarkModeButton = () => {
  const darkMode = useDarkModeStore((state) => state.darkMode);
  const toggleDarkMode = useDarkModeStore((state) => state.toggleDarkMode);

  return (
    <button
      onClick={toggleDarkMode}
      className={`border p-2 rounded text-primary-light dark:text-primary-dark dark:border-gray-700`}
    >
      {darkMode ? <Moon /> : <Sun />}
    </button>
  );
};

const Navbar = () => {
  const darkMode = useDarkModeStore((state) => state.darkMode);

  return (
    <nav
      className={`p-5 fixed top-0 left-0 w-full flex justify-between border-b z-50 bg-slate-50 dark:bg-slate-950 dark:border-gray-800`}
    >
      <div className="flex items-center gap-2">
        <div
          className={`font-bold ${
            darkMode ? "text-primary-dark" : "text-primary-light"
          }`}
        >
          Ayush Soni
        </div>
        <div
          className={`text-sm ${
            darkMode ? "text-slate-300" : "text-slate-700"
          }`}
        >
          | Software Developer
        </div>
      </div>
      <DarkModeButton />
    </nav>
  );
};

export default Navbar;
