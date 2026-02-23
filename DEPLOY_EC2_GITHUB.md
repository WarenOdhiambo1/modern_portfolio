# EC2 Auto-Deploy From GitHub

This setup redeploys your website on every push to `main`.

## 1) One-time EC2 preparation

Run on EC2:

```bash
cd ~
git clone https://github.com/<your-user>/<your-repo>.git modern_portfolio
cd modern_portfolio
sudo yum install -y docker git nginx
sudo systemctl enable --now docker
sudo usermod -aG docker ec2-user
```

Create `api/.env` on EC2 and include your production values.

## 2) GitHub repo secrets

In GitHub: `Settings -> Secrets and variables -> Actions -> New repository secret`

- `EC2_HOST` = your EC2 public IP or DNS
- `EC2_USER` = `ec2-user`
- `EC2_SSH_KEY` = private key content (`-----BEGIN ...`)
- `NEXT_PUBLIC_API_BASE_URL` = `http://<EC2_HOST>/api`

## 3) Workflow file

Workflow is already added at:

- `.github/workflows/deploy-ec2.yml`

It does:

1. `git fetch/reset` on EC2
2. `docker compose up -d --build`
3. API health check
4. nginx restart

## 4) Fix invalid host header

On EC2, ensure backend trusted hosts allow your public host/IP:

```bash
cd ~/modern_portfolio/api
sed -n '1,200p' .env
```

Required values:

- `APP_ALLOWED_HOSTS=<public-ip>,<public-dns>,localhost,127.0.0.1`
- `APP_PROD_ALLOWED_ORIGINS=http://<public-ip>,http://<public-dns>`

Then redeploy:

```bash
cd ~/modern_portfolio
sudo DOCKER_BUILDKIT=0 docker compose up -d --build
```

## 5) Trigger deploy

Push to `main`:

```bash
git add .
git commit -m "Deploy update"
git push origin main
```

Then check GitHub Actions tab.
