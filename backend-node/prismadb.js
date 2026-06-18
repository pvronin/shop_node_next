// index.js یا lib/prisma.js
require('dotenv').config();   // ← این خط رو اینجا هم اضافه کن (مهم!)

const { PrismaClient } = require('./src/generated/client');
const { PrismaPg } = require('@prisma/adapter-pg');
const { Pool } = require('pg');

const connectionString = process.env.DATABASE_URL; // حتماً از .env بخون

const pool = new Pool({ connectionString });

const adapter = new PrismaPg(pool);

const prisma = globalThis.prisma || new PrismaClient({adapter});
if (process.env.NODE_ENV !== 'production') globalThis.prisma = prisma;
module.exports = prisma; // یا export default prisma;
