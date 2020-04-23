import React, { Component } from "react";
import { StyleSheet, Text, View, Image, TextInput } from "react-native";

class LoginScreen extends Component {
  render() {
    return (
      <>
        <View>
          <Image
            style={{ width: 300, height: 300 }}
            source={require("../../assets/image/NameLogo.png")}
          ></Image>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Text>Email: </Text>
            <View style={{ justifyContent: "center" }}>
              <TextInput
                style={{
                  height: 25,
                  width: 200,
                  borderColor: "black",
                  backgroundColor: "white",
                  borderWidth: 1,
                  padding: 1,
                }}
              />
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Text>Password: </Text>
            <View style={{ justifyContent: "center" }}>
              <TextInput
                style={{
                  height: 25,
                  width: 200,
                  borderColor: "black",
                  backgroundColor: "white",
                  borderWidth: 1,
                  padding: 1,
                }}
              />
            </View>
          </View>
        </View>
      </>
    );
  }
}

export default LoginScreen;
