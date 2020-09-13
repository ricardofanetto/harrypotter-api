const redis = require('redis');
const { REDIS_HOST, REDIS_PORT } = require('../../configuration/environment');
const redisClient = redis.createClient(REDIS_PORT, REDIS_HOST);

redisClient.on('connect', () => console.log('Redis is ready!'));

redisClient.on('error', (err) => console.log('Redis error init, ' + err));

module.exports = redisClient;