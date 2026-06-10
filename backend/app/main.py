from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from api.satellites import router as satellites_router
from api.collision import router as collision_router
from api.simulation import router as simulation_router
from api.negotiation import router as negotiation_router

app = FastAPI(
    title="ORBITAL AI API",
    version="1.0.0",
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(satellites_router, prefix="/api")
app.include_router(collision_router, prefix="/api")
app.include_router(simulation_router, prefix="/api")
app.include_router(negotiation_router, prefix="/api")


@app.get("/")
def home():
    return {
        "message": "ORBITAL AI Backend Running",
        "status": "healthy",
    }