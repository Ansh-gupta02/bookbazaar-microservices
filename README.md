# 🔒 BookBazaar Microservices — Task 4: SonarQube Security Scanning Integration

This repository documents the integration of **SonarQube** into the **BookBazaar Microservices** architecture as part of **Task 4** for the CodTech Internship. The purpose of this task is to automate static code analysis using **SonarScanner** and identify security vulnerabilities and code quality issues.

---

## 🚀 Objective

Integrate **SonarQube** into the CI/CD process to perform static code analysis and generate a report on:
- Bugs 🐞
- Vulnerabilities 🔐
- Code smells 💨
- Security hotspots 🔥

---

## 🛠 Tech Stack Used

| Category          | Tools / Tech                             |
|-------------------|-------------------------------------------|
| Microservices     | Node.js, Express.js                      |
| Orchestration     | Kubernetes                               |
| Containerization  | Docker                                   |
| Security Scanning | SonarQube (via Docker), SonarScanner CLI |
| OS                | Windows 11                               |

---

## ⚙️ SonarQube Setup & Configuration

### ✅ Tools Used:
- **SonarQube (LTS version)** — via Docker on port `9000`
- **SonarScanner CLI** — installed locally
- **Java 17 (Eclipse Adoptium)** — required for SonarScanner

### 🧪 SonarScanner Command

sonar-scanner.bat ^
  -D"sonar.projectKey=BookBazaar-Microservices" ^
  -D"sonar.sources=." ^
  -D"sonar.host.url=http://localhost:9000" ^
  -D"sonar.login=your_token_here"

  
📂 Sonar Project Properties (sonar-project.properties)

sonar.projectKey=BookBazaar-Microservices
sonar.sources=.
sonar.exclusions=**/node_modules/**, **/*.test.js
sonar.host.url=http://localhost:9000
sonar.language=js


📸 Screenshots
🔹 Terminal Screenshots

Description	Screenshot
Docker Desktop showing SonarQube	
K8s Pods & Services running	
Postman test confirming endpoints	

🔹 SonarQube Dashboard Screenshots
Description	Screenshot
SonarQube Dashboard Overview	
Issues Identified	
Security Hotspots / Summary	

📊 Result Summary
✅ Successfully scanned all 3 microservices (auth, book, order)

🐞 Bugs and code smells reported

🔐 Security hotspots highlighted

📉 Suggestions on code improvement from SonarQube

📌 How to View the Report
Run SonarQube using Docker:


docker run -d --name sonarqube -p 9000:9000 sonarqube:lts
Navigate to http://localhost:9000

Login using the token, and view the BookBazaar-Microservices project dashboard.

✅ Task Status
 Installed and Configured SonarQube

 Integrated SonarScanner CLI

 Performed static code analysis

 Screenshots collected and documented

 Changes committed in separate branch task4-sonarqube

git add README.md
git commit -m "Task 4: Added final SonarQube README documentation with screenshots"
git push origin task4-sonarqube
