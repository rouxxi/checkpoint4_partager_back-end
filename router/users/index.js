const router = require('express').Router();
const usersController = require('../../controllers/usersController');
const verification = require('../../middleWare/auth/authUser')

router.get('/', usersController.findAll);

router.post('/register', usersController.createUser);
router.post('/login', usersController.login);

module.exports = router;