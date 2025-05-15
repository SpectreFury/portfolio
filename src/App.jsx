import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";

import { useDarkModeStore } from "./store/useDarkMode";
import { useEffect } from "react";

function App() {
  const darkMode = useDarkModeStore((state) => state.darkMode);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <main
      className={`w-full h-screen ${darkMode ? "bg-slate-950" : "bg-slate-50"}`}
    >
      <Navbar />
      <Hero />
      <Projects />
    </main>
  );
}

export default App;
