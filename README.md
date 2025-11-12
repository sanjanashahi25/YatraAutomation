# ✈️ YatraAutomation - Playwright E2E Test Framework

This repository contains a **robust end-to-end automation framework** built using **Playwright + TypeScript + Allure Reporting** to automate real-world user flows on **[Yatra.com](https://www.yatra.com)** — covering flight search, login, and other key modules.

---

## 🚀 Features

- ⚙️ **Playwright + TypeScript** for modern, fast, and reliable browser automation  
- 🧩 **Page Object Model (POM)** for scalable and maintainable test design  
- 📊 **Allure Reports** for rich and interactive test reporting  
- 🌐 **Multi-environment config** support (Dev, QA, Prod)  
- 🧱 **Custom fixtures & reusable utilities** for clean test setup  
- ✅ **CI/CD ready** – easily integrable with GitHub Actions, Jenkins, or Azure Pipelines  

---

## 🗂️ Project Structure

YatraAutomation/
│
├── config/ # Environment configuration files
│ ├── dev.config.ts
│ ├── qa.config.ts
│ ├── prod.config.ts
│ └── index.ts
│
├── fixtures/ # Custom Playwright fixtures and test data
│ ├── customFixtures.ts
│ └── testData.json
│
├── pages/ # Page Object Model classes
│ ├── BasePage.ts
│ └── AuthPage.ts
│
├── tests/ # Organized test suites
│ ├── login/
│ ├── flights/
│ ├── profile/
│ └── regression/
│
├── utils/ # Utility functions and helpers
│ ├── allureEnvWriter.ts
│ └── env.ts
│
├── playwright.config.ts # Playwright test runner configuration
├── package.json
├── tsconfig.json
└── README.md

---

## ⚡ Setup Instructions

### 1️⃣ Clone the repository
```bash
git clone https://github.com/sanjanashahi25/YatraAutomation.git
cd YatraAutomation
nstall dependencies
npm install

3️⃣ Run Tests

To execute all tests:

npx playwright test


Run tests for a specific project/browser:

npx playwright test --project=chromium

📈 Generate Allure Report
1️⃣ Run tests with Allure
npm run test:allure

2️⃣ View report
npm run allure:open