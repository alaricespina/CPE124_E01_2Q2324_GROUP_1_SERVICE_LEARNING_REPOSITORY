import { View, Text } from "react-native";
import { StatusBar } from "expo-status-bar";

const SettingScreen = () => {
    return (
        <View>
            <Text> Setting Screen </Text>
            <Text> Information about App </Text>
            <Text> Status on Server </Text>
            <Text> Dev Mode for offline servers </Text>
            <StatusBar style="auto"/>
        </View>
    )
}

export default SettingScreen;