//const {getPlansRecords,createPlanRecord} = require('../../controllers/plans_records_controller');
const {Router} = require('express');
const router = Router();
const cors = require('cors');
const {getDataForAdmi} = require("../../controllers/admi_controll")


var corsOptions = {
  origin: 'http://localhost:3001',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

router.get("/",cors(corsOptions),getDataForAdmi);
//router.post("/add",cors(corsOptions), createPlanRecord);

module.exports = router;