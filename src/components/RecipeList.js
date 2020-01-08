import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class RecipeList extends React.Component {
    state = {
        recipes: [],
    };

    async componentDidMount() {
        const response = await axios.get("/api/recipes");
        this.setState({ recipes: response.data });
    }

    renderRecipeNames = () => {
        return this.state.recipes.map(recipe => (
            <div key={recipe.name} className="ui item">
                <div className="content">
                    <h4 className="ui header">
                        <Link to={`/recipes/${recipe._id}`}>{recipe.name}</Link>
                    </h4>
                    <div className="description">{recipe.description}</div>
                </div>
            </div>
        ));
    };

    render() {
        return (
            <div className="ui padded segment">
                <h1>Recipes!!</h1>
                <div className="ui divided list">
                    {this.renderRecipeNames()}
                </div>
                <div className="ui button">
                    <Link to="/create">Create Recipe</Link>
                </div>
            </div>
        );
    }
}

export default RecipeList;
