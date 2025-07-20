#  BookBazaar – A Microservices-Based Bookstore App

**BookBazaar** is a microservices-based cloud-ready bookstore application. It demonstrates containerized services using **Docker** and **Kubernetes**, built with **Node.js**, tested using **Postman**, and deployed locally using **Minikube**.

---

## Tech Stack

- **Backend:** Node.js + Express.js
- **Frontend (optional):** HTML + Tailwind CSS
- **API Testing:** Postman
- **Containerization:** Docker
- **Orchestration:** Kubernetes (Minikube / Docker Desktop)
- **Version Control:** Git & GitHub

---

## 📁 Project Structure

bookbazaar/
├── auth-service/ # Authentication (signup/login)

├── book-service/ # Books listing and CRUD

├── order-service/ # Orders management

├── frontend/ # Optional frontend using TailwindCSS

└── k8s/ # Kubernetes YAML manifests

├── auth-deployment.yaml

├── book-deployment.yaml

└── order-deployment.yaml


---

## 🚀 Running Locally (Without Kubernetes)

Open 3 terminals in VS Code and run each microservice:


cd auth-service
npm install
node index.js

cd book-service
npm install
node index.js


cd order-service
npm install
node index.js


🐳 Docker Commands (Build & Push)

docker build -t 8528233479/auth-service ./auth-service
docker push 8528233479/auth-service


docker build -t 8528233479/book-service ./book-service
docker push 8528233479/book-service


docker build -t 8528233479/order-service ./order-service
docker push 8528233479/order-service



☸️ Kubernetes Deployment
Step 1: Start Minikube
minikube start

Step 2: Apply Kubernetes YAML Files
kubectl apply -f k8s/

Step 3: Access Services (NodePort)
Service	URL
Auth Service	http://localhost:30080

Book Service	http://localhost:30081

Order Service	http://localhost:30082


📮 Sample Postman API Calls
🔐 Auth Service

POST http://localhost:30080/signup

Body:
{
  "username": "harshit",
  "password": "1234"
}

Login:
POST http://localhost:30080/login

Body:
{
  "username": "harshit",
  "password": "1234"
}


📚 Book Service

Add Book:
POST http://localhost:30081/books

Body:
{
  "title": "Harry Potter",
  "author": "J.K. Rowling"
}

Get All Books:
GET http://localhost:30081/books


📦 Order Service
Place Order:

POST http://localhost:30082/orders
Body:
{
  "username": "harshit",
  "book": "Harry Potter"
}

Get All Orders:
GET http://localhost:30082/orders


✅ Output
All 3 microservices are up and running on Kubernetes.

Services are tested via Postman and working perfectly.

Docker images pushed to DockerHub.

Kubernetes cluster handles deployment and service routing using NodePort.

## 📸 Screenshots

### 🐳 Docker Desktop – Running Containers
![Docker Screenshot](./screenshots/image(1).png)
![Docker Screenshot](./screenshots/image(2).png)


---

### ☸️ Kubernetes Deployments (via kubectl)
![Kubernetes Deployments](./screenshots/image(3).png)

---

### 📮 Postman API Testing
![Postman Testing](./screenshots//image(4).png)
![Postman Testing](./screenshots//image(5).png)


---

## 🚀 Running Without Kubernetes (Local Mode)


cd auth-service && npm install && node index.js
cd book-service && npm install && node index.js
cd order-service && npm install && node index.js

👨‍💻 Developed By
Harshit Gupta
BTech CSE, DIT University
Specialization: Cloud Computing & DevOps


📜 License
This project was created as part of the CodTech Internship - July 2025.
Feel free to fork, use, or extend this for educational purposes.

