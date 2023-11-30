const cors = require('cors');
const morgan = require('morgan');
const express = require('express');
const bodyParser = require('body-parser');
const api = require('./api');

module.exports = (cb) => {
  const app = express();
  app.disable('x-powered-by');
  app.use(cors());
  app.use(bodyParser.json({}));
  app.use(morgan('dev'));
  app.use('/api', api);
  app.use('*', (req, res) => res.status(404).end());
  const server = app.listen(process.env.PORT || 3000, () => cb && cb(server));
};
