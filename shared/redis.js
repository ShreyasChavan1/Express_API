require('dotenv').config();
const Ioredis = require("ioredis");

const redisConnection = new Ioredis(process.env.REDIS_HOST, {
  maxRetriesPerRequest: null,
  tls: { rejectUnauthorized: false } // keep this if Railway uses rediss://
});

module.exports = redisConnection;
