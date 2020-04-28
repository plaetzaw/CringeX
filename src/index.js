// ===React===
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Feed from "./components/pages/Feed";
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
import Register from "./components/pages/Register";
import Profile from "./components/pages/ProfileView";
import Upload from "./components/pages/UploadPage";

// ===Material UI===

ReactDOM.render(
  <BrowserRouter>
    <div id="container">
      <Header />
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/feed" component={Feed} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/upload" component={Upload} />
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
