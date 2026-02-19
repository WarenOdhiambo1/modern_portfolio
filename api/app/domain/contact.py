from dataclasses import dataclass


@dataclass(frozen=True)
class ContactSubmission:
    name: str
    email: str
    message: str
