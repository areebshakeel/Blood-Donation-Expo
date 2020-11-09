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
        <View style={{flex:0.5, justifyContent:'center', alignItems:'center'}}>
            <Image style={{width:200,height:200, borderBottomWidth:2,borderColor:'black', borderRadius:100}} 
            source={{uri:`${data.url}`}}>

            </Image>
            <Text style={{fontWeight:'bold', fontSize:20, color:'#3b5998'}} >{data.name}</Text>
        </View>
    )
    
}

export default profile