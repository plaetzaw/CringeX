// ===React===
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Feed from "./components/pages/Feed";
// import * as serviceWorker from './serviceWorker';

// ===Redux===
// import { Provider } from "react-redux";

// ===Routing===
import { BrowserRouter, Switch, Route } from "react-router-dom";

// ===Layout===
import BaseLayout from "./components/layout/BaseLayout";

// ===Pages===

// ===Material UI===

ReactDOM.render(
  <BrowserRouter>
    <BaseLayout>
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/feed" component={Feed} />
        <Route exact path="/profile" component={App} />
      </Switch>
    </BaseLayout>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
