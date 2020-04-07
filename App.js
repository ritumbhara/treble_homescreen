import React, {Component} from 'react';
import { StyleSheet, Text, View, Dimensions, ScrollView, Image, TextInput } from 'react-native';
import * as Font from 'expo-font';
import {Arrow} from './components/Arrow';
import {Square} from './components/Square';
import {GreenButton} from './components/GreenButton';
import {HomeScreen} from './components/HomeScreen';

const viewWidth = Dimensions.get("window").width;
const viewHeight = Dimensions.get("window").height;

export default class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      fontLoaded: false,
    };
  }

  async componentDidMount() {

    await Font.loadAsync({
      'poppins-medium' : require('./assets/fonts/Poppins-Medium.ttf')
    });
    this.setState({ fontLoaded: true });

  }
  render(){
    if(!this.state.fontLoaded){
      return null;
    }
  return (
    <HomeScreen/>
   )
  }
}

const styles = StyleSheet.create({
  textStyle:{
    fontFamily:'poppins-medium',
    marginLeft: viewWidth/10,
    color:'#ffffff',
    fontSize: 23
  },
  nameIp:{
    display:'flex',
    marginLeft: viewWidth/10,
    width:viewWidth/1.2,
    height:viewHeight/15,
    backgroundColor:'#FFFFFF',
    borderRadius:10,
    justifyContent:'center',
  },
  nameIpBox:{
    fontFamily:'poppins-medium',
    fontSize:25,
    color:'#4AE54A',
    marginLeft:viewWidth/30
  },
  desc:{
    display:'flex',
    marginLeft: viewWidth/10,
    width:viewWidth/1.2,
    height:viewHeight/5,
    backgroundColor:'#FFFFFF',
    borderRadius:10,
  },
  descIp:{
    fontFamily:'poppins-medium',
    fontSize:20,
    color:'#4AE54A',
    marginLeft:viewWidth/30,
    marginTop:viewHeight/40,
  },
  grid:{
    
    display:'flex',
    flexDirection:'row',
    
  }
  
});
