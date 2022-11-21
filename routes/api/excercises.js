const {getExcercises, addExcercises} = require('../../controllers/excercises_controller');
const {Router} = require('express');
const router = Router();
const cors = require('cors');

const corsOptions ={
  origin:'*', 
  credentials:true,            //access-control-allow-credentials:true
  optionSuccessStatus:200,
}


router.get("/",cors(corsOptions), getExcercises);
router.post("/add",cors(corsOptions), addExcercises);

module.exports = router;