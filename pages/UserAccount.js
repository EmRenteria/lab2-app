import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  Pressable,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";

export default function Payment() {
  

 

  return (
    <View style={styles.container}>

      
      <StatusBar style="auto" />


      <View Style={styles.text}>
        <Text>Hello Hallie! Here is your Account information.</Text>
      </View>

      <View Style={styles.text}>
        <Text>Your Email:</Text>
      </View>

      <View Style={styles.logo}>
        <Text>Hallie.franco@ttu.edu</Text>
      </View>

      <View Style={styles.text}>
        <Text>Your Phone Number:</Text>
      </View>

      <View Style={styles.logo}>
        <Text>(123)456-7890</Text>
      </View>

      <View Style={styles.text}>
        <Text>Your Town:</Text>
      </View>

      <View Style={styles.logo}>
        <Text>Lubbock</Text>
      </View>

      <View Style={styles.text}>
        <Text>Preferred Store:</Text>
      </View>

      <View Style={styles.logo}>
        <Text>Target</Text>
      </View>

      <View Style={styles.text}>
        <Text>Preferred Payment Method</Text>
      </View>

      <View Style={styles.logo}>
        <Text>Apple Pay</Text>
      </View>

      <TouchableOpacity>
        <Text style={styles.edit_button}>Edit Account Information</Text>
      </TouchableOpacity>


      
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#9DC183",
    alignItems: "center",
    justifyContent: "center",
  },

  image: {
    marginBottom: 200,
  },

  
 
  logo:{
    fontWeight:"bold",
    fontSize:50,
    color:"red",
    marginBottom:40
  },

  text:{
    fontWeight:"bold",
    fontSize:50,
    color:"red",
    marginBottom:40
  },
  edit_button: {
    height: 30,
    marginBottom: 30,
  },
});