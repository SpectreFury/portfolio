import { Timeline } from "../components/ui/timeline";
import { useDarkModeStore } from "../store/useDarkMode";
import { ExpandableCard } from "./ui/expandable-card";

const Projects = () => {
  const darkMode = useDarkModeStore((state) => state.darkMode);

  return (
    <section className="bg-slate-50 dark:bg-slate-950 py-12 md:py-20">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-gray-900 dark:text-white tracking-tight">
        Projects
      </h2>
      <ExpandableCard />
    </section>
  );
};

export default Projects;
