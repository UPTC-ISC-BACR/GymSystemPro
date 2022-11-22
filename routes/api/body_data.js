const {getBodyData, addBodyData, getBodyDataById} = require('../../controllers/body_data_controller');
const {Router} = require('express');
const router = Router();
const cors = require('cors');

const corsOptions ={
  origin:'*', 
  credentials:true,            //access-control-allow-credentials:true
  optionSuccessStatus:200,
}


router.get("/",cors(corsOptions), getBodyData);
router.get("/:id_body_data",cors(corsOptions), getBodyDataById);
router.post("/add",cors(corsOptions), addBodyData);

module.exports = router;