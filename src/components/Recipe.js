import React from "react";
import axios from "axios";
import _ from "lodash";
import "./Recipe.css";

class Recipe extends React.Component {
    state = {
        recipe: {},
    };

    async componentDidMount() {
        const { recipeId } = this.props.match.params;
        const response = await axios.get(`/api/recipes/${recipeId}`);
        this.setState({ recipe: response.data });
    }

    renderIngredients = ingredients => {
        return ingredients.map(({ name }) => {
            return (
                <div className="item" key={name}>
                    <div className="content">{name}</div>
                </div>
            );
        });
    };

    renderInstructions = instructions => {
        return <div>{instructions}</div>;
    };

    render() {
        const { recipe } = this.state;

        if (_.isEmpty(recipe)) {
            return <div>Loading...</div>;
        }

        return (
            <div className="ui padded grid">
                <div className="ui sixteen wide column">
                    <div className="ui segment">
                        <h1>{recipe.name}</h1>
                        <p>{recipe.description}</p>
                        <p>
                            <strong>Meal</strong>: {recipe.meal}
                        </p>
                        <p>
                            <strong>Preparation Time</strong>:{" "}
                            {recipe.preparationTime}
                        </p>
                        <p>
                            <strong>Number of Servings</strong>:{" "}
                            {recipe.numberOfServings}
                        </p>
                    </div>
                </div>
                <div className="ui six wide column">
                    <div className="ui segment">
                        <h3 className="header">Ingredients</h3>
                        <div className="content">
                            <div className="ui middle aligned divided list">
                                {this.renderIngredients(recipe.ingredients)}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="ui ten wide column">
                    <div className="ui segment">
                        <h3 className="header">Instructions</h3>
                        <div className="content display-linebreak">
                            {this.renderInstructions(recipe.instructions)}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Recipe;
