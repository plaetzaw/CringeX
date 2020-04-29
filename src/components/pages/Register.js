import React, { Component } from "react";
import "../../utility/loginstyle.css";
import { Link } from "react-router-dom";
import { requirePropFactory } from "@material-ui/core";
import Button from "@material-ui/core/Button";

class Register extends Component {
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
          height="300px"
          style={{ marginTop: "-150px" }}
          src={require("../../images/NameLogo.png")}
        />
        <form action="/register" method="POST">
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
                Username: <input className="input" name="handle"></input>
              </div>
              <div>
                Email: <input className="input" name="email"></input>
              </div>
              <div>
                Password: <input className="input" name="password"></input>
              </div>
              <div>
                Verify Password: <input className="input"></input>
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
              // onClick={(e)=>{e.preventDefault()}}
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

export default Register;
