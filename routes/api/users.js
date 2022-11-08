const {postUser,loginUser,getUsers} = require('../../controllers/users_controller');
const {Router} = require('express');
const router = Router();
const cors = require('cors');

const corsOptions ={
  origin:'*', 
  credentials:true,            //access-control-allow-credentials:true
  optionSuccessStatus:200,
}


router.get("/",cors(corsOptions), getUsers);
router.post("/register",cors(corsOptions), postUser);
router.post("/login",cors(corsOptions), loginUser);

module.exports = router;