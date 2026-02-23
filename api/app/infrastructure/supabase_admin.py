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

    def _table_rows(self, table_name: str, columns: str = "*") -> list[dict]:
        response = self._client.table(table_name).select(columns).execute()
        return getattr(response, "data", None) or []

    def get_portfolio_content(self) -> dict:
        site_rows = self._table_rows("site_content")
        site = site_rows[0] if site_rows else {}

        experience_rows = self._table_rows("experience")
        experience_rows = sorted(
            experience_rows,
            key=lambda row: (row.get("start_date") or "", row.get("created_at") or ""),
            reverse=True
        )

        project_rows = self._table_rows("projects")
        project_rows = sorted(
            project_rows,
            key=lambda row: row.get("created_at") or "",
            reverse=True
        )

        certification_rows = self._table_rows("certifications")
        certification_rows = sorted(
            certification_rows,
            key=lambda row: (row.get("priority") if row.get("priority") is not None else 9999)
        )

        testimonial_response = self._client.table("testimonials").select("*").eq("permission", True).execute()
        testimonial_rows = getattr(testimonial_response, "data", None) or []
        if not testimonial_rows:
            testimonial_rows = self._table_rows("testimonials")
        testimonial_rows = sorted(
            testimonial_rows,
            key=lambda row: row.get("created_at") or "",
            reverse=True
        )

        return {
            "about": {
                "title": site.get("about_title") or "About",
                "body": site.get("about_body") or "",
                "highlight": site.get("about_highlight") or "Systems-first execution"
            },
            "experience": [
                {
                    "title": row.get("title") or "",
                    "org": row.get("org") or "",
                    "detail": row.get("summary") or ""
                }
                for row in experience_rows
            ],
            "projects": [
                {
                    "title": row.get("title") or "",
                    "outcome": row.get("outcomes") or row.get("summary") or "",
                    "stack": row.get("stack") or ""
                }
                for row in project_rows
            ],
            "certifications": [
                {
                    "name": row.get("name") or "",
                    "issuer": row.get("issuer") or "",
                    "issueDate": str(row.get("issue_date") or ""),
                    "expiryDate": str(row.get("expiry_date") or ""),
                    "credentialId": row.get("credential_id") or "",
                    "credentialUrl": row.get("credential_url") or "",
                    "priority": row.get("priority") if row.get("priority") is not None else 0
                }
                for row in certification_rows
            ],
            "testimonials": [
                {
                    "quote": row.get("quote") or "",
                    "name": row.get("name") or "",
                    "org": row.get("company") or row.get("role") or ""
                }
                for row in testimonial_rows
            ],
            "contact": {
                "title": site.get("contact_title") or "Contact",
                "line": site.get("contact_line")
                or "If you need a systems-focused engineer to architect and deliver, let's talk.",
                "email": site.get("contact_email") or "waren9505@gmail.com"
            },
            "whatsappPhone": site.get("whatsapp_phone") or "254762548428"
        }
