const router = require('express').Router();
const {check} = require('express-validator');
const articlesController = require('../controllers/articlesController')

router.get('/:aid', articlesController.getArticleById);

router.get('/user/:uid', articlesController.getArticlesByUserId);

router.post(
	'/',
	[
		check('title')
			.not()
			.isEmpty(),	
	], 
	articlesController.createArticle);

router.patch('/:aid', articlesController.updateArticleById);

router.delete('/:aid', articlesController.deleteArticle);

module.exports = router;