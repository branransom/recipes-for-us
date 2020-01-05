import React from "react";
import axios from "axios";

import Input from "../components/form/Input";
import TextArea from "../components/form/TextArea";
import Select from "../components/form/Select";
import Button from "../components/form/Button";

const mapIngredientListToTextOutput = ingredientList => {
    const textOutput = ingredientList.reduce((txt, ingredient) => {
        return txt.concat(`${ingredient.name}\n`);
    }, "");

    return textOutput.replace(/\n$/, ""); // remove the last trailing new line character
};

class RecipeNew extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            newRecipe: {
                name: "",
                description: "",
                meal: "",
                preparationTime: "",
                numberOfServings: "",
                ingredients: [],
                instructions: "",
            },

            mealOptions: ["Breakfast", "Lunch", "Dinner"],
        };
    }

    handleInput = e => {
        let value = e.target.value;
        let name = e.target.name;

        this.setState(prevState => ({
            newRecipe: {
                ...prevState.newRecipe,
                [name]: value,
            },
        }));
    };

    handleIngredients = e => {
        const ingredients = e.target.value
            .split("\n")
            .map(ingredientName => ({ name: ingredientName }));

        this.setState(prevState => ({
            newRecipe: {
                ...prevState.newRecipe,
                ingredients,
            },
        }));
    };

    handleFormSubmit = async e => {
        e.preventDefault();
        const { newRecipe } = this.state;
        console.log(newRecipe);
        await axios.post("/api/recipes", newRecipe);

        this.props.history.push("/");
    };

    handleClearForm = e => {
        e.preventDefault();
        this.setState({
            newRecipe: {
                name: "",
                description: "",
                meal: "",
                preparationTime: "",
                numberOfServings: "",
                ingredients: [],
                instructions: "",
            },
        });
    };

    render() {
        return (
            <form className="ui form" onSubmit={this.handleFormSubmit}>
                <h3 className="ui dividing header">Your New Recipe</h3>
                <Input
                    type={"text"}
                    title={"Recipe Name"}
                    name={"name"}
                    value={this.state.newRecipe.name}
                    placeholder={"Enter a recipe name"}
                    handleChange={this.handleInput}
                />
                <Input
                    type={"text"}
                    title={"Recipe Description"}
                    name={"description"}
                    value={this.state.newRecipe.description}
                    placeholder={"Enter a description"}
                    handleChange={this.handleInput}
                />
                <Select
                    title={"Meal"}
                    name={"meal"}
                    options={this.state.mealOptions}
                    value={this.state.newRecipe.meal}
                    placeholder={"Select meal"}
                    handleChange={this.handleInput}
                />
                <Input
                    type={"text"}
                    title={"Preparation Time"}
                    name={"preparationTime"}
                    value={this.state.newRecipe.preparationTime}
                    placeholder={
                        "How many minutes does it take to make this meal?"
                    }
                    handleChange={this.handleInput}
                />
                <Input
                    type={"text"}
                    title={"Number of Servings"}
                    name={"numberOfServings"}
                    value={this.state.newRecipe.numberOfServings}
                    placeholder={"How many servings does this make?"}
                    handleChange={this.handleInput}
                />
                <TextArea
                    title={"Ingredients"}
                    rows={10}
                    value={mapIngredientListToTextOutput(
                        this.state.newRecipe.ingredients
                    )}
                    name={"ingredients"}
                    handleChange={this.handleIngredients}
                    placeholder={
                        "Specify ingredients for this recipe (each ingredient on a separate line)"
                    }
                />
                <TextArea
                    title={"Instructions"}
                    rows={10}
                    value={this.state.newRecipe.instructions}
                    name={"instructions"}
                    handleChange={this.handleInput}
                    placeholder={"How do you make this dish?"}
                />
                <Button
                    action={this.handleClearForm}
                    type={"secondary"}
                    title={"Clear"}
                    style={buttonStyle}
                />
                <Button
                    action={this.handleFormSubmit}
                    type={"primary"}
                    title={"Submit"}
                    style={buttonStyle}
                />
            </form>
        );
    }
}

const buttonStyle = {
    margin: "10px 10px 10px 10px",
};

export default RecipeNew;
