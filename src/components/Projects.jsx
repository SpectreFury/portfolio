import React from "react";
import { useDarkModeStore } from "../store/useDarkMode";

const Projects = () => {
  const darkMode = useDarkModeStore((state) => state.darkMode);

  return <section className=""></section>;
};

export default Projects;
