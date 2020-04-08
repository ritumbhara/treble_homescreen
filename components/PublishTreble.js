import React, {Component} from 'react';
import { StyleSheet, Text, View, Dimensions, ScrollView, Image, TextInput } from 'react-native';
import * as Font from 'expo-font';
import {GreenButton} from './GreenButton';
import {Square} from './Square';
import {Arrow} from './Arrow';

const viewWidth = Dimensions.get("window").width;
const viewHeight = Dimensions.get("window").height;

export class PublishTreble extends Component{
  constructor(props) {
    super(props);
    this.state = {
      fontLoaded: false,
    };
  }

  async componentDidMount() {

    await Font.loadAsync({
      'poppins-medium' : require('../assets/fonts/Poppins-Medium.ttf')
    });
    this.setState({ fontLoaded: true });
  }
  render(){
    if(!this.state.fontLoaded){
      return null;
    }
  return (
    <ScrollView fontLoaded={this.state.fontLoaded} contentContainerStyle={{backgroundColor:'#000000',flexGrow : 1,alignItems : 'flex-start', width: viewWidth, justifyContent:'space-evenly'}}>
      <Arrow/>
      <View style={styles.contain}>
        <Text style={styles.title}>{this.props.name}</Text>
        <Text style={styles.des}>{this.props.desc}</Text>
        <GreenButton name="Record your Treble"/>
      </View>
      <Text style={styles.textStyle}>Finished</Text>
      <View style={styles.grid}>
        <Square image="https://sc02.alicdn.com/kf/H6d2240a764b4405aa64f0bee9b0070bdN.png"/>
        <Square image="https://sc02.alicdn.com/kf/H6d2240a764b4405aa64f0bee9b0070bdN.png"/>
        <Square image="https://sc02.alicdn.com/kf/H6d2240a764b4405aa64f0bee9b0070bdN.png"/>
      </View>
      <Text style={styles.textStyle}>Pending</Text>
      <View style={styles.grid}>
        <Square image="https://sc02.alicdn.com/kf/H6d2240a764b4405aa64f0bee9b0070bdN.png"/>
        <Square image="https://sc02.alicdn.com/kf/H6d2240a764b4405aa64f0bee9b0070bdN.png"/>
        <Square image="https://sc02.alicdn.com/kf/H6d2240a764b4405aa64f0bee9b0070bdN.png"/>
      </View>
      <GreenButton name="Publish Treble"/>
    </ScrollView>
   )
  }
}

const styles = StyleSheet.create({
 
  contain:{
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'space-around'
  },
  title:{
    fontFamily:'poppins-medium',
    fontSize:30,
    color:'#4AE54A',
    textAlign:'center',
    marginBottom:viewHeight/60
  },
  des:{
    fontFamily:'poppins-medium',
    fontSize:17,
    color:'#ffffff',
    textAlign:'center',
    marginLeft:viewWidth/10,
    marginRight:viewWidth/10,
    marginBottom:viewHeight/20
  },
  textStyle:{
    fontFamily:'poppins-medium',
    marginLeft: viewWidth/10,
    color:'#ffffff',
    fontSize: 23
  },
  grid:{
    
    display:'flex',
    flexDirection:'row',
    
  }
  
});
