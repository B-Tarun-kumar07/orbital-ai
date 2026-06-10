import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

import earthTexture from "../assets/textures/earth.jpg";
import cloudTexture from "../assets/textures/clouds.png";

export default function Earth() {
  const earthRef = useRef();
  const cloudsRef = useRef();
  
const loader = new THREE.TextureLoader();
const colorMap = loader.load(earthTexture);
const cloudMap = loader.load(cloudTexture);
  useFrame(() => {
    if (earthRef.current) {
      earthRef.current.rotation.y += 0.0015;
    }
  });

  return (
    <mesh ref={earthRef} raycast={() => null}>
      <sphereGeometry args={[1.2, 128, 128]} />

      <meshStandardMaterial
        color="#1565C0"
        roughness={1}
        metalness={0}
      />
    </mesh>
  );
}
