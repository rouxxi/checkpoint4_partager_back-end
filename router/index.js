const router = require('express').Router({ mergeParams: true });
const users = require('./users/index');
const items = require('./items/index');

router.use('/users/', users);
router.use('/items/', items);

module.exports = router;