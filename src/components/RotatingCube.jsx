import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";

const RotatingCube = (props) => {
  const meshRef = useRef();

  useFrame(() => {});

  return (
    <mesh ref={meshRef}>
      <boxGeometry args={props.size} />
      <meshLambertMaterial color='A0A0A0'/>
    </mesh>
  );
};

export default RotatingCube;
