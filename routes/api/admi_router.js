//const {getPlansRecords,createPlanRecord} = require('../../controllers/plans_records_controller');
const {Router} = require('express');
const router = Router();
const cors = require('cors');
const {getDataForAdmi, getalgo} = require("../../controllers/admi_controll");
const { createInvoice, updateInvoice } = require('../../controllers/invoice_controller');
const { createFertilize } = require('../../controllers/fertilizer_controller');

const corsOptions ={
  origin:'*', 
  credentials:true,            //access-control-allow-credentials:true
  optionSuccessStatus:200,
}

router.get("/",cors(corsOptions),getDataForAdmi);
router.get("/ojo",cors(corsOptions),getalgo);
router.post("/",cors(corsOptions),createInvoice);
router.post("/fertilize/add", cors(corsOptions), createFertilize)
router.put("/invoice/update/:id_invoice", cors(corsOptions), updateInvoice)
//router.post("/add",cors(corsOptions), createPlanRecord);


module.exports = router;