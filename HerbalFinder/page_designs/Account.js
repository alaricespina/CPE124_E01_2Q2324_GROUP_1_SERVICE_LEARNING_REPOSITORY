const AccountScreen_Re = (...args) => {
    var [SetActiveScreen] = args[0]
  
    return (
      <>
        <View className="absolute top-0 h-[calc(410/812*100%)] w-full left-0 right-0 bg-green-500 rounded-2xl">
          <View className="items-center pt-14"> 
            <View className="flex-row pb-3">
              <MaterialIcons name="person" size={30} color="#FFF"/>
              <Text className="text-white text-xl font-bold"> My Account </Text>
            </View>
            <View className="rounded-full bg-green-600 flex items-center justify-center">
              <MaterialIcons name="person" size={180} color="#FFF"/>
            </View>
            <Text className="font-bold text-xl text-white">User Name</Text>
            <Text className="font-bold text-xs text-white">juandelacruz@mymail.mapua.edu.ph</Text>
          </View>
        </View>
  
        <View className="absolute top-[calc(55%)] h-[calc(90/812*100%)]  w-full items-center">
          <View className="w-4/5 h-full">
            <TouchableOpacity className="absolute h-full left-0 aspect-square items-center justify-center bg-[#2F2F2F80] rounded-2xl" onPress={() => {
              console.log("Settings Pressed")
              const _ = {...defaultScreenStates}
              _.AccountSettings = true 
              SetActiveScreen({..._})
              }}>
              <MaterialIcons name="settings" size={40} color="#FFF"/>
              <Text className="text-white text-xs">Settings</Text>
            </TouchableOpacity>
            <TouchableOpacity className="absolute h-full left-[35.5%]  aspect-square items-center justify-center bg-[#2F2F2F80] rounded-2xl" onPress={() => {
              console.log("Profile Pressed")
              const _ = {...defaultScreenStates}
              _.AccountProfile = true 
              SetActiveScreen({..._})
              }}>
              <MaterialIcons name="person" size={40} color="#FFF"/>
              <Text className="text-white text-xs">Profile</Text>
            </TouchableOpacity>
            <TouchableOpacity className="absolute h-full left-[71%] aspect-square items-center justify-center bg-[#2F2F2F80] rounded-2xl" onPress={() => {
              console.log("About Us Pressed")
              const _ = {...defaultScreenStates}
              _.AccountAbout = true 
              SetActiveScreen({..._})
              }}>
              <MaterialIcons name="help" size={40} color="#FFF"/>
              <Text className="text-white text-xs">About Us</Text>
            </TouchableOpacity>
          </View>
        </View>
        
  
        <View className="absolute top-[calc(68%)] items-center w-full h-[41%]">
          <View className="h-2/5 w-4/5 bg-[#2F2F2F80] rounded-2xl items-center">
            <Text className="text-white text-s font-medium">Your Favorite Plants</Text>
            <View className="w-4/5 h-3/5 mt-2">
              <View className="absolute left-0 items-center w-1/3 h-full">
                <TouchableOpacity className="h-3/4 aspect-square bg-red-500 rounded-full"></TouchableOpacity>
                <Text className="text-white text-xs italic">Text 1</Text>
              </View>
              
              <View className="absolute left-[33.5%] items-center w-1/3 h-full">
                <TouchableOpacity className="h-3/4 aspect-square bg-blue-500 rounded-full"></TouchableOpacity>
                <Text className="text-white text-xs italic">Text 2</Text>
              </View>
              
              <View className="absolute left-[67%] items-center w-1/3 h-full">
                <TouchableOpacity className="h-3/4 aspect-square bg-green-500 rounded-full"></TouchableOpacity>
                <Text className="text-white text-xs italic">Text 3</Text>
              </View>
            </View>
          </View>
        </View>
  
  
  
  
  
  
        </>
    );
  };
  