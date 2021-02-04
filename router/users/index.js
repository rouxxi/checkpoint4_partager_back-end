const router = require('express').Router();
const usersController = require('../../controllers/usersController')
router.get('/', usersController.findAll);

router.post('/register', usersController.createUser);
router.post('/login', usersController.login);
module.exports = router;