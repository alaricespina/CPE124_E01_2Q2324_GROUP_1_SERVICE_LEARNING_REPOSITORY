import React, { useEffect, useState } from 'react';
import { 
  View, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  StyleSheet,
  Alert
} from 'react-native';

import { ngrok_link } from '../Consts'

const ShowAlertMessage = (title, message) => {
    Alert.alert(title, message, [
      {text: 'OK', onPress: () => console.log('OK Pressed')},
    ]);
  }


const GetAccountAPI = async (username, password) => {
  console.log("Logging in")
  console.log(ngrok_link.concat("/login"))
  const response = await fetch(ngrok_link.concat("/login"), {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'ngrok-skip-browser-warning' : true
    },
    body: JSON.stringify({
      'username': username,
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
      console.log("Successfully Logged In"); //Insert App Main Function Prompt
      ShowAlertMessage('Login', 'Successfully Logged In!');
    }
    else {
      console.log("Try Again"); //Insert Message in App to Try Again
      ShowAlertMessage('Login', 'Incorrect Username/Email or Password!\nPlease Try Again!');
    }
  }
}

const handleLogin = (username, password) => {
    // // Login Authentication Logic Using Local JSON
  GetAccountAPI(username, password).then((response) => {
    MatchHandler(response['match']);
  });
};

const Login = ({ onToggleLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Username/Email"
        placeholderTextColor="white" // Set input placeholder text color
        value={username}
        onChangeText={(text) => setUsername(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="white" // Set input placeholder text color
        secureTextEntry
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      <TouchableOpacity style={styles.button} onPress={ () => handleLogin(username, password)}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      {/* Button to go back to the welcome screen */}
      <TouchableOpacity style={styles.backButton} onPress={onToggleLogin}>
        <Text style={styles.backButtonText}>Back to Welcome</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -250, // Adjusted marginTop
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'white', // Set text color to white
    textShadowColor: 'rgba(255, 255, 255, 0.5)', // Set text shadow color (White)
    textShadowOffset: { width: 2, height: 2 }, // Set text shadow offset
    textShadowRadius: 10, // Set text shadow radius
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: 'white', 
    borderWidth: 1,
    marginBottom: 10, 
    padding: 10,
    color: 'white', 
  },
  button: {
    backgroundColor: 'darkgreen',
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
    backgroundColor: 'darkgreen',
    padding: 10,
    borderRadius: 5,
  },
  backButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Login;
