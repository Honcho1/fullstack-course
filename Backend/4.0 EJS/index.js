import express from "express";

const app = express();
const PORT = 3000;

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  const today = new Date();
  const dayIndex = today.getDay();

  const isWeekend = dayIndex === 0 || dayIndex === 6; // 0 = Sunday, 6 = Saturday

  const message = isWeekend
    ? "Hey! It's the weekend. It's time to have fun!"
    : "Hey! It's a weekday. It's time to work hard!";

  res.render("index", { message });
});
