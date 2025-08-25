import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs", { count: null });
});

app.post("/submit", (req, res) => {
  const fName = req.body.fName || "";
  const lName = req.body.lName || "";

  const lettersOnly = (fName + lName).replace(/[^A-Za-z]/g, "");
  const count = lettersOnly.length;

  res.render("index.ejs", { count });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
