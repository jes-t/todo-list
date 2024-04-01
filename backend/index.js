import express, { json } from 'express';
import 'dotenv/config';
import cors from 'cors';

const app = express();

app.use(json());
app.use(cors());

app.get('/', (req, res) => {
	res.json('Hello from SERVER');
});
const port = process.env.PORT || 5050;

app.listen(port, () => {
	console.log(`Server listening on port: ${port}`);
});
