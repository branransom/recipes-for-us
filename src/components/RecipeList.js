import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class RecipeList extends React.Component {
  state = {
    recipes: []
  };

  async componentDidMount() {
    const response = await axios.get("/recipes");
    this.setState({ recipes: response.data });
  }

  renderRecipeNames = () => {
    return this.state.recipes.map(recipe => (
      <li key={recipe.name}>
        <Link to={`/recipe/${recipe._id}`}>{recipe.name}</Link>
      </li>
    ));
  };

  render() {
    return (
      <div>
        <h1>Recipes</h1>
        <ul>{this.renderRecipeNames()}</ul>
      </div>
    );
  }
}

export default RecipeList;
