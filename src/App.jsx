import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

import { useDarkModeStore } from "./store/useDarkMode";
import { useEffect } from "react";
import Details from "./components/Details";
import Projects from "./components/Projects";
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
      <Details />
      <Projects />
    </main>
  );
}

export default App;
