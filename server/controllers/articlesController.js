const { validationResult } = require('express-validator');
const mongoose = require("mongoose");
const Article = require('../models/article');
const User = require('../models/user');
const HttpError = require("../models/httpError");

const getArticleById = async (req, res, next) => {
	const articleId = req.params.aid;
	let article;

	try {
		article = await Article.findById(articleId);	
	} catch (error) {
		console.log('Error: ', error);
		return next(
			new HttpError(
				error.message, 
				500
			)
		)
	}

	if (!article) {
		return next(
			new HttpError(
				"Couldn't find article by provided id",
				404
			)
		);
	}
	res.json({ article: article.toObject( {getters: true} ) });
}

const getAllArticles = async (req, res, next) => {
	let articles;
	try {
		articles = await Article.find(); 
	} catch (error) {
		console.log(error);
		return next(
			new HttpError(
				error.message,
				500
			)
		);
	}
	res.json({ 
		articles: articles.map(
			article => article.toObject({
				getters: true
			})
		)
	});
}

const getArticlesByUserId = async (req, res, next) => {
	const userId = req.params.uid;
	let articles;
	try {
		articles = await Article.find({ author: userId });	
	} catch (error) {
		console.log(error);
		return next(
			new HttpError(
				error.message,
				500
			)
		);
	}

	if (!articles || articles.length === 0) {
		return next(
			new HttpError(
				"Couldn't find articles by provided user id", 
				404
			)
		);
	}

	res.json({articles})
}

const createArticle = async (req, res, next) => {
	const error = validationResult(req);

	if(!error.isEmpty) {
		return next(new HttpError('Invalid input', 422));
	}

	const {title, text, author} = req.body;
	const createdArticle = new Article({
		title,
		text,
		author
	})

	let user;
	try {
		user = await User.findById(author);
	} catch (error) {
		console.log(error);
		return next(
			new (
				HttpError(
					error.message,
					500
				)
			)
		);
	}

	if (!user) {
		return next(
			new HttpError(
				'This creator does not exist',
				404
			)
		);
	}

	try {
		const session = await mongoose.startSession();
		console.log("User: ", user);
		session.startTransaction();
		await createdArticle.save({session: session});
		await user.articles.push(createdArticle);
		await user.save({session});
		await session.commitTransaction();
	} catch (error) {
		console.log(`Error message: ${error}`);
		return next(
			new HttpError(
				"Connection to database failed", 
				500)
			);
	}

	res.status(201).json({createdArticle: createdArticle.toObject({getters: true})});
}

const updateArticleById = async (req, res, next) => {
	const error = validationResult(req);

	if (!error.isEmpty) {
		return next(new HttpError('Invalid input', 422))
	}

	const { title, text } = req.body;
	const articleId = req.params.aid;
	
	let updatedArticle;
	try {
		updatedArticle = await Article.findById(articleId);	
	} catch (error) {
		console.log(error);
		return next(
			new HttpError(
				error,
				500
			)
		);
	}
	
	updatedArticle.text = text;
	updatedArticle.title = title;

	try {
		await updatedArticle.save();
	} catch(error) {
		console.log(error);
		return next(
			new HttpError(
				error,
				500
			)
		);
	}

	res.status(200).json({article: updatedArticle.toObject( {getters: true })});
}

const deleteArticle = async (req, res, next) => {
	let articleId = req.params.aid;
	let article;
	try {
		article = await Article.findById(articleId).populate('author');
	} catch (error) {
		console.log(error);
		return next(
			new HttpError(
				error.message,
				500
			)
		)
	}

	try {
		if (!!article) {
			const session = await mongoose.startSession();
			session.startTransaction();
			await article.deleteOne({
				session: session
			});
			await article.author.articles.pull(article);
			await article.author.save({ session });
			await session.commitTransaction();
		} else {
			throw new Error("Can not delete non-existent file");
		}
	} catch (error) {
		return next(
			new HttpError(
				error.message,
				500
			)
		);
	}

	res.status(200).json({message: "Article successfully deleted"});
}

exports.updateArticleById = updateArticleById;
exports.deleteArticle = deleteArticle;
exports.createArticle = createArticle;
exports.getArticleById = getArticleById;
exports.getArticlesByUserId = getArticlesByUserId;
exports.getAllArticles = getAllArticles;