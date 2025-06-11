
# 🚀 TechSpace

TechSpace is a full-stack collaborative tech platform. This project leverages modern tools like **Docker**, **Node.js**, and **Next.js** to simplify development and deployment.

---

## ⚙️ Tech Stack

- **Frontend**: Next.js (TypeScript)
- **Backend**: Express.js (Node.js)
- **Containerization**: Docker, Docker Compose

---

## 📁 Project Structure

```
TechSpace/
├── backend/
│   ├── .dockerignore
│   ├── Dockerfile
│   ├── index.js
│   ├── package.json
│   └── package-lock.json
│
├── frontend/
│   ├── Dockerfile
│   ├── README.md
│   ├── .dockerignore
│   ├── .gitignore
│   ├── public/
│   ├── src/app/
│   ├── package.json
│   ├── package-lock.json
│   ├── next.config.ts
│   ├── eslint.config.mjs
│   ├── postcss.config.mjs
│   └── tsconfig.json
│
├── .gitignore
└── docker-compose.yml
```

---

## 🛠️ Prerequisites

> ⚠️ **NOTE for First-Time Users**  
Before proceeding, please ensure you:
- Have **Docker** and **Docker Desktop** installed and set up
- Keep **Docker Desktop running at all times** while using the project

---

## 🧾 Getting Started

### 🌀 Step 1: Clone the Repository

```sh
git clone https://github.com/YadavPrasad/TechSpace.git
cd TechSpace
```

---

### 🧱 Step 2: Build and Run the Full Stack (Backend + Frontend + DB)

This will build everything and spin up all services:

```sh
docker compose up --build
```

🔁 This will:
- Build the frontend and backend images
- Spin up all containers
- Auto-reload backend on changes

> 🚫 Note: The **frontend will NOT hot-reload** inside Docker

---

## 🧪 Optional: Backend-Only Mode

If you're only working on the backend and want faster reloads:

```sh
docker compose up --build backend
```

This only builds and runs the backend container, useful for quick iteration.

---

## 🧹 To Stop and Clean Up

When you're done, gracefully shut everything down:

```sh
docker compose down
```

---

## 💡 Tips

- Ensure Docker Desktop is running before executing any `docker compose` commands
- For live frontend development, consider running the frontend locally outside Docker

---

## 🪪 License

This project is licensed under the [MIT License](LICENSE)

---

Made with ❤️ by [@YadavPrasad and @CodeForcer001](https://github.com/YadavPrasad and https://github.com/CodeForcer001s)
