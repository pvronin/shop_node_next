// index.js یا lib/prisma.js
require('dotenv').config();   // ← این خط رو اینجا هم اضافه کن (مهم!)

const { PrismaClient } = require('@prisma/client'); // یا import اگر ESM داری
const { PrismaPg } = require('@prisma/adapter-pg');
const { Pool } = require('pg');

const connectionString = process.env.DATABASE_URL; // حتماً از .env بخون

const pool = new Pool({ connectionString });

const adapter = new PrismaPg(pool);

const prisma = new PrismaClient({
  adapter,
  // می‌تونی log هم اضافه کنی اگر خواستی
  // log: ['query', 'info', 'warn', 'error']
});

module.exports = prisma; // یا export default prisma;
