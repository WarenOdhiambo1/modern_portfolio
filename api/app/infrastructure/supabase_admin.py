from supabase import Client, create_client

from app.core.config import get_settings


class SupabaseAdmin:
    def __init__(self) -> None:
        settings = get_settings()
        self._client: Client = create_client(
            settings.supabase_url, settings.supabase_service_role_key
        )

    def ping(self) -> None:
        self._client.table("projects").select("id").limit(1).execute()
