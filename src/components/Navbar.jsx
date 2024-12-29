import React from "react";
import { Sun, Moon } from "lucide-react";
import { useDarkModeStore } from "../store/useDarkMode";

const DarkModeButton = () => {
  const darkMode = useDarkModeStore((state) => state.darkMode);
  const toggleDarkMode = useDarkModeStore((state) => state.toggleDarkMode);

  return (
    <button onClick={toggleDarkMode}>{darkMode ? <Moon /> : <Sun />}</button>
  );
};

const Navbar = () => {
  return (
    <nav className="py-2 px-5 flex justify-between">
      <div className="flex items-center gap-2">
        <div className="font-medium">Ayush Soni</div>
        <div className="text-gray-500">| Software Developer</div>
      </div>
      <DarkModeButton />
    </nav>
  );
};

export default Navbar;
