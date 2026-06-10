import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import { useState } from "react";
import * as THREE from "three";
import Earth from "./Earth";
import Satellite from "./Satellite";
import OrbitRing from "./OrbitRing";

import { satellites } from "../data/satellites";

export default function Scene({
  selectedSatellite,
  setSelectedSatellite,
  maneuverExecuted,
})  {
  const [positions, setPositions] = useState({});

  const updatePosition = (id, position) => {
    setPositions((prev) => ({
      ...prev,
      [id]: position,
    }));
  };

  return (
    <Canvas
      shadows
      camera={{
        position: [0, 2.5, 7.5],
        fov: 45,
      }}
    >
      {/* Lights */}

      
  <ambientLight intensity={0.1} />

    <directionalLight
  position={[20, 8, 15]}
  intensity={2}
/>

   
{/* Sun Core */}
<mesh position={[20, 8, 15]}>
  <sphereGeometry args={[0.6, 32, 32]} />
  <meshBasicMaterial
    color="#fff9c4"
    toneMapped={false}
  />
</mesh>

{/* Inner Glow */}
<mesh position={[20, 8, 15]} scale={1.4}>
  <sphereGeometry args={[0.6, 24, 24]} />
  <meshBasicMaterial
    color="#ffd54f"
    transparent
    opacity={0.25}
    side={THREE.BackSide}
    toneMapped={false}
  />
</mesh>

{/* Outer Glow */}
<mesh position={[20, 8, 15]} scale={2}>
  <sphereGeometry args={[0.6, 16, 16]} />
  <meshBasicMaterial
    color="#ff9800"
    transparent
    opacity={0.08}
    side={THREE.BackSide}
    toneMapped={false}
  />
</mesh>
<pointLight
  position={[-10, -2, 6]}
  intensity={0.3}
/>


      {/* Stars */}

      <Stars
        radius={120}
        depth={80}
        count={12000}
        factor={5}
        saturation={0}
        fade
      />

      {/* Earth */}

      <Earth />

      {/* Orbit Rings */}

     {satellites.map((sat) => (
  <OrbitRing
    key={sat.id}
    radius={sat.radius}
    inclination={sat.inclination}
  />
))}

      {/* Satellites */}

     {satellites.map((satellite) => (
  <Satellite
    key={satellite.id}
    satellite={{
      ...satellite,

      radius:
        maneuverExecuted && satellite.id === 5
          ? 4.2
          : satellite.radius,
    }}
    selectedSatellite={selectedSatellite}
    setSelectedSatellite={setSelectedSatellite}
    updatePosition={updatePosition}
  />
))}

      <OrbitControls
        enableZoom
        enableRotate
        enablePan
        minDistance={3}
        maxDistance={15}
      />
    </Canvas>
  );
}