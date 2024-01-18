const mongoose = require("mongoose");

const articleSchema = new mongoose.Schema({
	author: { type: mongoose.Types.ObjectId	, required: true, ref: 'User' }, 
	title: { type: String, required: true, unique: true },
	text: { type: String, required: true }
});

module.exports = mongoose.model('Article', articleSchema);