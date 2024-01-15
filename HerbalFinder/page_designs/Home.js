import { View, Text, TextInput } from "react-native";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const HomeScreen = () => {
    return (
      <>
        <View className="absolute bg-green-800 w-full h-2/5 rounded-3xl" >
        </View>
  
        <View className="absolute w-80 top-16 left-1/2 -ml-40 flex-row ">
          <View className="ml-1 mr-6 h-full items-center justify-center">
            <MaterialCommunityIcons name="menu" size={25} color="#FFF"/>
          </View>      
          <Text className="h-full text-white">Hi Hatdog!</Text>
          <View className="absolute h-full right-12 items-center justify-center">
            <MaterialCommunityIcons name="line-scan" size={25} color="#FFF"/>
          </View>
          
        </View>
  
        <View className="absolute w-80 h-12 top-32 left-1/2 -ml-40">   
          <View className="absolute h-full items-center justify-center ml-2">
            <MaterialCommunityIcons  name="magnify" size={30} color="#FFF"/>
          </View>
          <TextInput
          placeholder='Search'
          placeholderTextColor="white"
          className = "absolute border-2 w-full h-full border-white rounded-lg pl-12 text-white"
          />
        </View>
  
        <View className="absolute w-80 left-1/2 -ml-40 top-52">
          <Text className="text-white"> Know more about Herbal Plants </Text>
        </View>
  
        <View className="absolute w-80 left-1/2 -ml-40 top-64 h-24 flex-row">
          <View className="w-24 bg-emerald-500 h-full rounded-lg"></View>
          <View className="w-24 bg-emerald-600 h-full rounded-lg ml-4"></View>
          <View className="w-24 bg-emerald-700 h-full rounded-lg ml-4"></View>
        </View>
  
        <View className="absolute w-80 left-1/2 -ml-40 top-96">
          <Text className="text-white"> Popular Herbal Plants</Text>
        </View>
  
        <View className="absolute w-80 h-32 left-1/2 -ml-40 bottom-48 flex-row">
          <View className="h-full bg-[#2F2F2F] w-36 items-center rounded-lg">
            <View className="h-3/4 w-full p-2">
              <View className="w-full h-full bg-green-400 rounded"></View>
            </View>
            <Text className="text-white">Sambong</Text>
          </View>
          <View className="h-full bg-[#2F2F2F] w-36 items-center rounded-lg ml-4">
            <View className="h-3/4 w-full p-2">
              <View className="w-full h-full bg-green-600 rounded"></View>
            </View>
            <Text className="text-white">Ampalaya</Text>
          </View>
          <View className="h-full bg-[#2F2F2F] w-36 items-center rounded-lg ml-4">
            <View className="h-3/4 w-full p-2">
              <View className="w-full h-full bg-green-800 rounded"></View>
            </View>
            <Text className="text-white">Ampalaya</Text>
          </View>
        </View>
  
        
        
        
      </>
    )
  }
  

export default HomeScreen;