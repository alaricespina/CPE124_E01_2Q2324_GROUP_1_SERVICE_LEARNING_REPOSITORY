import {React, useState} from 'react';

// import Login from './page_designs/Login'; // Login
// import SignUp from './page_designs/SignUp'; // Sign Up
import WelcomeScreen from './page_designs/Welcome'; //Welcome
import LoginScreen from './page_designs/Login' //Login
import SignUpScreen from './page_designs/SignUp';
import { NavigationContainer } from '@react-navigation/native';
//import { createNativeStackNavigator} from '@react-navigation/native-stack';
import { StyleSheet, View, Image, ImageBackground, Text, TouchableOpacity, Button, Touchable, TextInput, Pressable } from 'react-native';
import { StatusBar } from 'expo-status-bar';
//import { TransitionSpecs, CardStyleInterpolators } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CameraScreen from './page_designs/Camera';
import HomeScreen from './page_designs/Home';
import SearchScreen from './page_designs/Search';
import SettingScreen from './page_designs/Setting';
import SpeechScreen from './page_designs/Speech';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


//const NavStack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

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
    <NavigationContainer>
      <Tab.Navigator screenOptions={{headerShown : false}}>
        <Tab.Screen 
          name = "Speech" 
          component = {SpeechScreen} 
          options = {{
            tabBarLabel : "Speech",
            tabBarIcon : ({color, size}) => (
              <MaterialCommunityIcons name="microphone" color = {color} size = {size} />
            )
          }}
        />
        <Tab.Screen 
          name = "Search" 
          component = {SearchScreen} 
          options = {{
            tabBarLabel : "Search",
            tabBarIcon : ({color, size}) => (
              <MaterialCommunityIcons name="magnify" color = {color} size = {size} />
            )
          }}
        />
        <Tab.Screen 
          name = "Camera" 
          component = {CameraScreen} 
          options = {{
            tabBarLabel : "Camera",
            tabBarIcon : ({color, size}) => (
              <MaterialCommunityIcons name="camera" color = {color} size = {size} />
            )
          }}
        />
        <Tab.Screen 
          name = "Home" 
          component = {HomeScreen} 
          options = {{
            tabBarLabel : "Home",
            tabBarIcon : ({color, size}) => (
              <MaterialCommunityIcons name="home" color = {color} size = {size} />
            )
          }}
        />
        <Tab.Screen 
          name = "Settings" 
          component = {SettingScreen} 
          options = {{
            tabBarLabel : "Settings",
            tabBarIcon : ({color, size}) => (
              <MaterialCommunityIcons name="cog" color = {color} size = {size} />
            )
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
    
    
    // <View className="flex-1 bg-zinc-900">
    //   <NavigationContainer>
    //     <NavStack.Navigator screenOptions={{headerShown: false}}>
    //       <NavStack.Screen
    //         name = "WelcomeScreen"
    //         component = {WelcomeScreen}        
    //       />
    //       <NavStack.Screen 
    //       name = "LoginScreen"
    //       component = {LoginScreen} 
    //       />
    //       <NavStack.Screen 
    //       name = "SignUpScreen"
    //       component = {SignUpScreen} 
    //       />
    //       </NavStack.Navigator>
    //   </NavigationContainer>
    // </View>
  );
};

export default App;