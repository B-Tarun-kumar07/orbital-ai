import { useRef } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import * as THREE from "three";


import earthDay from "../assets/textures/earth_daymap.jpg";
import earthNormal from "../assets/textures/earth_normal_map.jpg";
import earthRoughness from "../assets/textures/earth_roughness_map.jpg";
import earthClouds from "../assets/textures/earth_clouds_map.jpg";
export default function Earth() {
  const earthRef = useRef();
  const cloudsRef = useRef();



  const [colorMap, normalMap, roughnessMap, cloudMap] =
  useLoader(THREE.TextureLoader, [
    earthDay,
    earthNormal,
    earthRoughness,
    earthClouds,
  ]);

  colorMap.colorSpace = THREE.SRGBColorSpace;

  useFrame(() => {
    if (earthRef.current)
      earthRef.current.rotation.y += 0.0015;

    if (cloudsRef.current)
      cloudsRef.current.rotation.y += 0.0018;
  });

  return (
    <group>
      {/* Earth */}
      <mesh ref={earthRef} raycast={() => null}>
        <sphereGeometry args={[1.2, 64, 64]} />
        <meshStandardMaterial
  map={colorMap}
  normalMap={normalMap}
  roughness={1}
  metalness={0}

/>
      </mesh>

    {/* Clouds*/} 
      <mesh ref={cloudsRef}>
        <sphereGeometry args={[1.225, 64, 64]} />
        <meshStandardMaterial
          map={cloudMap}
          transparent
          opacity={0.35}
          depthWrite={false}
        />
      </mesh>

      {/* Atmosphere Glow */}
      <mesh scale={1.04}>
        <sphereGeometry args={[1.2, 64, 64]} />
        <meshBasicMaterial
          color="#66ccff"
          transparent
          opacity={0.08}
          side={THREE.BackSide}
        />
      </mesh>
    </group>
  );
}