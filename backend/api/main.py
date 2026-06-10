from fastapi import FastAPI

from simulation.satellite_generator import satellites
from simulation.collision import detect_collisions

from agents.decision_agent import DecisionAgent

app = FastAPI()


@app.get("/")
def home():

    return {
        "message": "Orbital AI Backend Running"
    }


@app.get("/satellites")
def get_satellites():

    return satellites


@app.get("/collisions")
def get_collisions():

    collisions = detect_collisions(
        satellites
    )

    return collisions


@app.get("/decision")
def get_decision():

    try:

        agent = DecisionAgent()

        results = agent.process(
            satellites
        )

        return results

    except Exception as e:

        return {
            "success": False,
            "error": str(e),
            "error_type": type(e).__name__
        }


@app.get("/fuel")
def get_fuel():

    result = []

    for sat in satellites:

        result.append({

            "sat_id": sat["sat_id"],

            "fuel": sat["fuel"],

            "mission": sat["mission"],

            "operator": sat["operator"]

        })

    return result


@app.get("/dashboard")
def dashboard():

    collisions = detect_collisions(
        satellites
    )

    critical = []

    warning = []

    for c in collisions:

        if c["collision_probability"] >= 50:

            critical.append(c)

        elif c["collision_probability"] >= 20:

            warning.append(c)

    return {

        "total_satellites":
            len(satellites),

        "total_collisions":
            len(collisions),

        "critical_collisions":
            len(critical),

        "warning_collisions":
            len(warning)
    }


@app.get("/health")
def health():

    return {
        "status": "running"
    }