import { View, Text, TextInput, Button } from "react-native";
import { StatusBar } from "expo-status-bar";

const SearchScreen = () => {
    return (
        <View className = "flex-1 bg-green-400 items-center">
            <Text> Search Screen </Text>
            <View className = "flex-row bg-red-300 w-full">
            <TextInput className = "w-4/5"></TextInput>
            <Button className = "w-1/5" title = "Search" ></Button>
            </View>
            
            <Text> Press area and Type to search halaman </Text>
            <Text> Recent Searches must also show </Text>
            <StatusBar style="auto"/>
        </View>
    )
}

export default SearchScreen;