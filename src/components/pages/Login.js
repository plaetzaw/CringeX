import React, { Component } from "react";
import "../../utility/loginstyle.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { requirePropFactory } from "@material-ui/core";
import Button from "@material-ui/core/Button";
//import PropTypes

class Login extends Component {
  render() {
    return (
      <div
        className="test"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          marginTop: "3rem",
        }}
      >
        <img
          height="250px"
          style={{ marginTop: "-150px", marginBottom: "1rem" }}
          src={require("../../images/NameLogo.png")}
        />
        <form action="/login" method="POST">
          <div
            style={{
              border: "#BE9EFF 2px solid",
              padding: ".3rem",
              backgroundColor: "rgba(190, 158, 255, 0.2)",
              borderRadius: "1rem",
              marginTop: "-75px",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-end",
                color: "#fff",
              }}
            >
              <div>
                Email: <input className="input" name="email"></input>
              </div>
              <div>
                Password:{" "}
                <input
                  className="input"
                  name="password"
                  type="password"
                ></input>
              </div>
            </div>

            <hr style={{ marginTop: "10px", borderColor: "#BE9EFF" }} />
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginTop: "5px",
                color: "#fff",
                fontSize: ".75rem",
              }}
            >
              Not signed up yet?{" "}
              <Button
                component={Link}
                to="/register"
                style={{
                  color: "#fff",
                  textDecoration: "underline",
                  fontSize: ".75rem",
                }}
              >
                Click Here!
              </Button>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Button
              component={Link}
              to="/login"
              style={{
                fontSize: "1rem",
                margin: ".3rem",
                color: "#fff",
                backgroundColor: "rgba(190, 158, 255, 0.2)",
                padding: ".5rem",
                paddingBottom: ".25rem",
              }}
              type="submit"
            >
              Login
            </Button>
          </div>
        </form>

        {/* <Button
          component={Link}
          to="/feed"
          style={{ textTransform: "none", fontSize: ".65rem", color: "#fff" }}
        >
          Continue as guest
        </Button> */}
      </div>
    );
  }
}

// specify PropTypes here
/*

NameOfComponent.propTypes = {
  SpecifiedPropType: PropType.ActualType.isRequired
}

*/

const mapStateToProps = (state) => {
  return {
    loggedIn: state.loggedIn,
    headerDisplay: state.headerDisplay,
    footerDisplay: state.footerDisplay,
  };
};

// const mapDispatchToProps = (dispatch) => {
//   return {
//     default => dispatch({ type: "LOGIN_TOGGLE"})
//   };
// };

export default connect(mapStateToProps)(Login);
