import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import PublicIcon from "@material-ui/icons/Public";
import HomeIcon from "@material-ui/icons/Home";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import NotificationsIcon from "@material-ui/icons/Notifications";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import SignOutIcon from "@material-ui/icons/MeetingRoom";
import { useHistory } from "react-router-dom";
import "../../index.css";
import { TOGGLE_FOOTER } from "../../redux/actions/actionTypes";
const useStyles = makeStyles({
  root: {
    //   width: "100%",
    backgroundColor: "#BE9EFF",
    //   justifyContent: "center",
  },
});
function LabelBottomNavigation(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState("recents");
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const logout = () => {
    Headers.delete("JWToken");
  };
  return (
    <BottomNavigation
      value={value}
      onChange={handleChange}
      className={classes.root}
      style={{
        position: "fixed",
        bottom: "0",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        boxShadow: "0px 0 10px rgba(0, 0, 0, 0.5)",
      }}
    >
      <BottomNavigationAction
        component={Link}
        to="/feed"
        value="feed"
        icon={<HomeIcon style={{ color: "#fff" }} />}
      />
      <BottomNavigationAction
        component={Link}
        to="/upload"
        value="upload"
        icon={<AddCircleIcon style={{ color: "#fff" }} />}
      />
      <BottomNavigationAction
        component={Link}
        to="/profile"
        value="profile"
        icon={<AccountCircleIcon style={{ color: "#fff" }} />}
      />
      <BottomNavigationAction
        component={Link}
        to="/"
        value="signout"
        icon={<SignOutIcon style={{ color: "#fff" }} />}
        onClick={() => {
          localStorage.removeItem("JWToken");
        }}
      />
    </BottomNavigation>
  );
}

export default LabelBottomNavigation;
