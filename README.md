# 🚀 Mini PaaS Dashboard using AWS EC2, Docker & Node.js

## 📌 Project Overview

Mini PaaS Dashboard is a cloud-based deployment platform that enables users to deploy and manage Docker containers through a simple web dashboard. The project was developed and tested on Ubuntu Linux and deployed on AWS EC2.

---

## 🚀 Features

- Deploy Docker containers
- Check container status
- View application logs
- Web-based dashboard
- Dockerized Node.js application
- GitHub integration
- SSH-based Git authentication
- AWS EC2 deployment

---

## 🛠️ Technologies Used

- AWS EC2
- Ubuntu Linux
- Docker
- Node.js
- HTML
- CSS
- JavaScript
- Bash
- Git
- GitHub

---

## 🏗️ Architecture

```text
User
   │
Browser
   │
AWS EC2
   │
Node.js Dashboard
   │
Docker Engine
   │
Docker Container
```

---

## 📂 Project Structure

```text
mini-paas/
├── app.js
├── Dockerfile
├── deploy.sh
├── index.html
├── README.md
```

---

## ⚙️ Installation

### Clone Repository

```bash
git clone git@github.com:DharshanK24/mini-paas.git
cd mini-paas
```

### Build Docker Image

```bash
docker build -t miniapp .
```

### Run Docker Container

```bash
docker run -d \
--name miniapp \
-p 3000:3000 \
-v /var/run/docker.sock:/var/run/docker.sock \
miniapp
```

### Open in Browser

```text
http://<EC2-Public-IP>:3000
```

---

## 🎯 Skills Demonstrated

- AWS EC2 Deployment
- Docker Containerization
- Linux Administration
- Git & GitHub
- SSH Authentication
- Node.js Application Deployment

---

## 🔮 Future Enhancements

- Jenkins CI/CD
- Docker Compose
- Nginx Reverse Proxy
- Prometheus Monitoring
- Grafana Dashboard
- Kubernetes Deployment

---

## 👨‍💻 Author

**Dharshan K**

Final Year Computer Science Engineering Student

Aspiring Cloud & DevOps Engineer
