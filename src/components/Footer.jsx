import React from "react";

import { useDarkModeStore } from "../store/useDarkMode";

const Footer = () => {
  const darkMode = useDarkModeStore((state) => state.darkMode);

  return (
    <section
      className={`w-full py-5 ${
        darkMode ? "bg-slate-950 text-white" : "bg-slate-50 text-black"
      }`}
    >
      <div className="flex justify-center">
        <div className="text-slate-500 text-sm">
          &copy; Ayush Soni. All Rights Reserved.
        </div>
      </div>
    </section>
  );
};

export default Footer;
