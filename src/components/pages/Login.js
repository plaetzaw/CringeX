import React, { Component } from "react";
import "../../utility/loginstyle.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { requirePropFactory } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import PropTypes from "prop-types";
import { loginUser } from "../../redux/actions/actions";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log("Button click detected");
    const userData = {
      email: this.state.email,
      password: this.state.password,
    };

    this.props.loginUser(userData, this.props.history);
  };

  handleChange = (event) => {
    console.log("Change detected");
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

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
            <form onSubmit={this.handleSubmit}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                  alignItems: "center",
                }}
              >
                Email:{" "}
                <input
                  onChange={this.handleChange}
                  className="input"
                  name="email"
                ></input>
              </div>
              <div>
                Password:
                <input
                  onChange={this.handleChange}
                  className="input"
                  name="password"
                  type="password"
                ></input>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Button
                  onClick={this.handleSubmit}
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

// Login.propTypes = {
//   SpecifiedPropType: PropType.ActualType.isRequired,
// };

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
  return {
    data: state.data,
  };
};

const mapDispatchToProps = {
  loginUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
