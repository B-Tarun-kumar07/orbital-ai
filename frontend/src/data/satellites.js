export const satellites = [
  {
    id: 1,
    name: "SAT-001",
    company: "ISRO",

    orbit: 1,
    radius: 2.5,
    speed: 0.7,
    direction: 1,
    initialAngle: 0,
   currentRadius: 2.5,
targetRadius: 2.5,

    size: 0.15,
    color: "#00d4ff",

    altitude: "420 km",
    fuel: 91,
    health: 98,

    currentDistance: "1240 km",
    predictedDistance: "1240 km",
    eta: "--",

    collision: 8,
    status: "SAFE",
  },

  {
    id: 2,
    name: "SAT-002",
    company: "NASA",

    orbit: 2,
    radius: 3,
    speed: 0.6,
    direction: 1,
    initialAngle: 70,

    size: 0.15,
    color: "#ffd600",
    currentRadius: 3,
targetRadius: 3,

    altitude: "520 km",
    fuel: 88,
    health: 97,

    currentDistance: "980 km",
    predictedDistance: "980 km",
    eta: "--",

    collision: 15,
    status: "SAFE",
  },

  {
    id: 3,
    name: "SAT-003",
    company: "SpaceX",

    orbit: 3,
    radius: 3.5,
    speed: 0.9,
    direction: 1,
    initialAngle: 20,

    size: 0.15,
    color: "#00ffff",
currentRadius: 3.5,
targetRadius: 3.5,
    altitude: "650 km",
    fuel: 74,
    health: 95,

    currentDistance: "820 km",
    predictedDistance: "0 km",
    eta: "00:18",

    collision: 91,
    status: "WARNING",
  },

  {
    id: 4,
    name: "SAT-004",
    company: "ISRO",

    orbit: 4,
    radius: 4.2,
    speed: 0.4,
    direction: 1,
    initialAngle: 210,
currentRadius: 4.2,
targetRadius: 4.2,
    size: 0.15,
    color: "#00ff66",

    altitude: "810 km",
    fuel: 67,
    health: 92,

    currentDistance: "1450 km",
    predictedDistance: "1450 km",
    eta: "--",

    collision: 6,
    status: "SAFE",
  },

  {
    id: 5,
    name: "SAT-005",
    company: "ESA",

    orbit: 3,
    radius: 3.5,
    speed: 1.15,
    direction: -1,
    initialAngle: 190,
currentRadius: 3.5,
targetRadius: 3.5,
    size: 0.15,
    color: "#ff9800",

    altitude: "648 km",
    fuel: 82,
    health: 99,

    currentDistance: "820 km",
    predictedDistance: "0 km",
    eta: "00:18",

    collision: 91,
    status: "WARNING",
  },
];