import React, { useState, useRef, Suspense } from "react";

import { Canvas } from "@react-three/fiber";
import { useDarkModeStore } from "../store/useDarkMode";
import { Leva, useControls } from "leva";
import { Computer } from "../components/Computer";
import CanvasLoader from "../components/CanvasLoader";
import Camera from "../components/Camera";
import { Html, PerspectiveCamera } from "@react-three/drei";
import { motion } from "motion/react";

const Hero = () => {
  const darkMode = useDarkModeStore((state) => state.darkMode);

  return (
    <section className="w-full h-screen">
      <div
        className={`flex flex-col items-center pt-32 ${
          darkMode ? "bg-[#1d1d1d]" : "bg-[#f1f1f1]"
        }`}
      >
        <motion.p
          className="text-[50px] font-bold text-gray-300"
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ duration: 1, delay: 2 }}
        >
          A fellow web enthusiast
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
      <Canvas>
        <Suspense fallback={<CanvasLoader />}>
          <color
            attach="background"
            args={darkMode ? ["#1d1d1d"] : ["#f1f1f1"]}
          />
          <PerspectiveCamera makeDefault position={[0, 0, 0]} />
          <ambientLight intensity={0.1} color={"#FFFFFF"} />
          <directionalLight position={[10, 10, 10]} intensity={1} />
          <Camera>
            <Computer position={[0, 1, 0]} rotation={[0, -1.5, -0.5]} />
          </Camera>
        </Suspense>
      </Canvas>
    </section>
  );
};

export default Hero;