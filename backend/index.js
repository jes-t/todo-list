import express, { json } from "express";
import cors from "cors";

const PORT = 5050;

const app = express();

app.use(json());
app.use(cors());

app.get('/', (req, res) => {
    res.json('Hello from SERVER')
})

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});