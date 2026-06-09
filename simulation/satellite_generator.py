import random

satellites = []

missions = [

    "Navigation",
    "Research",
    "Military",
    "Weather",
    "Communication"

]

def create_satellite():

    sat_id = len(satellites) + 1

    return {

        "sat_id": sat_id,

        "mission":
            random.choice(missions),

        "priority":
            random.randint(1,10),

        "fuel":
            random.randint(20,100),

        "orbit":
            random.randint(400,1000),

        "speed":
            round(
                random.uniform(7,8),
                2
            )
    }

def initialize():

    for _ in range(20):

        satellites.append(
            create_satellite()
        )

def add_satellite():

    satellites.append(
        create_satellite()
    )

initialize()