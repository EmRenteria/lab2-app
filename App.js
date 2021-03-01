import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import Home from './pages/Home';
import Login from './pages/Login';
import { Alert, Button, TextInput, View, StyleSheet } from 'react-native';

export default function App() {
  var [pressed, setPressed] = useState(false);
  var press = () => {
    setPressed(true);
    console.log("Press button")
  }
  var page = (
    <Pressable onPress={press}>
      <Home />
    </Pressable>
  );
  if(pressed) {
    page = (
      <Login />
    )
  }

  onLogin() ;
    const { username, password } = this.state;

    Alert.alert('Credentials', `${username} + ${password}`);
  }

  render() 
    return (
      <View style={styles.container}>
        <TextInput
          value={this.state.username}
          onChangeText={(username) => this.setState({ username })}
          placeholder={'Username'}
          style={styles.input}
        />
        <TextInput
          value={this.state.password}
          onChangeText={(password) => this.setState({ password })}
          placeholder={'Password'}
          secureTextEntry={true}
          style={styles.input}
        />
        
        <Button
          title={'Login'}
          style={styles.input}
          onPress={this.onLogin.bind(this)}
        />
      </View>
    );
  

  return (
    <View style={styles.container}>
      {page}
    </View>
  );

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#9DC183',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
