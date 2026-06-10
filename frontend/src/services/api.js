const API = "http://127.0.0.1:8000/api";

export async function getSatellites() {
  const res = await fetch(`${API}/satellites`);
  return res.json();
}

export async function getCollision() {
  const res = await fetch(`${API}/collision`);
  return res.json();
}

export async function startSimulation() {
  const res = await fetch(`${API}/simulation/start`, {
    method: "POST",
  });

  return res.json();
}

export async function negotiate(data) {
  const res = await fetch(`${API}/negotiation`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  return res.json();
}