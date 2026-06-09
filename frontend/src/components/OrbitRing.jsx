import { useMemo } from "react";

export default function OrbitRing({ radius }) {
  const points = useMemo(() => {
    const pts = [];

    for (let i = 0; i <= 100; i++) {
      const angle = (i / 100) * Math.PI * 2;

      pts.push([
        radius * Math.cos(angle),
        0,
        radius * Math.sin(angle),
      ]);
    }

    return pts;
  }, [radius]);

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