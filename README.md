# Mini PaaS Platform 

## Overview

Mini PaaS is a simple Platform as a Service project built using Node.js, Docker, Bash, and Linux. It allows users to deploy and manage containers through a web dashboard.

---

## Features

- Dockerized Node.js application
- Automated deployment using Bash script
- Container status monitoring
- View application logs
- Simple dashboard UI

---

## Technologies Used

- Node.js
- Docker
- Bash
- Linux
- HTML

---

## Project Structure

```text
mini-paas/
├── app.js
├── Dockerfile
├── deploy.sh
├── index.html
├── README.md
└── screenshots/
```

---

## How to Run

1. Clone the repository

```bash
git clone https://github.com/DharshanK24/mini-paas.git
```

2. Build Docker image

```bash
sudo docker build -t miniapp:latest .
```

3. Run the container

```bash
sudo docker run -d --restart=always -p 3002:3000 -v /var/run/docker.sock:/var/run/docker.sock --name miniapp miniapp:latest
```

4. Open in browser

```text
http://localhost:3002
```

---

## Future Enhancements

- AWS EC2 Deployment
- GitHub Actions CI/CD
- Nginx Reverse Proxy
- Prometheus Monitoring
- Grafana Dashboard
- Kubernetes Deployment
