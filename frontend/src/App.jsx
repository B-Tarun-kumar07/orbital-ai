import { useState } from "react";
import Scene from "./components/Scene";
import Dashboard from "./components/Dashboard";

import { satellites } from "./data/satellites";

export default function App() {

  const [selectedSatellite, setSelectedSatellite] = useState(satellites[0]);

  return (

    <div
      style={{
        display: "flex",
        height: "100vh",
        background: "black",
      }}
    >

      <div style={{ flex: 3 }}>

        <Scene

          selectedSatellite={selectedSatellite}

          setSelectedSatellite={setSelectedSatellite}

        />

      </div>

      <div style={{ flex: 1 }}>

        <Dashboard

          selectedSatellite={selectedSatellite}

        />

      </div>

    </div>

  );

}