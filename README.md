
# React Task Manager

This is a React-based task management application that allows users to manage tasks with attributes like title, description, and status.

---
## Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/oshritmalach/task-manager-ui.git
cd task-manager-ui
```

### 2. Run Locally (Optional)
Install dependencies and start the development server:
```bash
npm install
npm start
```

The app will be available at `http://localhost:3005`.

---

## Docker Instructions

### 1. Build and Run with Docker
Build the Docker image and run the container:
```bash
docker build -t task-manager-ui .
docker run -d -p 3005:80 task-manager-ui
```

Access the app at `http://localhost:3005`.

### 2. Use Docker Compose (Optional)
If you prefer using Docker Compose, run:
```bash
docker-compose up --build
```