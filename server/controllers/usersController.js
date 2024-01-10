const uuid = require("uuid");
const HttpError = require("../models/httpError");
let users = require("../models/db/Users");

const getUsers = (req, res, next) => {
	res.json({users});
}

const findUserByEmail = (email) => users.find(user => user.email === email);

const signUp = (req, res, next) => {
	const { firstName, lastName, email, password, phoneNumber } = req.body;

	if (findUserByEmail(email)) {
		throw new HttpError('This email is already used', 422)
	}

	const createdUser = {
		id: uuid.v4(),
		firstName, 
		lastName, 
		email, 
		password, 
		phoneNumber
	}
	users.push(createdUser);

	res.status(201).json({ user: createdUser });
}

const login = (req, res, next) => {
	const { email, password } = req.body;

	const identifiedUser = findUserByEmail(email);

	if (!identifiedUser || identifiedUser.password !== password) {
		throw new HttpError('Could not identify user, credentials are wrong', 401);
	}

	res.json({message: 'Logged in'}).status(200);
}

exports.getUsers = getUsers;
exports.signUp = signUp;
exports.login = login;