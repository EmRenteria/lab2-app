import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function Home() {
  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phonenumber, setPhonenumber] = useState("");
  return (
    <View style={styles.container}>
      <View Style={styles.title}>
        <Text>Welcome to QuickPick! Lets get you started by creating an Account.</Text>
      </View>

      <View Style={styles.container}>
        <Text>What's your name?</Text>
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="First Name"
          placeholderTextColor="#003f5c"
          onChangeText={(FirstName) => setFirstName(FirstName)}
        />
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder= "Last Name"
          placeholderTextColor="#003f5c"
          onChangeText={(LastName) => setLastname(LastName)}
        />
      </View>

      <View Style={styles.container}>
        <Text>What's your email? This will be used as your username everytime you sign into QuickPick!</Text>
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Email."
          placeholderTextColor="#003f5c"
          onChangeText={(email) => setEmail(email)}
        />
      </View>

      <View Style={styles.container}>
        <Text>Now set your password.</Text>
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

      <View Style={styles.container}>
        <Text>Last, what is your phone number?</Text>
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Phone Number"
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(phonenumber) => setPhonenumber(phonenumber)}
        />
      </View>

      <TouchableOpacity style={styles.loginBtn}>
        <Text style={styles.createaccount}>CREATE</Text>
      </TouchableOpacity>
      
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
  loginBtn: {
    width: "80%",
    borderRadius: 60,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#f08080",
  },
});