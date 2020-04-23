import React, { Component } from "react";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Login from "./src/components/Login";

const NavigationStack = createStackNavigator(
  {
    Main: {
      screen: Login,
    },
    // ULTIMATE_CRINGE_1000: {
    //   screen: cringe,
    // },
  },
  {
    defaultNavigationOptions: {
      headerMode: "none",
      headerVisible: false,
      header: null,
    },
    navigationOptions: {
      headerMode: "none",
      headerVisible: false,
      header: null,
    },
  }
);

const Container = createAppContainer(NavigationStack);

export default Container;
