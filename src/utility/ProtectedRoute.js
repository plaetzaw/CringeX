import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const ProtectedRoute = ({ component: Component, loggedIn, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      loggedIn === false ? <Redirect to="/" /> : <Component {...props} />
    }
  />
);
const mapStateToProps = (state) => ({
  loggedIn: state.Users.loggedIn,
});

ProtectedRoute.propTypes = {
  user: PropTypes.object,
};

export default connect(mapStateToProps)(ProtectedRoute);
