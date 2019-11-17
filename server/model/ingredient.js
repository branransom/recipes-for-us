const mongoose = require("mongoose");

const Ingredient = new mongoose.Schema(
  {
    name: String
  },
  {
    timestamps: false
  }
);

module.exports = {
  IngredientModel: mongoose.model("Ingredient", Ingredient),
  IngredientSchema: Ingredient
};
