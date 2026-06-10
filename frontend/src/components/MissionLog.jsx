export default function MissionLog({ logs }) {
  return (
    <div
      style={{
        marginTop: "20px",
        borderTop: "1px solid #444",
        paddingTop: "15px",
      }}
    >
      <h2
        style={{
          color: "white",
          marginBottom: "10px",
        }}
      >
        Mission Log
      </h2>

      <div
        style={{
          maxHeight: "260px",
          overflowY: "auto",
          display: "flex",
          flexDirection: "column",
          gap: "8px",
        }}
      >
        {logs.map((log, index) => (
          <div
            key={index}
            style={{
              color: "#8be9fd",
              fontSize: "14px",
            }}
          >
            {log}
          </div>
        ))}
      </div>
    </div>
  );
}