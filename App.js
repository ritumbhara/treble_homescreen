import React, {Component} from 'react';
import { StyleSheet, Text, View, Dimensions, ScrollView, Image, TextInput } from 'react-native';
import * as Font from 'expo-font';

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
  
});
