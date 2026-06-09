import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";

import Earth from "./Earth";
import Satellite from "./Satellite";
import OrbitRing from "./OrbitRing";

import { satellites } from "../data/satellites";

export default function Scene({
  selectedSatellite,
  setSelectedSatellite,
}) {
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

      {/* Orbit Rings + Satellites */}

      {satellites.map((satellite) => (
        <group key={satellite.id}>
          <OrbitRing radius={satellite.radius} />

          <Satellite
            satellite={satellite}
            selectedSatellite={selectedSatellite}
            setSelectedSatellite={setSelectedSatellite}
          />
        </group>
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