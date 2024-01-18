// Main
import {React, useState, useEffect} from 'react';

// Components
import { Switch, StyleSheet, View, Image, ImageBackground, Text, TouchableOpacity, Button, Touchable, TextInput, Pressable, KeyboardAvoidingView, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { LinearGradient } from 'expo-linear-gradient';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaskedView from '@react-native-masked-view/masked-view';
import { Camera, CameraType, FlashMode } from 'expo-camera';


// App Logic
import { displayObjectFull, handleCameraPressed, take_picture, handleMenuButtonsPressed, handleScreenDisplay } from './App_logic';

// Const
import { defaultScreenStates, defaultSettingStates, defaultDataObjects } from './Consts';

const MaterialCommunityGradientIcon = (iconName, gradientStart, gradientEnd, defaultColor, monitoringVariable) => {
  if (monitoringVariable == true) {
    return (

        <MaskedView className="flex-1 flex-row h-full w-full bg-transparent items-center justify-center"
        maskElement={
          <View className="w-full h-full items-center justify-center">
            <MaterialCommunityIcons name={iconName} size={24} color={"#0F0"}/>
          </View>            
        }
      >
        <LinearGradient 
        colors={[gradientStart, gradientEnd]} 
        className="w-full h-full items-center justify-center"
        start={{x:0.5, y:0}}
        end = {{x:0.5, y:0.9}}
        />
        </MaskedView>

      
    )
  } else {
    return (
      <View className="w-full h-full items-center justify-center">
        <MaterialCommunityIcons name={iconName} size={24} color={defaultColor}/>
      </View>
    )
  }
  
}

const MaterialGradientIcon = (iconName, gradientStart, gradientEnd, defaultColor, monitoringVariable) => {
  if (monitoringVariable == true) {
    return (
      <MaskedView className="flex-1 flex-row h-full w-full bg-transparent items-center justify-center"
        maskElement={
          <View className="w-full h-full items-center justify-center">
            <MaterialIcons name={iconName} size={24} color={"#0F0"}/>
          </View>            
        }
      >
        <LinearGradient 
        colors={[gradientStart, gradientEnd]} 
        className="w-full h-full items-center justify-center"
        start={{x:0.5, y:0}}
        end = {{x:0.5, y:0.9}}
        />
        </MaskedView>
    )
  } else {
    return (
      <View className="w-full h-full items-center justify-center">
        <MaterialIcons name={iconName} size={24} color={defaultColor}/>
      </View>
    )
  }
}

const MenuBarGalleryCircle = () => {
  return (
    <>
      <TouchableOpacity className="z-10 absolute w-[calc(200/375*100%)] left-[calc(50%-200/375/2*100%)] aspect-square bg-[#1E1D1D] bottom-[-4%] rounded-full">
        <View className="bg-transparent w-full items-center h-full mt-3">
          <MaterialCommunityIcons name="image" size={25} color="#FFF"/>
        </View>        
      </TouchableOpacity>

      
    </>
  )
}

const NavBar = (...args) => {
  var [ActiveScreen, SetActiveScreen, DataObjects, SetDataObjects] = args[0]

  if (!(ActiveScreen.AccountSettings || ActiveScreen.AccountAbout)) {
    return (
      <>
        <View className="z-20 absolute w-[calc(90/375*100%)] aspect-square bg-[#090E05] left-[calc(50%-90/375/2*100%)] bottom-[2.75%] rounded-full">
        </View>
  
        <View className="z-30 absolute w-[calc(80/375*100%)] aspect-square left-[calc(50%-80/375/2*100%)] bottom-[3.5%] mt-0 rounded-full">
          <TouchableOpacity className="w-full h-full" onPress={() => {
            console.log("Camera Pressed")
            handleCameraPressed([ActiveScreen, SetActiveScreen, "Scanner", DataObjects])
            }}>
            <LinearGradient start={{x:0.25, y:0.25}} end = {{x:0.75, y:0.6}} colors={["#008000", "#2AAA8A"]} className="w-full h-full rounded-full items-center justify-center">
              <MaterialCommunityIcons name="camera" size={25} color="#000"/>
            </LinearGradient>        
          </TouchableOpacity>
        </View>
  
        <View className="z-10 absolute left-0 right-0 bg-[#2F2F2F] w-full h-[calc(75/812*100%)] bottom-0 rounded-full flex-row">
          <TouchableOpacity className="w-1/5 bg-transparent items-center justify-center" onPress={() => {
            console.log("Home Selected")
            handleMenuButtonsPressed([SetActiveScreen, "Home"])
            }}>
            <View className="w-full h-full">
              {MaterialCommunityGradientIcon("home-variant", "#75E00A", "#0AE0A0", "#FFF", ActiveScreen.Home)}
            </View>
          </TouchableOpacity>
          <TouchableOpacity className="w-1/5 bg-transparent items-center justify-center" onPress={() => {
            console.log("Search Selected")
            handleMenuButtonsPressed([SetActiveScreen, "Search"])
            }}>
            <View className="w-full h-full">
              {MaterialCommunityGradientIcon("magnify", "#75E00A", "#0AE0A0", "#FFF", ActiveScreen.Search)}
            </View>
          </TouchableOpacity>
          <View className="w-1/5 bg-transparent">
          </View>
          <TouchableOpacity className="w-1/5 bg-transparent items-center justify-center" onPress={() => {
            console.log("Scanner Selected")
            handleMenuButtonsPressed([SetActiveScreen, "Scanner"])
          }}>
            <View className="w-full h-full">
              {MaterialCommunityGradientIcon("line-scan", "#75E00A", "#0AE0A0", "#FFF", ActiveScreen.Scanner)}
            </View>
          </TouchableOpacity>
          <TouchableOpacity className="w-1/5 bg-transparent items-center justify-center" onPress={() => {
            console.log("Account Selected")
            handleMenuButtonsPressed([SetActiveScreen, "AccountBase"])
            }}>
            <View className="w-full h-full">
              {MaterialGradientIcon("person", "#75E00A", "#0AE0A0", "#FFF", ActiveScreen.AccountBase)}
            </View>
          </TouchableOpacity>
        </View>
      </>
    )
  } else {
    <>
    </>
  }
  
}

const App = () => {
  console.log("\n" + Date() + " - Compiled");

  var [s_SwitchStates, set_s_SwitchStates] = useState({
    ...defaultSettingStates
  })

  // Initial State
  var dSS = {...defaultScreenStates} 
  var [ActiveScreen, SetActiveScreen] = useState({
    ...dSS
  })

  var [DataObjects, SetDataObjects] = useState({
    ...defaultDataObjects
  })

  console.log("***********Active Screen***********")
  displayObjectFull(ActiveScreen)
  console.log("***********************************")

  return (
    //LoginScreen()
    <View className="flex relative w-full h-full bg-[#090E05]">

    {handleScreenDisplay([ActiveScreen, SetActiveScreen, s_SwitchStates, set_s_SwitchStates, DataObjects, SetDataObjects])}

    {/* {homeSelected ? BigAssCircle() : <></>} */}
    
    {NavBar([ActiveScreen, SetActiveScreen, DataObjects, SetDataObjects])}


    <StatusBar style='auto'/>
    </View>

    
  )
};

export default App;