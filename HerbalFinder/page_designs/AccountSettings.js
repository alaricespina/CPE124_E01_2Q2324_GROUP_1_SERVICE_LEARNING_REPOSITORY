
import { View, Text, TouchableOpacity } from "react-native";
import { StatusBar } from "expo-status-bar";

const SettingScreen = (...args) => {
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
  
export default SettingScreen;