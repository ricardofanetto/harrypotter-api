const sinon = require('sinon');
const { getAllHouses, CACHE_KEY } = require('./houses.service');
const axios = require('axios').default;
const { redisClient } = require('../../shared/providers/redis.provider');
const dataJson = require('./mock/harrypotter-api-houses');

describe('House service', () => {
  let axiosStub;

  beforeAll(() => {
    // isolating infrastructure external to the api
    axiosStub = sinon.stub(axios, 'get').resolves(Promise.resolve({ data: dataJson })); 
    redisClient.del(CACHE_KEY);
  });

  test('Should returns all houses', async () => {
    const houses = await getAllHouses();
    expect(houses).toBeInstanceOf(Array);
    expect(houses).toHaveLength(2);
  });

  afterAll(() => {
    axiosStub.restore();
  })

});