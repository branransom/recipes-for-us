const Recipe = require("../model/recipe");

const getAllRecipes = () => Recipe.find();

module.exports = { getAllRecipes };
