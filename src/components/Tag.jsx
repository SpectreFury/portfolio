import React from "react";
import { motion } from "motion/react";

const Tag = ({ link, imageUrl, size = "sm" }) => {
  // Define size classes
  const sizeClasses = {
    sm: {
      container: "px-1.5 py-0.5 min-w-[36px] min-h-[36px] w-9 h-9",
      img: "w-6 h-6",
    },
    md: {
      container: "px-2.5 py-1 min-w-[48px] min-h-[48px] w-12 h-12",
      img: "w-8 h-8",
    },
    lg: {
      container: "px-3.5 py-2 min-w-[64px] min-h-[64px] w-16 h-16",
      img: "w-12 h-12",
    },
  };
  const { container, img } = sizeClasses[size] || sizeClasses.sm;

  return (
    <motion.a
      href={link}
      whileHover={{ scale: 1.08, boxShadow: "0 4px 16px rgba(0,0,0,0.15)" }}
      transition={{ duration: 0.01 }}
      className={`inline-flex items-center justify-center bg-white/20 dark:bg-neutral-800/30 rounded-xl shadow-lg m-1 transition-transform duration-200 backdrop-blur-md border border-neutral-300 dark:border-neutral-700/40 cursor-pointer ${container}`}
      style={{ WebkitBackdropFilter: "blur(8px)", backdropFilter: "blur(8px)" }}
    >
      <img
        src={imageUrl}
        alt="Tech stack"
        className={`${img} object-contain mx-auto my-auto bg-gray-100/40 dark:bg-neutral-800/40 shadow-sm rounded-lg`}
      />
    </motion.a>
  );
};

export default Tag;
