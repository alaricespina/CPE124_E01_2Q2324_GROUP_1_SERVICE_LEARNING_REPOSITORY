import { View, Text } from "react-native";
import { StatusBar } from "expo-status-bar";

const HomeScreen = () => {
    return (
        <View>
            <Text> Home Screen </Text>
            <Text> View Recent Pictures for Captures </Text>
            <Text> Each recent picture would have their own name </Text>
            <Text> Each recent picture can be opened </Text>
            <Text> View Recent Plant Searches </Text>
            <Text> View Recent Speech Searches </Text>
            <StatusBar style="auto"/>
        </View>
    )
    
}

export default HomeScreen;