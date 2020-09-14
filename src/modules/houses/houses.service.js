const { redisClient, get } = require('../../shared/providers/redis.provider');
const { HARRY_POTTER_KEY } = require('../../configuration/environment');

const CACHE_KEY = '@CacheKey/HOUSE_SERVICE_KEY';

const axios = require('axios').default;
axios.defaults.baseURL = 'https://www.potterapi.com/v1/';
axios.defaults.headers = {
  'content-type': 'application/json',
}

async function getAllHouses() {
  try {
    const cacheData = await get(CACHE_KEY);
    if (cacheData) return JSON.parse(cacheData);
    const { data } = await axios.get(`/houses?key=${HARRY_POTTER_KEY}`);
    const houses = data.map(({ _id, name, mascot }) => ({ _id, name, mascot }));
    redisClient.set(CACHE_KEY, JSON.stringify(houses));
    redisClient.expire(CACHE_KEY, 86400);
    return houses;
  } catch (error) {
    return [];
  }
}

async function houseIdIsValid(houseId) {
  try {
    return !!(await getAllHouses()).find(house => house._id === houseId);
  } catch (error) {
    return false;
  }

}

module.exports = {
  getAllHouses,
  houseIdIsValid,
  CACHE_KEY
}