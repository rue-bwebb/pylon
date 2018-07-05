import config from 'config';
import Knex from 'knex';

// Create the DB connection
const connection = Knex(config.services.ruecommerce);

export default connection;
