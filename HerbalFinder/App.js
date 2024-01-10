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
    <>
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

      
      
      
    </>
  )
}

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

const ScannerScreen_Re = () => {
  return (
    <>
        <View className="absolute h-full w-full items-center justify-center">
          <Image source={require("./scan-line.png")}/>
          <Text className="text-white">Hatdog</Text>
        </View>
    </>
  );
};

const HandleAccountButtonsPressed = (index, _setters, _ac_set) => {
  console.log("Account Button Pressed")
  _ac_set(false)
  _setters[0](false)
  _setters[1](false)
  _setters[2](false)
  _setters[index](true)

}

const AccountScreen_Re = (_states, _setters, account_var) => {
  console.log("====== Account Screen ")
  console.log(_states)
  console.log(_setters)
  console.log(account_var)
  console.log("=====")
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
          <TouchableOpacity className="absolute h-full left-0 aspect-square items-center justify-center bg-[#2F2F2F80] rounded-2xl" onPress={() => HandleAccountButtonsPressed(0, _setters, account_var)}>
            <MaterialIcons name="settings" size={40} color="#FFF"/>
            <Text className="text-white text-xs">Settings</Text>
          </TouchableOpacity>
          <TouchableOpacity className="absolute h-full left-[35.5%]  aspect-square items-center justify-center bg-[#2F2F2F80] rounded-2xl" onPress={() => HandleAccountButtonsPressed(1, _setters, account_var)}>
            <MaterialIcons name="person" size={40} color="#FFF"/>
            <Text className="text-white text-xs">Profile</Text>
          </TouchableOpacity>
          <TouchableOpacity className="absolute h-full left-[71%] aspect-square items-center justify-center bg-[#2F2F2F80] rounded-2xl" onPress={() => HandleAccountButtonsPressed(2, _setters, account_var)}>
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
  var [setAccountSelected, setAccountSettingsSelected] = args[0]
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
          setAccountSettingsSelected(true)
          setAccountSelected(true)
        }}
      >
        <Text className="text-black text-xl font-bold">Back to Home</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
};

const SettingScreen_Re = (...args) => {
  console.log("Settings Screen Loaded")
  console.log("Initial Args:" + args)

  var [
    isNotificationEnabled, notificationIsEnabled, 
    isEmailEnabled, emailIsEnabled, 
    isReminderEnabled, reminderIsEnabled, 
    isLocationEnabled, locationIsEnabled, 
    setAccountSelected, setAccountSettingsSelected] = args[0] 
  
  const toggleNotificationSwitch = () => notificationIsEnabled(previousState => !previousState);
  const toggleEmailSwitch = () => emailIsEnabled(previousState => !previousState);
  const toggleReminderSwitch = () => reminderIsEnabled(previousState => !previousState);
  const toggleLocationSwitch = () => locationIsEnabled(previousState => !previousState);
  
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

      <TouchableOpacity className="w-[90%] ml-[5%] mr-[5%] py-2 rounded-lg bg-[#008000] mt-[20%] items-center justify-center"
      onPress={() => {
        setAccountSettingsSelected(false)
        setAccountSelected(true)
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

const handleMenuButtonsPressed = (buttonVar, setButtonVar, button, otherSetButtonsVars) => {
  console.log("Start Function")
  for (f in otherSetButtonsVars) {
    console.log(otherSetButtonsVars[f])
    otherSetButtonsVars[f](false)
  }
  console.log("Button pressed is: " + button)
  console.log(buttonVar)
  setButtonVar(!buttonVar)
  console.log(buttonVar)
}

const handleScreenDisplay = (home, search, scan, account, _account_states, _account_setters, settings_params, about_params) => {
  console.log("Handle Screen Display")
  console.log("Account States: " + _account_states)
  console.log("Settings Params -> " + settings_params)
  if (home) {
    return HomeScreen_Re()
  } else if (search) {
    return SearchScreen_Re()
  } else if (scan) {
    return ScannerScreen_Re()
  } else if (account[0]) {
    console.log("Displaying Account Screen")
    return AccountScreen_Re(_account_states, _account_setters, account[1])
  } else if (_account_states[0]){
    console.log("Displaying Setting Screen")
    console.log("==========")
    return SettingScreen_Re(settings_params)
  } else if (_account_states[1]){
    return (<></>)
  } else if (_account_states[2]){
    console.log("Displaying About Us Screen")
    console.log("==========")
    return AboutUs_Re(about_params)
  } else {
    return (<></>)
  }
  
}

const MaterialCommunityGradientIcon = (iconName, gradientStart, gradientEnd, defaultColor, monitoringVariable) => {
  if (monitoringVariable) {
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
  if (monitoringVariable) {
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

const BigAssCircle = () => {
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
  console.log("Navigation Bar Loaded")  
  console.log("Args ->" + args)
  var [homeSelected, setHomeSelected, searchSelected, setSearchSelected, scannerSelected, setScannerSelected, accountSelected, setAccountSelected, accountSettingsSelected, accountProfileSelected, accountAboutSelected] = args[0]
  console.log("Home Selected: " + homeSelected)
  if (!accountSettingsSelected && !accountProfileSelected && !accountAboutSelected) {
    return (
      <>
        <View className="z-20 absolute w-[calc(90/375*100%)] aspect-square bg-[#090E05] left-[calc(50%-90/375/2*100%)] bottom-[2.75%] rounded-full">
        </View>
  
        <View className="z-30 absolute w-[calc(80/375*100%)] aspect-square left-[calc(50%-80/375/2*100%)] bottom-[3.5%] mt-0 rounded-full">
          <TouchableOpacity className="w-full h-full">
            <LinearGradient start={{x:0.25, y:0.25}} end = {{x:0.75, y:0.6}} colors={["#008000", "#2AAA8A"]} className="w-full h-full rounded-full items-center justify-center">
              <MaterialCommunityIcons name="camera" size={25} color="#000"/>
            </LinearGradient>        
          </TouchableOpacity>
        </View>
  
        <View className="z-10 absolute left-0 right-0 bg-[#2F2F2F] w-full h-[calc(75/812*100%)] bottom-0 rounded-full flex-row">
          <TouchableOpacity className="w-1/5 bg-transparent items-center justify-center" onPress={() => handleMenuButtonsPressed(homeSelected, setHomeSelected, "HOME", [setSearchSelected, setScannerSelected, setAccountSelected])}>
            <View className="w-full h-full">
              {MaterialCommunityGradientIcon("home-variant", "#75E00A", "#0AE0A0", "#FFF", homeSelected)}
            </View>
          </TouchableOpacity>
          <TouchableOpacity className="w-1/5 bg-transparent items-center justify-center" onPress={() => handleMenuButtonsPressed(searchSelected, setSearchSelected, "SEARCH", [setHomeSelected, setSearchSelected, setAccountSelected])}>
            <View className="w-full h-full">
              {MaterialCommunityGradientIcon("magnify", "#75E00A", "#0AE0A0", "#FFF", searchSelected)}
            </View>
          </TouchableOpacity>
          <View className="w-1/5 bg-transparent">
          </View>
          <TouchableOpacity className="w-1/5 bg-transparent items-center justify-center" onPress={() => handleMenuButtonsPressed(scannerSelected, setScannerSelected, "SCANNER", [setSearchSelected, setHomeSelected, setAccountSelected])}>
            <View className="w-full h-full">
              {MaterialCommunityGradientIcon("line-scan", "#75E00A", "#0AE0A0", "#FFF", scannerSelected)}
            </View>
          </TouchableOpacity>
          <TouchableOpacity className="w-1/5 bg-transparent items-center justify-center" onPress={() => handleMenuButtonsPressed(accountSelected, setAccountSelected, "ACCOUNT", [setSearchSelected, setScannerSelected, setHomeSelected])}>
            <View className="w-full h-full">
              {MaterialGradientIcon("person", "#75E00A", "#0AE0A0", "#FFF", accountSelected)}
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
  var [isNotificationEnabled, notificationIsEnabled] = useState(false);
  var [isEmailEnabled, emailIsEnabled] = useState(false);
  var [isReminderEnabled, reminderIsEnabled] = useState(false);
  var [isLocationEnabled, locationIsEnabled] = useState(false);

  var [homeSelected, setHomeSelected] = useState(false)
  var [searchSelected, setSearchSelected] = useState(false)
  var [scannerSelected, setScannerSelected] = useState(false)
  var [accountSelected, setAccountSelected] = useState(false)
  var [accountSettingsSelected, setAccountSettingsSelected] = useState(false)
  var [accountProfileSelected, setAccountProfileSelected] = useState(false)
  var [accountAboutSelected, setAccountAboutSelected] = useState(false)

  return (
    <View className="flex relative w-full h-full bg-[#090E05]">

    {handleScreenDisplay(
      homeSelected, 
      searchSelected, 
      scannerSelected, 
      [accountSelected, setAccountSelected],
      [accountSettingsSelected, accountProfileSelected, accountAboutSelected],
      [setAccountSettingsSelected, setAccountProfileSelected, setAccountAboutSelected],
      [isNotificationEnabled, notificationIsEnabled, isEmailEnabled, emailIsEnabled, isReminderEnabled, reminderIsEnabled, isLocationEnabled, locationIsEnabled, setAccountSelected, setAccountSettingsSelected],
      [setAccountSelected, setAccountSettingsSelected])}

    {homeSelected ? BigAssCircle() : <></>}
    
    {NavBar([homeSelected, setHomeSelected, searchSelected, setSearchSelected, scannerSelected, setScannerSelected, accountSelected, setAccountSelected, accountSettingsSelected, accountProfileSelected, accountAboutSelected])}


    <StatusBar style='auto'/>
    </View>

    
  )
};

export default App;