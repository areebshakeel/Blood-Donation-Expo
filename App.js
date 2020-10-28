import { StatusBar } from "expo-status-bar";

import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Button,
} from "react-native";
import Signup from "./components/signup";
import Login from "./components/login";
import Home from "./components/home";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home' >
        <Stack.Screen
          options={{
            headerStyle: {
              backgroundColor: "red",
            },
            headerTitleStyle: {
              color: "white",
            },
            
            headerTitleAlign: "center",
          }}
          name="Signup"
          component={Signup}
        />
        <Stack.Screen
          options={{
            headerStyle: {
              backgroundColor: "red",
            },
            headerTitleStyle: {
              color: "white",
            },
            
            headerTitleAlign: "center",
          }}
          name="Login"
          component={Login}
        />
        <Stack.Screen
          options={{
            headerStyle: {
              backgroundColor: "red",
            },
            headerTitleStyle: {
              color: "white",
            },
            title: "Dashboard",
            headerTitleAlign: "center",
          }}
          name="Home"
          component={Home}
        
        />
      </Stack.Navigator>
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
  btn: {
    color: "green",
  },
});
