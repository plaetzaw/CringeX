import React, { Component } from "react";
import { Image, View } from "react-native";

class Logo extends Component {
  render() {
    return (
      <>
        <View>
          <Image
            style={{ width: 250, height: 250 }}
            source={require("../../assets/image/NameLogo.png")}
          ></Image>
        </View>
      </>
    );
  }
}

export default Logo;
