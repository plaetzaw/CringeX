import React, { Component } from "react";
import "../../utility/loginstyle.css";
import { requirePropFactory } from "@material-ui/core";
import Button from "@material-ui/core/Button";

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
        <div
          style={{
            border: "#BE9EFF 2px solid",
            padding: ".3rem",
            backgroundColor: "rgba(190, 158, 255, 0.2)",
            borderRadius: "1rem",
            marginTop: "-75px",
          }}
        >
        <form action="/login" method="POST">
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
              Password: <input className="input" name="password"></input>
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
            margin: ".3rem",
            color: "#fff",
            backgroundColor: "rgba(190, 158, 255, 0.2)",
            padding: ".5rem",
            paddingBottom: ".25rem"
          }}
          type="submit"
        >
          Login
        </Button>
        </div>
        </form>
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

        <Button
          style={{ textTransform: "none", fontSize: ".65rem", color: "#fff" }}
        >
          Continue as guest
        </Button>
      </div>
    );
  }
}

export default Login;
