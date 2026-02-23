variable "project" {
  type        = string
  description = "Project name"
}

variable "environment" {
  type        = string
  description = "Environment name"
}

variable "vpc_id" {
  type        = string
  description = "VPC ID"
}

variable "public_subnet_ids" {
  type        = list(string)
  description = "Public subnet IDs"
}

variable "container_port" {
  type        = number
  description = "Container port"
  default     = 8000
}

variable "desired_count" {
  type        = number
  description = "ECS desired task count"
  default     = 1
}

variable "ecr_repo_name" {
  type        = string
  description = "ECR repository name"
}

variable "image_tag" {
  type        = string
  description = "Container image tag"
  default     = "latest"
}

variable "cpu" {
  type        = number
  description = "Task CPU units"
  default     = 256
}

variable "memory" {
  type        = number
  description = "Task memory (MiB)"
  default     = 512
}

variable "allowed_ingress_cidrs" {
  type        = list(string)
  description = "Allowed ingress CIDR blocks for ALB"
  default     = ["0.0.0.0/0"]
}
