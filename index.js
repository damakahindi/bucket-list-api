const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());
app.use(cors);

const port = process.env.PORT || 3000;

mongoose.connect('mongodb://dama:dama@ds153978.mlab.com:53978/bucket-list-dama', {
  useMongoClient: true,
});

app.listen(port, () => {
  console.info('==> 🌎 Listening on port %s. Open up http://127.0.0.1:%s/ ', port, port);
  console.info('==> 🌎 API port %s. Open up http://127.0.0.1:%s/api ', port, port);
});

module.exports = app;
