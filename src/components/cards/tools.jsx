import { motion } from "motion/react";
import { GlowingEffect } from "../ui/glowing-effect";

const ToolsCard = ({ initial, whileInView, transition, area, icon, title }) => {
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
              <ul className="flex flex-row flex-wrap gap-2 mt-2">
                <li className="flex items-center gap-2 px-2 py-1 rounded-md bg-white/60 dark:bg-neutral-900/60 border border-slate-200 dark:border-slate-800 shadow-sm hover:bg-emerald-50 dark:hover:bg-emerald-900/30 transition-colors w-fit text-sm">
                  <img
                    src="/src/assets/neovim.svg"
                    alt="Neovim"
                    className="h-5 w-5 rounded"
                  />
                  <span className="font-medium text-neutral-800 dark:text-neutral-200">
                    Neovim
                  </span>
                </li>
                <li className="flex items-center gap-2 px-2 py-1 rounded-md bg-white/60 dark:bg-neutral-900/60 border border-slate-200 dark:border-slate-800 shadow-sm hover:bg-emerald-50 dark:hover:bg-emerald-900/30 transition-colors w-fit text-sm">
                  <img
                    src="/src/assets/vscode.svg"
                    alt="VS Code"
                    className="h-5 w-5 rounded"
                  />
                  <span className="font-medium text-neutral-800 dark:text-neutral-200">
                    VS Code
                  </span>
                </li>
                <li className="flex items-center gap-2 px-2 py-1 rounded-md bg-white/60 dark:bg-neutral-900/60 border border-slate-200 dark:border-slate-800 shadow-sm hover:bg-emerald-50 dark:hover:bg-emerald-900/30 transition-colors w-fit text-sm">
                  <img
                    src="/src/assets/figma.svg"
                    alt="Figma"
                    className="h-5 w-5 rounded"
                  />
                  <span className="font-medium text-neutral-800 dark:text-neutral-200">
                    Figma
                  </span>
                </li>
                <li className="flex items-center gap-2 px-2 py-1 rounded-md bg-white/60 dark:bg-neutral-900/60 border border-slate-200 dark:border-slate-800 shadow-sm hover:bg-emerald-50 dark:hover:bg-emerald-900/30 transition-colors w-fit text-sm">
                  <img
                    src="/src/assets/git.svg"
                    alt="Git"
                    className="h-5 w-5 rounded"
                  />
                  <span className="font-medium text-neutral-800 dark:text-neutral-200">
                    Git
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </motion.li>
  );
};

export default ToolsCard;
