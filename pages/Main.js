import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function Home() {
  return (
    <View style={styles.container}>
        <Image source={require('../assets/applogo.jpg')} />
      <Text>Welcome to the QuickPick App!</Text>
      <StatusBar style="auto" />  
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
});