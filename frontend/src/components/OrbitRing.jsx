import { useMemo } from "react";

export default function OrbitRing({
  radius,
  inclination = 0,
}) {
  const points = useMemo(() => {
    const pts = [];

    for (let i = 0; i <= 100; i++) {
      const angle = (i / 100) * Math.PI * 2;

     const tilt = (inclination * Math.PI) / 180;

const x = radius * Math.cos(angle);
const y = radius * Math.sin(angle) * Math.sin(tilt);
const z = radius * Math.sin(angle) * Math.cos(tilt);

pts.push([x, y, z]);
    }

    return pts;
}, [radius, inclination]);
  return (
    <line>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={points.length}
          array={new Float32Array(points.flat())}
          itemSize={3}
        />
      </bufferGeometry>

      <lineBasicMaterial color="#555" />
    </line>
  );
}