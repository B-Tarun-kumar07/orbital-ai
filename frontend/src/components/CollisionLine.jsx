import { Line } from "@react-three/drei";
import { useMemo } from "react";

export default function CollisionLine({
  start,
  end,
  visible,
}) {
  const points = useMemo(() => {
    return [start, end];
  }, [start, end]);

  if (!visible) return null;

  return (
    <Line
      points={points}
      color="red"
      lineWidth={3}
    />
  );
}