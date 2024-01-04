import {React, useState} from 'react';

// import Login from './page_designs/Login'; // Login
// import SignUp from './page_designs/SignUp'; // Sign Up
import WelcomeScreen from './page_designs/Welcome'; //Welcome
import LoginScreen from './page_designs/Login' //Login
import SignUpScreen from './page_designs/SignUp';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator} from '@react-navigation/native-stack';
import { StyleSheet, View, Image, ImageBackground, Text, TouchableOpacity, Button, Touchable, TextInput, Pressable } from 'react-native';
import { StatusBar } from 'expo-status-bar';
//import { TransitionSpecs, CardStyleInterpolators } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { LinearGradient } from 'expo-linear-gradient'

import MainScreen from './page_designs/MainScreen';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';



const NavStack = createNativeStackNavigator();
//const Tab = createBottomTabNavigator();

// const App = () => {
//   return (
//     <NavigationContainer>
//       {/* Rest of your app code */}
//     </NavigationContainer>
//   );
// };

const MainScreenNavigator = () => {
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
          <NavStack.Screen
            name = "MainScreen"
            component = {MainScreen}
          />
        </NavStack.Navigator>
      </NavigationContainer>
    </View>
  )
}

const HomeScreen_Re = () => {
  return (
    <View className="bg-black w-full h-full">
      // Green background
      <View className="absolute bg-green w-full h-1/3" >

      </View>

      <View className="w-full">
        // Material Icon 
        // Scan Icon
        <MaterialCommunityIcons name = "menu" color="#75EE0A" size = "19"/>
        <Text>Hi Name!</Text>
        <MaterialCommunityIcons name = "line-scan" color = "#75EE0A" size = "19"/>
      </View>

      <View className="w-5/6">
        <MaterialCommunityIcons name = "magnify" color ="#FFFFFF" size = "19"/>
        <TextInput
        placeholder='Search'
        placeholderTextColor="white"
        />        
      </View>

      <View>
        <Text> Know more about Herbal Plants </Text>
        <View>
          
        </View>
      </View>

      <View>
        <Text> Popular Herbal Plants</Text>
        <View>

        </View>
      </View>

      <View>
        <Text> Gallery Outer Circle </Text>
      </View>

      <View className="bg-zinc-900 w-full h-20 rounded-full">
        <View>
        <LinearGradient
          colors={['rgba(0,0,0,0.8)', 'transparent']}
          style={styles.background}
        />
        </View>
      </View>
      <StatusBar style='auto'/>
    </View>
    
  )
}

const SearchScreen_Re = () => {
  return (
    <View>
      <View>
        <TextInput>

        </TextInput>
      </View>
      <View>
        <Text> List of recent inputs</Text>
      </View>
      <View>
        <Text> Gallery of different categories for each plant</Text>
      </View>
    </View>
  )
}

const ScannerScreen_Re = () => {
  return (
    <View>
      <View>
        <Text>Center Scanner</Text>
      </View>
    </View>
  )
}

const AccountScreen_Re = () => {
  return (
    <View>
      <View>
        <Text> Big Ass Picture </Text>
      </View>
      <View>
        <MaterialCommunityIcons name="person" color="#FFFFFF"/>
        <Text> My Account </Text>
      </View>
      <View>
        <Text>Big Ass Profile Picture</Text>
        <Text>Username</Text>
        <Text>email</Text>
      </View>
      <View>
        <Text>Picture of something I know that you dont know</Text>
        <Text>Did you know?</Text>
        <Text>No I dont know</Text>
      </View>
    </View>
  )
}

const App = () => {
  console.log(Date() + " - Compiled");

  return (  
    <View>
      <View>
        <Text>Medium Size Halaman Picutre backgrounnd</Text>
        
      </View>
      <View>
        <Text>Details</Text>
      </View>
      <View>
        <Text>Spearmint Leaf</Text>
        <Text>Nerdy ass Scientific Name</Text>
      </View>
      <View>
        <Text> Horizontally Flexed flex-row i think</Text>
        <Text>Pic 1</Text>
        <Text>Pic 1</Text>
        <Text>Pic 1</Text>
        <Text>Pic 1</Text>
      </View>
      <View>
        <Text>Spearmint Leaf Report</Text>
        <Text>Benefits</Text>
        <Text>Oh wow may benefits</Text>
        <Text>Usage</Text>
        <Text>To Prepare this halaman, kunin mo muna hindi to magically pupunta sa kamay mo</Text>
      </View>
      
    </View>
  );
};

export default App;