const mongoose = require("mongoose");
const { IngredientSchema: Ingredient } = require("./ingredient");

const Recipe = new mongoose.Schema(
  {
    name: String,
    description: String,
    foodCategory: String,
    preparationTime: Number,
    numberOfServings: Number,
    ingredients: [Ingredient],
    instructions: [String]
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Recipe", Recipe);
