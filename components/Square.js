import React, {Component} from 'react';
import { StyleSheet, Text, View, Dimensions, ScrollView, Image } from 'react-native';

const viewWidth = Dimensions.get("window").width;
const viewHeight = Dimensions.get("window").height;

export class Square extends Component{
  render(){
  return (
    
      <View style={styles.container}>
        <Image source={require('../assets/pic1.jpg')} style={styles.image}/>
      </View>

   )
  }
}

const styles = StyleSheet.create({
  container:{
      height:viewHeight/10,
      width:viewHeight/10,
      backgroundColor:'#4AE54A',
      borderRadius:10,
      marginLeft: viewWidth/10,
      justifyContent:'center'
  },
  image:{
      height:viewHeight/12,
      width:viewHeight/12,
      alignSelf:'center',
      borderRadius:10
      
  }
});
