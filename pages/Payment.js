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


      <View Style={styles.logo}>
        <Text>Payment Information</Text>
      </View>

      <View Style={styles.logo}>
        <Text>Your Preferred Payment Method:</Text>
      </View>

      <View Style={styles.logo}>
        <Text>Credit Card with ending 1234</Text>
      </View>

      <TouchableOpacity>
        <Text style={styles.addpayment_button}>Add Payment Method</Text>
      </TouchableOpacity>
     
      <TouchableOpacity style={styles.linkCABtn}>
        <Text style={styles.linkCABtn}> Link CashApp</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.linkPP}>
        <Text style={styles.linkPP}>Link PayPal</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.linkAP}>
        <Text style={styles.linkAP}>Link Apple Pay</Text>
      </TouchableOpacity>

     <TouchableOpacity style={styles.linkVenmo}>
        <Text style={styles.LinkVenmo}>Link Venmo</Text>
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

  inputView: {
    backgroundColor: "#d3d3d3",
    borderRadius: 60,
    width: "500%",
    height: 45,
    marginBottom: 20,

    alignItems: "center",
  },

  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },

  addpayment_button: {
    height: 30,
    marginBottom: 30,
  },

  Create_account_Button: {
    height: 30,
    marginBottom: 30,
  },

  linkCABtn: {
    alignItems: "center",
    backgroundColor: "#32cd32",
    padding: 10
  },
  
  linkPP: {
    alignItems: "center",
    backgroundColor: "#4169e1",
    padding: 10
  },
  
  linkAP: {
    alignItems: "center",
    backgroundColor: "#708090",
    padding: 10
  },
  
  linkVenmo: {
    alignItems: "center",
    backgroundColor: "#87ceeb",
    padding: 10
  },
  logo:{
    fontWeight:"bold",
    fontSize:50,
    color:"#fb5b5a",
    marginBottom:40
  }
});