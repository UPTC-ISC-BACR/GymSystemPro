require('./database/db');
const apiRouter = require('./routes/api/api_router')
const cors = require('cors')

const express = require("express")
const  app = express(),
bodyParser = require("body-parser"),
methodOverride = require("method-override"),
morgan = require("morgan");
app.set('port',3000);
const corsOptions ={
  origin:'*', 
  credentials:true,            //access-control-allow-credentials:true
  optionSuccessStatus:200,
}
app.use(cors(corsOptions))
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride());
app.use(morgan('dev'));
app.use('/api',apiRouter)


const server = app.listen(app.get('port'), function () {
   });
  console.log(`Node server running on http://localhost:${app.get('port')}`);

  module.exports={server}