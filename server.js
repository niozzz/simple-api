const express = require("express");
const app = express();

// Root route
app.get("/", (req, res) => {
  res.send("Welcome to the Simple API!");
});

// Define a route for /simple-api
app.get("/simple-api", (req, res) => {
  res.send("Hello, Dockerized API at /simple-api!");
});

const PORT = 9999;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
