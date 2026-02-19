from __future__ import annotations

import time
from collections import defaultdict
from typing import Callable

from fastapi import Request
from starlette.middleware.base import BaseHTTPMiddleware
from starlette.responses import JSONResponse


class RateLimitMiddleware(BaseHTTPMiddleware):
    def __init__(self, app, max_requests: int, window_seconds: int, paths: set[str]) -> None:
        super().__init__(app)
        self._max_requests = max_requests
        self._window_seconds = window_seconds
        self._paths = paths
        self._bucket: dict[tuple[str, str], list[float]] = defaultdict(list)

    async def dispatch(self, request: Request, call_next: Callable):
        if request.url.path not in self._paths:
            return await call_next(request)

        client_ip = self._client_ip(request)
        key = (client_ip, request.url.path)
        now = time.time()
        window_start = now - self._window_seconds

        timestamps = self._bucket[key]
        timestamps = [ts for ts in timestamps if ts >= window_start]
        timestamps.append(now)
        self._bucket[key] = timestamps

        if len(timestamps) > self._max_requests:
            return JSONResponse(
                status_code=429,
                content={"detail": "Too many requests. Please try again later."}
            )

        return await call_next(request)

    @staticmethod
    def _client_ip(request: Request) -> str:
        forwarded_for = request.headers.get("x-forwarded-for")
        if forwarded_for:
            return forwarded_for.split(",")[0].strip()
        return request.client.host if request.client else "unknown"


class BodySizeLimitMiddleware(BaseHTTPMiddleware):
    def __init__(self, app, max_bytes: int, methods: set[str]) -> None:
        super().__init__(app)
        self._max_bytes = max_bytes
        self._methods = methods

    async def dispatch(self, request: Request, call_next: Callable):
        if request.method.upper() not in self._methods:
            return await call_next(request)

        content_length = request.headers.get("content-length")
        if content_length:
            try:
                if int(content_length) > self._max_bytes:
                    return JSONResponse(
                        status_code=413,
                        content={"detail": "Request body too large."}
                    )
            except ValueError:
                return JSONResponse(
                    status_code=400,
                    content={"detail": "Invalid content-length header."}
                )
        else:
            body = await request.body()
            if len(body) > self._max_bytes:
                return JSONResponse(
                    status_code=413,
                    content={"detail": "Request body too large."}
                )

        return await call_next(request)
