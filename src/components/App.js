import React from "react";
import { Switch, Route } from "react-router-dom";
import RecipeList from "./RecipeList";
import Recipe from "./Recipe";

class App extends React.Component {
  render() {
    return (
      <div className="ui container">
        <Switch>
          <Route exact path="/" component={RecipeList} />
          <Route path="/recipe/:recipeId" component={Recipe} />
        </Switch>
      </div>
    );
  }
}

export default App;
