import random

class CollisionAgent:

    def detect_collisions(self, satellites):

        collisions = []

        number_of_collisions = random.randint(
            1,
            max(1, len(satellites)//5)
        )

        used = set()

        for _ in range(number_of_collisions):

            sat1, sat2 = random.sample(
                satellites,
                2
            )

            pair = tuple(sorted([
                sat1["sat_id"],
                sat2["sat_id"]
            ]))

            if pair in used:
                continue

            used.add(pair)

            collisions.append({

                "satellite_1": sat1,

                "satellite_2": sat2,

                "collision_probability":
                    random.randint(60,99),

                "time_to_collision":
                    random.randint(30,600),

                "relative_speed":
                    round(
                        random.uniform(5,15),
                        2
                    )

            })

        return collisions