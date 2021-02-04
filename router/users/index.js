const router = require('express').Router();
const usersController = require('../../controllers/usersController')

router.get('/', usersController.findAll);
router.post('/', usersController.createUser);

module.exports = router;