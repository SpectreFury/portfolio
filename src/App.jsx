import React, { useState, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import RotatingCube from "./components/RotatingCube";
import Navbar from "./components/Navbar";
import { useDarkModeStore } from "./store/useDarkMode";

function App() {
  const darkMode = useDarkModeStore((state) => state.darkMode);

  return (
    <>
      <Navbar />
      <Canvas
        style={{
          height: "100vh",
          width: "100vw",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <OrbitControls enablePan enableZoom enableRotate />

        <color attach="background" args={darkMode ? ["#1d1d1d"] : ["F0F0F0"]} />
        <ambientLight intensity={0.1} color={'#FF0000'}/>
        <RotatingCube />
      </Canvas>
    </>
  );
}

export default App;
