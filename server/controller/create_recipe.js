const _ = require("lodash");
const Recipe = require("../model/recipe.js");

const createRecipe = payload => {
  const recipe = new Recipe({
    name: payload.name,
    description: payload.description,
    foodCategory: payload.foodCategory,
    preparationTime: payload.preparationTime,
    numberOfServings: payload.numberOfServings,
    ingredients: payload.ingredients,
    instructions: payload.instructions
  });

  return recipe.save();
};

module.exports = { createRecipe };