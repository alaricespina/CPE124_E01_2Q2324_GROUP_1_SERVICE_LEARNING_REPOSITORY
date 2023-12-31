import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Image, ImageBackground, Text, TouchableOpacity } from 'react-native';
import Login from './Login'; // Login
import SignUp from './SignUp'; // Sign Up



export default function App() {
  // State to manage whether to show the login or sign-up screen
  const [showLogin, setShowLogin] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);

  // Function to toggle between the welcome screen and the login or sign-up screen
  const toggleLogin = () => {
    setShowLogin(!showLogin);
    setShowSignUp(false);
  };

  // Function to toggle between the welcome screen and the sign-up screen
  const toggleSignUp = () => {
    setShowSignUp(!showSignUp);
    setShowLogin(false);
  };

  return (
    <View style={styles.backgroundContainer}>
      <ImageBackground
        // Should be relative path
        source={require('./pics/PNGtree.png')} // Change Source if Needed
        style={styles.backgroundImage}
      >
        <View style={styles.container}>
          <Image
            source={require('./pics/HBLogo.png')} // Change Source if Needed
            style={styles.logo}
          />
          {/* Show either the welcome screen, login screen, or sign-up screen based on the state */}
          {showLogin ? (
            <Login onToggleLogin={toggleLogin} />
          ) : showSignUp ? (
            <SignUp onToggleSignUp={toggleSignUp} />
          ) : (
            <>
              <Text style={styles.welcomeText}>Welcome!</Text>
              <StatusBar style="auto" />
              {/* Buttons to toggle between the welcome screen, login screen, and sign-up screen */}
              <TouchableOpacity style={styles.button} onPress={toggleLogin}>
                <Text style={styles.buttonText}>Login</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button} onPress={toggleSignUp}>
                <Text style={styles.buttonText}>Sign Up</Text>
              </TouchableOpacity>
            </>
          )}
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
    backgroundColor: 'rgba(24, 24, 24, 1)', // Dim Gray
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  logo: {
    resizeMode: 'contain',
    width: 500,
    height: 200,
    borderRadius: 10,
    marginLeft: 20,
  },
  welcomeText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    textShadowColor: 'rgba(255, 255, 255, 0.5)', //3D Shadow Color
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
    marginTop: 1,
    marginBottom: 20,
  },
  button: {
    backgroundColor: 'darkgreen', // Green background
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    width: '70%', // Width of the Green Background
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold', //Favorite ni Khyle at ni Alaric
  },
});
