import React, { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";
import { useDarkModeStore } from "../store/useDarkMode";
import { motion } from "motion/react";
import { PopupButton, PopupWidget } from "react-calendly";

const DarkModeButton = ({ showText = false }) => {
  const darkMode = useDarkModeStore((state) => state.darkMode);
  const toggleDarkMode = useDarkModeStore((state) => state.toggleDarkMode);

  return (
    <button
      onClick={toggleDarkMode}
      className={`border p-2 rounded flex items-center justify-center text-primary-light dark:text-primary-dark dark:border-gray-700 transition-colors duration-300 ${
        showText ? "w-full justify-start gap-2 px-3 py-2 h-auto min-h-0" : "w-10 h-10 aspect-square"
      }`}
    >
      {showText && (
        <span className="text-xs font-medium md:hidden">Change Dark Mode</span>
      )}
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
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  return (
    <nav
      className={`p-3 md:p-5 fixed top-0 left-0 w-full flex flex-row items-center justify-between border-b z-50 bg-slate-50 dark:bg-slate-950 dark:border-gray-800`}
    >
      <div className="flex flex-row items-center gap-2 whitespace-nowrap">
        <div className={"font-bold text-primary-light dark:text-primary-dark text-sm md:text-xl"}>
          Ayush Soni
        </div>
        <div className={"text-xs md:text-sm text-slate-700 dark:text-slate-300"}>
          | Software Developer
        </div>
      </div>
      {/* Desktop menu */}
      <div className="hidden md:flex items-center gap-4">
        <PopupButton
          url="https://calendly.com/soni-ayush-2212/30min"
          rootElement={document.getElementById("root")}
          text="Book a call"
          className="border p-2 rounded-full w-28 md:w-32 h-9 md:h-10 flex items-center justify-center text-primary-light dark:text-primary-dark dark:border-gray-700 transition-colors duration-300 text-xs md:text-base"
        />
        <DarkModeButton />
      </div>
      {/* Mobile menu button */}
      <div className="md:hidden flex items-center">
        <button
          onClick={() => setMobileMenuOpen((v) => !v)}
          aria-label="Open menu"
          className="border p-2 rounded w-10 h-10 flex items-center justify-center text-primary-light dark:text-primary-dark dark:border-gray-700 transition-colors duration-300"
        >
          <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-menu"><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="18" x2="21" y2="18" /></svg>
        </button>
        {/* Dropdown menu with overlay */}
        {isMobileMenuOpen && (
          <>
            {/* Overlay */}
            <div
              className="fixed inset-0 bg-black/40 z-40"
              onClick={() => setMobileMenuOpen(false)}
            />
            {/* Dropdown */}
            <div className="absolute top-full right-3 mt-2 w-52 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 z-50 flex flex-col py-3 px-3 gap-2 animate-fade-in backdrop-blur-md/30">
              <PopupButton
                url="https://calendly.com/soni-ayush-2212/30min"
                rootElement={document.getElementById("root")}
                text="Book a call"
                className="border p-2 rounded-lg w-full flex items-center justify-center text-primary-light dark:text-primary-dark dark:border-gray-700 transition-colors duration-300 text-xs font-semibold bg-emerald-50/60 dark:bg-emerald-900/30 hover:bg-emerald-100 dark:hover:bg-emerald-800/40 shadow-sm"
              />
              <div className="flex justify-center">
                <DarkModeButton showText={true} />
              </div>
            </div>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
