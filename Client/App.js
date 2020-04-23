import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "./src/components/Home";
import AccountScreen from "./src/components/Account";

// function HomeScreen() {
//   return (
//     <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
//       <Text>Home Screen</Text>
//     </View>
//   );
// }

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Account" component={AccountScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
