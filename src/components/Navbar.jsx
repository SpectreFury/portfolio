import React from "react";
import { Sun, Moon } from "lucide-react";
import { useDarkModeStore } from "../store/useDarkMode";
import { motion } from "motion/react";

const DarkModeButton = () => {
  const darkMode = useDarkModeStore((state) => state.darkMode);
  const toggleDarkMode = useDarkModeStore((state) => state.toggleDarkMode);

  return (
    <button onClick={toggleDarkMode}>{darkMode ? <Moon /> : <Sun />}</button>
  );
};

const Navbar = () => {
  const darkMode = useDarkModeStore((state) => state.darkMode);

  return (
    <motion.nav
      className={`py-5 px-5 flex justify-between w-full ${
        darkMode ? "bg-slate-200" : "bg-gray-200"
      }`}
    >
      <div className="flex items-center gap-2">
        <div className="font-medium text-slate-600">Ayush Soni</div>
        <div className="text-gray-500">| Software Developer</div>
      </div>
      <DarkModeButton />
    </motion.nav>
  );
};

export default Navbar;
