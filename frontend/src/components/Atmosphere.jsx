export default function Atmosphere() {
  return (
    <mesh scale={1.28}>
      <sphereGeometry args={[1.2, 128, 128]} />

      <meshBasicMaterial
        color="#4fc3f7"
        transparent
        opacity={0.15}
        side={2}
      />
    </mesh>
  );
}