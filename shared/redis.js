require('dotenv').config();
const Ioredis = require("ioredis");


const redisConnection = new Ioredis(process.env.REDIS_HOST /* or REDIS_URL */, {
  maxRetriesPerRequest: null,
  // only include TLS if your URL is rediss://
  // tls: { rejectUnauthorized: false }
});

module.exports = redisConnection;
