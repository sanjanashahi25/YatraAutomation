import dotenv from 'dotenv';
import { getConfig } from '../config';

dotenv.config();
const config = getConfig(process.env.TEST_ENV);

export const ENV = {
    TEST_ENV: process.env.TEST_ENV || 'qa',
    BASE_URL: config.BASE_URL,
    USER_EMAIL: process.env.USER_EMAIL || '',
    USER_PASSWORD: process.env.USER_PASSWORD || '',
};
