import express, { json } from 'express';
import 'dotenv/config';
import cors from 'cors';
import todoRouter from './routers/todoRouters.js'

const app = express();

app.use(json());
app.use(cors());
app.use(express.static(process.env.STATIC_DIR_URL))

app.use("/todo", todoRouter)

app.get('/api', (req, res) => {
	res.json('Hello from SERVER');
});

const port = process.env.PORT || 5050;

app.listen(port, () => {
	console.log(`Server listening on port: ${port}`);
});
