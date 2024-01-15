import { View, Text, TouchableOpacity } from "react-native";
import { StatusBar } from "expo-status-bar";

const ScannerScreen = (...args) => {
    var [DataObjects, SetDataObjects] = args[0]
    const permission = MediaLibrary.requestPermissionsAsync(true)
    console.log("Scanner Screen Called")
  
    return (
      <>
          <View className="absolute z-10 h-full w-full items-center justify-center">
            <LinearGradient 
            className="absolute z-30 w-full h-full"
            colors={["transparent", "#000"]}
            start={{x:0.5, y:0.65}}
            end={{x:0.5, y:1.0}}
            >
            </LinearGradient>
            <Camera 
            ref={(ref) => {
              if (!DataObjects.Camera_Obj) {
                var _ = {...defaultDataObjects}
                _.Camera_Obj = ref
  
                console.log("Camera Object Local:" + _)
                
                console.log("Camera Object Inside:" + DataObjects.Camera_Obj)
              }
              
            }}
            type={CameraType.back}
            flashMode={FlashMode.auto} 
            className="absolute z-20 h-full aspect-[3/4] items-center justify-center">
              <Image source={require("./scan-line.png")}/>
            </Camera>
            <Text className="absolute z-30 text-white top-[70%]"> Scanner </Text>
            
          </View>
      </>
    );
  };
  
export default ScannerScreen