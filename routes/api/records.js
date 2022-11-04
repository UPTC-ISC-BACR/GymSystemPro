const {Router} = require('express');
const router = Router();
const cors = require('cors');
const { getRecords} = require('../../controllers/records_controller');

var corsOptions = {
  origin: 'http://localhost:3001',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

router.get("/",cors(corsOptions),getRecords);

module.exports = router;