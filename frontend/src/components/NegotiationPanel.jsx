export default function NegotiationPanel({
  negotiation,
  onAccept,
  onReject,
}) {
  if (!negotiation.active) return null;

  return (
    <div
      style={{
        marginTop: "20px",
        padding: "15px",
        border: "1px solid #444",
        borderRadius: "10px",
        background: "#111",
        color: "white",
      }}
    >
      <h2>🤝 AI Negotiation</h2>

      <p>
        <strong>{negotiation.companyA}</strong>
      </p>

      <p>
        proposes moving
        {" "}
        <strong>{negotiation.satellite}</strong>
        {" "}
        by
        {" "}
        <strong>+12°</strong>
      </p>

      <p>
        Fuel Cost : 2%
      </p>

      <p>
        Mission Delay : 3 min
      </p>

      <div
        style={{
          display: "flex",
          gap: "10px",
          marginTop: "15px",
        }}
      >
        <button onClick={onAccept}>
          ✅ Accept
        </button>

        <button onClick={onReject}>
          ❌ Reject
        </button>
      </div>
    </div>
  );
}