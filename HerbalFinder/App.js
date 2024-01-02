import {React, useState} from 'react';

// import Login from './page_designs/Login'; // Login
// import SignUp from './page_designs/SignUp'; // Sign Up
import WelcomeScreen from './page_designs/Welcome'; //Welcome
import LoginScreen from './page_designs/Login' //Login
import SignUpScreen from './page_designs/SignUp';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator} from '@react-navigation/native-stack';
import { StyleSheet, View, Image, ImageBackground, Text, TouchableOpacity, Button, Touchable, TextInput } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { TransitionSpecs, CardStyleInterpolators } from '@react-navigation/stack';


const NavStack = createNativeStackNavigator();

// const App = () => {
//   return (
//     <NavigationContainer>
//       {/* Rest of your app code */}
//     </NavigationContainer>
//   );
// };

const App = () => {
  console.log(Date() + " - Compiled");

  return (
    <View className="flex-1 bg-zinc-900">
      <NavigationContainer>
        <NavStack.Navigator screenOptions={{headerShown: false}}>
          <NavStack.Screen
            name = "WelcomeScreen"
            component = {WelcomeScreen}        
          />
          <NavStack.Screen 
          name = "LoginScreen"
          component = {LoginScreen} 
          
          />
          <NavStack.Screen 
          name = "SignUpScreen"
          component = {SignUpScreen} 
          
          />
          </NavStack.Navigator>
      </NavigationContainer>
    </View>
  );
};

export default App;




// export default function App() {
//   // State to manage whether to show the login or sign-up screen
//   const [showLogin, setShowLogin] = useState(false);
//   const [showSignUp, setShowSignUp] = useState(false);

//   // Function to toggle between the welcome screen and the login or sign-up screen
//   const toggleLogin = () => {
//     setShowLogin(!showLogin);
//     setShowSignUp(false);
//   };

//   // Function to toggle between the welcome screen and the sign-up screen
//   const toggleSignUp = () => {
//     setShowSignUp(!showSignUp);
//     setShowLogin(false);
//   };
// }


