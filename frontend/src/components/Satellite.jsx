import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Html } from "@react-three/drei";

export default function Satellite({
  satellite,
  selectedSatellite,
  setSelectedSatellite,
}) {
  const satelliteRef = useRef();

  useFrame(({ clock }) => {
    if (!satelliteRef.current) return;

    const angle =
      clock.getElapsedTime() * satellite.speed +
      (satellite.initialAngle * Math.PI) / 180;

    satelliteRef.current.position.set(
      satellite.radius * Math.cos(angle),
      0,
      satellite.radius * Math.sin(angle)
    );

    // Always face the Earth
    satelliteRef.current.lookAt(0, 0, 0);
  });

  const isSelected = selectedSatellite?.id === satellite.id;

  return (
    <group
      ref={satelliteRef}
      onPointerDown={(e) => {
        e.stopPropagation();
        setSelectedSatellite(satellite);
      }}
    >
      {/* Main Body */}
      <mesh>
        <boxGeometry args={[0.12, 0.12, 0.18]} />
        <meshStandardMaterial
          color={isSelected ? "#ffffff" : "#c0c0c0"}
          emissive={isSelected ? "#00ffff" : "#000000"}
          emissiveIntensity={isSelected ? 2 : 0}
        />
      </mesh>

      {/* Left Solar Panel */}
      <mesh position={[-0.22, 0, 0]}>
        <boxGeometry args={[0.25, 0.01, 0.12]} />
        <meshStandardMaterial color="#1f4e79" />
      </mesh>

      {/* Right Solar Panel */}
      <mesh position={[0.22, 0, 0]}>
        <boxGeometry args={[0.25, 0.01, 0.12]} />
        <meshStandardMaterial color="#1f4e79" />
      </mesh>

      {/* Antenna */}
      <mesh position={[0, 0.1, 0]}>
        <cylinderGeometry args={[0.01, 0.01, 0.08, 16]} />
        <meshStandardMaterial color="gold" />
      </mesh>

      {/* Dish */}
      <mesh position={[0, 0.16, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <circleGeometry args={[0.04, 24]} />
        <meshStandardMaterial color="#dddddd" />
      </mesh>

      {/* Label only when selected */}
      {isSelected && (
        <Html position={[0, 0.35, 0]} center>
          <div
            style={{
              background: "rgba(0,0,0,0.75)",
              color: "white",
              padding: "4px 8px",
              borderRadius: "6px",
              fontSize: "12px",
              fontWeight: "bold",
              userSelect: "none",
            }}
          >
            {satellite.name}
          </div>
        </Html>
      )}
    </group>
  );
}