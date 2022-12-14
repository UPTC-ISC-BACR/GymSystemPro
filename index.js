
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyATL95Rmd_eOHgnxy35m_I5MMZt1rPefDQ",
  authDomain: "backend-gym-dc9c1.firebaseapp.com",
  projectId: "backend-gym-dc9c1",
  storageBucket: "backend-gym-dc9c1.appspot.com",
  messagingSenderId: "826776091928",
  appId: "1:826776091928:web:699abc8399c33cb4a3b26d",
  measurementId: "G-MFBLH02RTX"
};

// Initialize Firebase
const analytics = getAnalytics(app);
  module.exports={server}
require('./database/db');
const apiRouter = require('./routes/api/api_router')
const routerHello = require("./routes/api/message")
const cors = require('cors')

const express = require("express")
const  app = express(firebaseConfig),
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
app.use("/", routerHello)


const server = app.listen(app.get('port'), function () {
   });
  console.log(`Node server running on http://localhost:${app.get('port')}`);
// Import the functions you need from the SDKs you need
