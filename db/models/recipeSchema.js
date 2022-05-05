const mongoose = require('mongoose');

const { Schema } = mongoose;

const recipeSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  portions: {
    type: String,
    required: true,
  },
  ingredients: {
    type: String,
    required: true,
  },
  instructions: {
    type: String,
    required: true,
  },
  reference: String,
  photos: String,
});

const Recipe = mongoose.model('Recipe', recipeSchema);

// should write functions dealing with data here
module.exports = {
  addRecipe(recipe, callback) {
    // make new recipe
    const newRecipe = new Recipe({
      name: recipe.name,
      category: recipe.category,
      portions: recipe.portions,
      ingredients: recipe.ingredients,
      instructions: recipe.instructions,
      reference: recipe.reference,
      photos: recipe.photos,
    });
    newRecipe.save((err, added) => {
      if (err) {
        console.log(`Error saving ${added} to database`, err);
        callback(err);
      } else {
        callback();
      }
    });
  },
  getAll(callback) {
    // find all recipes
    Recipe.find({}, (err, docs) => {
      if (err) {
        console.log('Error retrieving recipes from database', err);
        callback(err);
      }
      callback(err, docs);
    });
  },
  deleteRecipe(recipeId, callback) {
    Recipe.deleteOne({ _id: recipeId }, (err) => {
      if (err) {
        console.log('Error deleting recipe from database', err);
        callback(err);
      }
      callback();
    });
  },
};
