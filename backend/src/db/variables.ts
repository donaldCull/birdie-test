import * as dotenv from 'dotenv';
dotenv.config();

const dbHost = process.env.DB_HOST;
const dbUser = process.env.DB_USER;
const dbPass = process.env.DB_PASS;
const dbSchema = process.env.DB_SCHEMA;
const corsOrigin = process.env.CORS_ORIGIN;
const nodeEnv = process.env.NODE_ENV;

export { dbHost, dbUser, dbPass, dbSchema, corsOrigin, nodeEnv };
