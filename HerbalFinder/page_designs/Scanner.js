import { View, Text, Image } from "react-native";
import { Camera, CameraType, FlashMode } from 'expo-camera';
import { LinearGradient } from 'expo-linear-gradient';
import * as MediaLibrary from 'expo-media-library'


const ScannerScreen = (...args) => {
  var [DataObjects, SetDataObjects] = args[0]
  const permission = MediaLibrary.requestPermissionsAsync(true)
  const camera_perm = Camera.requestCameraPermissionsAsync()
  console.log("Scanner Screen Called")
  
  return (
    <>
      <View className="absolute z-10 h-full w-full items-center justify-center">
      
        <LinearGradient 
          className="absolute z-30 w-full h-full"
          colors={["transparent", "#000"]}
          start={{x:0.5, y:0.65}}
          end={{x:0.5, y:1.0}}
        />
        <Camera 
          ref={(r) => {
            var x = {...DataObjects}
            console.log("1 - Current Camera Object on Data Object:" + DataObjects.Camera_Obj)
            x.Camera_Obj = r

            if (!(DataObjects.Camera_Obj)) {
              console.log("X is")
              console.log(x)
              SetDataObjects(x)
              DataObjects.Camera_Obj = r              
            }
            
          }}
          type={CameraType.back}
          flashMode={FlashMode.auto} 
          className="absolute z-20 h-full aspect-[3/4] items-center justify-center">
          <Image source={require("../scan-line.png")}/>
        </Camera>
    
        <Text className="absolute z-30 text-white top-[70%]"> Scanner </Text>
        
      </View>
    </>
  )
}

const Hatdog = () => {
 return (
  <>
    
    {/*  */}
    
  </>

 )
}
  
export default ScannerScreen