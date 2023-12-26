import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const Login = ({ onToggleLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Add your login logic here
    console.log('Logging in with:', username, password);
    // For simplicity, we're just logging the credentials for now
    // You should replace this with your actual authentication logic
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
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
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
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
