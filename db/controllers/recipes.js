const recipe = require('../models/recipeSchema');

module.exports = {
  addRecipe(req, res) {
    // call recipe.addRecipe with data
    recipe.addRecipe(req.body, (err) => {
      if (err) {
        console.log('Error adding recipe from server', err);
        res.sendStatus(500);
      }
      res.sendStatus(201);
    });
  },
  getAll(req, res) {
    // call recipe.getAll
    // send data
    recipe.getAll((err, data) => {
      if (err) {
        console.log('Error getting all recipes from server', err);
        res.sendStatus(500);
      }
      res.status(200).send(data);
    });
  },
  deleteRecipe(req, res) {
    console.log(req.data)
    recipe.deleteRecipe(req.data, (err) => {
      if (err) {
        console.log('Error deleting recipe from server', err);
        res.sendStatus(500);
      }
      res.sendStatus(204);
    });
  },
};
