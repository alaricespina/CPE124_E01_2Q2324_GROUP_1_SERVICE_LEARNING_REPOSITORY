import { View, Text } from "react-native";
import { StatusBar } from "expo-status-bar";

const HomeScreen = () => {
    console.log("At the Home screen")
    return (
        <View className = "flex-1 bg-sky-700"> 
            <Text className = "mt-4"> Home Screen </Text>
            <View className = "w-full h-1/6 bg-sky-50">
                
            </View>
            <Text> View Recent Pictures for Captures </Text>
            <Text> Each recent picture would have their own name </Text>
            <Text> Each recent picture can be opened </Text>
            <View className = "w-full h-12 bg-sky-50 mt-12">

            </View>
            <Text> View Recent Plant Searches </Text>
            <View className = "w-full h-12 bg-sky-50 mt-12">

            </View>
            <Text> View Recent Speech Searches </Text>
            <StatusBar style="auto"/>
        </View>
    )
    
}

export default HomeScreen;