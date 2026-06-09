from simulation.satellite_generator import (
    satellites,
    add_satellite
)

from agents.decision_agent import DecisionAgent


def display_results(results):

    if not results:
        print("\nNo collisions detected.\n")
        return

    for r in results:

        collision = r["collision"]
        decision = r["decision"]

        sat1 = collision["satellite_1"]
        sat2 = collision["satellite_2"]

        print("\n" + "=" * 60)
        print("COLLISION DETECTED")
        print("=" * 60)

        print("\nSATELLITE A")
        print(f"ID: SAT-{sat1['sat_id']}")
        print(f"Mission: {sat1['mission']}")
        print(f"Priority: {sat1['priority']}")
        print(f"Fuel: {sat1['fuel']}%")
        print(f"Orbit: {sat1['orbit']} km")
        print(f"Speed: {sat1['speed']} km/s")

        print("\nSATELLITE B")
        print(f"ID: SAT-{sat2['sat_id']}")
        print(f"Mission: {sat2['mission']}")
        print(f"Priority: {sat2['priority']}")
        print(f"Fuel: {sat2['fuel']}%")
        print(f"Orbit: {sat2['orbit']} km")
        print(f"Speed: {sat2['speed']} km/s")

        print("\nCOLLISION ANALYSIS")
        print(
            f"Collision Probability: "
            f"{collision['collision_probability']}%"
        )

        print(
            f"Time To Collision: "
            f"{collision['time_to_collision']} seconds"
        )

        print(
            f"Relative Speed: "
            f"{collision['relative_speed']} km/s"
        )

        print("\nNEGOTIATION RESULT")

        print(
            f"Winner: SAT-{decision['winner']}"
        )

        print(
            f"Satellite To Move: "
            f"SAT-{decision['move_satellite']}"
        )

        print(
            f"Winner Score: "
            f"{decision['winner_score']}"
        )

        print(
            f"Loser Score: "
            f"{decision['loser_score']}"
        )

        print("\nRECOMMENDED ACTION")

        print(
            f"Move SAT-{decision['move_satellite']} "
            f"to a safe orbit"
        )

        print("Human Override Window: 60 seconds")

        print("Automatic Maneuver Status: READY")

        print("=" * 60)


def run():

    while True:

        print("\n")
        print("=" * 40)
        print("ORBITAL AI SATELLITE TRAFFIC SYSTEM")
        print("=" * 40)

        print(f"\nCurrent Satellites: {len(satellites)}")

        print("\n1. Run Collision Analysis")
        print("2. Add Satellite")
        print("3. Show Satellite Count")
        print("4. Exit")

        choice = input("\nEnter Choice: ")

        if choice == "1":

            decision_agent = DecisionAgent()

            results = decision_agent.process(
                satellites
            )

            display_results(results)

        elif choice == "2":

            add_satellite()

            print(
                f"\nSatellite Added Successfully!"
            )

            print(
                f"Total Satellites: {len(satellites)}"
            )

        elif choice == "3":

            print(
                f"\nCurrent Satellite Count: "
                f"{len(satellites)}"
            )

        elif choice == "4":

            print("\nExiting Orbital AI...")
            break

        else:

            print("\nInvalid Choice")


if __name__ == "__main__":
    run()