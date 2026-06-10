import random
import math

satellites = []

missions = [
    "Navigation",
    "Research",
    "Military",
    "Weather",
    "Communication"
]

operators = [
    "ISRO",
    "NASA",
    "ESA",
    "SpaceX",
    "JAXA"
]


def create_satellite():

    sat_id = len(satellites) + 1

    # Tighter orbital shell for more realistic collision testing
    orbit_radius = random.randint(500, 650)

    angle = random.uniform(0, 360)

    x = orbit_radius * math.cos(math.radians(angle))
    z = orbit_radius * math.sin(math.radians(angle))
    y = random.uniform(-20, 20)

    return {

        "sat_id": sat_id,

        "mission": random.choice(missions),
        "operator": random.choice(operators),

        "priority": random.randint(1, 10),
        "mission_criticality": random.randint(1, 10),

        "fuel": random.randint(20, 100),

        "orbit": orbit_radius,
        "speed": round(random.uniform(7.0, 8.0), 2),
        "angle": angle,

        # Position
        "x": round(x, 2),
        "y": round(y, 2),
        "z": round(z, 2),

        # Velocity
        "vx": round(random.uniform(-8, 8), 2),
        "vy": round(random.uniform(-8, 8), 2),
        "vz": round(random.uniform(-8, 8), 2),

        "collision_probability": 0,
        "time_to_collision": None,

        "status": "SAFE"
    }


def initialize(num_satellites=20):

    satellites.clear()

    for _ in range(num_satellites):
        satellites.append(create_satellite())


def add_satellite():

    satellite = create_satellite()

    satellites.append(satellite)

    print(
        f"Satellite SAT-{satellite['sat_id']} added successfully"
    )

    return satellite


def get_satellites():
    return satellites


initialize(20)