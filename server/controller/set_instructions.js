const Recipe = require("../model/recipe");

const setInstructions = async (recipeId, instructions) => {
  return Recipe.findByIdAndUpdate(
    recipeId,
    { $set: { instructions } },
    { safe: true, upsert: true, new: true }
  );
};

module.exports = { setInstructions };
