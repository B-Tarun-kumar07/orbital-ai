import sys
import os

ROOT_DIR = os.path.dirname(
    os.path.dirname(
        os.path.abspath(__file__)
    )
)

sys.path.insert(0, ROOT_DIR)

from simulation.satellite_generator import satellites
from simulation.collision import detect_collisions

collisions = detect_collisions(
    satellites
)

print("\nCOLLISIONS FOUND")
print("=" * 60)

print(
    f"Total collisions: {len(collisions)}"
)

for collision in collisions:

    print(collision)