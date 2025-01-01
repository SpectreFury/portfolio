import React from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Experience from "./components/Experience";

import { useDarkModeStore } from "./store/useDarkMode";

function App() {
  const darkMode = useDarkModeStore((state) => state.darkMode);

  return (
    <main
      className={`w-full h-screen ${darkMode ? "bg-slate-950" : "bg-slate-50"}`}
    >
      <Navbar />
      <Hero />
      <Projects />
      <Experience />
    </main>
  );
}

export default App;
