const express = require("express");
const app = express();

// routes

app.get("/checkout", (req, res) => {
  res.send("<h1> Hi from checkout</h1>");
});

// server
app.listen(300, () => {
  console.log("Server on port 3000");
});
