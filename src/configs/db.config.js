require("dotenv").config();
const path = require('path')
const SECRET = process.env.JWT_SECRET;

const dbConfig = {
  user: process.env.DB_USER,
  port: process.env.DB_PORT,
  host: process.env.DB_HOST,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
};

module.exports = { dbConfig, SECRET };

