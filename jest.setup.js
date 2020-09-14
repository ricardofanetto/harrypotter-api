require('dotenv/config');
const mongoose = require('mongoose');
const { URL_DATABASE } = require('./src/configuration/environment');

jest.setTimeout(30000)

require('./src/modules/characters/characters.schema');

beforeAll((done) => {
  function clearDB() {
    for (let i in mongoose.connection.collections) {
      mongoose.connection.collections[i].remove(function () { });
    }
    return done();
  }
  if (mongoose.connection.readyState === 0) {
    mongoose.connect(`${URL_DATABASE}-test`, (err) => {
      if (err) throw err;
      return clearDB();
    }
    );
  } else {
    return clearDB();
  }
});

afterEach(done => {
  return done();
});

afterAll(done => {
  return done();
});