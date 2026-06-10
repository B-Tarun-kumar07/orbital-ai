from fastapi import APIRouter
from pydantic import BaseModel

router = APIRouter()


class NegotiationRequest(BaseModel):
    satellite_a: str
    satellite_b: str
    company_a_response: str | None = None
    company_b_response: str | None = None


@router.post("/negotiation")
def negotiate(request: NegotiationRequest):

    if (
        request.company_a_response == "ACCEPTED"
        and request.company_b_response == "ACCEPTED"
    ):
        reason = "Both operators accepted"

    elif (
        request.company_a_response == "ACCEPTED"
        or request.company_b_response == "ACCEPTED"
    ):
        reason = "Timeout policy applied"

    else:
        reason = "AI autonomous decision"

    return {
        "decision": "MOVE_SATELLITE",
        "target_orbit": 4,
        "risk_before": 91,
        "risk_after": 4,
        "reason": reason,
    }