const {postUser,loginUser,getUsers} = require('../../controllers/users_controller');
const {Router} = require('express');
const router = Router();
const cors = require('cors');

var corsOptions = {
  origin: 'http://localhost:3001',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

router.get("/",cors(corsOptions), getUsers);
router.post("/register",cors(corsOptions), postUser);
router.post("/login",cors(corsOptions), loginUser);

module.exports = router;