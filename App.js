import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import Home from './pages/Home';
import Login from './pages/Login';
import Main from './pages/Main';
import Search from './pages/Search';
import Create_account from './pages/Create_account';
import Payment from './pages/Payment';
import UserAccount from './pages/UserAccount';
import ExampleSearch from './pages/searchbarexample';



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
      <ExampleSearch />
    )
  }
 

return (
  <View style={styles.container}>
    {page}
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
