import * as React from 'react';

import { StyleSheet, View, Image, ImageBackground, Text, TouchableOpacity, Button } from 'react-native';
import { SafeArea } from 'react-native-safe-area-context';
import { Platform } from 'react-native';
import { StatusBar } from 'expo-status-bar';

const WelcomeScreen = ({navigation}) => {
    return (
        <View className="flex-1 bg-zinc-900">

        <ImageBackground source= {require("../pics/PNGtree.png")} className="flex-1 object-cover">

            <View className="bg-black flex-1 bg-transparent items-center justify-center">
            <Image source={require('../pics/HBLogo.png')} className="w-96 h-52 object-scale-down rounded-xl ml-5"></Image>
            <Text className="text-white text-2xl mb-6">Welcome!</Text>
            <TouchableOpacity onPress= {() => navigation.navigate('LoginScreen')} className="bg-green-950 h-10 w-2/3 items-center rounded-md mb-3 ps-4 justify-center">
                <Text className="text-white text-base font-bold">Login</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress= {() => navigation.navigate('LoginScreen') }className="bg-green-950 h-10 w-2/3 items-center rounded-md mb-3 ps-4 justify-center">
                <Text className="text-white text-base font-bold">Sign Up</Text>
            </TouchableOpacity>
            </View>
            

        </ImageBackground>
        <StatusBar style="auto"/>
        
        </View>
            
    )
}
export default WelcomeScreen;