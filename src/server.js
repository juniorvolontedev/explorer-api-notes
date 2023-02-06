const express = require("express");

const app = express();

app.get("/message/:id/:user", (req, res) => {
  const { id, user } = request.params;

  res.send(`
    ID: ${id}
    User: ${user}
  `);
});

app.get("/users", (req, res) => {
  const { page, limit } = req.query;

  res.send(`Página: ${page} Limit: ${limit}`);
});

const PORT = 3333;

app.listen(PORT, () => console.log(`Server is running on Port ${PORT}`));
