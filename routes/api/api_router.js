const {Router} = require('express');
const router = Router();
const authenthication_middleware = require('../../middlewares/authenthication_middleware');
const apiPersonsRouter = require('./persons');
const apiUsersRouter = require('./users')

router.use('/persons', apiPersonsRouter);
// authenthication_middleware.checkToken
router.use('/users', apiUsersRouter);

module.exports = router;