var express = require('express'),
  app = express(),
  port = process.env.PORT || 9000,
  mongoose = require('mongoose'),
  remainder = require('./app/api/models/remainderModel'),
  bodyParser = require('body-parser'),
  serveStatic = require('serve-static');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/remainder');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./app/api/routes/remainderRoutes');
routes(app);

app.use(serveStatic(__dirname+"/app")).listen(port, function(){

  console.log('Remainder app server running on: ' + port);
});
