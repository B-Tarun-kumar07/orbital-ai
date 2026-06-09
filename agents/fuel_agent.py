class FuelAgent:

    def evaluate(self, satellite):

        fuel = satellite["fuel"]

        if fuel > 70:
            score = 100

        elif fuel > 40:
            score = 70

        else:
            score = 30

        return score