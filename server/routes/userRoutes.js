const router = require('express').Router();
const { check } = require('express-validator');
const usersController = require("../controllers/usersController")

router.get('/', usersController.getUsers);

router.post(
	'/signup',
	[
		check('email')
			.normalizeEmail()
			.isEmail(),
		check('password')
			.isLength({min: 6})
	],
 usersController.signUp);

router.post('/login', usersController.login);

module.exports = router;

