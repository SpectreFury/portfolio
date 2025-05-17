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
      className={`border p-2 rounded w-10 h-10 aspect-square flex items-center justify-center text-primary-light dark:text-primary-dark dark:border-gray-700 transition-colors duration-300`}
    >
      <motion.span
        key={darkMode ? "moon" : "sun"}
        initial={{ rotate: 90, opacity: 0 }}
        animate={{ rotate: 0, opacity: 1 }}
        exit={{ rotate: -90, opacity: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        style={{ display: "inline-block" }}
      >
        {darkMode ? <Moon /> : <Sun />}
      </motion.span>
    </button>
  );
};

const Navbar = () => {
  const darkMode = useDarkModeStore((state) => state.darkMode);

  return (
    <nav
      className={`p-3 md:p-5 fixed top-0 left-0 w-full flex flex-row items-center justify-between border-b z-50 bg-slate-50 dark:bg-slate-950 dark:border-gray-800`}
    >
      <div className="flex items-center gap-2">
        <div className={`font-bold text-primary-light dark:text-primary-dark`}>
          Ayush Soni
        </div>
        <div className={`text-sm text-slate-700 dark:text-slate-300`}>
          | Software Developer
        </div>
      </div>
      <DarkModeButton />
    </nav>
  );
};

export default Navbar;
