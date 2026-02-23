terraform {
  required_version = ">= 1.5.0"
  backend "s3" {
    bucket         = "tfstate-modern-portfolio-prod-waren"
    key            = "prod/terraform.tfstate"
    region         = "us-east-1"
    dynamodb_table = "tfstate-locks-modern-portfolio-prod"
    encrypt        = true
  }
}
