const Recipe = require("../model/recipe");
const { IngredientModel: Ingredient } = require("../model/ingredient");

const deleteIngredient = async (recipeId, ingredientId) => {
  const ingredient = new Ingredient({
    _id: ingredientId
  });

  return Recipe.findByIdAndUpdate(
    recipeId,
    { $pull: { ingredients: ingredient } },
    { safe: true, upsert: true, new: true }
  );
};

module.exports = { deleteIngredient };
