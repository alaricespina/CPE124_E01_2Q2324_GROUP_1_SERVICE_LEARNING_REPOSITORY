import { defaultScreenStates } from "./Utility"
import HomeScreen from "./page_designs/Home"
import SearchScreen from "./page_designs/Search"
import ScannerScreen from "./page_designs/Scanner"
import AccountBase from "./page_designs/AccountBase"
import SettingScreen from "./page_designs/AccountSettings"
import AboutUs from "./page_designs/AccountAboutUs"
import { handleMenuButtonsPressed } from "./Utility"

const displayObjectFull = (targetObject) => {
    for (var x in targetObject) {
      console.log(x + " : " + targetObject[x])  
    }
}

const handleCameraPressed = (...args) => {
    var [ActiveScreen, SetActiveScreen, targettedAttribute, DataObjects] = args[0]
    if (ActiveScreen.Scanner) {
      console.log("Say Cheese")
      console.log("Current Object:" + DataObjects.Camera_Obj)
      console.log("Full Definition")
      displayObjectFull(DataObjects.CameraObj)
      take_picture(DataObjects.CameraObj)
      handleMenuButtonsPressed([SetActiveScreen, "PostScan"])
    } else {
      handleMenuButtonsPressed([SetActiveScreen, targettedAttribute])
    }
  }

const take_picture = async (camera) => {
    if (camera) {
      const data = await camera.takePictureAsync(null);
      console.log(data.uri);
      await MediaLibrary.saveToLibraryAsync(data.uri)
      console.log("data saved")
    } else {
      console.log("Current Camera is: " + camera)
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
    return SettingScreen([SetActiveScreen, s_SwitchStates, set_s_SwitchStates])
  } else if (ActiveScreen.AccountAbout) {
    return AboutUs([SetActiveScreen])
  
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

export {displayObjectFull, handleCameraPressed, take_picture, handleScreenDisplay}
