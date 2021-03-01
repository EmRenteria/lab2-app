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
import Main from './pages/Main';

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  var [pressed, setPressed] = useState(false);
  var press = () => {
    setPressed(true);
    console.log("Press button")
  }
  var page = (
    <Pressable onPress={press}>
      <loginBtn />
    </Pressable>
  );
  if(pressed) {
    page = (
      <Main />
    )
  }

  return (
    <View style={styles.container}>

      
      <StatusBar style="auto" />


      <View Style={styles.logo}>
        <Text>QuickPick Log in!</Text>
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Email."
          placeholderTextColor="#003f5c"
          onChangeText={(email) => setEmail(email)}
        />
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password."
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
      </View>

      <TouchableOpacity>
        <Text style={styles.forgot_button}>Forgot Password?</Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text style={styles.Create_account_Button}>Not a user? Create an Account!</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.loginBtn}>
        <Text style={styles.loginText}>LOGIN</Text>
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

  forgot_button: {
    height: 30,
    marginBottom: 30,
  },

  Create_account_Button: {
    height: 30,
    marginBottom: 30,
  },

  loginBtn: {
    width: "80%",
    borderRadius: 60,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#f08080",
  },
  logo:{
    fontWeight:"bold",
    fontSize:50,
    color:"#fb5b5a",
    marginBottom:40
  }
});