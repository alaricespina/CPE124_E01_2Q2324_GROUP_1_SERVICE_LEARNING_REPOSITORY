
import { View, Text, TouchableOpacity } from "react-native";
import { StatusBar } from "expo-status-bar";

const LogOut = (navigation) => {
    console.log("Logging Out " + navigation)
    navigation.navigate("LoginScreen")
}

const SettingScreen = ({navigation}) => {
    console.log("At the settings screen " + navigation + " Undefined ? " + (navigation == undefined))
    return (
        <View className = "flex-1 bg-emerald-500 justify-center items-center">
            <Text> Setting Screen </Text>
            <Text> Information about App </Text>
            <Text> Status on Server </Text>
            <Text> Dev Mode for offline servers </Text>
            <TouchableOpacity onPress={() => LogOut(navigation)} className = "w-1/2 h-12 bg-emerald-950 justify-center items-center">
                <Text className = "text-white text-xl">Logout</Text>
            </TouchableOpacity>
            <StatusBar style="auto"/>
        </View>
    )
}

export default SettingScreen;