import sys
import os

ROOT_DIR = os.path.dirname(
    os.path.dirname(
        os.path.abspath(__file__)
    )
)

sys.path.insert(0, ROOT_DIR)

from simulation.satellite_generator import satellites
from simulation.orbital_engine import update_all_satellites

print("\nBEFORE UPDATE\n")

print(
    f"SAT-{satellites[0]['sat_id']}"
)

print(
    f"x={satellites[0]['x']}"
)

print(
    f"y={satellites[0]['y']}"
)

print(
    f"z={satellites[0]['z']}"
)

update_all_satellites(
    satellites,
    dt=1
)

print("\nAFTER UPDATE\n")

print(
    f"SAT-{satellites[0]['sat_id']}"
)

print(
    f"x={satellites[0]['x']}"
)

print(
    f"y={satellites[0]['y']}"
)

print(
    f"z={satellites[0]['z']}"
)