/*

Make the recipe data model to work with mongo

*/

const mongoose = require("mongoose");

const recipeSchema = mongoose.Schema({
  name: String,
  ingredients: [String],
  instructions: String,
});

const Recipe = mongoose.model("Recipe", recipeSchema);

let store = {};

module.exports = {
  store,
  Recipe,
};
