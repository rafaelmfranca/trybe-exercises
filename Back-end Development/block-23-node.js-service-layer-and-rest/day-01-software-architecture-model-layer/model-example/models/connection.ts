import 'dotenv/config';
import mysql from 'mysql2/promise';

export const connection = mysql.createPool({
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  host: process.env.DB_HOST,
  database: 'model_example',
});
