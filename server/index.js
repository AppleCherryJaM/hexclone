require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
// const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const articleRoutes = require('./routes/articleRoutes')
const HttpError = require('./models/httpError')

const PORT = process.env.PORT;
const app = express();

app.use(bodyParser.json());
app.use('/api/articles', articleRoutes);
app.use('/api/users', userRoutes);
app.use((req, res, next) => {
	const error = new HttpError("Couldn't find this rout", 404);
	throw error;
});

app.use((error, req, res, next) => {
	if (res.headerSent) {
		return next(error);
	} 
	res.status(error.code || 500)
	res.json({message: error.message || "Unknown error"})
})

app.listen(PORT);