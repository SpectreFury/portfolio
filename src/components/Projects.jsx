import { useDarkModeStore } from "../store/useDarkMode";
import { BentoGrid, BentoGridItem } from "../components/ui/bento-grid";
import GridItem from "../components/GridItem";
import { Box, Search, Settings, Sparkles, User, Hammer } from "lucide-react";

import AboutCard from "./cards/about";
import ToolsCard from "./cards/tools";

const Projects = () => {
  const darkMode = useDarkModeStore((state) => state.darkMode);

  return (
    <section
      id="about"
      className={`flex justify-center items-center bg-slate-50 dark:bg-slate-950`}
    >
      <ul className="max-w-6xl grid grid-cols-1 grid-rows-none gap-4 md:grid-cols-12 md:grid-rows-3 lg:gap-4 xl:max-h-[34rem] xl:grid-rows-2">
        <GridItem
          area="md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]"
          icon={<Box className="h-4 w-4 text-black dark:text-neutral-400" />}
          title="Do things the right way"
          description="Running out of copy so I'll write anything."
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        />

        <GridItem
          area="md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]"
          icon={
            <Settings className="h-4 w-4 text-black dark:text-neutral-400" />
          }
          title="The best AI code editor ever."
          description="Yes, it's true. I'm not even kidding. Ask my mom if you don't believe me."
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        />
        <AboutCard
          area="md:[grid-area:2/1/3/7] xl:[grid-area:1/5/3/8]"
          icon={<User className="h-4 w-4 text-black dark:text-neutral-400" />}
          title="About me"
          description="I'm a software developer based in Bhopal and I love to work on challenging problems and brainstorming solutions. I'm a really passionate person and I really do love programming, so I try my best to make things as efficient and beautiful as I can. In my free time, I enjoy making game engines and learning about OpenGL and also enjoy playing video games."
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.25 }}
        />
        <ToolsCard
          area="md:[grid-area:2/7/3/13] xl:[grid-area:1/8/2/13]"
          icon={<Hammer className="h-4 w-4 text-black dark:text-neutral-400" />}
          title="Tools I use"
          description=""
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
        />

        <GridItem
          area="md:[grid-area:3/1/4/13] xl:[grid-area:2/8/3/13]"
          icon={<Search className="h-4 w-4 text-black dark:text-neutral-400" />}
          title="Coming soon on Aceternity UI"
          description="I'm writing the code as I record this, no shit."
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
        />
      </ul>
    </section>
  );
};

export default Projects;
