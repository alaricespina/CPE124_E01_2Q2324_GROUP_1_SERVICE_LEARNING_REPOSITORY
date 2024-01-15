import { ImageBackground, View, Text, Image, TouchableOpacity } from 'react-native'


const AboutUs = (...args) => {

    var [SetActiveScreen] = args[0]
    return (
      <ImageBackground
        source={require('./pics/PNG_AboutUs.png')}
        style={{ flex: 1, resizeMode: 'cover', justifyContent: 'center', backgroundColor: 'rgba(0,0,0,1.00)' }}
      >
        <View className="items-center justify-center">
          {/* Herbal Finder Logo */}
          <Image source={require('./pics/HBLogo.png')} style={{ width: 150, height: 120, marginBottom: 20}} />
  
          <Text className="text-white text-3xl font-bold mb-6">About Us</Text>
          <View className="w-4/5 bg-[#2F2F2F90] rounded-2xl p-[10%] mb-[20%]">
            <Text className="text-white text-base mb-4">
              Welcome to our Herbal Finder App! We are here to provide valuable information
              and promote the use of herbal plants.
            </Text>
            <Text className="text-white text-base mb-4">
              Our mission is to educate users about various herbal plants, their benefits,
              and how they can be used for different purposes, especially in natural remedies.
            </Text>
            <Text className="text-white text-base mb-4">
              Do you have any questions or concerns? Feel free to reach out to us at HerbalNgInaMo@gmail.com.
            </Text>
          </View>
        </View>
  
        {/* "Back to Home" button with darker green color */}
        <TouchableOpacity
          className="z-40 absolute w-full h-16 bg-[#008000] bottom-0 items-center justify-center"
          onPress={() => {
            handleMenuButtonsPressed([SetActiveScreen, "AccountBase"])
          }}
        >
          <Text className="text-black text-xl font-bold">Back to Home</Text>
        </TouchableOpacity>
      </ImageBackground>
    );
  };

export default AboutUs
  