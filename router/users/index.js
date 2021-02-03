const router = require('express').Router();
const usersController = require('../../controllers/usersController')

router.get('/', usersController.findAll)

module.exports = router;