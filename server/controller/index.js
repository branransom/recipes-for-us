const { createRecipe } = require("./create_recipe");
const { getAllRecipes } = require("./get_all_recipes");
const { getRecipe } = require("./get_recipe");
const { deleteRecipe } = require("./delete_recipe");
const { addIngredient } = require("./add_ingredient");
const { deleteIngredient } = require("./delete_ingredient");
const { getIngredients } = require("./get_ingredients");
const { setInstructions } = require("./set_instructions");

module.exports = {
  createRecipe,
  getAllRecipes,
  getRecipe,
  deleteRecipe,
  addIngredient,
  getIngredients,
  deleteIngredient
};
