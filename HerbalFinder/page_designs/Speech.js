import { View, Text, TouchableOpacity, TouchableOpacityBase } from "react-native";
import { StatusBar } from "expo-status-bar";

const SpeechScreen = () => {
    return (
        <View className="flex-1 bg-red-500 items-center justify-center">
            <Text> Speech Screen </Text>
            <TouchableOpacity className="h-1/5 w-1/2 bg-lime-400">
                <Text>Status</Text>
            </TouchableOpacity>
            <Text> Press to Speak and Record </Text>
            <TouchableOpacity className="h-1/5 w-1/2 bg-lime-300">
                <Text> Press to Test Microphone </Text>    
            </TouchableOpacity>
            <StatusBar style="auto"/>
        </View>
    )
}

export default SpeechScreen;