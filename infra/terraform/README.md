# Terraform (Phase 9)

## Step 2: Bootstrap remote state

### 1) Configure AWS credentials (one-time)
```
aws configure
```

### 2) Create remote state resources
Pick unique names:
- S3 bucket: tfstate-modern-portfolio-prod-<unique>
- DynamoDB table: tfstate-locks-modern-portfolio-prod

Run:
```
cd infra/terraform/bootstrap
terraform init
terraform apply \
  -var "state_bucket_name=tfstate-modern-portfolio-prod-<unique>" \
  -var "lock_table_name=tfstate-locks-modern-portfolio-prod"
```

### 3) Update backend config
Edit:
`infra/terraform/envs/prod/backend.tf`

Replace:
- REPLACE_STATE_BUCKET
- REPLACE_LOCK_TABLE

Then:
```
cd infra/terraform/envs/prod
terraform init
```
