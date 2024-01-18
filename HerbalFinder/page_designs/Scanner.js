import { View, Text } from "react-native";
import { Camera, CameraType, FlashMode, Image } from 'expo-camera';
import { LinearGradient } from 'expo-linear-gradient';
import * as MediaLibrary from 'expo-media-library'

const ScannerScreen = () => {
    //var [DataObjects, SetDataObjects] = args[0]
    const permission = MediaLibrary.requestPermissionsAsync(true)
    const camera_perm = Camera.requestCameraPermissionsAsync()
    console.log("Scanner Screen Called")
  
    return (
      <>
        <View className="absolute z-10 h-full w-full items-center justify-center">

          {/* <LinearGradient 
            className="absolute z-30 w-full h-full"
            colors={["transparent", "#FFF"]}
            start={{x:0.5, y:0.65}}
            end={{x:0.5, y:1.0}}
            >
          </LinearGradient>  */}

          <Camera 
            ref={(ref) => {
              console.log("Camera to be set:" + ref)

            }}
            type={CameraType.back}
            flashMode={FlashMode.auto} 
            className="absolute z-20 h-full aspect-[3/4] items-center justify-center">
            
          </Camera>
              
            

          
          <Text className="absolute z-30 text-white top-[70%]"> Scanner </Text>
        </View>
      </>
    );
};

const Hatdog = () => {
 return (
  <>
                
  
  <Image source={require("../scan-line.png")}/>
          
  </>
  
          
 )
}
  
export default ScannerScreen