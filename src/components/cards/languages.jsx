import { GlowingEffect } from "../ui/glowing-effect";
import { motion } from "motion/react";

import TypescriptIcon from "../../assets/typescript.svg";
import JavascriptIcon from "../../assets/javascript.svg";
import ReactIcon from "../../assets/react.svg";
import NextJSIcon from "../../assets/nextjs.svg";
import TailwindIcon from "../../assets/tailwind.svg";
import ViteIcon from "../../assets/vitejs.svg";
import AstroIcon from "../../assets/astro.svg";
import GoIcon from "../../assets/go.svg";
import NodeIcon from "../../assets/nodejs.svg";
import ExpressIcon from "../../assets/express.svg";
import MongoDBIcon from "../../assets/mongodb.svg";
import WebpackIcon from "../../assets/webpack.svg";
import PostgresIcon from "../../assets/postgres.svg";
import LinuxIcon from "../../assets/linux.svg";
import GinIcon from "../../assets/gin.svg";
import HtmlIcon from "../../assets/html.svg";
import CssIcon from "../../assets/css.svg";
import DockerIcon from "../../assets/docker.svg";
import JestIcon from "../../assets/jest.svg";

import Tag from "../Tag";

const frontendLanguages = [
  { link: "https://www.typescriptlang.org", imageUrl: TypescriptIcon },
  {
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    imageUrl: JavascriptIcon,
  },
  { link: "https://react.dev", imageUrl: ReactIcon },
  { link: "https://nextjs.org", imageUrl: NextJSIcon },
  { link: "https://tailwindcss.com", imageUrl: TailwindIcon },
  { link: "https://vitejs.dev", imageUrl: ViteIcon },
  { link: "https://astro.build", imageUrl: AstroIcon },
  {
    link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    imageUrl: HtmlIcon,
  },
  {
    link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    imageUrl: CssIcon,
  },
  { link: "https://jestjs.io", imageUrl: JestIcon },
];

const backendLanguages = [
  { link: "https://nodejs.org", imageUrl: NodeIcon },
  { link: "https://expressjs.com", imageUrl: ExpressIcon },
  { link: "https://www.mongodb.com", imageUrl: MongoDBIcon },
  { link: "https://go.dev", imageUrl: GoIcon },
  { link: "https://gin-gonic.com", imageUrl: GinIcon },
  { link: "https://webpack.js.org", imageUrl: WebpackIcon },
  { link: "https://www.postgresql.org", imageUrl: PostgresIcon },
  { link: "https://linux.org", imageUrl: LinuxIcon },
  { link: "https://docker.com", imageUrl: DockerIcon },
];

const LanguagesCard = ({
  area,
  icon,
  title,
  initial,
  whileInView,
  transition,
}) => {
  return (
    <motion.li
      className={`min-h-[14rem] list-none ${area}`}
      initial={initial}
      whileInView={whileInView}
      transition={transition}
      viewport={{ once: true }}
    >
      <div className="relative min-h-[14rem] rounded-2xl border p-2 md:rounded-3xl md:p-3 bg-gradient-to-b from-white/60 via-slate-100/60 to-emerald-100/40 dark:from-slate-900/60 dark:via-slate-950/60 dark:to-emerald-900/30">
        <GlowingEffect
          spread={40}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
        />
        <div className="border-0.75 relative flex flex-col gap-6 overflow-visible rounded-xl p-6 md:p-6">
          <div className="relative flex gap-2">
            <div className="w-fit rounded-lg border border-gray-600 p-2">
              {icon}
            </div>
            <h3 className="-tracking-4 pt-0.5 font-sans text-xl/[1.375rem] font-semibold text-balance text-black md:text-2xl/[1.875rem] dark:text-white">
              {title}
            </h3>
          </div>
          <div className="flex flex-col md:flex-row gap-4 flex-wrap">
            <div className="border border-gray-300 dark:border-gray-700 rounded-xl p-3 bg-white/40 dark:bg-neutral-900/40 shadow-sm flex-1 min-w-[180px]">
              <p className="font-sans text-sm/[1.125rem] text-neutral-700 md:text-base/[1.375rem] dark:text-neutral-400 [&_b]:md:font-semibold [&_strong]:md:font-semibold mb-2">
                Frontend
              </p>
              <ul className="grid grid-cols-5 gap-2">
                {frontendLanguages.map((language, index) => (
                  <Tag
                    key={index}
                    size="md"
                    link={language.link}
                    imageUrl={language.imageUrl}
                  />
                ))}
              </ul>
            </div>
            <div className="border border-gray-300 dark:border-gray-700 rounded-xl p-3 bg-white/40 dark:bg-neutral-900/40 shadow-sm flex-1 min-w-[180px]">
              <p className="font-sans text-sm/[1.125rem] text-neutral-700 md:text-base/[1.375rem] dark:text-neutral-400 [&_b]:md:font-semibold [&_strong]:md:font-semibold mb-2">
                Backend
              </p>
              <ul className="grid grid-cols-5 gap-2">
                {backendLanguages.map((language, index) => (
                  <Tag
                    key={index}
                    size="md"
                    link={language.link}
                    imageUrl={language.imageUrl}
                  />
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </motion.li>
  );
};

export default LanguagesCard;
