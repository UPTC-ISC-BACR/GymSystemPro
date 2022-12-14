const {Router} = require('express');
const router = Router();
const cors = require('cors');
const { getRecords} = require('../../controllers/records_controller');

const corsOptions ={
  origin:'*', 
  credentials:true,            //access-control-allow-credentials:true
  optionSuccessStatus:200,
}


router.get("/",cors(corsOptions),getRecords);

module.exports = router;