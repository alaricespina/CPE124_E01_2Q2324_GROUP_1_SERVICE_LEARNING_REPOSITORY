import { View, Text, TextInput } from "react-native";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const SearchScreen = () => {
    return (
      <>
        <View className="absolute w-80 h-12 top-12 left-1/2 -ml-40">   
          <View className="absolute h-full items-center justify-center ml-2">
            <MaterialCommunityIcons  name="magnify" size={30} color="#FFF"/>
          </View>
          <TextInput
          placeholder='Search'
          placeholderTextColor="white"
          className = "absolute border-2 w-full h-full border-white rounded-lg pl-12 text-white"
          />
        </View>
        
        <View className="absolute w-80 h-20 left-1/2 -ml-40 top-32 flex-row">
          <View className="h-full bg-[#2F2F2F] w-36 items-center justify-center rounded-lg">
            <Text className="text-white">Sambong</Text>
          </View>
          <View className="h-full bg-[#2F2F2F] w-36 items-center justify-center rounded-lg ml-4">
            <Text className="text-white">Oregano</Text>
          </View>
          <View className="h-full bg-[#2F2F2F] w-36 items-center justify-center rounded-lg ml-4">
            <Text className="text-white">Ampalaya</Text>
          </View>
        </View>
  
        <View className="absolute w-80 h-44 left-1/2 -ml-40 top-60 flex-row">
          <View className="h-full bg-[#2F2F2F] w-36 rounded-lg">
            <View className="h-2/3 w-full bg-green-300 rounded-t-lg"></View>
            <View className="h-1/3 w-full items-center justify-center">
              <Text className="text-white">For Cough</Text>
            </View>
          </View>
          <View className="h-full bg-[#2F2F2F] w-36 items-center justify-center rounded-lg ml-8">
          <View className="h-2/3 w-full bg-green-500 rounded-t-lg"></View>
            <View className="h-1/3 w-full items-center justify-center">
              <Text className="text-white">For Colds</Text>
            </View>
          </View>
        </View>
  
        <View className="absolute w-80 h-44 left-1/2 -ml-40 bottom-36 flex-row">
        <View className="h-full bg-[#2F2F2F] w-36 rounded-lg">
            <View className="h-2/3 w-full bg-green-700 rounded-t-lg"></View>
            <View className="h-1/3 w-full items-center justify-center">
              <Text className="text-white">For Allergies</Text>
            </View>
          </View>
          <View className="h-full bg-[#2F2F2F] w-36 items-center justify-center rounded-lg ml-8">
          <View className="h-2/3 w-full bg-green-900 rounded-t-lg"></View>
            <View className="h-1/3 w-full items-center justify-center">
              <Text className="text-white">For Asthma</Text>
            </View>
          </View>
        </View>
      </>
      
    )
  }
  
export default SearchScreen;