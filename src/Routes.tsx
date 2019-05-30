import * as React from "react";
import { Switch, Route } from "react-router-dom";

import Todo from "./containers/Todo";
import NotFound from "./components/NotFound";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Todo} />
      <Route component={NotFound} />
    </Switch>
  );
};

export default Routes;
