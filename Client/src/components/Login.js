import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Logo from "./Logo";
import LoginScreen from "react-native-login-screen";

export default function App() {
  return (
    <View style={styles.container}>
      <LoginScreen
        source={require("../../assets/cringebackground.png")}
        logoComponent={<Logo />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#BE9EFF",
    alignItems: "center",
  },
});
