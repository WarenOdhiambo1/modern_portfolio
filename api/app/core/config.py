from functools import lru_cache
from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    model_config = SettingsConfigDict(env_file=".env", env_prefix="APP_")

    supabase_url: str
    supabase_service_role_key: str
    allowed_origins: str = "http://localhost:3000"
    environment: str = "dev"
    rate_limit_per_minute: int = 30
    max_body_bytes: int = 20_000
    allowed_hosts: str = "localhost,127.0.0.1"
    prod_allowed_origins: str | None = None

    def cors_origins(self) -> list[str]:
        if self.environment == "prod" and self.prod_allowed_origins:
            return [
                origin.strip()
                for origin in self.prod_allowed_origins.split(",")
                if origin.strip()
            ]
        return [origin.strip() for origin in self.allowed_origins.split(",") if origin.strip()]

    def trusted_hosts(self) -> list[str]:
        return [host.strip() for host in self.allowed_hosts.split(",") if host.strip()]


@lru_cache
def get_settings() -> Settings:
    return Settings()
