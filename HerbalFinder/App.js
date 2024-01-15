import {React, useState, useEffect} from 'react';

//import Login from './page_designs/Login'; // Login
//import SignUp from './page_designs/SignUp'; // Sign Up
import WelcomeScreen from './page_designs/Welcome'; //Welcome
import LoginScreen from './page_designs/Login' //Login
import SignUpScreen from './page_designs/SignUp';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator} from '@react-navigation/native-stack';
import { Switch, StyleSheet, View, Image, ImageBackground, Text, TouchableOpacity, Button, Touchable, TextInput, Pressable, KeyboardAvoidingView, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
//import { TransitionSpecs, CardStyleInterpolators } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { LinearGradient } from 'expo-linear-gradient';
import MainScreen from './page_designs/MainScreen';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaskedView from '@react-native-masked-view/masked-view';
import { Camera, CameraType, FlashMode } from 'expo-camera';

import * as MediaLibrary from 'expo-media-library'



const SearchScreen_Re = () => {
  return (
    <>
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
    </>
    
  )
}

const ScannerScreen_Re = (...args) => {
  var [DataObjects, SetDataObjects] = args[0]
  const permission = MediaLibrary.requestPermissionsAsync(true)
  console.log("Scanner Screen Called")

  return (
    <>
        <View className="absolute z-10 h-full w-full items-center justify-center">
          <LinearGradient 
          className="absolute z-30 w-full h-full"
          colors={["transparent", "#000"]}
          start={{x:0.5, y:0.65}}
          end={{x:0.5, y:1.0}}
          >
          </LinearGradient>
          <Camera 
          ref={(ref) => {
            if (!DataObjects.Camera_Obj) {
              var _ = {...defaultDataObjects}
              _.Camera_Obj = ref

              console.log("Camera Object Local:" + _)
              
              console.log("Camera Object Inside:" + DataObjects.Camera_Obj)
            }
            
          }}
          type={CameraType.back}
          flashMode={FlashMode.auto} 
          className="absolute z-20 h-full aspect-[3/4] items-center justify-center">
            <Image source={require("./scan-line.png")}/>
          </Camera>
          <Text className="absolute z-30 text-white top-[70%]"> Scanner </Text>
          
        </View>
    </>
  );
};

const AccountScreen_Re = (...args) => {
  var [SetActiveScreen] = args[0]

  return (
    <>
      <View className="absolute top-0 h-[calc(410/812*100%)] w-full left-0 right-0 bg-green-500 rounded-2xl">
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

      <View className="absolute top-[calc(55%)] h-[calc(90/812*100%)]  w-full items-center">
        <View className="w-4/5 h-full">
          <TouchableOpacity className="absolute h-full left-0 aspect-square items-center justify-center bg-[#2F2F2F80] rounded-2xl" onPress={() => {
            console.log("Settings Pressed")
            const _ = {...defaultScreenStates}
            _.AccountSettings = true 
            SetActiveScreen({..._})
            }}>
            <MaterialIcons name="settings" size={40} color="#FFF"/>
            <Text className="text-white text-xs">Settings</Text>
          </TouchableOpacity>
          <TouchableOpacity className="absolute h-full left-[35.5%]  aspect-square items-center justify-center bg-[#2F2F2F80] rounded-2xl" onPress={() => {
            console.log("Profile Pressed")
            const _ = {...defaultScreenStates}
            _.AccountProfile = true 
            SetActiveScreen({..._})
            }}>
            <MaterialIcons name="person" size={40} color="#FFF"/>
            <Text className="text-white text-xs">Profile</Text>
          </TouchableOpacity>
          <TouchableOpacity className="absolute h-full left-[71%] aspect-square items-center justify-center bg-[#2F2F2F80] rounded-2xl" onPress={() => {
            console.log("About Us Pressed")
            const _ = {...defaultScreenStates}
            _.AccountAbout = true 
            SetActiveScreen({..._})
            }}>
            <MaterialIcons name="help" size={40} color="#FFF"/>
            <Text className="text-white text-xs">About Us</Text>
          </TouchableOpacity>
        </View>
      </View>
      

      <View className="absolute top-[calc(68%)] items-center w-full h-[41%]">
        <View className="h-2/5 w-4/5 bg-[#2F2F2F80] rounded-2xl items-center">
          <Text className="text-white text-s font-medium">Your Favorite Plants</Text>
          <View className="w-4/5 h-3/5 mt-2">
            <View className="absolute left-0 items-center w-1/3 h-full">
              <TouchableOpacity className="h-3/4 aspect-square bg-red-500 rounded-full"></TouchableOpacity>
              <Text className="text-white text-xs italic">Text 1</Text>
            </View>
            
            <View className="absolute left-[33.5%] items-center w-1/3 h-full">
              <TouchableOpacity className="h-3/4 aspect-square bg-blue-500 rounded-full"></TouchableOpacity>
              <Text className="text-white text-xs italic">Text 2</Text>
            </View>
            
            <View className="absolute left-[67%] items-center w-1/3 h-full">
              <TouchableOpacity className="h-3/4 aspect-square bg-green-500 rounded-full"></TouchableOpacity>
              <Text className="text-white text-xs italic">Text 3</Text>
            </View>
          </View>
        </View>
      </View>






      </>
  );
};

const AboutUs_Re = (...args) => {
  var [SetActiveScreen] = args[0]
  return (
    <ImageBackground
      source={require('./pics/PNG_AboutUs.png')}
      style={{ flex: 1, resizeMode: 'cover', justifyContent: 'center', backgroundColor: 'rgba(0,0,0,1.00)' }}
    >
      <View className="items-center justify-center">
        {/* Herbal Finder Logo */}
        <Image source={require('./pics/HBLogo.png')} style={{ width: 150, height: 120, marginBottom: 20}} />

        <Text className="text-white text-3xl font-bold mb-6">About Us</Text>
        <View className="w-4/5 bg-[#2F2F2F90] rounded-2xl p-[10%] mb-[20%]">
          <Text className="text-white text-base mb-4">
            Welcome to our Herbal Finder App! We are here to provide valuable information
            and promote the use of herbal plants.
          </Text>
          <Text className="text-white text-base mb-4">
            Our mission is to educate users about various herbal plants, their benefits,
            and how they can be used for different purposes, especially in natural remedies.
          </Text>
          <Text className="text-white text-base mb-4">
            Do you have any questions or concerns? Feel free to reach out to us at HerbalNgInaMo@gmail.com.
          </Text>
        </View>
      </View>

      {/* "Back to Home" button with darker green color */}
      <TouchableOpacity
        className="z-40 absolute w-full h-16 bg-[#008000] bottom-0 items-center justify-center"
        onPress={() => {
          handleMenuButtonsPressed([SetActiveScreen, "AccountBase"])
        }}
      >
        <Text className="text-black text-xl font-bold">Back to Home</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
};

const SettingScreen_Re = (...args) => {
  var [SetActiveScreen, s_SwitchStates, set_s_SwitchStates] = args[0]

  console.log("Settings Screen Loaded")
  console.log("Initial Args:" + args)

  return (
    <View className="w-full h-full bg-black">
      <View className="w-full h-1/4 bg-green-600">
        <Text className="mt-12 ml-3 text-white font-bold text-3xl">Settings</Text>
      </View>
      <View className="w-full h-1/2 flex-column mt-[2%]">
        <View className="w-full flex-row ml-[16%]">
          <MaterialCommunityIcons name="bell" size={35} color="#FFF"/>
          <View className="mr-5"></View>
          <View className="flex-column w-[40%]">
            <Text className="text-lg font-bold text-white">Notification</Text>
            <Text className="text-xs text-white font-light">Caption...</Text>
          </View>
        <Switch trackColor={{false: '#767577', true: '#0ae0a0'}}
      thumbColor={s_SwitchStates.notificationEnabled ? '#008000' : '#f4f3f4'}
      ios_backgroundColor="#3e3e3e"
      onValueChange={() => {
        var _ = {...s_SwitchStates}
        _.notificationEnabled = !_.notificationEnabled
        set_s_SwitchStates({..._})
      }}
      value={s_SwitchStates.notificationEnabled}/>
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
        thumbColor={s_SwitchStates.emailEnabled ? '#008000' : '#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={() => {
          var _ = {...s_SwitchStates}
          _.emailEnabled = !_.emailEnabled
          set_s_SwitchStates({..._})
        }}
        value={s_SwitchStates.emailEnabled}/>
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
        thumbColor={s_SwitchStates.reminderEnabled ? '#008000' : '#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={() => {
          var _ = {...s_SwitchStates}
          _.reminderEnabled = !_.reminderEnabled
          set_s_SwitchStates({..._})
        }}
        value={s_SwitchStates.reminderEnabled}/>
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
        thumbColor={s_SwitchStates.locationEnabled ? '#008000' : '#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={() => {
          var _ = {...s_SwitchStates}
          _.locationEnabled = !_.locationEnabled
          set_s_SwitchStates({..._})
        }}
        value={s_SwitchStates.locationEnabled}/>
        </View>
      </View>

      <TouchableOpacity className="w-[90%] ml-[5%] mr-[5%] py-2 rounded-lg bg-[#008000] mt-[20%] items-center justify-center"
      onPress={() => {
        console.log("Back to Home is Pressed")
        handleMenuButtonsPressed([SetActiveScreen, "AccountBase"])
      }}>
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