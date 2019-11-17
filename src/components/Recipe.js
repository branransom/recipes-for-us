import React from "react";
import axios from "axios";
import _ from "lodash";

class Recipe extends React.Component {
  state = {
    recipe: {}
  };

  async componentDidMount() {
    const { recipeId } = this.props.match.params;
    const response = await axios.get(`/recipes/${recipeId}`);
    this.setState({ recipe: response.data });
  }

  renderIngredients = ingredients => {
    return ingredients.map(({ ingredientName }) => {
      return (
        <div className="item">
          <div className="right floated content">
            <div className="ui button">Remove</div>
          </div>
          <div className="content">{ingredientName}</div>
        </div>
      );
    });
  };

  render() {
    const { recipe } = this.state;

    if (_.isEmpty(recipe)) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <h1>{recipe.name}</h1>
        <p>{recipe.description}</p>
        <p>Category: {recipe.category}</p>
        <p>Number of Servings: {recipe.numberOfServings}</p>
        <div className="ui card">
          <div className="content">
            <div className="header">Ingredients</div>
          </div>
          <div className="content">
            <div className="ui middle aligned divided list">
              {this.renderIngredients(recipe.ingredients)}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Recipe;
