import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import { useState } from "react";

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

      <ambientLight intensity={0.6} />

      <directionalLight
        position={[8, 5, 8]}
        intensity={2}
      />

      <pointLight
        position={[-8, -2, 8]}
        intensity={0.5}
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

      {satellites.map((satellite) => (
        <OrbitRing
          key={`orbit-${satellite.id}`}
          radius={satellite.radius}
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