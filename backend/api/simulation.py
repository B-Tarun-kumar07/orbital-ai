from fastapi import APIRouter

router = APIRouter(tags=["Simulation"])


@router.post("/simulation/start")
def start_simulation():
    return {
        "mission": "ORBITAL AI",
        "status": "STARTED",
        "message": "Simulation running",
    }