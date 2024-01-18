import { View, Text } from "react-native"
const PostScanScreen = () => {
    return (
      <>

      
        <View className="bg-green-300 w-full h-[calc(236/812*100%)] items-center justify-center">
          <Text className="text-white">Details</Text>
        </View>


        <View className="absolute w-full top-[30%] items-center justify-center">
          <Text className="text-white">Spearmint Leaf</Text>
          <Text className="text-white">Nerdy ass Scientific Name</Text>
        </View>

        <View className="absolute w-full top-[50%]">
          <Text>Pic 1</Text>
          <Text>Pic 1</Text>
          <Text>Pic 1</Text>
          <Text>Pic 1</Text>
        </View>

        <View className="absolute w-full top-[70%]">
          <Text className="text-white">Spearmint Leaf Report</Text>
          <Text className="text-white">Benefits</Text>
          <Text className="text-white">Oh wow may benefits</Text>
          <Text className="text-white">Usage</Text>
          <Text className="text-white">To Prepare this halaman, kunin mo muna hindi to magically pupunta sa kamay mo</Text>
        </View>
        
      
      </>
      
    )
  }

export default PostScanScreen