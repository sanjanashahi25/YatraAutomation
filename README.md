# 🚀 Yatra Automation Framework

> **Professional Playwright + TypeScript Automation Framework**  
> Designed for scalable, maintainable, and environment-driven UI test automation with **Allure Reports**.

---

## 📂 Folder Structure

YatraAutomation/
├── README.md
├── allure-results/ # Raw Allure test result files
├── config/ # Environment-specific configs (dev, qa, prod)
│ ├── dev.config.ts
│ ├── qa.config.ts
│ ├── prod.config.ts
│ └── index.ts
├── core/ # Base test setup & hooks
│ └── BaseTest.ts
├── fixtures/ # Test data & custom fixtures
│ ├── customFixtures.ts
│ └── testData.json
├── pages/ # Page Object Model classes
│ ├── AuthPage.ts
│ └── BasePage.ts
├── reports/ # Generated reports directory
│ └── test-results
├── tests/ # All test specs
│ ├── example.spec.ts
│ ├── login/
│ ├── flights/
│ ├── profile/
│ └── regression/
├── utils/ # Utility helpers
│ ├── allureEnvWriter.ts
│ ├── apiUtil.ts
│ ├── dateUtil.ts
│ ├── env.ts
│ ├── helper.ts
│ └── logger.ts
├── playwright.config.ts # Main Playwright configuration
├── package.json # Dependencies & scripts
└── package-lock.json


---

## ⚙️ Setup & Installation

| **Step** | **Command** | **Description** |
|-----------|--------------|----------------|
| 1️⃣ | `npm init -y` | Initialize Node project |
| 2️⃣ | `npm install -D @playwright/test typescript ts-node` | Install Playwright with TS support |
| 3️⃣ | `npx playwright install` | Install all browsers |
| 4️⃣ | `npm install -D allure-playwright` | Integrate Allure reports |
| 5️⃣ | `npm install dotenv dotenvx cross-env` | Handle environment variables |
| 6️⃣ | `npx tsc --init` | Initialize TypeScript configuration |
| 7️⃣ | `mkdir -p reports/{test-results,allure-results,allure-report}` | Create report folders |

---

## 🧪 Running Tests

| **Command** | **Description** |
|--------------|----------------|
| `npx playwright test` | Run all tests (headless mode) |
| `npx playwright test --headed` | Run tests in headed mode |
| `npx playwright test --project=chromium` | Run only in Chrome |
| `npx playwright test tests/login/login.spec.ts` | Run a specific test file |
| `cross-env TEST_ENV=qa npx playwright test` | Run with QA environment variables |
| `cross-env TEST_ENV=dev npx playwright test` | Run with DEV environment variables |

---

## 🧾 Reports & Results

| **Command** | **Description** |
|--------------|----------------|
| `npx allure generate allure-results --clean -o reports/allure-report` | Generate Allure report |
| `npx allure open reports/allure-report` | Open Allure report in browser |
| `npx playwright show-report` | Open Playwright HTML report |
| `rm -rf allure-results reports/allure-report` | Clean existing reports |

---

## 🧰 Utilities

| **File** | **Purpose** |
|-----------|-------------|
| `utils/env.ts` | Load environment-specific configuration |
| `utils/logger.ts` | Log test events & actions |
| `utils/apiUtil.ts` | API helper functions |
| `utils/dateUtil.ts` | Common date/time utilities |
| `utils/helper.ts` | Reusable helper functions |
| `utils/allureEnvWriter.ts` | Write environment metadata to Allure report |

---

## 🌿 Git Commands Reference

| **Command** | **Description** |
|--------------|----------------|
| `git init` | Initialize local git repository |
| `git add .` | Stage all changes |
| `git commit -m "message"` | Commit with message |
| `git status` | Show current repo status |
| `git branch` | List branches |
| `git checkout -b feature/branch-name` | Create and switch to new branch |
| `git merge feature/branch-name` | Merge branch into main |
| `git push origin main` | Push to remote main |
| `git pull` | Pull latest updates |
| `git stash` / `git stash pop` | Temporarily save/restore changes |
| ⚠️ `git clean -fd` | Delete untracked files/folders (use carefully) |
| `git restore .` | Revert unstaged local changes |

---

## 🧩 Playwright Useful Commands

| **Command** | **Description** |
|--------------|----------------|
| `npx playwright codegen <url>` | Open browser & generate test code |
| `npx playwright test --debug` | Run tests in debug mode |
| `npx playwright show-trace trace.zip` | View test execution trace |

---

## 🏁 Example Run

```bash
cross-env TEST_ENV=qa npx playwright test --project=chromium --headed
