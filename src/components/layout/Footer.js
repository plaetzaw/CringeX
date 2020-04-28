import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import PublicIcon from "@material-ui/icons/Public";
import "../../index.css";
import HomeIcon from "@material-ui/icons/Home";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import NotificationsIcon from "@material-ui/icons/Notifications";

const useStyles = makeStyles({
  root: {
    //   width: "100%",
    backgroundColor: "#BE9EFF",
    //   justifyContent: "center",
  },
});

export default function LabelBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState("recents");

  const handleChange = (event, newValue) => {
    setValue(newValue);
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
      }}
    >
      <BottomNavigationAction
        label="Home"
        value="home"
        icon={<HomeIcon style={{ color: "#fff" }} />}
      />
      <BottomNavigationAction
        label="Favorites"
        value="favorites"
        icon={<PublicIcon style={{ color: "#fff" }} />}
      />
      <BottomNavigationAction
        label="Nearby"
        value="nearby"
        icon={<NotificationsIcon style={{ color: "#fff" }} />}
      />
      <BottomNavigationAction
        label="Profile"
        value="profile"
        icon={<AccountCircleIcon style={{ color: "#fff" }} />}
      />
    </BottomNavigation>
  );
}
