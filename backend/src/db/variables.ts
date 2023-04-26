import * as dotenv from 'dotenv';
dotenv.config();

const dbHost = process.env.DB_HOST;
const dbUser = process.env.DB_USER;
const dbPass = process.env.DB_PASS;
const dbSchema = process.env.DB_SCHEMA;

export { dbHost, dbUser, dbPass, dbSchema };
