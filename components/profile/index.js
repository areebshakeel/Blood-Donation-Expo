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
        // console.log(arry.address)

        })
        console.log('state wala Url ',data.bloodGroup)

    }

    return(
        <View style={{flex:0.5, justifyContent:'center', alignItems:'center'}}>
            <Image style={{width:200,height:175, borderBottomWidth:2,borderColor:'black', borderRadius:100}} 
            source={{uri:`${data.url}`}}>

            </Image>
            <Text style={{fontWeight:'bold', fontSize:20, color:'blue'}} >Name:{data.name}</Text>
            <Text style={{fontWeight:'bold', fontSize:20, color:'blue'}} >Gender{data.gender}</Text>
            <Text style={{fontWeight:'bold', fontSize:20, color:'blue'}} >Blood Group {data.bloodGroup}</Text>
            <Text style={{fontWeight:'bold', fontSize:20, color:'blue'}} >Phone Number: {data.contact}</Text>
            <Text style={{fontWeight:'bold', fontSize:20, color:'blue'}} >Address: {data.address}</Text>

        </View>
    )
    
}

export default profile