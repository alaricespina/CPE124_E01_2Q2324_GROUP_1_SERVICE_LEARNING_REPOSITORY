import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';

import { ngrok_link } from './Consts';

const ShowAlertMessage = (title, message) => {
  Alert.alert(title, message, [
    {text: 'OK', onPress: () => console.log('OK Pressed')},
  ]);
}

const GetAccountAPI = async (username, email, password) => {
  const response = await fetch(ngrok_link.concat('/signup'), {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'ngrok-skip-browser-warning' : true
    },
    body: JSON.stringify({
      'username': username,
      'email': email,
      'password': password
    })
  });
  return await response.json();
}
const MatchHandler = (response) => {
  if (response == undefined) {
    return
  }
  else {
    //console.log(response);
    if (response == true) {
      console.log("Try Signing Up Again"); //Insert Message in App to Try Signing Up Again
      ShowAlertMessage("SignUp", "An account has already been made under this username/email.\nPlease Try Signing Up Again!");
    }
    else {
      console.log("Successfully Signed Up"); //Insert Main Function of App
      ShowAlertMessage("SignUp", "Successfully Signed Up!");
    }
  }
}
const handleSignUp = (username, email, password) => {
  // Add your sign-up logic here
  GetAccountAPI(username, email, password).then((response) => {
    MatchHandler(response['match']);
  });
};

const SignUp = ({ onToggleSignUp }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Sign Up</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        placeholderTextColor="white"
        value={username}
        onChangeText={(text) => setUsername(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="white"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="white"
        secureTextEntry
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      <TouchableOpacity style={styles.button} onPress={() => handleSignUp(username, email, password)}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
      {/* Button to go back to the welcome screen */}
      <TouchableOpacity style={styles.backButton} onPress={onToggleSignUp}>
        <Text style={styles.buttonText}>Back to Welcome</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 220,
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'white',
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    padding: 10,
    color: 'white',
  },
  button: {
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  backButton: {
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 5,
  },
});

export default SignUp;
