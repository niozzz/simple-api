const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello, Dockerized API!");
});

const PORT = 9999;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});