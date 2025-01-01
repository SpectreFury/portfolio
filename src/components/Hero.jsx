import React, { useState, useRef, Suspense } from "react";

import { Canvas } from "@react-three/fiber";
import { useDarkModeStore } from "../store/useDarkMode";
import { Leva, useControls } from "leva";
import { Computer } from "../components/Computer";
import CanvasLoader from "../components/CanvasLoader";
import Camera from "../components/Camera";
import { Html, PerspectiveCamera } from "@react-three/drei";
import { motion } from "motion/react";
import { Button } from "../components/ui/moving-border";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  const darkMode = useDarkModeStore((state) => state.darkMode);

  return (
    <section className="w-full">
      <div
        className={`flex flex-col items-center pt-32 ${
          darkMode ? "bg-slate-950" : "bg-slate-50"
        }`}
      >
        <motion.p
          className="text-[50px] font-bold text-gray-300 "
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ duration: 1, delay: 2 }}
        >
          A fellow{" "}
          <span className="bg-gradient-to-r from-lime-500 to-teal-500 bg-clip-text text-transparent">
            web enthusiast
          </span>
        </motion.p>
        <motion.p
          className="text-[50px] font-bold text-gray-500"
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ duration: 1, delay: 3 }}
        >
          Creating work of art in the world of web.
        </motion.p>
      </div>
      <Canvas style={{ height: "50rem" }}>
        <Suspense fallback={<CanvasLoader />}>
          <color
            attach="background"
            args={darkMode ? ["#020617"] : ["#f8fafc"]}
          />
          <PerspectiveCamera makeDefault position={[0, 0, 0]} />
          <ambientLight intensity={0.1} color={"#FFFFFF"} />
          <directionalLight position={[10, 10, 10]} intensity={1} />
          <Camera>
            <Computer position={[0, 0, 0]} rotation={[0, -1.5, -0.5]} />
          </Camera>
        </Suspense>
      </Canvas>
      <div
        className={`flex flex-col items-center ${
          darkMode ? "bg-[#1d1d1d]" : "bg-[#f1f1f1]"
        }`}
      ></div>
    </section>
  );
};

export default Hero;
