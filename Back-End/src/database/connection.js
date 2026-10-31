const { Pool } = require('pg');
require('dotenv').config();

const useSsl = process.env.DB_SSL === 'true' || (process.env.DATABASE_URL && process.env.DATABASE_URL.includes('sslmode=require'));

const db = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: useSsl ? { rejectUnauthorized: false } : false,
  options: "-c search_path=ecommerce,public"
});

module.exports = db;
