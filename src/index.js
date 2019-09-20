import React from "react";
import ReactDOM from "react-dom";
import { Router, Switch, Route } from "react-router";
import { createBrowserHistory } from "history";

import { App } from "./app";

export const history = createBrowserHistory();

const Index = () => (
  <Router history={history}>
    <Switch>
      <Route path="/" component={App} />
    </Switch>
  </Router>
);

const rootElement = document.getElementById("root");
ReactDOM.render(<Index />, rootElement);
