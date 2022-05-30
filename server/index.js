require('dotenv').config();
const express = require('express');

const app = express();
const port = process.env.SERVERPORT;
// eslint-disable-next-line no-unused-vars
const db = require('../db/db');
const controllers = require('../db/controllers/recipes');

app.use(express.json());

app.use(express.static('public'));

app.get('/recipes', (req, res) => {
  controllers.getAll(req, res);
});

app.post('/recipes', (req, res) => {
  controllers.addRecipe(req, res);
});

app.delete('/recipes', (req, res) => {
  controllers.deleteRecipe(req, res);
});

app.put('/recipes', (req, res) => {
  controllers.editRecipe(req, res);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
