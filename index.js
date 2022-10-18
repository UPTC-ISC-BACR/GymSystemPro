var express = require("express"),
  app = express(),
  bodyParser = require("body-parser"),
  methodOverride = require("method-override"),
  morgan = require("morgan");

require('./database/db')
app.set('port',3000)

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride());
app.use(morgan('dev'));
app.use(require('./routes/apiRouter'))

app.listen(app.get('port'), function () {
});
console.log(`Node server running on http://localhost:${app.get('port')}`);