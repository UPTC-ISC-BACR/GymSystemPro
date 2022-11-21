const {Router} = require('express');

const router = Router();
const authenthication_middleware = require('../../middlewares/authenthication_middleware');
const apiPersonsRouter = require('./persons');
const apiUsersRouter = require('./users');
const apiPlansRouter = require("./plans");
const apiRecordsRouter = require('./records');
const apiPlanRecordsRouter = require('./plans_records.js');
const apiAdmiRouter = require('./admi_router.js');
const apiExcercisesRouter = require('./excercises');
const apiPhysicalTestsRouter = require('./physical_tests');
const apiTestsHistoryRouter = require('./tests_history');

// router.use('/persons',authenthication_middleware.checkToken, apiPersonsRouter);
router.use('/persons', apiPersonsRouter);
router.use('/users', apiUsersRouter);
router.use('/plans', apiPlansRouter);
router.use('/records', apiRecordsRouter);
router.use('/plans_records',apiPlanRecordsRouter);
router.use('/admi',apiAdmiRouter);
router.use('/excercises', apiExcercisesRouter);
router.use('/tests', apiPhysicalTestsRouter);
router.use('/tests_history', apiTestsHistoryRouter)

module.exports = router;