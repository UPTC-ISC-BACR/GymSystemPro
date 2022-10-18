require('./database/db');
const apiRouter = require('./routes/api/api_router')
var express = require("express"),
  app = express(),
  bodyParser = require("body-parser"),
  methodOverride = require("method-override"),
  morgan = require("morgan");

app.set('port',3000);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride());
app.use(morgan('dev'));
app.use('/api',apiRouter)

app.listen(app.get('port'), function () {
});
console.log(`Node server running on http://localhost:${app.get('port')}`);