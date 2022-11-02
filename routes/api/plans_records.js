const {getPlansRecords,createPlanRecord} = require('../../controllers/plans_records_controller');
const {Router} = require('express');
const router = Router();
const cors = require('cors');

var corsOptions = {
  origin: 'http://localhost:3001',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

router.get("/",cors(corsOptions),getPlansRecords);
router.post("/add",cors(corsOptions), createPlanRecord);

module.exports = router;