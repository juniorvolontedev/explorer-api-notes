const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

const PORT = 3333;

app.listen(PORT, () => console.log(`Server is running on Port ${PORT}`));
