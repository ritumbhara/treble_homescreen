import React, {Component} from 'react';
import { StyleSheet, Text, View, Dimensions, ScrollView, Image } from 'react-native';

const viewWidth = Dimensions.get("window").width;
const viewHeight = Dimensions.get("window").height;

export class Arrow extends Component{
  render(){
  return (
    
      <View style={styles.arrowButton}>
        <Image style={styles.arrow} source={require('../assets/arrow.png')}/>
      </View>

   )
  }
}

const styles = StyleSheet.create({
  arrowButton:{
    backgroundColor:'#4AE54A',
    borderRadius:100,
    height:viewHeight/15,
    width: viewWidth/7,
    marginLeft: viewWidth/15,
    justifyContent:'center'
  },
  arrow:{
    alignSelf:'center'
  }
});
