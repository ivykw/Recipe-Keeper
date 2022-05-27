const recipe = require('../models/recipeSchema');

module.exports = {
  addRecipe(req, res) {
    console.log(req._id)
    recipe.addRecipe(req.body, (err) => {
      if (err) {
        console.log('Error adding recipe from server', err);
        res.sendStatus(500);
      }
      res.sendStatus(201);
    });
  },
  getAll(req, res) {
    recipe.getAll((err, data) => {
      if (err) {
        console.log('Error getting all recipes from server', err);
        res.sendStatus(500);
      }
      res.status(200).send(data);
    });
  },
  deleteRecipe(req, res) {
    recipe.deleteRecipe(req.body.recipeId, (err) => {
      if (err) {
        console.log('Error deleting recipe from server', err);
        res.sendStatus(500);
      }
      res.sendStatus(204);
    });
  },
};
