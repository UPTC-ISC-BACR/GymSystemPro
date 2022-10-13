const {postUser,loginUser,getUsers} = require('../../controllers/users_controller');
const {check, validationResult} = require('express-validator');
const {Router} = require('express');
const router = Router();
const cors = require('cors');

var corsOptions = {
  origin: 'http://localhost:4000',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

router.get("/",cors(corsOptions),async(req,res,next) =>{
  getUsers(req,res,next);
});

router.post("/register",cors(corsOptions), async (req, res, next) => {
  postUser(req,res,next);
});

router.post("/login",cors(corsOptions), async (req, res, next) => {
  loginUser(req,res,next);  
});

module.exports = router;