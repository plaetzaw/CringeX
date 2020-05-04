import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const SignUpRoute = ({ component: Component, loggedIn, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      rest.status === 200 ? <Redirect to="/" /> : <Component {...props} />
    }
  />
);
const mapStateToProps = (state) => ({
  loggedIn: state.Users.loggedIn,
});

SignUpRoute.propTypes = {
  user: PropTypes.object,
};

export default connect(mapStateToProps)(SignUpRoute);
