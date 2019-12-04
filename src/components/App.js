import React from "react";
import { Switch, Route } from "react-router-dom";

import RecipeList from "./RecipeList";
import Recipe from "./Recipe";
import RecipeNew from "./RecipeNew";

import FormContainer from "../containers/FormContainer";

import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div className="ui container">
        <Switch>
          <Route exact path="/" component={RecipeList} />
          <Route path="/create" component={FormContainer} />
          <Route path="/recipes/:recipeId" component={Recipe} />
        </Switch>
      </div>
    );
  }
}

export default App;
