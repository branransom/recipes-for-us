const getIngredients = async recipeId => {
  const recipe = await Recipe.findById(recipeId);

  return recipe.ingredients;
};

module.exports = { getIngredients };
