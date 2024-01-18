import { defaultScreenStates } from "./Consts"
import HomeScreen from "./page_designs/Home"
import SearchScreen from "./page_designs/Search"
import ScannerScreen from "./page_designs/Scanner"

const displayObjectFull = (targetObject) => {
    for (var x in targetObject) {
      console.log(x + " : " + targetObject[x])  
    }
}

const handleCameraPressed = (...args) => {
    var [ActiveScreen, SetActiveScreen, targettedAttribute, DataObjects] = args[0]
    if (ActiveScreen.Scanner) {
      console.log("Say Cheese")
      // take_picture(DataObject.CameraObj)
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
    }
  }
  
const handleMenuButtonsPressed = (...args) => {
  var [SetActiveScreen, targettedAttribute] = args[0]
  var dSS = {...defaultScreenStates}
  dSS[targettedAttribute] = true 
  SetActiveScreen({...dSS})
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
    //return ScannerScreen([DataObjects, SetDataObjects])
    return ScannerScreen()
  } else if (ActiveScreen.AccountBase) {
    return AccountScreen_Re([SetActiveScreen])
  } else if (ActiveScreen.AccountSettings) {
    return SettingScreen_Re([SetActiveScreen, s_SwitchStates, set_s_SwitchStates])
  } else if (ActiveScreen.AccountAbout) {
    return AboutUs_Re([SetActiveScreen])
  
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

export {displayObjectFull, handleCameraPressed, take_picture, handleMenuButtonsPressed, handleScreenDisplay}
