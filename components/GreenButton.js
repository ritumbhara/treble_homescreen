import React, {Component} from 'react';
import { StyleSheet, Text, View, Dimensions, ScrollView, Image } from 'react-native';

const viewWidth = Dimensions.get("window").width;
const viewHeight = Dimensions.get("window").height;

export class GreenButton extends Component{
  render(){
  return (
    <View style={styles.buttonGreen}>
     <Text style={styles.buttonText}>Start Trebling</Text>
    </View>

   )
  }
}

const styles = StyleSheet.create({
    buttonGreen:{
        width:viewWidth/2,
        height:viewHeight/20,
        backgroundColor:'#4AE54A',
        borderRadius:10,
        alignSelf:'center',
        justifyContent:'center'
      },
      buttonText:{
        fontFamily:'poppins-medium',
        fontSize:20,
        color:'#ffffff',
        textAlign:'center',
        
      }
});
