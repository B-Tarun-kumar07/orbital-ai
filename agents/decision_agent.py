from agents.collision_agent import CollisionAgent
from agents.negotiation_agent import NegotiationAgent
from simulation.satellite_generator import satellites


class DecisionAgent:

    def process(
        self,
        satellites
    ):

        collision_agent = CollisionAgent()

        negotiation_agent = NegotiationAgent()

        collisions = collision_agent.predict_collisions(
            satellites,
            future_seconds=60
        )

        results = []

        for collision in collisions:

            sat1 = None
            sat2 = None

            for sat in satellites:

                if sat["sat_id"] == collision["sat1_id"]:
                    sat1 = sat

                if sat["sat_id"] == collision["sat2_id"]:
                    sat2 = sat

            if sat1 is None or sat2 is None:
                continue

            result = negotiation_agent.negotiate(
                sat1,
                sat2,
                collision
            )

            results.append({

                "collision": collision,

                "decision": result

            })

        return results