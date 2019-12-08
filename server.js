const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');
const routes = require('./routes');
const PORT = process.env.PORT || 3001;
const app = express();
const jwt = require('express-jwt');
const jwks = require('jwks-rsa');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

app.use(routes);

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/dinnerbell_react';

mongoose.Promise = global.Promise;
mongoose.connect(MONGODB_URI, {useNewUrlParser: true});

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, '/client/build/index.html'));
});

app.listen(PORT, function() {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});