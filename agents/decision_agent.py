from agents.collision_agent import CollisionAgent
from agents.negotiation_agent import NegotiationAgent

class DecisionAgent:

    def process(
        self,
        satellites
    ):

        collision_agent = CollisionAgent()

        negotiation_agent = NegotiationAgent()

        collisions = collision_agent.detect_collisions(
            satellites
        )

        results = []

        for collision in collisions:

            result = negotiation_agent.negotiate(

                collision["satellite_1"],

                collision["satellite_2"],

                collision

            )

            results.append({

                "collision":
                    collision,

                "decision":
                    result
            })

        return results