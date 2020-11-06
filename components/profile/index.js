import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  LogBox
  
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import * as Facebook from 'expo-facebook'
import firebase from '../config'

import { YellowBox } from 'react-native';
import _ from 'lodash';

LogBox.ignoreLogs(['Setting a timer']);
const _console = _.clone(console);
console.warn = message => {
  if (message.indexOf('Setting a timer') <= -1) {
    _console.warn(message);
  }
};


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
    console.log('state wala Url ',data.url)

    return(
        <View>
            <Text>Name:{data.name}</Text>
            <Image style={{height:400, borderBottomWidth:2,borderColor:'black'}} 
            source={{uri:'https://platform-lookaside.fbsbx.com/platform/profilepic/?asid=2370006016479121&height=200&width=200&ext=1607290562&hash=AeR6YfyuHnFRvvw39Kk'}}>

            </Image>
        </View>
    )
    
}

export default profile