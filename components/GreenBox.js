import React, {Component} from 'react';
import { StyleSheet, Text, View, Dimensions, ScrollView, Image, TextInput } from 'react-native';
import * as Font from 'expo-font';


const viewWidth = Dimensions.get("window").width;
const viewHeight = Dimensions.get("window").height;

export class GreenBox extends Component{
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
    <View style={styles.greenBox}>
    <Text style={styles.buttonText}>{this.props.name}</Text>
    </View>
   )
  }
}

const styles = StyleSheet.create({
  
  greenBox:{
    width:viewWidth/1.2,
    height:viewHeight/11,
    justifyContent:'center',
    alignContent:'center',
    backgroundColor:'#4AE54A',
    borderRadius:10,
    alignSelf:'center',
    marginBottom:viewHeight/40
  },
  buttonText:{
    fontFamily:'poppins-medium',
    fontSize:20,
    color:'#ffffff',
    textAlign:'center',
    
  }
});
