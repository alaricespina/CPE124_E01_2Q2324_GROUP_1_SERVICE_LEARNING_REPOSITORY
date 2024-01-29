// Main
import {React, useState, useEffect, useRef} from 'react';

// Components
import { Switch, View, Image, ImageBackground, Text, TouchableOpacity, TextInput, Pressable, Alert} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { LinearGradient } from 'expo-linear-gradient';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaskedView from '@react-native-masked-view/masked-view';
import { Camera, CameraType, FlashMode } from 'expo-camera';
import * as MediaLibrary from 'expo-media-library'

// ================================================================================================================
// Constants

const ngrok_link = "https://fit-krill-apparently.ngrok-free.app"

const defaultScreenStates = {
  Welcome : false,
  LoginSignUp : false,
  Home : false, 
  Search : false, 
  Scanner : false, 
  PostScan : false, 
  AccountBase : false,
  AccountProfile : false,
  AccountSettings : false, 
  AccountAbout : false
}

const defaultSettingStates = {
  notificationEnabled : false,
  emailEnabled : false,
  reminderEnabled : false, 
  locationEnabled : false
}

// ================================================================================================================
// Utiliy Functions

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

const ShowOKAlertMessage = (title, message) => {
  Alert.alert(title, message, [
    {text: 'OK', onPress: () => console.log('OK Pressed')},
  ]);
}

// ================================================================================================================
// Special Functions

// Take picture after camera button has been pressed
const takeCameraPicture = async (camera) => {
  if (camera) {
    const options = {base64:false}
    const data = await camera.takePictureAsync(options);
    console.log(data.uri);
    await MediaLibrary.saveToLibraryAsync(data.uri)
    console.log("data saved")
  } else {
    console.log("RUNTIME ERROR =======================")
    console.log("Current Camera is: ")
    console.log(camera)
    console.log("=====================================")
  }
}

// Handle Camera Button pressed on Navigation Bar
const handleCameraPressed = (...args) => {
  console.log("Camera Pressed, Args: ")
  console.log(args)
  var [ActiveScreen, SetActiveScreen, targettedAttribute, DataObjects] = args[0]
  if (ActiveScreen.Scanner) {
    console.log("Say Cheese")
    console.log("Current Object:" + DataObjects.Camera_Obj)
    console.log("Full Definition")
    displayObjectFull(DataObjects.Camera_Obj.current)
    takeCameraPicture(DataObjects.Camera_Obj.current).then(() => {
      console.log("Picture Done")
      handleMenuButtonsPressed([SetActiveScreen, "PostScan"])
    })
    // handleMenuButtonsPressed([SetActiveScreen, "PostScan"])
  } else {
    handleMenuButtonsPressed([SetActiveScreen, targettedAttribute])
  }
}

// Send the Login Request after login has been pressed
const sendLoginRequest = async(username, password) => {
  console.log("Logging in")
  console.log(ngrok_link.concat("/login"))
  const response = await fetch(ngrok_link.concat("/login"), {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'ngrok-skip-browser-warning' : true
    },
    body: JSON.stringify({
      'username': username,
      'password': password
    })
  });
  return await response.json();
}

// Send the Sign Up Request after Signup has been pressed
const sendSignUpRequest = async(username, email, password) => {
  const response = await fetch(ngrok_link.concat('/signup'), {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'ngrok-skip-browser-warning' : true
    },
    body: JSON.stringify({
      'username': username,
      'email': email,
      'password': password
    })
  });
  return await response.json();
}

// Synchronous handling of Login and Signup Request
const handleLoginSignUpAction = (username, email, password, mode, SetActiveScreen) => {
  if (mode == "Login") {
    sendLoginRequest(username, password).then((response) => {
      console.log("Login Response: ")
      console.log(response)
      if (response["match"]) {
        handleMenuButtonsPressed([SetActiveScreen, "Home"])
      }
    })
  } else if (mode == "SignUp") {
    sendSignUpRequest(username, email, password).then((response) => {
      console.log("SignUp Response:")
      console.log(response)
      if (!(response["match"])) {
        sendLoginRequest(username, password).then((response) => {
          handleMenuButtonsPressed([SetActiveScreen, "Home"])
        })
      }
    })
  }
}

// Update Account Details (Unlock Fields) after button has been pressed
const updateAccountDetails = () => {

}



// ================================================================================================================
// Utility Functions

const handleMenuButtonsPressed = (...args) => {
  var [SetActiveScreen, targettedAttribute] = args[0]
  var dSS = {...defaultScreenStates}
  dSS[targettedAttribute] = true 
  SetActiveScreen({...dSS})
}

const displayObjectFull = (targetObject) => {
  for (var x in targetObject) {
    console.log(x + " : " + targetObject[x])  
  }
}

const handleScreenDisplay = (...args) => {

var [ActiveScreen, SetActiveScreen, s_SwitchStates, set_s_SwitchStates, DataObjects, SetDataObjects] = args[0]

// const Screens = {
//   Home : HomeScreen_Re(),
//   Search : SearchScreen_Re(),
//   Scanner : ScannerScreen_Re([DataObjects, SetDataObjects]),
//   AccountBase : AccountScreen_Re([SetActiveScreen]),
//   AccountProfile : (<></>),
//   AccountSettings : SettingScreen_Re([SetActiveScreen, s_SwitchStates, set_s_SwitchStates]),
//   AccountAbout : (<></>)
// }

// const corresponding_screen = Object.keys(ActiveScreen).filter(key => ActiveScreen[key])

// return Screens[corresponding_screen]


if (ActiveScreen.Home) {
  return HomeScreen()
} else if (ActiveScreen.Search) {
  return SearchScreen()
} else if (ActiveScreen.Scanner) {
  return ScannerScreen([DataObjects, SetDataObjects])
  //return ScannerScreen()
} else if (ActiveScreen.AccountBase) {
  return AccountBase([SetActiveScreen])
} else if (ActiveScreen.AccountSettings) {
  return AccountSettings([SetActiveScreen, s_SwitchStates, set_s_SwitchStates])
} else if (ActiveScreen.AccountAbout) {
  return AccountAboutUs([SetActiveScreen])
} else if (ActiveScreen.AccountProfile) {
  return AccountProfile([DataObjects, SetDataObjects, SetActiveScreen])
} else if (ActiveScreen.PostScan) {
  return PostScanScreen()
} else if (ActiveScreen.LoginSignUp) {
  return LoginAndSignUpScreen([SetActiveScreen, DataObjects, SetDataObjects])

  


// } else if (scan) {
//   return ScannerScreen_Re(camera_params)
// } else if (account[0]) {
//   console.log("Displaying Account Screen")
//   return AccountScreen_Re(_account_states, _account_setters, account[1])
// } else if (_account_states[0]){
//   console.log("Displaying Setting Screen")
//   console.log("==========")
//   return SettingScreen_Re(settings_params)
// } else if (_account_states[1]){
//   return (<></>)
// } else if (_account_states[2]){
//   console.log("Displaying About Us Screen")
//   console.log("==========")
//   return AboutUs_Re(about_params)
} else {
  return (<></>)
}

}

// ================================================================================================================
// Navigation Bar Components

const MenuBarGalleryCircle = (...args) => {
  var [SetActiveScreen, DataObjects, SetDataObjects] = args[0]

  return (
    <>
      <TouchableOpacity className="z-10 absolute w-[calc(200/375*100%)] left-[calc(50%-200/375/2*100%)] aspect-square bg-[#1E1D1D] bottom-[-4%] rounded-full"
      onPress={() => handleMenuButtonsPressed([SetActiveScreen, "PostScan"])}
      >
        <View className="bg-transparent w-full items-center h-full mt-3">
          <MaterialCommunityIcons name="image" size={25} color="#FFF"/>
        </View>        
      </TouchableOpacity>
    </>
  )
}

const NavBar = (...args) => {
  var [ActiveScreen, SetActiveScreen, DataObjects, SetDataObjects] = args[0]

  if (!(ActiveScreen.AccountSettings || ActiveScreen.AccountAbout || ActiveScreen.AccountProfile || ActiveScreen.LoginSignUp)) {
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

// ================================================================================================================
// Screens
// Login And Signup Screen
const LoginAndSignUpScreen = (...args) => {
  var [SetActiveScreen, DataObjects, SetDataObjects] = args[0]
  console.log("Login And Signup")
  console.log("Data Objects")
  console.log(DataObjects)

  const LoginSet = () => {
    return (
      <>
        <View className="absolute w-full h-[10%] top-[20%] items-center">
          <View className="w-4/5 h-full">
            <TextInput 
            placeholder="Enter email or username" 
            placeholderTextColor="#766F6F" 
            className="w-full bg-transparent h-full text-white border-b-2"
            value = {DataObjects.username}
            onChangeText={(text) => {
              var curr = {...DataObjects}
              curr.username = text
              SetDataObjects(curr)
            }}
            />
          </View>
        </View>

        <View className="absolute w-full h-[10%] top-[40%] items-center">
          <View className="w-4/5 h-full">
            <TextInput 
            placeholder="Password" 
            placeholderTextColor="#766F6F" 
            secureTextEntry 
            className="w-full bg-transparent h-full text-white border-b-2"
            value = {DataObjects.password}
            onChangeText={(text) => {
              var curr = {...DataObjects}
              curr.password = text
              SetDataObjects(curr)
            }}
            />
          </View>
        </View>
        
        <View className="absolute w-full h-[10%] top-[50%] items-center">
          <View className="w-4/5 h-full items-end">
            <TouchableOpacity onPress={() => console.log("Forgot your password? You done goofed boy")}>
              <Text className="text-[#766F6F]">Forgot Password?</Text>
            </TouchableOpacity>
          </View>
        </View>


        <View className="absolute w-full h-[10%] top-[70%] items-center">
          <TouchableOpacity 
            className="bg-green-950 h-10 w-2/3 items-center rounded-md mb-3 ps-4 justify-center rounded-full"
            onPress= {() => {
              handleLoginSignUpAction(DataObjects.username, "", DataObjects.password, "Login", SetActiveScreen)
              console.log("Login Pressed")
            }}>
            <Text className="text-white text-base font-bold">Login</Text>
          </TouchableOpacity>
        </View>
      </>
      
    )
    
  }

  const SignUpSet = () => {
    return (
      <>
        <View className="absolute w-full h-[10%] top-[20%] items-center">
          <View className="w-4/5 h-full">
            <TextInput 
            placeholder="Enter Username" 
            placeholderTextColor="#766F6F" 
            className="w-full bg-transparent h-full text-white border-b-2"
            value = {DataObjects.username}
            onChangeText={(text) => {
              var curr = {...DataObjects}
              curr.username = text
              SetDataObjects(curr)
            }}
            />
          </View>
        </View>

        <View className="absolute w-full h-[10%] top-[40%] items-center">
          <View className="w-4/5 h-full">
            <TextInput 
            placeholder="Enter Email" 
            placeholderTextColor="#766F6F" 
            className="w-full bg-transparent h-full text-white border-b-2"
            value = {DataObjects.email}
            onChangeText={(text) => {
              var curr = {...DataObjects}
              curr.email = text
              SetDataObjects(curr)
            }}
            />
          </View>
        </View>

        <View className="absolute w-full h-[10%] top-[60%] items-center">
          <View className="w-4/5 h-full">
            <TextInput 
            placeholder="Enter Password" 
            placeholderTextColor="#766F6F" 
            secureTextEntry 
            className="w-full bg-transparent h-full text-white border-b-2"
            value = {DataObjects.password}
            onChangeText={(text) => {
              var curr = {...DataObjects}
              curr.password = text
              SetDataObjects(curr)
            }}
            />
          </View>
        </View>
        
        


        <View className="absolute w-full h-[10%] top-[80%] items-center">
          <TouchableOpacity onPress= {() => {
            handleLoginSignUpAction(DataObjects.username, DataObjects.email, DataObjects.password, "SignUp", SetActiveScreen)
            console.log("Signup Pressed")
            }} className="bg-green-950 h-10 w-2/3 items-center rounded-md mb-3 ps-4 justify-center rounded-full">
            <Text className="text-white text-base font-bold">SignUp</Text>
          </TouchableOpacity>
        </View>
      </>
      
    )
  }

  return (
    <>
      <ImageBackground source= {require("./pics/PNG_LoginSignUp.png")} className="absolute z-0 w-full h-full object-cover">
      </ImageBackground> 


      <View className="absolute w-full h-full bg-[#00000090] items-center">
        <View className="absolute z-10 w-[calc(450/375*100%)] aspect-square top-[calc(-225/812*100%)] left-[calc(-75/375*100%)]">
        <LinearGradient className="w-full h-full rounded-full" colors={["#00800075", "#00800075"]}></LinearGradient>
      </View>
      <View className="absolute z-10 w-[calc(467/375*100%)] h-[calc(450/812*100%)] top-[calc(-286/812*100%)] left-[calc(-179/375*100%)]">
        <LinearGradient className="w-full h-full rounded-full" colors={["#00800075", "#2AAA8A75"]}></LinearGradient>
      </View>
      <View className="absolute z-10 w-[calc(467/375*100%)] aspect-square top-[calc(648/812*100%)] left-[calc(131/375*100%)]">
        <LinearGradient className="w-full h-full rounded-full" colors={["#00800075", "#2AAA8A75"]}></LinearGradient>
      </View>
      <View className="absolute z-30 w-[150%] aspect-square top-[calc(700/812*100%)] left-[-40%]">
        <LinearGradient className="w-full h-full rounded-full" colors={["#00800075", "#2AAA8A75"]}></LinearGradient>
      </View>

      
      <View className="absolute z-20 h-[calc(134/812*100%)] top-[7.5%] w-full items-center">
        <Image source={require('./pics/HBLogo.png')} className=" h-full aspect-square object-scale-down rounded-xl ml-5"/>
      </View>

      <View className="absolute z-30 w-[calc(316/375*100%)] bg-[#2F2F2F] h-[calc(434/812*100%)] top-[calc(210/812*100%)] rounded-xl border-2 border-[#766F6F]">
        <View className="absolute top-[5%] w-full h-[10%] items-center">
          <View className="w-4/5 h-full">
            <View className={`absolute z-20 w-[calc(54%)] h-full rounded-full border-2 border-black ${DataObjects.loginSignUpState ? 'bg-[#008000]' : 'bg-[#2AAA8A]'}`}>
              <Pressable 
              className="w-full h-full items-center justify-center"
              onPress={() => {
                console.log("Login Pressed")
                console.log(DataObjects.loginSignUpState)
                var x = {...DataObjects}
                x.loginSignUpState = true
                SetDataObjects(x)
              }}
              >
                <Text className="text-white" >Login</Text>
              </Pressable>
            </View>
            <View className={`absolute z-10 w-[calc(60%)] left-[40%] h-full rounded-full border-2 border-black ${DataObjects.loginSignUpState ? 'bg-[#2AAA8A]' : 'bg-[#008000]'}`}>
              <Pressable 
              className="w-full h-full items-center justify-center"
              onPress={() => {
                console.log("SignUp Pressed")
                console.log(DataObjects.loginSignUpState)
                var x = {...DataObjects}
                x.loginSignUpState = false
                SetDataObjects(x)
              }}
              >
                <Text className="text-white" >Sign Up</Text>
              </Pressable>
            </View>
          </View>
        </View>

        {DataObjects.loginSignUpState ? LoginSet() : SignUpSet()}
        
        </View>
                
      </View>
          

       
    </>

  );
};

// Home Screen
const HomeScreen = () => {
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

// Post Scan Screen
const PostScanScreen = () => {
  return (
    <>

    
      <View className="bg-green-300 w-full h-[calc(236/812*100%)] items-center justify-center">
        <Text className="text-white">Details</Text>
      </View>


      <View className="absolute w-full top-[30%] items-center justify-center">
        <Text className="text-white">Spearmint Leaf</Text>
        <Text className="text-white">Nerdy ass Scientific Name</Text>
      </View>

      <View className="absolute w-full top-[40%] h-[10%] items-center">
        <View className="w-4/5 flex-row h-full gap-x-[4%] -ml-[19%]">
          <View className="bg-green-800 h-full aspect-square">

          </View>
          <View className="bg-green-800 h-full aspect-square">

          </View>
          <View className="bg-green-800 h-full aspect-square">

          </View>
          <View className="bg-green-800 h-full aspect-square">

          </View>
        </View>
        
      </View>

      <View className="absolute w-full top-[52%] items-center">
        <View className="w-4/5 -ml-[14%]">
          <Text className="text-white font-bold text-lg">Spearmint Leaf Report</Text>
          <Text className="text-white font-bold text-lg">Benefits</Text>
          <Text className="text-white">Oh wow may benefits</Text>
          <Text className="text-white font-bold text-lg">Usage</Text>
          <Text className="text-white">To Prepare this halaman, kunin mo muna hindi to magically pupunta sa kamay mo</Text>
        </View>
      </View>
      
    
    </>
    
  )
}

// Scanner Screen
const ScannerScreen = (...args) => {
  var [DataObjects, SetDataObjects] = args[0]
  const permission = MediaLibrary.requestPermissionsAsync(true)
  const camera_perm = Camera.requestCameraPermissionsAsync()
  console.log("Scanner Screen Called")
  
  return (
    <>
      <View className="absolute z-10 h-full w-full items-center justify-center">
      
        <LinearGradient 
          className="absolute z-30 w-full h-full"
          colors={["transparent", "#000"]}
          start={{x:0.5, y:0.65}}
          end={{x:0.5, y:1.0}}
        />
        <Camera 
          ref={DataObjects.Camera_Obj}
          // (r) => {
          //   var x = {...DataObjects}
          //   console.log("1 - Current Camera Object on Data Object:" + DataObjects.Camera_Obj)
          //   console.log("2 - X Camera Object (Local): " + x.Camera_Obj)
          //   x.Camera_Obj = r
          //   console.log("2 - X Camera Object (Local): " + x.Camera_Obj)
          //   console.log("2 - X (Local): " + x)
          //   if (DataObjects.Camera_Obj == null && r != null) {
          //     SetDataObjects(x)
              
          //   }
          //   console.log("3 - After Setting: " + DataObjects.Camera_Obj)
            
            
          // }
          type={CameraType.back}
          flashMode={FlashMode.auto} 
          className="absolute z-20 h-full aspect-[3/4] items-center justify-center">
          <Image source={require("./scan-line.png")}/>
        </Camera>
    
        <Text className="absolute z-30 text-white top-[70%]"> Scanner </Text>
        
      </View>
    </>
  )
}

// Search Screen
const SearchScreen = () => {
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

// About Us Screen
const AccountAboutUs = (...args) => {

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

// Acount Base Screen
const AccountBase = (...args) => {
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

// Account Profile Screen
const AccountProfile = (...args) => {
  console.log("Profile Screen")
  var [DataObjects, SetDataObjects, SetActiveScreen] = args[0]


  return (
      <>
      
      <View className="absolute z-0 w-full h-1/2 top-0 bg-green-300">

      </View>
      <LinearGradient className="absolute z-10 w-full h-full"
      colors={["transparent", "#000"]}
      start={{x:0.5, y:0.0}}
      end={{x:0.5, y:0.3}}
      />
      <View className="absolute z-20 w-full h-full items-center">
          <View className="absolute z-20 w-4/5 h-full items-center">
              <View className="absolute w-full top-[7%]">
                  <Text className="text-white text-xl">My Profile</Text>
              </View>
              <View className="absolute  w-full top-[15%] h-[calc(78/812*100%)]">
                  <Text className="text-white">Name</Text>
                  <TextInput className="w-full border-[#DBFFB7] border-2 rounded-xl h-[70%]"></TextInput>
              </View>
              <View className="absolute  w-full top-[30%] h-[calc(78/812*100%)]">
                  <Text className="text-white">Email</Text>
                  <TextInput className="w-full border-[#DBFFB7] border-2 rounded-xl h-[70%]"></TextInput>
              </View>
              <View className="absolute  w-full top-[45%] h-[calc(78/812*100%)]">
                  <Text className="text-white">Password</Text>
                  <TextInput className="w-full border-[#DBFFB7] border-2 rounded-xl h-[70%]"></TextInput>
              </View>
              <View className="absolute  w-full top-[57%] h-[calc(78/812*100%)]">
                  <TouchableOpacity>
                      <Text className="underline text-white">Edit Profile</Text>
                  </TouchableOpacity>
                  
              </View>
              <View className="absolute w-full top-[85%] h-[calc(47/812*100%)] rounded-xl">
                  <TouchableOpacity className="w-full h-full" onPress={() => {
                      console.log("Back to Home Pressed")
                      handleMenuButtonsPressed([SetActiveScreen, "AccountBase"])
                      }}>
                      <LinearGradient
                      colors={["#008000", "#0AE0A0"]}
                      className="w-full h-full items-center justify-center"
                      >
                          <Text> Back To Home</Text>
                      </LinearGradient>
                  </TouchableOpacity>
              </View>
              
          </View>
      </View>
      
      </>
  )
}

// Account Settings Screen
const AccountSettings = (...args) => {
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

// ================================================================================================================
// App Function

const App = () => {
  
  const defaultDataObjects = {
      Camera_Obj : useRef(null),
      username : null,
      email : null,
      password : null,
      loginSignUpState : true
  }

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

  var [startUp, setStartUp] = useState(1)
  if (startUp) {
    handleMenuButtonsPressed([SetActiveScreen, "LoginSignUp"])
    setStartUp(0)
  }

  console.log("***********Active Screen***********")
  displayObjectFull(ActiveScreen)
  console.log("***********************************")

  return (
    //LoginScreen()
    <View className="flex relative w-full h-full bg-[#090E05]">

    {handleScreenDisplay([ActiveScreen, SetActiveScreen, s_SwitchStates, set_s_SwitchStates, DataObjects, SetDataObjects])}

    {ActiveScreen.Home ? MenuBarGalleryCircle([SetActiveScreen, DataObjects, SetDataObjects]) : <></>}

    {NavBar([ActiveScreen, SetActiveScreen, DataObjects, SetDataObjects])}


    <StatusBar style='auto'/>
    </View>

    
  )
};

export default App;