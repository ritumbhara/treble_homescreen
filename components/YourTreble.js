import React, {Component} from 'react';
import { StyleSheet, Text, View, Dimensions, ScrollView, Image, TextInput } from 'react-native';
import * as Font from 'expo-font';
import {GreenButton} from './GreenButton';
import {GreenBox} from './GreenBox';

const viewWidth = Dimensions.get("window").width;
const viewHeight = Dimensions.get("window").height;

export class YourTreble extends Component{
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
     <View style={styles.trebleBar}>
        <Text style={styles.active}>Your Treble</Text>
        <Text style={styles.passive}>Join Treble</Text>
      </View>
      <View style={styles.box}>
        <Image style={styles.music} source={require('../assets/music.png')}/>
        <GreenButton name="Start a New Treble"/>
        
      </View>
      <View style={styles.frame}>
      <GreenBox name="Remember Me"/>
      <GreenBox name="Remember Me"/>
      <GreenBox name="Remember Me"/>
      </View>
   </ScrollView>
   )
  }
}

const styles = StyleSheet.create({
  container:{
    display:'flex',
    width:viewWidth,
    flexDirection:'column',
    justifyContent:'space-evenly',
    backgroundColor:'#000000'
  },
  trebleBar:{
    marginLeft:viewWidth/6.5,
    flexDirection:'row',
    justifyContent:'space-between'
  },
  active:{
    flex:1,
    fontFamily:'poppins-medium',
    color:'#4AE54A',
    fontSize: 23
  },
  passive:{
    flex:1,
    fontFamily:'poppins-medium',
    color:'#575757',
    fontSize: 23
  },
  buttonGreen:{
    width:viewWidth/2,
    height:viewHeight/20,
    backgroundColor:'#4AE54A',
    borderRadius:10,
    alignSelf:'center',
    justifyContent:'center'
  },
  music:{
    alignSelf:'center'
  },
  box:{
    width:viewWidth/1.3,
    height: viewHeight/4,
    alignSelf:'center',
    display:'flex',
    borderColor:'#4AE54A',
    borderRadius:10,
    borderWidth:3,
    justifyContent:'space-around'
  },
  frame:{
    flexDirection:'column',
    justifyContent:'space-around',
    alignSelf:'center'
  }
});
