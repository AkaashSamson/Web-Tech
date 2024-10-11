import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";
import morgan from "morgan";


const app = express();
const port = 3000;
const __dirname = dirname(fileURLToPath(import.meta.url));


app.use(morgan("combined"));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/submit", (req, res) => {
  const { street, pet } = req.body;
  //res.send(`Name: ${name}, Email: ${email}`);
  res.send(`
    <h1>Your band name is:</h1>
    <b>${street}${pet}</b>
  `);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
