const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoDB = require('./db');
mongoDB();
dotenv.config();

const BASE_URL = process.env.BASE_URL;
const port = process.env.PORT;

app.use((req, res, next) => {
	res.setHeader('Access-Control-Allow-Origin', `${BASE_URL}`);
	res.header(
		'Access-Control-Allow-Headers',
		'Origin, X-Requested-With, Content-Type, Accept',
	);
	next();
});

app.get('/', (req, res) => {
	res.send('Hi');
});
app.use(express.json());
app.use('/api', require('./Routes/CreateUser'));
app.use('/api', require('./Routes/DisplayData'));
app.use('/api', require('./Routes/OrderData'));
// app.use('/api', require('./Routes/Myorder'));

app.listen(port, () => {
	console.log(`Litening on ${port}`);
});