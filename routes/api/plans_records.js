const {getPlansRecords,createPlanRecord} = require('../../controllers/plans_records_controller');
const {Router} = require('express');
const router = Router();
const cors = require('cors');

const corsOptions ={
  origin:'*', 
  credentials:true,            //access-control-allow-credentials:true
  optionSuccessStatus:200,
}


router.get("/",cors(corsOptions),getPlansRecords);
router.post("/add",cors(corsOptions), createPlanRecord);

module.exports = router;