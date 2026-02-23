module "network" {
  source = "../../modules/network"

  project     = "modern-portfolio"
  environment = "prod"
}

module "api_service" {
  source = "../../modules/api_service"

  project           = "modern-portfolio"
  environment       = "prod"
  vpc_id            = module.network.vpc_id
  public_subnet_ids = module.network.public_subnet_ids
  ecr_repo_name     = "modern-portfolio-api"
  container_port    = 8000
  desired_count     = 0
}

output "vpc_id" {
  value = module.network.vpc_id
}

output "public_subnet_ids" {
  value = module.network.public_subnet_ids
}

output "api_ecr_repo_url" {
  value = module.api_service.ecr_repo_url
}
