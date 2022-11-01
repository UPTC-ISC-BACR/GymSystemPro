const {Router} = require('express');
const router = Router();
const cors = require('cors');
const { getAllPlans, createPlan, updatePlan, deletePlan } = require('../../controllers/plans_controller');

var corsOptions = {
  origin: 'http://localhost:3001',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

router.get("/",cors(corsOptions),getAllPlans);
router.post("/",cors(corsOptions), createPlan)
router.put("/:id_plan",cors(corsOptions), updatePlan)
router.delete("/:id_plan",cors(corsOptions), deletePlan)

module.exports = router;