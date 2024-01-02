import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';

import { ngrok_link } from '../Consts';



const SignUpScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View className="flex-1 bg-zinc-900">
      <ImageBackground source= {require("../pics/PNGtree.png")} className="flex-1 object-cover">
        <View className="flex-1 bg-transparent items-center justify-center">
          <Image source={require('../pics/HBLogo.png')} className="w-96 h-52 object-scale-down rounded-xl ml-5"></Image>
          <Text className="text-white text-2xl mb-6">Sign Up</Text>

          <TextInput 
          placeholder="Username" 
          placeholderTextColor="black" 
          className="w-2/3 bg-white h-10 mb-6 text-black"
          value = {username}
          onChangeText={(text) => setUsername(text)}
          />
          <TextInput 
          placeholder="Email" 
          placeholderTextColor="black" 
          className="w-2/3 bg-white h-10 mb-6 text-black"
          value = {email}
          onChangeText={(text) => setEmail(text)}
          />
          <TextInput 
          placeholder="Password" 
          placeholderTextColor="black" 
          secureTextEntry 
          className="w-2/3 bg-white h-10 mb-6 text-black"
          value = {password}
          onChangeText={(text) => setPassword(text)}
          />

          <TouchableOpacity onPress= {() => {console.log("Username: " + username + "\nEmail: " + email +"\nPassword: " + password)}} className="bg-green-950 h-10 w-2/3 items-center rounded-md mb-3 ps-4 justify-center">
            <Text className="text-white text-base font-bold">Login</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress= {() => navigation.navigate('WelcomeScreen') }className="bg-green-950 h-10 w-2/3 items-center rounded-md mb-3 ps-4 justify-center">
            <Text className="text-white text-base font-bold">Back to Welcome</Text>
          </TouchableOpacity>
        </View>
          

      </ImageBackground>
      <StatusBar style="auto"/>
        
    </View>
  );
};


export default SignUpScreen;
