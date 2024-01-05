import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator()
import CameraScreen from './Camera';
import HomeScreen from './Home';
import SearchScreen from './Search';
import SettingScreen from './Setting';
import SpeechScreen from './Speech';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const MainScreen = ({navigation}) => {
    console.log("Main Screen " + navigation)
    return (
        <Tab.Navigator screenOptions={{headerShown : false}}>
            <Tab.Screen 
                name = "Speech" 
                component = {SpeechScreen} 
                options = {{
                tabBarLabel : "Speech",
                tabBarIcon : ({color, size}) => (
                    <MaterialCommunityIcons name="microphone" color = {color} size = {size} />
                )
                }}
            />
            <Tab.Screen 
                name = "Search" 
                component = {SearchScreen} 
                options = {{
                tabBarLabel : "Search",
                tabBarIcon : ({color, size}) => (
                    <MaterialCommunityIcons name="magnify" color = {color} size = {size} />
                )
                }}
            />
            <Tab.Screen 
                name = "Camera" 
                component = {CameraScreen} 
                options = {{
                tabBarLabel : "Camera",
                tabBarIcon : ({color, size}) => (
                    <MaterialCommunityIcons name="camera" color = {color} size = {size} />
                )
                }}
            />
            <Tab.Screen 
                name = "Home" 
                component = {HomeScreen} 
                options = {{
                tabBarLabel : "Home",
                tabBarIcon : ({color, size}) => (
                    <MaterialCommunityIcons name="home" color = {color} size = {size} />
                )
                }}
            />
            <Tab.Screen 
                name = "Settings" 
                component = {SettingScreen} 
                
                options = {{
                tabBarLabel : "Settings",
                tabBarIcon : ({color, size}) => (
                    <MaterialCommunityIcons name="cog" color = {color} size = {size} />
                )
                }}
            />
            
        </Tab.Navigator>
    )
}

export default MainScreen;