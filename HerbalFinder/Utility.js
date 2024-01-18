var ngrok_link = "https://fit-krill-apparently.ngrok-free.app"

const defaultScreenStates = {
    Welcome : false,
    Login : false,
    SignUp : false,
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

const defaultDataObjects = {
    Camera_Obj : null,
    username : null,
    email : null,
    password : null
}

const handleMenuButtonsPressed = (...args) => {
    var [SetActiveScreen, targettedAttribute] = args[0]
    var dSS = {...defaultScreenStates}
    dSS[targettedAttribute] = true 
    SetActiveScreen({...dSS})
}


export {ngrok_link, defaultScreenStates, defaultSettingStates, defaultDataObjects, handleMenuButtonsPressed}