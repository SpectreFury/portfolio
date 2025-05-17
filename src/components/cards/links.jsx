import { motion } from "motion/react";
import { GlowingEffect } from "../ui/glowing-effect";
import Link from "../Link";

import LinkedInIcon from "../../assets/linkedin.svg";
import GithubIcon from "../../assets/github.svg";
import XIcon from "../../assets/x.svg";
import LeetcodeIcon from "../../assets/leetcode.svg";

const links = [
  {
    text: "LinkedIn",
    url: "https://www.linkedin.com/in/ayushsoni/",
    imageUrl: LinkedInIcon,
  },
  {
    text: "GitHub",
    url: "https://github.com/SpectreFury",
    imageUrl: GithubIcon,
  },
  {
    text: "Twitter",
    url: "https://x.com/spectrefuryiwnl",
    imageUrl: XIcon,
  },
  {
    text: "Leetcode",
    url: "https://leetcode.com/u/SpectreFury",
    imageUrl: LeetcodeIcon,
  },
];

const LinksCard = ({ initial, whileInView, transition, area, icon, title }) => {
  return (
    <motion.li
      className={`min-h-[14rem] list-none ${area}`}
      initial={initial}
      whileInView={whileInView}
      transition={transition}
      viewport={{ once: true }}
    >
      <div className="relative h-full rounded-2xl border p-2 md:rounded-3xl md:p-3 bg-gradient-to-b from-white/60 via-slate-100/60 to-emerald-100/40 dark:from-slate-900/60 dark:via-slate-950/60 dark:to-emerald-900/30">
        <GlowingEffect
          spread={40}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
        />
        <div className="border-0.75 relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl p-6 md:p-6">
          <div className="relative flex flex-1 flex-col gap-3">
            <div className="w-fit rounded-lg border border-gray-600 p-2">
              {icon}
            </div>
            <div className="space-y-3">
              <h3 className="-tracking-4 pt-0.5 font-sans text-xl/[1.375rem] font-semibold text-balance text-black md:text-2xl/[1.875rem] dark:text-white">
                {title}
              </h3>
              <ul className="grid grid-cols-2 gap-2">
                {links.map((link, index) => (
                  <Link
                    key={index}
                    text={link.text}
                    link={link.url}
                    imageUrl={link.imageUrl}
                  />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </motion.li>
  );
};

export default LinksCard;
