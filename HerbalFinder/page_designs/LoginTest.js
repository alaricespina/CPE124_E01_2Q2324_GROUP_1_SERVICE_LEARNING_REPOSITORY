import { View, Text, Button } from "react-native"

const LoginScreen = ({navigation}) => {
    console.log("Login Screen Loaded")
    return (
        <View>
            <Text>Login Screen</Text>
            <Button 
            title = "Go to Welcome Screen"
            onPress = {() => navigation.navigate('WelcomeScreen')}>
            
            </Button>
        </View>
    )
}

export default LoginScreen;