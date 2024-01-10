import mongoose from "mongoose";
const User = new mongoose.Schema({
	password: {type: 'string', required: true}, // обязательное поле
	email: { type: 'string', required: true }, // обязательное уникальное поле
	phoneNumber: { type: 'string', required: false },
	firstName: { type: 'string', required: false },
	secondName: { type: 'string', required: false }
});

export default mongoose.model('User', User);