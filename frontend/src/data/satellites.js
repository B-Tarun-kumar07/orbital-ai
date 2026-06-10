export const satellites = Array.from({ length: 10 }, (_, i) => {
 const orbitRadius = 3.0 + (i % 8) * 0.5;

  return {
  id: i + 1,
  name: `SAT-${String(i + 1).padStart(3, "0")}`,

  // Basic information
  company: ["NASA", "ESA", "ISRO", "SpaceX", "JAXA"][i % 5],

  // Orbit properties
  orbit: (i % 10) + 1,
  radius: orbitRadius,
currentRadius: orbitRadius,
targetRadius: orbitRadius,

speed: 0.035 - orbitRadius * 0.0025,
  direction: 1,
  initialAngle: Math.random() * 360,
  inclination: -60 + Math.random() * 120,

  // Appearance
  size: 0.12,
  color: [
    "#4caf50",
    "#2196f3",
    "#ff9800",
    "#9c27b0",
    "#f44336",
  ][i % 5],

  // Telemetry
  altitude: `${500 + Math.floor(Math.random() * 700)} km`,
  fuel: 60 + Math.floor(Math.random() * 40),
  health: 80 + Math.floor(Math.random() * 20),

  currentDistance: `${600 + Math.floor(Math.random() * 500)} km`,
  predictedDistance: `${Math.floor(Math.random() * 200)} km`,
  eta: `00:${String(5 + (i % 55)).padStart(2, "0")}`,

  collision: Math.floor(Math.random() * 100),
  status:
    Math.random() > 0.85
      ? "WARNING"
      : Math.random() > 0.95
      ? "CRITICAL"
      : "SAFE",
  };
});