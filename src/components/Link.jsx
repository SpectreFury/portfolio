import React from "react";
import { motion } from "motion/react";

const Link = ({ text, link, imageUrl }) => {
  return (
    <li className="w-full">
      <motion.a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.06, boxShadow: "0 4px 16px rgba(0,0,0,0.12)" }}
        className="w-full inline-flex items-center gap-2 bg-white/20 dark:bg-neutral-800/30 rounded-xl shadow-lg px-3 py-1 min-h-[40px] min-w-[40px] border border-neutral-300 dark:border-neutral-700/40 backdrop-blur-md transition-transform duration-200 cursor-pointer hover:bg-white/30 hover:dark:bg-neutral-800/50"
        style={{
          WebkitBackdropFilter: "blur(8px)",
          backdropFilter: "blur(8px)",
        }}
      >
        <img
          src={imageUrl}
          alt="Link Icon"
          className={`w-6 h-6 object-contain rounded-md bg-gray-100/40 dark:bg-neutral-800/40 shadow-sm ${
            text === "GitHub" && "dark:invert"
          } ${text === "Twitter" && "dark:invert"}`}
        />
        <span className="font-light text-gray-600 dark:text-gray-400 text-base select-none drop-shadow-sm">
          {text}
        </span>
      </motion.a>
    </li>
  );
};

export default Link;
