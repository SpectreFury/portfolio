import { Book, User, Hammer, Link } from "lucide-react";

import AboutCard from "./cards/about";
import ToolsCard from "./cards/tools";
import LinksCard from "./cards/links";
import LanguagesCard from "./cards/languages";

const Details = () => {
  return (
    <section
      id="about"
      className={`flex justify-center items-center bg-slate-50 dark:bg-slate-950`}
    >
      <ul className="max-w-6xl grid grid-cols-1 grid-rows-none gap-4 md:grid-cols-12 md:grid-rows-2 lg:gap-4 px-4 md:px-0">
        <AboutCard
          area="md:[grid-area:2/1/3/7] xl:[grid-area:1/1/3/5]"
          icon={<User className="h-4 w-4 text-black dark:text-neutral-400" />}
          title="About me"
          description="I'm a software developer based in Bhopal and I love to work on challenging problems and brainstorming solutions. I'm a really passionate person and I really do love programming, so I try my best to make things as efficient and beautiful as I can. In my free time, I enjoy making game engines and learning about OpenGL and also enjoy playing video games."
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.25 }}
        />
        <LinksCard
          area="md:[grid-area:1/1/2/7] xl:[grid-area:1/5/2/9]"
          icon={<Link className="h-4 w-4 text-black dark:text-neutral-400" />}
          title="Links"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        />

        <ToolsCard
          area="md:[grid-area:2/7/3/13] xl:[grid-area:1/9/2/13]"
          icon={<Hammer className="h-4 w-4 text-black dark:text-neutral-400" />}
          title="Tools I use"
          description=""
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
        />

        <LanguagesCard
          area="md:[grid-area:3/1/4/13] xl:[grid-area:2/5/3/13]"
          icon={<Book className="h-4 w-4 text-black dark:text-neutral-400" />}
          title="Languages and Tech Stack"
          description="I'm writing the code as I record this, no shit."
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
        />
      </ul>
    </section>
  );
};

export default Details;
