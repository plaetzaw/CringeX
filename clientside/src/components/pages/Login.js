import React, { Component } from "react";
import "../../utility/loginstyle.css";
import { requirePropFactory } from "@material-ui/core";

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
          marginTop: "3.5rem",
        }}
      >
        <img
          height="300px"
          style={{ marginTop: "-100px" }}
          src={require("../../images/NameLogo.png")}
        />
        <div
          style={{
            border: "white 2px solid",
            padding: "2rem",
            backgroundColor: "rgba(190, 158, 255, 0.2)",
            borderRadius: "1rem",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
            }}
          >
            <div>
              Email: <input className="input"></input>
            </div>
            <div>
              Password: <input className="input"></input>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "15px",
            }}
          >
            Not signed up yet? <button>Click Here!</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
