const {Router} = require('express');

const router = Router();
const authenthication_middleware = require('../../middlewares/authenthication_middleware');
const apiPersonsRouter = require('./persons');
const apiUsersRouter = require('./users');
const apiPlansRouter = require("./plans_router")

router.use('/persons',authenthication_middleware.checkToken, apiPersonsRouter);
// authenthication_middleware.checkToken
router.use('/users', apiUsersRouter);
router.use('/plans', apiPlansRouter);

module.exports = router;