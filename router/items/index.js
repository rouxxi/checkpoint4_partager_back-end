const router = require('express').Router({ mergeParams: true });
const itemsController = require('../../controllers/itemsController')

router.get('/', itemsController.findAll);
router.post('/', itemsController.createItem);
router.put('/bought', itemsController.itemBought)
router.get('/:iduser/bought', itemsController.itemOrders)

module.exports = router;