import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stage } from "@react-three/drei";
import React, { Suspense } from "react";
import Model from "./Modal";



const Me = () => {
   
    
  return (
    <Canvas>
        <Suspense fallback={null}>
      <Stage environment="city" intensity={0.5}>
        <Model/>
      </Stage>
      <OrbitControls enableZoom={false} />
      </Suspense>
    </Canvas>
  );
};

export default Me;
