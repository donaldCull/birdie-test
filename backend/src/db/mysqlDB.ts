import { knex, Knex } from 'knex';
import { dbHost, dbPass, dbSchema, dbUser } from './variables';

const knexConfig: Knex.Config = {
  client: 'mysql',
  connection: {
    host: dbHost,
    user: dbUser,
    password: dbPass,
    database: dbSchema,
  },
};

export const birdieDB = knex(knexConfig);
