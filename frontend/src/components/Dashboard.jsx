export default function Dashboard({
  selectedSatellite,
}) {
  return (
    <div
      style={{
        color: "white",
        padding: "20px",
        fontFamily: "Arial",
      }}
    >
      <h1 style={{ textAlign: "center" }}>
        ORBITAL AI
      </h1>

      <hr />

      <h2>Selected Satellite</h2>

      <br />

      <h3>{selectedSatellite.name}</h3>

      <p>
        <strong>Altitude :</strong>{" "}
        {selectedSatellite.altitude}
      </p>

      <p>
        <strong>Fuel :</strong>{" "}
        {selectedSatellite.fuel}%
      </p>

      <p>
        <strong>Health :</strong>{" "}
        {selectedSatellite.health}%
      </p>

      <p>
        <strong>Collision Risk :</strong>{" "}
        {selectedSatellite.collision}%
      </p>

      <p>
        <strong>Status :</strong>{" "}
        {selectedSatellite.status}
      </p>

      <hr />

      <h3>AI Recommendation</h3>

      <p>
        Move {selectedSatellite.name} by +12° to
        avoid collision.
      </p>

      <button
        style={{
          width: "100%",
          padding: "12px",
          border: "none",
          borderRadius: "8px",
          background: "#0a84ff",
          color: "white",
          cursor: "pointer",
        }}
      >
        Execute AI Maneuver
      </button>
    </div>
  );
}