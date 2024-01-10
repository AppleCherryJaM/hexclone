const router = require('express').Router();
const { check } = require('express-validator');
const usersController = require("../controllers/usersController")

router.get('/', usersController.getUsers);

router.post(
	'/signup',
	[
		check('email')
			.not()
			.isEmpty()
	],
 usersController.signUp);

router.post('/login', usersController.login);

module.exports = router;

