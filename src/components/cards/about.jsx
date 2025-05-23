import { motion } from "motion/react";
import { GlowingEffect } from "../ui/glowing-effect";

const AboutCard = ({
  initial,
  whileInView,
  transition,
  area,
  icon,
  title,
  description,
}) => {
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
              <h2 className="font-sans text-base/[1.5rem] text-neutral-700 md:text-lg/[1.75rem] dark:text-neutral-400 [&_b]:md:font-semibold [&_strong]:md:font-semibold">
                {description}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </motion.li>
  );
};

export default AboutCard;
