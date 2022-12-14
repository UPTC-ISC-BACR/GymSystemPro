const {Router} = require('express');
const router = Router();
const cors = require('cors');
const { getAllPlans, createPlan, updatePlan, deletePlan } = require('../../controllers/plans_controller');

const corsOptions ={
  origin:'*', 
  credentials:true,            //access-control-allow-credentials:true
  optionSuccessStatus:200,
}

router.get("/",cors(corsOptions),getAllPlans);
router.post("/add",cors(corsOptions), createPlan)
router.put("/:id_plan",cors(corsOptions), updatePlan)
router.delete("/:id_plan",cors(corsOptions), deletePlan)

module.exports = router;