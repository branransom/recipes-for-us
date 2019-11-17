const Recipe = require("../model/recipe");
const { IngredientModel: Ingredient } = require("../model/ingredient");

const addIngredient = async (recipeId, ingredientName) => {
  const ingredient = new Ingredient({
    name: ingredientName
  });

  return Recipe.findByIdAndUpdate(
    recipeId,
    { $push: { ingredients: ingredient } },
    { safe: true, upsert: true, new: true }
  );
};

module.exports = { addIngredient };
