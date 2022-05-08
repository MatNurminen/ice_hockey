const { Pool } = require('pg');

const CONNECTION_STRING =
  process.env.DATABASE_URL || 'postgres://user:user@192.168.10.23:5432/hockey';

const pool = new Pool({
  connectionString: CONNECTION_STRING,
});

module.exports = pool;
