import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";

export default function Main() {
    return (
        <View style={styles.container}>

      
      <StatusBar style="auto" />


      <TouchableOpacity>
        <Text style={styles.SearchBtn}>Search</Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text style={styles.ListBtn}>My List</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.PaymentBtn}>
        <Text style={styles.PaymentBtn}>Payment</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.AccountBtn}>
        <Text style={styles.AccountBtn}>My Account</Text>
      </TouchableOpacity>

    </View>
  );
    }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#d8bfd8',
      alignItems: 'center',
      justifyContent: 'center',
    },
    SearchBtn: {
        alignItems: "center",
    backgroundColor: "#f08080",
    padding: 10
      },
      ListBtn: {
        alignItems: "center",
    backgroundColor: "#f08080",
    padding: 10,
      },
      PaymentBtn: {
        alignItems: "center",
    backgroundColor: "#f08080",
    padding: 10,
      },
      AccountBtn: {
        alignItems: "center",
    backgroundColor: "#f08080",
    padding: 10
      },
    });


    