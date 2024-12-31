import React from "react";
import { motion } from "motion/react";

const Tag = ({ text, imageUrl }) => {
  return (
    <motion.li className="w-full">
      <div className="flex items-center gap-2 bg-gray-900  px-5 py-1 rounded">
        <div className="p-1 bg-gray-800 rounded">
          <img src={imageUrl} className="max-w-9" />
        </div>
        <div className="font-medium">{text}</div>
      </div>
    </motion.li>
  );
};

export default Tag;
