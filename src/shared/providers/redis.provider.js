const redis = require('redis');
const { REDIS_HOST, REDIS_PORT } = require('../../configuration/environment');
const redisClient = redis.createClient(REDIS_PORT, REDIS_HOST);

async function get(key) {
  return new Promise((resolve, reject) => {
    redisClient.get(key, (error, result) => {
      if (error) {
        reject(error);
        return;
      }
      resolve(result);
    })
  })

}

module.exports = { redisClient, get };