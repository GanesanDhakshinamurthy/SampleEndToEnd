# Sample End-to-End App

Full-stack application: Angular + Spring Boot + Docker + Kubernetes + CI/CD

## Quick Start

### Local Development (hot reload)

```bash
# Terminal 1: Backend
cd backend && mvn spring-boot:run

# Terminal 2: Frontend (proxies /api → localhost:8080)
cd frontend && ng serve
```

Open http://localhost:4200

### Docker Compose

```bash
docker compose up --build
```

Open http://localhost:4200

## Project Structure

- `frontend/` — Angular 21 with Tailwind CSS
- `backend/` — Spring Boot 3.4 REST API (Java 21)
- `k8s/` — Kubernetes manifests (Kustomize base + prod overlay)
- `.github/workflows/` — CI/CD pipeline (build → push to GHCR → deploy to k3s)

## API Endpoints

- `GET /api/health` — Health check
- `GET /api/sample-data` — Sample data items

## Deployment

The CI/CD pipeline builds Docker images, pushes to GHCR, and deploys to a k3s cluster on Oracle Cloud.

Before deploying, update:
1. `k8s/` image references with your GitHub username
2. `k8s/overlays/prod/ingress-patch.yaml` with your VM's public IP
3. Add `KUBECONFIG` secret to GitHub repository settings
