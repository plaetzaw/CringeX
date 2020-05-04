import React, { Component } from "react";
import "../../utility/loginstyle.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { requirePropFactory } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import PropTypes from "prop-types";
import { createUser } from "../../redux/actions/actions";

class Register extends Component {
  constructor() {
    super();
    this.state = {
      handle: "",
      email: "",
      password: "",
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log("Button click detected");
    const userData = {
      handle: this.state.handle,
      email: this.state.email,
      password: this.state.password,
    };

    this.props.createUser(userData, this.props.history);
  };

  handleChange = (event) => {
    console.log("Change detected");
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  render() {
    const { loggedIn } = this.props;

    console.log("Looking for loggedIn status");
    console.log(loggedIn);

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
          height="300px"
          style={{ marginTop: "-150px" }}
          src={require("../../images/NameLogo.png")}
        />
        <form onSubmit={this.handleSubmit}>
          <div
            style={{
              border: "#BE9EFF 2px solid",
              padding: ".5rem",
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
                Username:{" "}
                <input
                  onChange={this.handleChange}
                  className="input"
                  name="handle"
                ></input>
              </div>
              <div>
                Email:{" "}
                <input
                  onChange={this.handleChange}
                  className="input"
                  name="email"
                ></input>
              </div>
              <div>
                Password:{" "}
                <input
                  onChange={this.handleChange}
                  className="input"
                  name="password"
                  type="password"
                ></input>
              </div>
              <div>
                Verify Password:{" "}
                <input
                  className="input"
                  name="password2"
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
              Already have an account?{" "}
              <Button
                component={Link}
                to="/login"
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
              style={{
                fontSize: "1rem",
                margin: ".5rem",
                color: "#fff",
                backgroundColor: "rgba(190, 158, 255, 0.2)",
              }}
              type="submit"
            >
              Sign Up
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

Register.propTypes = {
  createUser: PropTypes.func.isRequired,
  signUp: PropTypes.bool.isRequired,
  loggedIn: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => {
  return {
    signUp: state.signUp,
    loggedIn: state.loggedIn,
  };
};

const mapDispatchToProps = {
  createUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);
