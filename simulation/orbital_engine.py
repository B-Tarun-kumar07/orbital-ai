import math


def update_satellite(sat, dt=1):

    sat["x"] += sat["vx"] * dt
    sat["y"] += sat["vy"] * dt
    sat["z"] += sat["vz"] * dt

    return sat


def update_all_satellites(satellites, dt=1):

    for sat in satellites:
        update_satellite(sat, dt)

    return satellites