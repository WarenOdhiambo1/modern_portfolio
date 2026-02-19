from app.domain.contact import ContactSubmission
from app.infrastructure.supabase_repo import SupabaseContactRepository


class ContactService:
    def __init__(self, repo: SupabaseContactRepository | None = None) -> None:
        self._repo = repo or SupabaseContactRepository()

    def submit(self, submission: ContactSubmission) -> None:
        self._repo.create_submission(submission)
