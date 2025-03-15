const express = require("express");
const app = express();
app.get("/", (_, res) => {
  res.send("<h1>Hello World!!!!</h1>");
});
app.get("/home", (_, res) => {
  res.send("<h1>Welcome Home Page</h1>");
});

app.get("/contact", (_, res) => {
  res.send("<h1>Welcome Contact Page</h1>");
});

app.get("/about", (_, res) => {
  res.send("<h1>Welcome About Page</h1>");
});

app.listen(5001, () => {
  console.log("Server Listening at 5001!!!");
});
