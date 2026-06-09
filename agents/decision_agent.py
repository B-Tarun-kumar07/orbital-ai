class Satellite:
    def __init__(self, sat_id, priority, fuel):
        self.sat_id = sat_id
        self.priority = priority
        self.fuel = fuel


def decide_maneuver(sat1, sat2):

    # Lower priority satellite moves
    if sat1.priority < sat2.priority:
        return sat1

    if sat2.priority < sat1.priority:
        return sat2

    # If priority same, lower fuel satellite stays
    if sat1.fuel > sat2.fuel:
        return sat1

    if sat2.fuel > sat1.fuel:
        return sat2

    # Final tie breaker
    return sat1 if sat1.sat_id < sat2.sat_id else sat2


sat_a = Satellite(101, 10, 50)
sat_b = Satellite(202, 5, 80)

decision = decide_maneuver(sat_a, sat_b)

print(f"Satellite {decision.sat_id} should move")