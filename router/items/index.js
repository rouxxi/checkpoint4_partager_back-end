const router = require('express').Router();

router.get('/', (req, res) => {
    res.status(200).send('gg tue est aux items')
})

module.exports = router;