const {getTestsHistory, addTestToHistory} = require('../../controllers/tests_history_controller');
const {Router} = require('express');
const router = Router();
const cors = require('cors');

const corsOptions ={
  origin:'*', 
  credentials:true,            //access-control-allow-credentials:true
  optionSuccessStatus:200,
}


router.get("/",cors(corsOptions), getTestsHistory);
router.post("/add",cors(corsOptions), addTestToHistory);

module.exports = router;