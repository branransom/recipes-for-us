const Recipe = require("../model/recipe");

const deleteRecipe = recipeId => Recipe.findByIdAndRemove(recipeId);

module.exports = { deleteRecipe };
