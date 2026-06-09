import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

export default function Earth() {
  const earthRef = useRef();

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