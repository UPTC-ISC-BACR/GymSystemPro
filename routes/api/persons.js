const {getPersons,postPersons, getPersonsByName} = require('../../controllers/persons_controller');
const {Router} = require('express');
const router = Router();
const cors = require('cors');

const corsOptions ={
  origin:'*', 
  credentials:true,            //access-control-allow-credentials:true
  optionSuccessStatus:200,
}


router.get("/",cors(corsOptions),getPersons);
router.get("/by_name",cors(corsOptions),getPersonsByName);
router.post("/register",cors(corsOptions), postPersons);

module.exports = router;