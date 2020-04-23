import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

//This is our Home Component

export default function Home({ history }) {
  return (
    <View style={styles.container}>
      <Text>
        <h1>Welcome to CringeX</h1>
        <p>Here You will be able to view and vote on Cringe Content</p>
        <br />
        <p>
          You can register an account with us, or continue as a guest, however,
          you will not be able to interact with other users without registering
        </p>
        <br />
        <Button title="toAccount" onPress={() => history.push("/account")} />
        <br />
        Or login below
      </Text>
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
