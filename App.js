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
import Profile from './components/profile'
import Dashboard from './components/appComponents/DashboardCards'
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/AntDesign'
import Personal from './components/profile/personalDetails'

const Stack = createStackNavigator();
const Drawer= createDrawerNavigator()



 export default function App () {
const toggle=()=>{
  console.log()
}
  return (
    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen
          options={{
            headerStyle: {
              backgroundColor: "#C72323",
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
            headerLeft:()=>(
              <Icon name='bars' size={25} onPress={toggle}/> 
            )
            
          }}
          name="Home"
          component={Dash}
        
        />
      </Stack.Navigator>
    </NavigationContainer>

//    
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

 function Dash(){
    return(
        <Drawer.Navigator initialRouteName='Home'>
          <Drawer.Screen name='Home' component={Home}  />
          <Drawer.Screen name='Signup' component={Signup}  />
          <Drawer.Screen name='Profile' component={Profile}  />
          <Drawer.Screen name='Personal' component={Personal}  />
          

          {/* <Drawer.Screen name='App' component={App} /> */}
        </Drawer.Navigator>
    
    )
  }
