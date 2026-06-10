export default function Dashboard({
  selectedSatellite,
  missionState,
  countdown,
  companyAResponse,
  companyBResponse,
  collisionRisk,
  logs,
  setCompanyAResponse,
  setCompanyBResponse,
  scenarioStarted,
  setScenarioStarted,
}) {
  return (
    <div
      style={{
        color: "white",
        padding: "20px",
        fontFamily: "Arial",
        background: "#111",
        height: "100vh",
        overflowY: "auto",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          color: "#00d4ff",
          marginBottom: "15px",
        }}
      >
        ORBITAL AI
      </h1>

      <hr />
      <button
  onClick={() => setScenarioStarted(true)}
  style={{
    width: "100%",
    padding: "12px",
    background: "#00d4ff",
    border: "none",
    borderRadius: "8px",
    color: "#000",
    fontWeight: "bold",
    cursor: "pointer",
    marginBottom: "20px",
  }}
>
  {scenarioStarted
  ? "🟢 SCENARIO RUNNING"
  : "🚀 START SCENARIO"}
</button>

      <h2>🛰 Mission Status</h2>

      <p style={{ color: "#00ff99", fontWeight: "bold" }}>
        {missionState}
      </p>

      <hr />

      <h2>⚠ Future Collision</h2>

      <p>
        <strong>SAT-003</strong> (SpaceX)
      </p>

      <p
        style={{
          textAlign: "center",
          fontSize: "20px",
          margin: "5px 0",
        }}
      >
        ⬇
      </p>

      <p>
        <strong>SAT-005</strong> (ESA)
      </p>

      <br />

      <p>
        Current Distance : <b>820 km</b>
      </p>

      <p>
        Predicted Distance : <b>0 km</b>
      </p>

      <p>
        ETA : <b>{countdown}s</b>
      </p>

      <p>
        Probability
      </p>

      <div
        style={{
          width: "100%",
          height: "10px",
          background: "#333",
          borderRadius: "10px",
        }}
      >
        <div
          style={{
            width: `${collisionRisk}%`,
            height: "100%",
            background: "red",
            borderRadius: "10px",
          }}
        />
      </div>

      <p>{collisionRisk}%</p>

      <hr />

      <h2>🤝 Negotiation</h2>

      <div
        style={{
          background: "#1b1b1b",
          padding: "10px",
          borderRadius: "8px",
          marginBottom: "10px",
        }}
      >
        <b>SpaceX</b>

        <p>Status : {companyAResponse ?? "Waiting..."}</p>

        <div
          style={{
            display: "flex",
            gap: "5px",
          }}
        >
          <button
            onClick={() =>
              setCompanyAResponse("ACCEPTED")
            }
            style={{
              flex: 1,
              padding: "8px",
              background: "#00aa00",
              border: "none",
              color: "white",
              cursor: "pointer",
            }}
          >
            ACCEPT
          </button>

          <button
            onClick={() =>
              setCompanyAResponse("REJECTED")
            }
            style={{
              flex: 1,
              padding: "8px",
              background: "#cc0000",
              border: "none",
              color: "white",
              cursor: "pointer",
            }}
          >
            REJECT
          </button>
        </div>
      </div>

      <div
        style={{
          background: "#1b1b1b",
          padding: "10px",
          borderRadius: "8px",
        }}
      >
        <b>ESA</b>

        <p>Status : {companyBResponse ?? "Waiting..."}</p>

        <div
          style={{
            display: "flex",
            gap: "5px",
          }}
        >
          <button
            onClick={() =>
              setCompanyBResponse("ACCEPTED")
            }
            style={{
              flex: 1,
              padding: "8px",
              background: "#00aa00",
              border: "none",
              color: "white",
              cursor: "pointer",
            }}
          >
            ACCEPT
          </button>

          <button
            onClick={() =>
              setCompanyBResponse("REJECTED")
            }
            style={{
              flex: 1,
              padding: "8px",
              background: "#cc0000",
              border: "none",
              color: "white",
              cursor: "pointer",
            }}
          >
            REJECT
          </button>
        </div>
      </div>

      <hr />

      <h3>🤖 Auto Policy</h3>

      <p
        style={{
          fontSize: "13px",
          color: "#bbbbbb",
        }}
      >
        • One reply → Use received decision
      </p>

      <p
        style={{
          fontSize: "13px",
          color: "#bbbbbb",
        }}
      >
        • No replies → AI decides automatically
      </p>
<hr />

<h2>🤖 AI Decision</h2>

<div
  style={{
    background: "#1b1b1b",
    padding: "12px",
    borderRadius: "8px",
    marginBottom: "15px",
  }}
>
  <p>✅ Collision Probability &gt; 90%</p>

  <p>✅ Different Operators Detected</p>

  <p>✅ Safe Alternate Orbit Available</p>

  <p>✅ Estimated Fuel Cost : 2%</p>

  <hr style={{ borderColor: "#333" }} />

  <p
    style={{
      color: "#00ff99",
      fontWeight: "bold",
    }}
  >
    AI Recommendation
  </p>

  <p>
    Move <b>SAT-005</b> from Orbit 3 → Orbit 4
  </p>
</div>
      <hr />

      <h2>📜 Mission Log</h2>

      <div
        style={{
          maxHeight: "220px",
          overflowY: "auto",
          background: "#1b1b1b",
          padding: "10px",
          borderRadius: "10px",
        }}
      >
        {logs.map((log, index) => (
          <p
            key={index}
            style={{
              fontSize: "13px",
              color: "#66d9ff",
              margin: "4px 0",
            }}
          >
            {log}
          </p>
        ))}
      </div>
      {missionState === "MISSION SAFE" && (
  <>
    <hr />

    <div
      style={{
        background: "#0d2d1d",
        border: "2px solid #00ff99",
        borderRadius: "10px",
        padding: "15px",
        textAlign: "center",
        marginTop: "15px",
      }}
    >
      <h2>✅ MISSION SUCCESS</h2>

      <p>Collision Successfully Avoided</p>

      <p>SAT-003 : SAFE</p>

      <p>SAT-005 : SAFE</p>

      <h1 style={{ color: "#00ff99" }}>
        91% → 4%
      </h1>

      <p>Autonomous AI Negotiation Completed</p>
    </div>
  </>
)}
    </div>
  );
}