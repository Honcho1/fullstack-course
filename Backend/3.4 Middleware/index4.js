import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

function logger(req, res, next) {
  console.log(`Request Method: ${req.method}, Request URL: ${req.url}`);
  next();
}

app.use(logger);

app.get("/", (req, res) => {
  res.sendFile(`${__dirname}/public/index.html`);
});

app.post("/submit", (req, res) => {
  const { street, pet } = req.body;
  const bandName = `${street} ${pet}`;
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Band Name Result</title>
    </head>
    <body>
      <h1>Your Band Name</h1>
      <p>${bandName}</p>
      <a href="/">Back to Form</a>
    </body>
    </html>`);
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
