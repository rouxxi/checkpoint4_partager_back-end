const router = require('express').Router({ mergeParams: true });
const usersController = require('../../controllers/usersController');
const verification = require('../../middleWare/auth/authUser')

router.get('/', usersController.findAll);

router.put('/:id/profil', usersController.profilUpdate);
router.put('/:id/bought', usersController.boughtItems);

router.post('/register', usersController.createUser);
router.post('/login', usersController.login);

module.exports = router;