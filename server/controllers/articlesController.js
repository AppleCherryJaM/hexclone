const HttpError = require("../models/httpError");
let Articles = require("../models/db/Articles");
const { validationResult } = require('express-validation');
const uuid = require('uuid');

const checkFor = (parameter) =>  {
	if (parameter.includes(':')) {
		return parameter.replace(":", "");
	}
	return parameter;
} 

const getArticleById = (req, res, next) => {
	const articleId = checkFor(req.params.aid);
	const article = Articles.find(article => {
		return article.id === articleId
	});

	if (!article) {
		throw new HttpError("Couldn't find article by provided id", 404);
	}
	res.json({ article })
}

const getArticlesByUserId = (req, res, next) => {
	const userId = checkFor(req.params.uid);
	
	const articles = Articles.filter(article => {
		return article.author === userId
	});

	if (!articles || articles.length === 0) {
		throw new HttpError("Couldn't find article by provided id", 404);
	}

	res.json({articles})
}

const createArticle = (req, res, next) => {
	const error = validationResult(req);

	if(!error.isEmpty) {
		throw new HttpError('Invalid input', 422)
	}

	const {title, text, author} = req.body;
	const createdArticle = {
		id: uuid.v4(),
		title,
		text,
		author
	}
	console.log(req.body)
	Articles.push(createdArticle);

	res.status(201).json({createdArticle});
}

const updateArticleById = (req, res, next) => {
	const { title, text} = req.body;
	const articleId = checkFor(req.params.aid);
	
	const updatedArticle = { ...Articles.find(article => article.id === articleId)};
	const articleIndex = Articles.findIndex(a => a.id === articleId)
	updatedArticle.text = text;
	updatedArticle.title = title;
	
	Articles[articleIndex] = updatedArticle;

	res.status(200).json({article: updatedArticle});
}

const deleteArticle = (req, res, next) => {
	let articleId = checkFor(req.params.aid);
	Articles = Articles.filter(a => a.id !== articleId);

	res.status(200).json({message: "Article successfully deleted"});
}

exports.updateArticleById = updateArticleById;
exports.deleteArticle = deleteArticle;
exports.createArticle = createArticle;
exports.getArticleById = getArticleById;
exports.getArticlesByUserId = getArticlesByUserId;