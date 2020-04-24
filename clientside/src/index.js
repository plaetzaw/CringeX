// ===React===
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
// import * as serviceWorker from './serviceWorker';

// ===CSS===
import "./index.css";

// ===Redux===
// import { Provider } from "react-redux";

// ===Routing===
import { BrowserRouter, Switch, Route } from "react-router-dom";

// ===Layout===
import BaseLayout from "./components/layout/BaseLayout";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

// ===Pages===
import Login from "./components/pages/Login";

// ===Material UI===

ReactDOM.render(
  <BrowserRouter>
    <div id="container">
      <Header />
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/login" component={Login} />
      </Switch>
      <Footer />
    </div>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
