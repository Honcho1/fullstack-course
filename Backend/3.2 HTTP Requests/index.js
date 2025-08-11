import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("<h1>Hello, sire.</h1><p>Welcome to the home page.</p>");
});

app.get("/about", (req, res) => {
  res.send("<h1>About</h1><p>This is the about page.</p>");
});

app.get("/contact", (req, res) => {
  res.send(
    "<h1>Contact Me</h1><p>Feel free to reach out to me anytime you wish.</p><p>Phone: +2349061175321</p><p>Email: kingdanofficial@gmail.com</p>"
  );
});

app.listen(port, () => {
  console.log(`Server is runnning on port ${port}`);
});
