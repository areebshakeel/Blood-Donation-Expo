import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
  Button,
  Image,
  TouchableOpacity,
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import * as Facebook from 'expo-facebook'
import firebase from '../config'

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const profile = function(){
const [data,setData]=useState({})

    useEffect(()=>{
        getData()
        console.log('mount')
    },[])

    const getData=function(){
        firebase.firestore().collection('users').get().then(res=>{
            let arry=[]
        res.docs.map(item=>{
           arry.push(item.data())

        })
        setData(...arry)
        })
    }
    console.log('state wala',data)
    return(
        <View>
            <Text>Name:{data.name}</Text>
        </View>
    )
    
}

export default profile