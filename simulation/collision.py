import math

SAFE_DISTANCE = 500  # km


def calculate_distance(sat1, sat2):

    return math.sqrt(
        (sat2["x"] - sat1["x"]) ** 2 +
        (sat2["y"] - sat1["y"]) ** 2 +
        (sat2["z"] - sat1["z"]) ** 2
    )


def calculate_relative_speed(sat1, sat2):

    vx = sat1["vx"] - sat2["vx"]
    vy = sat1["vy"] - sat2["vy"]
    vz = sat1["vz"] - sat2["vz"]

    return math.sqrt(
        vx ** 2 +
        vy ** 2 +
        vz ** 2
    )


def calculate_probability(distance, relative_speed):

    distance_factor = math.exp(-distance / 200)

    speed_factor = min(relative_speed / 15, 1)

    probability = distance_factor * speed_factor * 100

    return round(probability, 2)


def calculate_time_to_collision(
    sat1,
    sat2,
    distance
):

    dx = sat2["x"] - sat1["x"]
    dy = sat2["y"] - sat1["y"]
    dz = sat2["z"] - sat1["z"]

    dvx = sat2["vx"] - sat1["vx"]
    dvy = sat2["vy"] - sat1["vy"]
    dvz = sat2["vz"] - sat1["vz"]

    if distance == 0:
        return 0

    closing_speed = (
        dx * dvx +
        dy * dvy +
        dz * dvz
    ) / distance

    if closing_speed < 0:
        return round(
            abs(distance / closing_speed),
            2
        )

    return None


def get_status(probability):

    if probability >= 80:
        return "CRITICAL"

    elif probability >= 50:
        return "WARNING"

    elif probability >= 20:
        return "CAUTION"

    else:
        return "SAFE"


def detect_collisions(satellites):

    collisions = []

    for i in range(len(satellites)):

        for j in range(i + 1, len(satellites)):

            sat1 = satellites[i]
            sat2 = satellites[j]

            distance = calculate_distance(
                sat1,
                sat2
            )

            if distance <= SAFE_DISTANCE:

                relative_speed = calculate_relative_speed(
                    sat1,
                    sat2
                )

                probability = calculate_probability(
                    distance,
                    relative_speed
                )

                time_to_collision = calculate_time_to_collision(
                    sat1,
                    sat2,
                    distance
                )

                status = get_status(
                    probability
                )

                collision = {
                    "sat1_id": sat1["sat_id"],
                    "sat2_id": sat2["sat_id"],
                    "distance": round(distance, 2),
                    "relative_speed": round(relative_speed, 2),
                    "collision_probability": probability,
                    "time_to_collision": time_to_collision,
                    "status": status
                }

                collisions.append(collision)

        sat1["collision_probability"] = probability if 'probability' in locals() else 0
        sat1["status"] = status if 'status' in locals() else "SAFE"

    return collisions