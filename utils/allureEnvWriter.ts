import fs from 'fs';
import path from 'path';
import { ENV } from './env';

const resultsDir = path.join(process.cwd(), 'allure-results');
const envPath = path.join(resultsDir, 'environment.properties');

const content = [
    `Environment=${ENV.TEST_ENV}`,
    `Base URL=${ENV.BASE_URL}`,
    `User=${ENV.USER_EMAIL}`
].join('\n');

if (!fs.existsSync(resultsDir)) {
    fs.mkdirSync(resultsDir);
}

fs.writeFileSync(envPath, content);
console.log('🟢 Allure environment file generated successfully');
