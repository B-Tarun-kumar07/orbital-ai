import sys
import os

ROOT_DIR = os.path.dirname(
    os.path.dirname(
        os.path.abspath(__file__)
    )
)

sys.path.insert(0, ROOT_DIR)

from simulation.satellite_generator import satellites
from agents.collision_agent import CollisionAgent

agent = CollisionAgent()

print("\nPREDICTING 60 SECONDS AHEAD")
print("=" * 60)

collisions = agent.predict_collisions(
    satellites,
    future_seconds=60
)

print(
    f"Predicted Collisions: {len(collisions)}"
)

for collision in collisions:
    print(collision)

print("\nCRITICAL COLLISIONS")
print("=" * 60)

critical = agent.get_critical_collisions(
    satellites,
    future_seconds=60
)

for collision in critical:
    print(collision)

print("\nHIGHEST RISK COLLISION")
print("=" * 60)

highest = agent.get_highest_risk_collision(
    satellites,
    future_seconds=60
)

print(highest)