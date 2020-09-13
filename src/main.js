require('dotenv/config');
const app = require("./app");
const { URL_DATABASE, PORT, NAME } = require('./configuration/environment');
const mongoose = require('mongoose');


async function initDatabse() {
  await mongoose.connect(URL_DATABASE, { useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true });
}

app.listen(PORT, async () => {
  await initDatabse();
  console.log(`${NAME} - API running at http://localhost:${PORT}`);
})