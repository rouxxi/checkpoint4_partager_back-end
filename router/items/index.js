const router = require('express').Router();
const itemssController = require('../../controllers/itemsController')

router.get('/', itemssController.findAll)

module.exports = router;