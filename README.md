# Task 4 — SonarQube Security Scanning Integration (BookBazaar Microservices)

This task demonstrates how **SonarQube** was integrated into the **BookBazaar Microservices** project to scan for code vulnerabilities, bugs, and code smells as part of a DevSecOps pipeline.

---

##  Task Objective

✅ Integrate **SonarQube** to statically analyze all microservices (`auth`, `book`, `order`)  
✅ Capture issues, vulnerabilities, and bad practices  
✅ Push results to GitHub for review and evidence  

---

## 🧰 Tools Used

| Purpose              | Tool                      |
|----------------------|---------------------------|
| Codebase             | Node.js + Express         |
| Containerization     | Docker                    |
| Orchestration        | Kubernetes                |
| Security Scanning    | SonarQube (LTS, Docker)   |
| CLI Scanner          | SonarScanner 7.1 (local)  |
| OS                   | Windows 11 (PowerShell)   |

---

## ⚙️ Setup Steps

### ✅ Step 1: Run SonarQube via Docker


docker run -d --name sonarqube -p 9000:9000 sonarqube:lts
Then, open: http://localhost:9000
Login, and create a new project manually.

✅ Step 2: Install & Configure SonarScanner CLI
Installed SonarScanner in C:\sonarscanner

Added to environment PATH

Verified using:

sonar-scanner -v


✅ Step 3: sonar-project.properties Configuration
properties

sonar.projectKey=BookBazaar-Microservices

sonar.sources=.

sonar.exclusions=**/node_modules/**, **/*.test.js

sonar.host.url=http://localhost:9000

sonar.language=js


✅ Step 4: Run the SonarScanner


sonar-scanner.bat ^
  -D"sonar.projectKey=BookBazaar-Microservices" ^
  
  -D"sonar.sources=." ^
  
  -D"sonar.host.url=http://localhost:9000" ^
  
  -D"sonar.login=<your_token_here>"
  
📸 Terminal Evidence (Execution Proof)

![Docker SonarQube Running](./screenshots/image%20(22).png)
![SonarScanner Running](./screenshots/image%20(23).png)
![Scanner Success Log](./screenshots/image%20(24).png)

📊 SonarQube Analysis Report
Description	Screenshot
![Project Dashboard](./screenshots/image%20(12).png)
![Bugs & Vulnerabilities](./screenshots/image%20(13).png)
![Security Hotspots](./screenshots/image%20(14).png)



✅ Deliverables
 SonarQube security scanning integrated

 Terminal proof of setup and scan

 Screenshots of security report

 GitHub project and documentation completed

📁 Branching Strategy
This task was completed in a separate branch task4-sonarqube to maintain isolation from Task 3 work.

 Screenshots collected and documented

 Changes committed in separate branch task4-sonarqube

git add README.md
git commit -m "Task 4: Added final SonarQube README documentation with screenshots"
git push origin task4-sonarqube
