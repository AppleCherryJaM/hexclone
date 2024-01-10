import { Router } from "express"; 
import { User } from "../models/User";
const router = new Router();

// создание пользователя
router.post('/users/signup', async (req, res, next) => {
	try {
		const {password, email, phoneNumber, firstName, secondName} = req.body;
		const user = await User.create({ password, email, phoneNumber, firstName, secondName });
	} catch (error) {
		
	}
});

// аутентификация пользователя
router.get('/users/login', (req, res, next) => {
	console.log('Some get request');
	res.json({ message: 'It works' });
});

export default router;