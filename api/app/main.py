from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from starlette.middleware.trustedhost import TrustedHostMiddleware

from app.core.config import get_settings
from app.interfaces.routes import router
from app.middleware.security import BodySizeLimitMiddleware, RateLimitMiddleware

settings = get_settings()

docs_enabled = settings.environment != "prod"

app = FastAPI(
    title="Portfolio API",
    version="1.0.0",
    docs_url="/docs" if docs_enabled else None,
    redoc_url="/redoc" if docs_enabled else None,
    openapi_url="/openapi.json" if docs_enabled else None
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.cors_origins(),
    allow_credentials=True,
    allow_methods=["GET", "POST", "OPTIONS"],
    allow_headers=["*"]
)

app.add_middleware(
    TrustedHostMiddleware,
    allowed_hosts=settings.trusted_hosts()
)

app.add_middleware(
    BodySizeLimitMiddleware,
    max_bytes=settings.max_body_bytes,
    methods={"POST", "PUT", "PATCH"}
)

app.add_middleware(
    RateLimitMiddleware,
    max_requests=settings.rate_limit_per_minute,
    window_seconds=60,
    paths={"/contact"}
)

app.include_router(router)
