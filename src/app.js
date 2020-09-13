require('dotenv/config');

const express = require('express');
const bodyParser = require('body-parser')
const cors = require('cors');
const paginationMiddlware = require('./shared/middlewares/pagination');
const helmet = require('helmet');
const app = express();
const expressSwagger = require('express-swagger-generator')(app);

const options = {
  swaggerDefinition: {
      info: {
          title: 'Harry Potter api',
          version: '1.0.0',
      },
      host: 'localhost:3300',
      basePath: '/',
      produces: [
          "application/json"
      ],
      schemes: ['http']
  },
  basedir: __dirname, //app absolute path
  files: ['./**/*.routes.js'] //Path to the API handle folder
};
expressSwagger(options)

app.use(bodyParser.json({ limit: '50mb' }));

app.use(cors());
app.use(helmet());

app.use(paginationMiddlware);

app.use('/api', require('./routes'));

app.use((req, res, next) => {
  const err = new Error('Route Not Found')
  err.status = 404
  next(err)
});

module.exports = app;