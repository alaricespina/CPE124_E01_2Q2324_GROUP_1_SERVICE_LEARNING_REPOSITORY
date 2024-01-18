import { View, Text, TextInput, Pressable, TouchableOpacity} from "react-native"
import { LinearGradient } from 'expo-linear-gradient';
import { handleMenuButtonsPressed } from "../Utility";

const Profile = (...args) => {
    console.log("Profile Screen")
    var [DataObjects, SetDataObjects, SetActiveScreen] = args[0]


    return (
        <>
        
        <View className="absolute z-0 w-full h-1/2 top-0 bg-green-300">

        </View>
        <LinearGradient className="absolute z-10 w-full h-full"
        colors={["transparent", "#000"]}
        start={{x:0.5, y:0.0}}
        end={{x:0.5, y:0.3}}
        />
        <View className="absolute z-20 w-full h-full items-center">
            <View className="absolute z-20 w-4/5 h-full items-center">
                <View className="absolute w-full top-[7%]">
                    <Text className="text-white text-xl">My Profile</Text>
                </View>
                <View className="absolute  w-full top-[15%] h-[calc(78/812*100%)]">
                    <Text className="text-white">Name</Text>
                    <TextInput className="w-full border-[#DBFFB7] border-2 rounded-xl h-[70%]"></TextInput>
                </View>
                <View className="absolute  w-full top-[30%] h-[calc(78/812*100%)]">
                    <Text className="text-white">Email</Text>
                    <TextInput className="w-full border-[#DBFFB7] border-2 rounded-xl h-[70%]"></TextInput>
                </View>
                <View className="absolute  w-full top-[45%] h-[calc(78/812*100%)]">
                    <Text className="text-white">Password</Text>
                    <TextInput className="w-full border-[#DBFFB7] border-2 rounded-xl h-[70%]"></TextInput>
                </View>
                <View className="absolute  w-full top-[57%] h-[calc(78/812*100%)]">
                    <TouchableOpacity>
                        <Text className="underline text-white">Edit Profile</Text>
                    </TouchableOpacity>
                    
                </View>
                <View className="absolute w-full top-[85%] h-[calc(47/812*100%)] rounded-xl">
                    <TouchableOpacity className="w-full h-full" onPress={() => {
                        console.log("Back to Home Pressed")
                        handleMenuButtonsPressed([SetActiveScreen, "AccountBase"])
                        }}>
                        <LinearGradient
                        colors={["#008000", "#0AE0A0"]}
                        className="w-full h-full items-center justify-center"
                        >
                            <Text> Back To Home</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                </View>
                
            </View>
        </View>
        
        </>
    )
}

export default Profile