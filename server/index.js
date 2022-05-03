require('dotenv').config();
const express = require('express');

const app = express();
const port = process.env.SERVERPORT;
const db = require('../db/db');
const controllers = require('../db/controllers/recipes');

app.get('/recipes', (req, res) => {
  // call controllers.getAll
  res.send('hey!');
});

app.post('/recipes', (req, res) => {
  // call controllers.addRecipe
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
