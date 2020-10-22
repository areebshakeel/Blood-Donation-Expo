import { StatusBar } from 'expo-status-bar';

import React,{useState,useEffect} from 'react';
import { StyleSheet, Text, View,TextInput, TouchableOpacity, Button } from 'react-native';
import Cameras from './components/camera'
 

export default function App() {

  return (
    <View style={styles.container}>
      {isCamera?<Cameras/>:
      
      <View>
      <Text style={styles.btn}>Hello Pakistan</Text>
      <TextInput placeholder="Input Value here"/>
      </View>
      }
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn:{
    color:"green"
  }
});