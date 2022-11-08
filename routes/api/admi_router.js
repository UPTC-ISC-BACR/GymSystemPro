//const {getPlansRecords,createPlanRecord} = require('../../controllers/plans_records_controller');
const {Router} = require('express');
const router = Router();
const cors = require('cors');
const {getDataForAdmi} = require("../../controllers/admi_controll");
const { createInvoice } = require('../../controllers/invoice_controller');
const { createFertilize } = require('../../controllers/fertilizer_controller');


var corsOptions = {
  origin: 'http://localhost:3001',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

router.get("/",cors(corsOptions),getDataForAdmi);
router.post("/:document",cors(corsOptions),createInvoice);
router.post("/fertilize", cors(corsOptions), createFertilize)
//router.post("/add",cors(corsOptions), createPlanRecord);

module.exports = router;