const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const userSchema = new mongoose.Schema({
	firstName: { type: 'string', required: true },
	lastName: { type: 'string', required: true },
	phoneNumber: { type: 'string', required: true, unique: true },
	email: { type: 'string', required: true, unique: true}, // обязательное уникальное поле
	password: {type: 'string', required: true, minlength: 5}, // обязательное поле
	articles: [{ type: mongoose.Types.ObjectId, required: true, ref: "Place" }]
});
userSchema.plugin(uniqueValidator);

module.exports = mongoose.model('User', userSchema);