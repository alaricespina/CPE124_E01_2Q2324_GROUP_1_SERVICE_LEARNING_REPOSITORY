import {React, useState} from 'react';

//import Login from './page_designs/Login'; // Login
//import SignUp from './page_designs/SignUp'; // Sign Up
import WelcomeScreen from './page_designs/Welcome'; //Welcome
import LoginScreen from './page_designs/Login' //Login
import SignUpScreen from './page_designs/SignUp';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator} from '@react-navigation/native-stack';
import { Switch, StyleSheet, View, Image, ImageBackground, Text, TouchableOpacity, Button, Touchable, TextInput, Pressable } from 'react-native';
import { StatusBar } from 'expo-status-bar';
//import { TransitionSpecs, CardStyleInterpolators } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { LinearGradient } from 'expo-linear-gradient'
import MainScreen from './page_designs/MainScreen';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';




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
    <View className="bg-[#090E05] w-full h-full">
      <View className="absolute bg-green-800 w-full h-2/5 rounded-3xl" >

      </View>

      <View className="absolute w-80 top-16 left-1/2 -ml-40 flex-row ">
        <View className="ml-1 mr-6 h-full items-center justify-center">
          <MaterialCommunityIcons name="menu" size={25} color="#FFF"/>
        </View>      
        <Text className="h-full text-white">Hi Hatdog!</Text>
        <View className="absolute h-full right-12 items-center justify-center">
          <MaterialCommunityIcons name="line-scan" size={25} color="#FFF"/>
        </View>
        
      </View>

      <View className="absolute w-80 h-12 top-32 left-1/2 -ml-40">   
        <View className="absolute h-full items-center justify-center ml-2">
          <MaterialCommunityIcons  name="magnify" size={30} color="#FFF"/>
        </View>
        <TextInput
        placeholder='Search'
        placeholderTextColor="white"
        className = "absolute border-2 w-full h-full border-white rounded-lg pl-12 text-white"
        />
      </View>

      <View className="absolute w-80 left-1/2 -ml-40 top-52">
        <Text className="text-white"> Know more about Herbal Plants </Text>
      </View>

      <View className="absolute w-80 left-1/2 -ml-40 top-64 h-24 flex-row">
        <View className="w-24 bg-emerald-500 h-full rounded-lg"></View>
        <View className="w-24 bg-emerald-600 h-full rounded-lg ml-4"></View>
        <View className="w-24 bg-emerald-700 h-full rounded-lg ml-4"></View>
      </View>

      <View className="absolute w-80 left-1/2 -ml-40 top-96">
        <Text className="text-white"> Popular Herbal Plants</Text>
      </View>

      <View className="absolute w-80 h-32 left-1/2 -ml-40 bottom-48 flex-row">
        <View className="h-full bg-[#2F2F2F] w-36 items-center rounded-lg">
          <View className="h-3/4 w-full p-2">
            <View className="w-full h-full bg-green-400 rounded"></View>
          </View>
          <Text className="text-white">Sambong</Text>
        </View>
        <View className="h-full bg-[#2F2F2F] w-36 items-center rounded-lg ml-4">
          <View className="h-3/4 w-full p-2">
            <View className="w-full h-full bg-green-600 rounded"></View>
          </View>
          <Text className="text-white">Ampalaya</Text>
        </View>
        <View className="h-full bg-[#2F2F2F] w-36 items-center rounded-lg ml-4">
          <View className="h-3/4 w-full p-2">
            <View className="w-full h-full bg-green-800 rounded"></View>
          </View>
          <Text className="text-white">Ampalaya</Text>
        </View>
      </View>

      <TouchableOpacity className="z-10 absolute w-48 h-48 bg-[#1E1D1D] left-1/2 -ml-24 -bottom-4 rounded-full">
        <View className="bg-transparent w-full items-center h-full mt-3">
          <MaterialCommunityIcons name="image" size={25} color="#FFF"/>
        </View>        
      </TouchableOpacity>

      <View className="z-30 absolute w-24 h-24 bg-[#090E05] left-1/2 bottom-8 -ml-12 rounded-full">
      </View>

      <TouchableOpacity className="z-40 absolute w-20 h-20 bg-emerald-400 left-1/2 bottom-10 -ml-10 rounded-full items-center justify-center">
        <MaterialCommunityIcons name="camera" size={25} color="#000"/>
      </TouchableOpacity>

      <View className="z-20 absolute bottom-0 left-0 right-0 bg-[#2F2F2F] w-full h-20 rounded-full flex-row">
        <TouchableOpacity className="w-1/5 bg-transparent items-center justify-center">
          <MaterialCommunityIcons name="home-variant" size={30} color="#FFF"/>
        </TouchableOpacity>
        <TouchableOpacity className="w-1/5 bg-transparent items-center justify-center">
          <MaterialCommunityIcons name="magnify" size={30} color="#FFF"/>
        </TouchableOpacity>
        <View className="w-1/5 bg-transparent">

        </View>
        <TouchableOpacity className="w-1/5 bg-transparent items-center justify-center">
          <MaterialCommunityIcons name="line-scan" size={30} color="#FFF"/>
        </TouchableOpacity>
        <TouchableOpacity className="w-1/5 bg-transparent items-center justify-center">
          <MaterialIcons name="person" size={30} color="#FFF"/>
        </TouchableOpacity>
      </View>
      <StatusBar style='auto'/>
    </View>
  )
}

const SearchScreen_Re = () => {
  return (
    <View className="bg-[#090E05] w-full h-full">
      <View className="absolute w-80 h-12 top-12 left-1/2 -ml-40">   
        <View className="absolute h-full items-center justify-center ml-2">
          <MaterialCommunityIcons  name="magnify" size={30} color="#FFF"/>
        </View>
        <TextInput
        placeholder='Search'
        placeholderTextColor="white"
        className = "absolute border-2 w-full h-full border-white rounded-lg pl-12 text-white"
        />
      </View>
      
      <View className="absolute w-80 h-20 left-1/2 -ml-40 top-32 flex-row">
        <View className="h-full bg-[#2F2F2F] w-36 items-center justify-center rounded-lg">
          <Text className="text-white">Sambong</Text>
        </View>
        <View className="h-full bg-[#2F2F2F] w-36 items-center justify-center rounded-lg ml-4">
          <Text className="text-white">Oregano</Text>
        </View>
        <View className="h-full bg-[#2F2F2F] w-36 items-center justify-center rounded-lg ml-4">
          <Text className="text-white">Ampalaya</Text>
        </View>
      </View>

      <View className="absolute w-80 h-44 left-1/2 -ml-40 top-60 flex-row">
        <View className="h-full bg-[#2F2F2F] w-36 rounded-lg">
          <View className="h-2/3 w-full bg-green-300 rounded-t-lg"></View>
          <View className="h-1/3 w-full items-center justify-center">
            <Text className="text-white">For Cough</Text>
          </View>
        </View>
        <View className="h-full bg-[#2F2F2F] w-36 items-center justify-center rounded-lg ml-8">
        <View className="h-2/3 w-full bg-green-500 rounded-t-lg"></View>
          <View className="h-1/3 w-full items-center justify-center">
            <Text className="text-white">For Colds</Text>
          </View>
        </View>
      </View>

      <View className="absolute w-80 h-44 left-1/2 -ml-40 bottom-36 flex-row">
      <View className="h-full bg-[#2F2F2F] w-36 rounded-lg">
          <View className="h-2/3 w-full bg-green-700 rounded-t-lg"></View>
          <View className="h-1/3 w-full items-center justify-center">
            <Text className="text-white">For Allergies</Text>
          </View>
        </View>
        <View className="h-full bg-[#2F2F2F] w-36 items-center justify-center rounded-lg ml-8">
        <View className="h-2/3 w-full bg-green-900 rounded-t-lg"></View>
          <View className="h-1/3 w-full items-center justify-center">
            <Text className="text-white">For Asthma</Text>
          </View>
        </View>
      </View>



      <View className="z-30 absolute w-24 h-24 bg-[#090E05] left-1/2 bottom-8 -ml-12 rounded-full">
      </View>
      
      <TouchableOpacity className="z-40 absolute w-20 h-20 bg-emerald-400 left-1/2 bottom-10 -ml-10 rounded-full items-center justify-center">
        <MaterialCommunityIcons name="image" size={25} color="#000"/>
      </TouchableOpacity>

      <View className="z-20 absolute bottom-0 left-0 right-0 bg-[#2F2F2F] w-full h-20 rounded-full flex-row">
        <TouchableOpacity className="w-1/5 bg-transparent items-center justify-center">
          <MaterialCommunityIcons name="home-variant" size={30} color="#FFF"/>
        </TouchableOpacity>
        <TouchableOpacity className="w-1/5 bg-transparent items-center justify-center">
          <MaterialCommunityIcons name="magnify" size={30} color="#FFF"/>
        </TouchableOpacity>
        <View className="w-1/5 bg-transparent">

        </View>
        <TouchableOpacity className="w-1/5 bg-transparent items-center justify-center">
          <MaterialCommunityIcons name="camera" size={30} color="#FFF"/>
        </TouchableOpacity>
        <TouchableOpacity className="w-1/5 bg-transparent items-center justify-center">
          <MaterialIcons name="person" size={30} color="#FFF"/>
        </TouchableOpacity>
      </View>
      <StatusBar style='auto'/>
    </View>
  )
}

const ScannerScreen_Re = () => {
  return (
    <View className="bg-[#090E05] w-full h-full">
      <View className="flex-1 items-center justify-center">
        <Image source={require("./scan-line.png")}/>
        <Text className="text-white">Hatdog</Text>
      </View>

      <View className="z-30 absolute w-24 h-24 bg-[#090E05] left-1/2 bottom-8 -ml-12 rounded-full">
      </View>
      
      <TouchableOpacity className="z-40 absolute w-20 h-20 bg-emerald-400 left-1/2 bottom-10 -ml-10 rounded-full items-center justify-center">
        <MaterialCommunityIcons name="image" size={25} color="#000"/>
      </TouchableOpacity>

      <View className="z-20 absolute bottom-0 left-0 right-0 bg-[#2F2F2F] w-full h-20 rounded-full flex-row">
        <TouchableOpacity className="w-1/5 bg-transparent items-center justify-center">
          <MaterialCommunityIcons name="home-variant" size={30} color="#FFF"/>
        </TouchableOpacity>
        <TouchableOpacity className="w-1/5 bg-transparent items-center justify-center">
          <MaterialCommunityIcons name="magnify" size={30} color="#FFF"/>
        </TouchableOpacity>
        <View className="w-1/5 bg-transparent">

        </View>
        <TouchableOpacity className="w-1/5 bg-transparent items-center justify-center">
          <MaterialCommunityIcons name="camera" size={30} color="#FFF"/>
        </TouchableOpacity>
        <TouchableOpacity className="w-1/5 bg-transparent items-center justify-center">
          <MaterialIcons name="person" size={30} color="#FFF"/>
        </TouchableOpacity>
      </View>
      <StatusBar style='auto'/>
    </View>
  )
}

const AccountScreen_Re = () => {
  return (
    <View className="w-full h-full bg-black">

      <View className="h-1/2 bg-green-500 rounded-2xl">
        <View className="items-center pt-14"> 
          <View className="flex-row pb-3">
            <MaterialIcons name="person" size={30} color="#FFF"/>
            <Text className="text-white text-xl font-bold"> My Account </Text>
          </View>
          <View className="rounded-full bg-green-600 flex items-center justify-center">
            <MaterialIcons name="person" size={180} color="#FFF"/>
          </View>
          <Text className="font-bold text-xl text-white">User Name</Text>
          <Text className="font-bold text-xs text-white">juandelacruz@mymail.mapua.edu.ph</Text>
        </View>
      </View>

      <View className="flex-row pt-8 justify-center">
        <View className="pl-2 pr-2 place-content-center">
          <TouchableOpacity className="items-center bg-[#2F2F2F80] px-4 py-4 rounded-2xl border-solid border-2 border-transparent">
            <MaterialIcons name="settings" size={40} color="#FFF"/>
            <Text className="pt-1 text-white text-xs">Settings</Text>
          </TouchableOpacity>
        </View>
        <View className="pl-2 pr-2">
          <TouchableOpacity className="items-center bg-[#2F2F2F80] px-4 py-4 rounded-2xl border-solid border-2 border-transparent">
            <MaterialIcons name="person" size={40} color="#FFF"/>
            <Text className="pt-1 text-white text-xs">Profile</Text>
          </TouchableOpacity>
        </View>
        <View className="pl-2 pr-2">
          <TouchableOpacity className="items-center bg-[#2F2F2F80] px-4 py-4 rounded-2xl border-solid border-2 border-transparent">
            <MaterialIcons name="help" size={40} color="#FFF"/>
            <Text className="pt-1 text-white text-xs">About Us</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View className="w-full items-center h-20">
        <View className="mt-4 w-5/6 bg-[#2F2F2F80] rounded-2xl items-center h-full">
          <Text className="text-white text-lg font-medium h-1/3">Your Favorite Plants</Text>
          <View className="flex-row w-full h-2/3">
            <View className="items-center w-1/4 h-full">
              <TouchableOpacity className="h-3/4 aspect-square bg-red-500 rounded-full"></TouchableOpacity>
              <Text className="text-white text-xs italic">Hatdog</Text>
            </View>
            
            <View className="items-center w-1/4 h-full">
              <TouchableOpacity className="h-3/4 aspect-square bg-blue-500 rounded-full"></TouchableOpacity>
              <Text className="text-white text-xs italic">Longganisa</Text>
            </View>
            
            <View className="items-center w-1/4 h-full">
              <TouchableOpacity className="h-3/4 aspect-square bg-green-500 rounded-full"></TouchableOpacity>
              <Text className="text-white text-xs italic">Longgadog</Text>
            </View>
          </View>
        </View>
      </View>

      <TouchableOpacity className="z-40 absolute w-20 h-20 bg-emerald-400 left-1/2 bottom-10 -ml-10 rounded-full items-center justify-center">
        <MaterialCommunityIcons name="camera" size={25} color="#000"/>
      </TouchableOpacity>

      <View className="z-20 absolute bottom-0 left-0 right-0 bg-[#2F2F2F] w-full h-20 rounded-full flex-row">
        <TouchableOpacity className="w-1/5 bg-transparent items-center justify-center">
          <MaterialCommunityIcons name="home-variant" size={30} color="#FFF"/>
        </TouchableOpacity>
        <TouchableOpacity className="w-1/5 bg-transparent items-center justify-center">
          <MaterialCommunityIcons name="magnify" size={30} color="#FFF"/>
        </TouchableOpacity>
        <View className="w-1/5 bg-transparent">

        </View>
        <TouchableOpacity className="w-1/5 bg-transparent items-center justify-center">
          <MaterialCommunityIcons name="line-scan" size={30} color="#FFF"/>
        </TouchableOpacity>
        <TouchableOpacity className="w-1/5 bg-transparent items-center justify-center">
          <MaterialIcons name="person" size={30} color="#FFF"/>
        </TouchableOpacity>
      </View>
      <StatusBar style='auto'/>

    </View>
  )
}

const SettingScreen_Re = () => {
  const [isNotificationEnabled, notificationIsEnabled] = useState(false);
  const [isEmailEnabled, emailIsEnabled] = useState(false);
  const [isReminderEnabled, reminderIsEnabled] = useState(false);
  const [isLocationEnabled, locationIsEnabled] = useState(false);
  const toggleNotificationSwitch = () => notificationIsEnabled(previousState => !previousState);
  const toggleEmailSwitch = () => emailIsEnabled(previousState => !previousState);
  const toggleReminderSwitch = () => reminderIsEnabled(previousState => !previousState);
  const toggleLocationSwitch = () => locationIsEnabled(previousState => !previousState);
  return (
    <View className="w-full h-full bg-black">
      <View className="w-full h-1/4 bg-green-600">
        <Text className="mt-12 ml-3 text-white font-bold text-3xl">Settings</Text>
      </View>
      <View className="w-full h-1/2 flex-column">
        <View className="w-full flex-row ml-[16%]">
          <MaterialCommunityIcons name="bell" size={35} color="#FFF"/>
          <View className="mr-5"></View>
          <View className="flex-column w-[40%]">
            <Text className="text-lg font-bold text-white">Notification</Text>
            <Text className="text-xs text-white font-light">Caption...</Text>
          </View>
        <Switch trackColor={{false: '#767577', true: '#0ae0a0'}}
      thumbColor={isNotificationEnabled ? '#008000' : '#f4f3f4'}
      ios_backgroundColor="#3e3e3e"
      onValueChange={toggleNotificationSwitch}
      value={isNotificationEnabled}/>
          
        </View>

        <View className="my-1.5"></View>

        <View className="w-full flex-row ml-[16%]">
          <MaterialCommunityIcons name="email" size={35} color="#FFF"/>
          <View className="mr-5"></View>
          <View className="flex-column w-[40%]">
            <Text className="text-lg font-bold text-white">Email Updates</Text>
            <Text className="text-xs text-white font-light">Caption...</Text>
          </View>
          <Switch trackColor={{false: '#767577', true: '#0ae0a0'}}
        thumbColor={isEmailEnabled ? '#008000' : '#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleEmailSwitch}
        value={isEmailEnabled}/>
        </View>

        <View className="my-1.5"></View>

        <View className="w-full flex-row ml-[16%]">
          <MaterialCommunityIcons name="reminder" size={35} color="#FFF"/>
          <View className="mr-5"></View>
          <View className="flex-column w-[40%]">
            <Text className="text-lg font-bold text-white">Reminders</Text>
            <Text className="text-xs text-white font-light">Caption...</Text>
          </View>
          <Switch trackColor={{false: '#767577', true: '#0ae0a0'}}
        thumbColor={isReminderEnabled ? '#008000' : '#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleReminderSwitch}
        value={isReminderEnabled}/>
        </View>

        <View className="my-1.5"></View>

        <View className="w-full flex-row ml-[16%]">
          <MaterialCommunityIcons name="navigation" size={35} color="#FFF"/>
          <View className="mr-5"></View>
          <View className="flex-column w-[40%]">
            <Text className="text-lg font-bold text-white">Share Location</Text>
            <Text className="text-xs text-white font-light">Caption...</Text>
          </View>
          <Switch trackColor={{false: '#767577', true: '#0ae0a0'}}
        thumbColor={isLocationEnabled ? '#008000' : '#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleLocationSwitch}
        value={isLocationEnabled}/>
        </View>
      </View>
      <TouchableOpacity className="w-[90%] ml-[5%] mr-[5%] py-2 rounded-lg bg-[#008000] mt-[20%] items-center justify-center">
        <Text className="text-black text-xl font-bold">Back to Home</Text>
      </TouchableOpacity>
    </View>
  )
}

const PostScanScreen_Re = () => {
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
  )
}

const App = () => {
  console.log(Date() + " - Compiled");

  return SettingScreen_Re()
};

export default App;