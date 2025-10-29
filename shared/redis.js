require('dotenv').config();
const Ioredis = require("ioredis");

console.log("REDIS_HOST =", process.env.REDIS_HOST); 
const redisConnection = new Ioredis(process.env.REDIS_HOST, {
  passwoard:process.env.REDIS_PASSWORD,
  maxRetriesPerRequest: null,
  tls: { rejectUnauthorized: false } // keep this if Railway uses rediss://
});

module.exports = redisConnection;
