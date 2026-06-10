import sys
import os

ROOT_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, ROOT_DIR)

from simulation.satellite_generator import satellites
from simulation.collision import calculate_distance

print("\nSATELLITE POSITIONS\n")

for sat in satellites[:5]:
    print(
        f"SAT-{sat['sat_id']} -> "
        f"x={round(sat['x'],2)}, "
        f"y={round(sat['y'],2)}, "
        f"z={round(sat['z'],2)}"
    )

print("\nDISTANCE BETWEEN FIRST TWO SATELLITES")

distance = calculate_distance(
    satellites[0],
    satellites[1]
)

print(distance)