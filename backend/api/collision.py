from fastapi import APIRouter

router = APIRouter(tags=["Collision"])


@router.get("/collision")
def collision_prediction():
    return {
        "satellite_a": "SAT-003",
        "satellite_b": "SAT-005",
        "collision_probability": 91,
        "eta_seconds": 18,
        "status": "HIGH_RISK",
    }