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
  baseText: {
    fontWeight: 'bold'
  },
  innerText: {
    color: 'red'
  }
});