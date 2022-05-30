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

module.exports = {
  addRecipe(recipe, callback) {
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
    Recipe.find({}, (err, docs) => {
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
  editRecipe(recipe, callback) {
    const filter = { _id: recipe.id };
    const update = {
      name: recipe.name,
      category: recipe.category,
      portions: recipe.portions,
      ingredients: recipe.ingredients,
      instructions: recipe.instructions,
      reference: recipe.reference,
      photos: recipe.photos,
    };
    Recipe.findOneAndUpdate(filter, update, {
      new: true,
    }, (err, doc) => {
      callback(err, doc);
    });
  },
};
