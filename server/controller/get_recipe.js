const Recipe = require("../model/recipe");

const getRecipe = recipeId => Recipe.findById(recipeId);

module.exports = { getRecipe };
