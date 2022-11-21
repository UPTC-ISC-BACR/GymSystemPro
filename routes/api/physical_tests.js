const {getTests, addTest} = require('../../controllers/physical_tests_controllers');
const {Router} = require('express');
const router = Router();
const cors = require('cors');

const corsOptions ={
  origin:'*', 
  credentials:true,            //access-control-allow-credentials:true
  optionSuccessStatus:200,
}


router.get("/",cors(corsOptions), getTests);
router.post("/add",cors(corsOptions), addTest);

module.exports = router;