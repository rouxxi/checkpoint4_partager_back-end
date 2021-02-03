const router = require('express').Router({ mergeParams: true });
const itemsController = require('../../controllers/itemsController')

router.get('/', itemsController.findAll);
router.post('/', itemsController.createItem);


module.exports = router;