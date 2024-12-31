import React from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";

import { useDarkModeStore } from "./store/useDarkMode";

function App() {
  const darkMode = useDarkModeStore((state) => state.darkMode);

  return (
    <main
      className={`w-full h-screen ${darkMode ? "bg-[#1d1d1d]" : "bg-[#f1f1f1"}`}
    >
      <Navbar />
      <Hero />
      <Projects />
    </main>
  );
}

export default App;
