import { useEffect, useState } from "react";

import Scene from "./components/Scene";
import Dashboard from "./components/Dashboard";
import { getCollision } from "./services/api";
import { getSatellites } from "./services/api";

export default function App() {
  const [satellites, setSatellites] = useState([]);
 const [selectedSatellite, setSelectedSatellite] = useState(null);
const [scenarioStarted, setScenarioStarted] = useState(false);
  const [missionState, setMissionState] =
    useState("MONITORING");
const [maneuverExecuted, setManeuverExecuted] = useState(false);
  const [countdown, setCountdown] = useState(30);

  const [companyAResponse, setCompanyAResponse] =
    useState(null);

  const [companyBResponse, setCompanyBResponse] =
    useState(null);

  const [collisionRisk, setCollisionRisk] =
    useState(91);

  const [logs, setLogs] = useState([
    "🟢 Monitoring satellites...",
  ]);
useEffect(() => {
  async function loadSatellites() {
    const data = await getSatellites();

    setSatellites(data);

    if (data.length > 0) {
      setSelectedSatellite(data[2]);
    }
  }

  loadSatellites();
}, []);
  // Demo starts automatically
  useEffect(() => {
  if (!scenarioStarted) return;

  const start = setTimeout(() => {
    setMissionState("NEGOTIATING");

    setLogs((prev) => [
      ...prev,
      "⚠ Future collision predicted",
      "🤖 Ownership analysis complete",
      "🌐 Different companies detected",
      "🤝 Negotiation started",
    ]);
  }, 2000);

  return () => clearTimeout(start);
}, [scenarioStarted]);
useEffect(() => {
  async function loadCollision() {
    const data = await getCollision();

    setCollisionRisk(data.collision_probability);
  }

  loadCollision();
}, []);
  // Countdown
  // Countdown
useEffect(() => {
  if (missionState !== "NEGOTIATING") return;

  if (countdown <= 0) {
    setMissionState("EXECUTING");

    setLogs((prev) => [
      ...prev,
      "🤖 AI timeout policy activated",
      "🚀 Executing avoidance maneuver...",
    ]);

    return;
  }

  const timer = setTimeout(() => {
    setCountdown((c) => c - 1);
  }, 1000);

  return () => clearTimeout(timer);
}, [countdown, missionState]);
// Maneuver animation
useEffect(() => {
  if (missionState !== "EXECUTING") return;

  const timer = setTimeout(() => {
    setManeuverExecuted(true);

    setCollisionRisk(4);

    setMissionState("MISSION SAFE");

    setLogs((prev) => [
      ...prev,
      "🛰 SAT-005 moved to Orbit 4",
      "✅ Collision avoided",
      "🟢 Mission completed successfully",
    ]);
  }, 3000);

  return () => clearTimeout(timer);
}, [missionState]);

  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        background: "#000",
      }}
    >
      <div style={{ flex: 3 }}>
      <Scene
  satellites={satellites}
  selectedSatellite={selectedSatellite}
  setSelectedSatellite={setSelectedSatellite}
  maneuverExecuted={maneuverExecuted}
/>
      </div>

      <div style={{ flex: 1 }}>
        <Dashboard
          selectedSatellite={selectedSatellite}
          missionState={missionState}
          countdown={countdown}
          companyAResponse={companyAResponse}
          companyBResponse={companyBResponse}
          collisionRisk={collisionRisk}
          logs={logs}
          setCompanyAResponse={setCompanyAResponse}
setCompanyBResponse={setCompanyBResponse}
          scenarioStarted={scenarioStarted}
    setScenarioStarted={setScenarioStarted}
        />
      </div>
    </div>
  );
}