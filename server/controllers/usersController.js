const uuid = require("uuid");
const { validationResult } = require('express-validator');
const bcrypt = require('bcrypt');
const User = require('../models/user');
const HttpError = require("../models/httpError");
let users = require("../models/db/Users");

const getUsers = async (req, res, next) => {
	let users;
	try {
		users = await User.find({}, "email phone number firstName lastName articles");
	} catch(error) {
		return next(
			new HttpError(
				error.message,
				500
			)
		);
	}

	res.status(200).json({users: users.map(
		user => user.toObject({
			getters: true
		})
	)});
}

const _findUserByEmail = async (email) => {
	let user;
	try {
		user = await User.find({ email: email });
	} catch (error) {
		console.log(error);
		return next(
			new HttpError(
				error.message,
				500
			)
		);
	}
	console.log(user);
	return user;
}

const signUp = async(req, res, next) => {
	const error = validationResult(req);

	if (!error.isEmpty) {
		return next(
			new HttpError('Invalid input', 422)
		);
	}

	const { firstName, lastName, email, password, phoneNumber } = req.body;

	const isUserExist = Object.keys(await _findUserByEmail(email)).length > 0;
	console.log(isUserExist)
	if (isUserExist) {
		return next(
			new HttpError(
				'This email is already used',
				422
			)
		);
	}

	const createdUser = new User({
		firstName,
		lastName,
		email,
		password,
		phoneNumber,
		articles: []
	});
	
	try {
		await createdUser.save()
	} catch (error) {
		console.log(error);
		return next(
			new HttpError(
				error.message,
				500
			)
		);
	}

	res.status(201).json({ user: createdUser.toObject({ getters: true }) });
}

const login = async (req, res, next) => {
	const { email, password } = req.body;

	const identifiedUser = await _findUserByEmail(email);

	if (!identifiedUser || identifiedUser.password !== password) {
		return next(
			new HttpError(
				'Could not identify user, credentials are wrong', 
				401
			)
		);
	}

	res.json({message: 'Logged in'}).status(200);
}

exports.getUsers = getUsers;
exports.signUp = signUp;
exports.login = login;