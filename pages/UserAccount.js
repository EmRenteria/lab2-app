import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

export default function Payment() {
  

 

    return (
      <View style={styles.container}>
  
        
        <StatusBar style="auto" />

        <View Style={styles.baseText}>
            <Text>Hello</Text>
            <View Style={styles.innerText}>
                <Text>Hallie!</Text>
            </View>
        </View>
  
  
        
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
  baseText: {
    fontWeight: 'bold'
  },
  innerText: {
    color: 'red'
  }
});