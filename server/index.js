require('dotenv').config();
const express = require('express');

const app = express();
const port = process.env.SERVERPORT;
const db = require('../db/db');
const controllers = require('../db/controllers/recipes');

app.use(express.json());

app.use(express.static('public'));

app.get('/recipes', (req, res) => {
  // call controllers.getAll
  controllers.getAll(req, res);
});

app.post('/recipes', (req, res) => {
  // call controllers.addRecipe
  controllers.addRecipe(req, res);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
