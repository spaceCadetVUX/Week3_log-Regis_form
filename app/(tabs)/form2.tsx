import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button, Alert, TouchableOpacity } from 'react-native';



export default function LoginForm() {

  return (
    <View style={styles.container}>
    {/* header */}
      <View style={styles.header}>
        <View style={styles.circle_place}><View style={styles.circleOutline} /></View>
      </View>
    
    {/* //body */}
      <View style={styles.body}>
            <View style={{flex:1, alignItems:'center'}}>
                <Text  style={styles.text_style1}>Grown</Text>
                <Text style={styles.text_style1}>Your Business</Text>
            </View>
            <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
                <Text style={styles.text_style}>We will help you to grown your business using</Text>
                <Text style={styles.text_style}>Online server</Text>
            </View>
      </View>

    {/* footer */}
      <View style={styles.footer}>
        <View style={{flex:1, flexDirection:'row',justifyContent:'space-around',alignItems:'center', width:'100%'}}>
            <TouchableOpacity style={styles.touchable}>
                <Text style={styles.text_style3}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.touchable}>
                <Text style={styles.text_style3}>Sign Up</Text>
            </TouchableOpacity>
        </View>
        <View style={{padding:10}}>
            <Text style={{fontSize:24, fontWeight:'bold'}}>How Do we work</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    circleOutline: {
        width: 150,  
        height: 150, 
        borderRadius: 75,
        borderWidth: 8, 
        borderColor: 'black', 
        backgroundColor: 'transparent',
      },

  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: 'rgb(72, 207, 203)',
  },
  header:{
    flex:3,
    
  },
  body:{
    flex:2,

  },
  footer:{
    flex:1.5,
    alignItems:'center',

  },
  circle_place:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
  },
  text_style:{
    fontSize: 17, 
     fontWeight: 'bold'
  },
  text_style1:{
    fontSize: 30, 
     fontWeight: 'bold'
  },
  text_style3:{
    fontSize: 30, 
     fontWeight: 'bold'
  },
  touchable: {
    backgroundColor: 'rgb(34, 151, 153)',
    height:70,
    width: 130,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems:'center'
  },
});
