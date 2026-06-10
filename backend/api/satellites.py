from fastapi import APIRouter

router = APIRouter(tags=["Satellites"])

SATELLITES = [
    {
        "id": 1,
        "name": "SAT-001",
        "company": "ISRO",
        "orbit": 1,
        "status": "SAFE",
    },
    {
        "id": 2,
        "name": "SAT-002",
        "company": "NASA",
        "orbit": 2,
        "status": "SAFE",
    },
    {
        "id": 3,
        "name": "SAT-003",
        "company": "SpaceX",
        "orbit": 3,
        "status": "WARNING",
    },
    {
        "id": 4,
        "name": "SAT-004",
        "company": "ISRO",
        "orbit": 4,
        "status": "SAFE",
    },
    {
        "id": 5,
        "name": "SAT-005",
        "company": "ESA",
        "orbit": 3,
        "status": "WARNING",
    },
]


@router.get("/satellites")
def get_satellites():
    return SATELLITES