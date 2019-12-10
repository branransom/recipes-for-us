import React from "react";
import axios from "axios";

import Input from "../components/form/Input";
import TextArea from "../components/form/TextArea";
import Select from "../components/form/Select";
import Button from "../components/form/Button";

class RecipeNew extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      newRecipe: {
        name: "",
        description: "",
        meal: "",
        instructions: ""
      },

      mealOptions: ["Breakfast", "Lunch", "Dinner"]
    };
  }

  handleInput = e => {
    let value = e.target.value;
    let name = e.target.name;

    this.setState(
      prevState => {
        return {
          newRecipe: {
            ...prevState.newRecipe,
            [name]: value
          }
        };
      },
      () => console.log(this.state.newRecipe)
    );
  };

  handleTextArea = e => {
    let value = e.target.value;
    this.setState(
      prevState => ({
        newRecipe: {
          ...prevState.newRecipe,
          instructions: value
        }
      }),
      () => console.log(this.state.newRecipe)
    );
  };

  handleFormSubmit = async e => {
    e.preventDefault();
    const { newRecipe } = this.state;
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
        instructions: ""
      }
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
        <TextArea
          title={"Instructions"}
          rows={10}
          value={this.state.newRecipe.instructions}
          name={"instructions"}
          handleChange={this.handleTextArea}
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
  margin: "10px 10px 10px 10px"
};

export default RecipeNew;
