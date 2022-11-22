const {getListofExcercises, addExcerciseToList} = require('../../controllers/list_excercises_controller');
const {Router} = require('express');
const router = Router();
const cors = require('cors');

const corsOptions ={
  origin:'*', 
  credentials:true,            //access-control-allow-credentials:true
  optionSuccessStatus:200,
}


router.get("/",cors(corsOptions), getListofExcercises);
router.post("/add",cors(corsOptions), addExcerciseToList);

module.exports = router;