require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT;
app.get("/", (req, res) => {
  res.send("checking the connection");
});

app.get("/login", (req, res) => {
  res.send("<h1>Please login to AnxCode</h1>");
});

app.listen(port, () => {
  console.log(`App is listening to the port ${port}`);
});
