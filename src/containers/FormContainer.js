import React, { Component } from "react";

import Input from "../components/Input";
import TextArea from "../components/TextArea";
import Select from "../components/Select";
import Button from "../components/Button";

class FormContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newRecipe: {
        name: "",
        description: "",
        category: "",
        instructions: ""
      },

      categoryOptions: ["Breakfast", "Lunch", "Dinner"]
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
    console.log("Inside handleTextArea");
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

  handleFormSubmit = e => {
    e.preventDefault();
  };

  handleClearForm = e => {
    e.preventDefault();
    this.setState({
      newRecipe: {
        name: "",
        description: "",
        category: "",
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
          placeholder={"Enter a recipe name"}
          handleChange={this.handleInput}
        />
        <Select
          title={"Category"}
          name={"category"}
          options={this.state.categoryOptions}
          value={this.state.newRecipe.category}
          placeholder={"Select Category"}
          handleChange={this.handleInput}
        />
        <TextArea
          title={"Instructions"}
          rows={10}
          value={this.state.newRecipe.instructions}
          name={"instructioins"}
          handleChange={this.handleTextArea}
          placeholder={"How do you make this dish?"}
        />
        <Button
          action={this.handleFormSubmit}
          type={"primary"}
          title={"Submit"}
          style={buttonStyle}
        />
        <Button
          action={this.handleClearForm}
          type={"secondary"}
          title={"Clear"}
          style={buttonStyle}
        />
      </form>
    );
  }
}

const buttonStyle = {
  margin: "10px 10px 10px 10px"
};

export default FormContainer;
