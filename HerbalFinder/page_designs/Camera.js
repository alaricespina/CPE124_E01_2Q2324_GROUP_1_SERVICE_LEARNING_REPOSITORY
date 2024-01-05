import { View, Text, TouchableOpacity } from "react-native";
import { StatusBar } from "expo-status-bar";

const CameraScreen = () => {
    return (
        <View className="items-center justify-center flex-1 bg-blue-300">
            <Text> Camera Screen </Text>
            <View className="w-2/3 h-2/3 bg-red-400 items-center justify-center">
                <Text> Camera Area </Text>
            </View>
            
            <TouchableOpacity className="w-2/6 h-1/6 bg-green-300 items-center justify-center mt-5">
                <Text> Press To Capture</Text>
            </TouchableOpacity>
        </View>
    )
    
}

export default CameraScreen;