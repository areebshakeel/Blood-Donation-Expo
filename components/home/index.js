import React, { useState, useEffect } from "react";
import {View,TextInput,Text,StyleSheet} from 'react-native'
import DashboardCard from '../appComponents/DashboardCards'

const Home= function(props){
    const data=[{
        color:'white',
        text:'Request blood',
        url:'https://banner2.cleanpng.com/20181127/igq/kisspng-blood-donation-vector-graphics-health-care-heart-conference-2-18-2-19-www-dreppnf-centre-com-5bfdc768ef5f62.3325556315433583129805.jpg'
    },{
        color:'red',
        text:'Donate Blood'
    },
    ,{
        color:'red',
        text:'pakistan'
    },
    {
        color:'white',
        text:'Current Blood Request'
    },
    {
        color:'white',
        text:'Saved Request'
    },{
        color:'red',
        text:'Active Donate'
    }
]
return(
    <View style={styles.cardView} >
      {data.map((item,i)=>{
          return<DashboardCard data={item} key={i}/>

      })}

      


    
    </View>
)
}

const styles= StyleSheet.create({
    cardView:{
        flex:1,
        justifyContent:'space-between',
        flexDirection:'row',
        // margin:40,
        marginBottom:10,
        alignItems:'stretch',
        flexWrap:'wrap'
    }
})

export default Home