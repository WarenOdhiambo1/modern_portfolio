from supabase import Client, create_client

from app.core.config import get_settings
from app.domain.contact import ContactSubmission


class SupabaseContactRepository:
    def __init__(self) -> None:
        settings = get_settings()
        self._client: Client = create_client(
            settings.supabase_url, settings.supabase_service_role_key
        )

    def create_submission(self, submission: ContactSubmission) -> None:
        payload = {
            "name": submission.name,
            "email": submission.email,
            "message": submission.message
        }
        response = self._client.table("contact_submissions").insert(payload).execute()
        if getattr(response, "error", None):
            raise RuntimeError(response.error.message)
