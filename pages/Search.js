import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';
import { SearchBar } from 'react-native';

export default function Search() {
  return (
    <View>
      <Image source={require('../assets/shoppinglist.jpg')} 
      style={{ width: 250, height: 200 }}
      /> 
      <Text style = {styles.textBig}> Search Bar page! </Text>
      <StatusBar style="Georgia" />  
    </View> 
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#9DC183',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textBig: {
    fontFamily: "Georgia",
    fontSize: 20,
    fontWeight: "bold"
  },
});
   
  
  