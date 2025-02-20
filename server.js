const express = require("express");
const app = express();

// Define a route for /simple-api
app.get("/simple-api", (req, res) => {
  res.send("Hello, Dockerized API at /simple-api!");
});

const PORT = 9999;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
