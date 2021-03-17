import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Page1 from "./Component/Page1";
import Page2 from "./Component/Page2";
import Request from "./Component/MakeRequest";
import NearbyRequests from "./Component/NearbyRequests";
import KnowMore from "./Component/KnowMore";
import Home from "./Component/Home";
import Login from "./Component/Login";
export default function App() {
  const Stack = createStackNavigator();
  const StackScreen = () => (
    <Stack.Navigator
      independent={true}
      screenOptions={{
        headerStyle: { elevation: 0 },
        cardStyle: { backgroundColor: "#fff" },
      }}
    >
      <Stack.Screen name="login">
        {(props) => <Login {...props} />}
      </Stack.Screen>
      <Stack.Screen name="home">{(props) => <Home {...props} />}</Stack.Screen>

      <Stack.Screen name="page1">
        {(props) => <Page1 {...props} />}
      </Stack.Screen>
      <Stack.Screen name="nearby">
        {(props) => <NearbyRequests {...props} />}
      </Stack.Screen>
      <Stack.Screen name="page2">
        {(props) => <Page2 {...props} />}
      </Stack.Screen>

      <Stack.Screen name="request">
        {(props) => <Request {...props} />}
      </Stack.Screen>
      <Stack.Screen name="knowMore">
        {(props) => <KnowMore {...props} />}
      </Stack.Screen>
    </Stack.Navigator>
  );
  return (
    <NavigationContainer>
      <StackScreen />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
