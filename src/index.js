import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import RecipeList from "./components/RecipeList";
import Recipe from "./components/Recipe";
import RecipeNew from "./containers/RecipeNew";

import "./index.css";

ReactDOM.render(
  <BrowserRouter>
    <div className="ui container">
      <Switch>
        <Route exact path="/" component={RecipeList} />
        <Route path="/create" component={RecipeNew} />
        <Route path="/recipes/:recipeId" component={Recipe} />
      </Switch>
    </div>
  </BrowserRouter>,
  document.querySelector("#root")
);
