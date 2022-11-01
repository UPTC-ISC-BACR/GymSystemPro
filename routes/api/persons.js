const {getPersons,postPersons} = require('../../controllers/persons_controller');
const {Router} = require('express');
const router = Router();
const cors = require('cors');

var corsOptions = {
  origin: 'http://localhost:3001',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

router.get("/",cors(corsOptions),getPersons);
router.post("/register",cors(corsOptions), postPersons);

module.exports = router;