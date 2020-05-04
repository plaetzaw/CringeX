import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const SignUpRoute = ({ component: Component, loggedIn, signedUp, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      signedUp === true ? <Redirect to="/" /> : <Component {...props} />
    }
  />
);
const mapStateToProps = (state) => ({
  signedUp: state.Users.signedUp,
});

SignUpRoute.propTypes = {
  user: PropTypes.object,
};

export default connect(mapStateToProps)(SignUpRoute);
