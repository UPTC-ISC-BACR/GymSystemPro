const {Router} = require('express');

const router = Router();
const {hello} = require("../../controllers/message_controller")

router.use("/", hello)

module.exports = router;