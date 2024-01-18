const router = require('express').Router();
const {check} = require('express-validator');
const articlesController = require('../controllers/articlesController')

router.get('/:aid', articlesController.getArticleById);

router.get('/', articlesController.getAllArticles);

router.get('/user/:uid', articlesController.getArticlesByUserId);

router.post(
	'/',
	[
		check('title')
			.not()
			.isEmpty()
			.isLength({min: 5}),
		check('text')
			.not()
			.isEmpty()
			.isLength({min: 50}),
		check('author')
			.not()
			.isEmpty()
	], 
	articlesController.createArticle);

router.patch(
	'/:aid', 
	[
		check('title')
			.not()
			.isEmpty()
			.isLength({ min: 5 }),
		check('text')
			.not()
			.isEmpty()
			.isLength({ min: 50 }),
	], 
	articlesController.updateArticleById);

router.delete('/:aid', articlesController.deleteArticle);

module.exports = router;