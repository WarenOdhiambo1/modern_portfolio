from pydantic import BaseModel, EmailStr, Field


class ContactRequest(BaseModel):
    name: str = Field(..., min_length=2, max_length=120)
    email: EmailStr
    message: str = Field(..., min_length=10, max_length=2000)


class ContactResponse(BaseModel):
    status: str


class AboutResponse(BaseModel):
    title: str
    body: str
    highlight: str


class ExperienceItemResponse(BaseModel):
    title: str
    org: str
    detail: str


class ProjectItemResponse(BaseModel):
    title: str
    outcome: str
    stack: str


class CertificationItemResponse(BaseModel):
    name: str
    issuer: str
    issueDate: str
    expiryDate: str
    credentialId: str
    credentialUrl: str
    priority: int


class TestimonialItemResponse(BaseModel):
    quote: str
    name: str
    org: str


class ContactSectionResponse(BaseModel):
    title: str
    line: str
    email: str


class PortfolioResponse(BaseModel):
    about: AboutResponse
    experience: list[ExperienceItemResponse]
    projects: list[ProjectItemResponse]
    certifications: list[CertificationItemResponse]
    testimonials: list[TestimonialItemResponse]
    contact: ContactSectionResponse
    whatsappPhone: str
