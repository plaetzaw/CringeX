import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

//This is our Account Component

export default function Account({ history }) {
  return (
    <View style={styles.container}>
      <Text>This is your Account Page</Text>
      <Button title="toHome" onPress={() => history.push("/")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#a600ff",
    alignItems: "center",
    justifyContent: "center",
  },
});
