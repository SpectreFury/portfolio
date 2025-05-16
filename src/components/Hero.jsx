import React, { Suspense, useEffect } from "react";

import { Canvas } from "@react-three/fiber";
import { useDarkModeStore } from "../store/useDarkMode";
import { Computer } from "../components/Computer";
import CanvasLoader from "../components/CanvasLoader";
import Camera from "../components/Camera";
import { PerspectiveCamera } from "@react-three/drei";
import { motion } from "motion/react";
import { ContainerTextFlip } from "../components/ui/container-text-flip";

const Hero = () => {
  const darkMode = useDarkModeStore((state) => state.darkMode);
  const [canvasHeight, setCanvasHeight] = React.useState(
    window.innerWidth < 768 ? "18rem" : "50rem"
  );

  useEffect(() => {
    const handleResize = () => {
      setCanvasHeight(window.innerWidth < 768 ? "18rem" : "50rem");
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="w-full">
      <div
        className={`flex flex-col items-center pt-20 md:pt-32 px-4 md:px-0 ${
          darkMode ? "bg-gray-950" : "bg-slate-50"
        }`}
      >
        <motion.p
          className={`text-[2rem] md:text-[50px] font-bold ${
            darkMode ? "text-secondary-dark" : "text-secondary-light"
          } text-center leading-tight md:leading-[1.1]`}
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ duration: 1, delay: 2 }}
        >
          A fellow{" "}
          <ContainerTextFlip
            interval={4000}
            words={[
              "full stack dev",
              "software engineer",
              "vibe coder",
              "vim enthusiast",
            ]}
            className="shadow-none"
            textClassName="text-[2rem] md:text-[50px] text-emerald-500"
          />
        </motion.p>
        <motion.p
          className={`text-[2rem] md:text-[50px] font-bold ${
            darkMode ? "text-secondary-dark" : "text-secondary-light"
          } text-center leading-tight md:leading-[1.1]`}
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ duration: 1, delay: 3 }}
        >
          creating works of art in the world of web.
        </motion.p>
      </div>
      <Canvas
        style={{
          height: canvasHeight,
          width: "100vw",
          maxWidth: "100%",
        }}
      >
        <Suspense fallback={<CanvasLoader />}>
          <color
            attach="background"
            args={darkMode ? ["#020617"] : ["#f8fafc"]}
          />
          <PerspectiveCamera makeDefault position={[0, 0, 0]} />
          <ambientLight intensity={0.1} color={"#FFFFFF"} />
          <directionalLight position={[10, 10, 10]} intensity={1.5} />
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
