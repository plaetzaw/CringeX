import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import HomeIcon from "@material-ui/icons/Home";
import SportsEsportsIcon from "@material-ui/icons/SportsEsports";
import DeviceHubIcon from "@material-ui/icons/DeviceHub";

const useStyles = makeStyles({
  root: {
    width: 500,
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
      style={{ width: "auto", height: "auto" }}
    >
      <BottomNavigationAction
        label="Favorites"
        value="favorites"
        icon={<HomeIcon />}
      />
      <BottomNavigationAction
        label="Nearby"
        value="nearby"
        icon={<DeviceHubIcon />}
      />
      <BottomNavigationAction
        label="Folder"
        value="folder"
        icon={<SportsEsportsIcon />}
      />
    </BottomNavigation>
  );
}
