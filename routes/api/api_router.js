const {Router} = require('express');

const router = Router();
const authenthication_middleware = require('../../middlewares/authenthication_middleware');
const apiPersonsRouter = require('./persons');
const apiUsersRouter = require('./users');
const apiPlansRouter = require("./plans");
const apiRecordsRouter = require('./records');
const apiPlanRecordsRouter = require('./plans_records.js');

// router.use('/persons',authenthication_middleware.checkToken, apiPersonsRouter);
router.use('/persons', apiPersonsRouter);
router.use('/users', apiUsersRouter);
router.use('/plans', apiPlansRouter);
router.use('/records', apiRecordsRouter);
router.use('/plans_records',apiPlanRecordsRouter)

module.exports = router;