import logging

from fastapi import APIRouter, HTTPException

from app.application.contact_service import ContactService
from app.domain.contact import ContactSubmission
from app.infrastructure.supabase_admin import SupabaseAdmin
from app.interfaces.schemas import ContactRequest, ContactResponse
from app.core.config import get_settings

router = APIRouter()
logger = logging.getLogger(__name__)


@router.get("/health")
def health() -> dict[str, str]:
    return {"status": "ok"}


@router.get("/supabase/health")
def supabase_health() -> dict[str, str]:
    if get_settings().environment == "prod":
        raise HTTPException(status_code=404, detail="Not found")
    try:
        SupabaseAdmin().ping()
        return {"status": "ok"}
    except Exception as exc:
        raise HTTPException(status_code=500, detail="Supabase connection failed") from exc


@router.post("/contact", response_model=ContactResponse)
def submit_contact(payload: ContactRequest) -> ContactResponse:
    try:
        service = ContactService()
        submission = ContactSubmission(
            name=payload.name,
            email=payload.email,
            message=payload.message
        )
        service.submit(submission)
        return ContactResponse(status="accepted")
    except Exception as exc:
        logger.exception("Contact submission failed")
        raise HTTPException(status_code=500, detail="Failed to store submission") from exc
