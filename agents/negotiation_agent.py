from agents.fuel_agent import FuelAgent

class NegotiationAgent:

    def negotiate(
        self,
        sat1,
        sat2,
        collision
    ):

        fuel_agent = FuelAgent()

        score1 = 0
        score2 = 0

        score1 += sat1["priority"] * 10
        score2 += sat2["priority"] * 10

        score1 += fuel_agent.evaluate(sat1)
        score2 += fuel_agent.evaluate(sat2)

        if score1 >= score2:

            winner = sat1
            mover = sat2

        else:

            winner = sat2
            mover = sat1

        return {

            "winner":
                winner["sat_id"],

            "move_satellite":
                mover["sat_id"],

            "winner_score":
                score1 if score1 >= score2 else score2,

            "loser_score":
                score2 if score1 >= score2 else score1
        }