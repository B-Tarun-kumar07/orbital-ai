import copy

from simulation.orbital_engine import update_satellite
from simulation.collision import detect_collisions


class CollisionAgent:

    def predict_collisions(
            self,
            satellites,
            future_seconds=60):

        future_satellites = copy.deepcopy(
            satellites
        )

        for sat in future_satellites:

            update_satellite(
                sat,
                dt=future_seconds
            )

        collisions = detect_collisions(
            future_satellites
        )

        return collisions

    def get_critical_collisions(
            self,
            satellites,
            future_seconds=60):

        collisions = self.predict_collisions(
            satellites,
            future_seconds
        )

        critical_collisions = []

        for collision in collisions:

            if collision[
                "collision_probability"
            ] >= 50:

                critical_collisions.append(
                    collision
                )

        return critical_collisions

    def get_highest_risk_collision(
            self,
            satellites,
            future_seconds=60):

        collisions = self.predict_collisions(
            satellites,
            future_seconds
        )

        if len(collisions) == 0:
            return None

        highest = max(
            collisions,
            key=lambda c:
            c["collision_probability"]
        )

        return highest