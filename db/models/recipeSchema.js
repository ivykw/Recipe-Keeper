const mongoose = require('mongoose');

const { Schema } = mongoose;

const recipeSchema = new Schema({
  name: String,
  category: String,
  ingredients: String,
  instructions: String,
  photos: [String],
});

const Recipe = mongoose.model('Recipe', recipeSchema);

// should write functions dealing with data here
module.exports = {
  addRecipe() {
    // make new recipe
  },
  getAll() {
    // find all recipes
  },
};
