import config from 'config';
import Knex from 'knex';
import { Model } from 'objection';

// Create the DB connection
const connection = Knex(config.data.ruecommerce);

// Install knex for Objection
Model.knex(connection);

export { connection };
