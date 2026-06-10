import { useRef, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import { Html } from "@react-three/drei";

export default function Satellite({
  satellite,
  selectedSatellite,
  setSelectedSatellite,
  updatePosition,
}) {
  const satelliteRef = useRef();
const displayRadius = useRef(satellite.radius);

useEffect(() => {
  displayRadius.current = satellite.radius;
}, [satellite.radius]);
  useFrame(({ clock }) => {
    if (!satelliteRef.current) return;

    const angle =
      clock.getElapsedTime() *
        satellite.speed *
        satellite.direction +
      (satellite.initialAngle * Math.PI) / 180;

    // Smooth orbit transition
displayRadius.current +=
  (satellite.radius - displayRadius.current) * 0.03;

const radius = displayRadius.current;

const x = radius * Math.cos(angle);
const y = 0;
const z = radius * Math.sin(angle);

    satelliteRef.current.position.set(x, y, z);

    satelliteRef.current.lookAt(0, 0, 0);

    if (updatePosition) {
      updatePosition(satellite.id, {
        x,
        y,
        z,
        angle,
      });
    }
  });

  const isSelected =
    selectedSatellite?.id === satellite.id;

  return (
    <group
      ref={satelliteRef}
      onPointerDown={(e) => {
        e.stopPropagation();
        setSelectedSatellite(satellite);
      }}
    >
      <mesh>
        <boxGeometry args={[0.12, 0.12, 0.18]} />
        <meshStandardMaterial
          color={
  satellite.id === 3 || satellite.id === 5
    ? "#ff4444"
    : isSelected
    ? "#ffffff"
    : "#c0c0c0"
}
          emissive={
  satellite.id === 3 || satellite.id === 5
    ? "#ff0000"
    : isSelected
    ? "#00ffff"
    : "#000000"
}

emissiveIntensity={
  satellite.id === 3 || satellite.id === 5
    ? 2
    : isSelected
    ? 2
    : 0
}
        />
      </mesh>

      <mesh position={[-0.22, 0, 0]}>
        <boxGeometry args={[0.25, 0.01, 0.12]} />
        <meshStandardMaterial color="#0b5ed7" />
      </mesh>

      <mesh position={[0.22, 0, 0]}>
        <boxGeometry args={[0.25, 0.01, 0.12]} />
        <meshStandardMaterial color="#0b5ed7" />
      </mesh>

      <mesh position={[0, 0.1, 0]}>
        <cylinderGeometry args={[0.01, 0.01, 0.08, 12]} />
        <meshStandardMaterial color="gold" />
      </mesh>

      <mesh
        position={[0, 0.16, 0]}
        rotation={[Math.PI / 2, 0, 0]}
      >
        <circleGeometry args={[0.04, 20]} />
        <meshStandardMaterial color="#eeeeee" />
      </mesh>

      {isSelected && (
        <Html position={[0, 0.35, 0]} center>
          <div
            style={{
              background: "rgba(0,0,0,0.8)",
              color: "#fff",
              padding: "4px 8px",
              borderRadius: "6px",
              fontSize: "12px",
              fontWeight: "bold",
              whiteSpace: "nowrap",
            }}
          >
            <div>{satellite.name}</div>
            <div
              style={{
                color: "#00d4ff",
                fontSize: "10px",
              }}
            >
              {satellite.company}
            </div>
          </div>
        </Html>
      )}
    </group>
  );
}