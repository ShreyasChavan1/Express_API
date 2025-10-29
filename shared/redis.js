require('dotenv').config();
const Ioredis = require("ioredis");

const redisConnection = new Ioredis({
  host: process.env.REDIS_HOST,
  port: Number(process.env.REDIS_PORT),
  password: process.env.REDIS_PASSWORD,
  maxRetriesPerRequest: null,
  // tls: { rejectUnauthorized: false } // only if using rediss://
});

module.exports = redisConnection;
