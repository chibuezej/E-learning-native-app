import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MyCourse from '../Screen/MyCourse';
import LeaderBoard from '../Screen/LeaderBoard';
import ProfileScreen from '../Screen/ProfileScreen';
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import HomeScreenNavigation from './HomeScreenNavigation';

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
  return (
    <Tab.Navigator screenOptions={
        {
            headerShown: false,
        }
    }>
      <Tab.Screen name="home" component={HomeScreenNavigation} options={{tabBarIcon:({color,size}) => (
    <AntDesign name="home" size={size} color={color} />
      )}}/>
      <Tab.Screen name="my-course" component={MyCourse} 
      ptions={{tabBarIcon:({color,size}) => (
        <AntDesign name="book" size={size} color={color} />
        )}}/>
      <Tab.Screen name='leaderboard' component={LeaderBoard} options={{tabBarIcon:({color, size}) => (
        <MaterialIcons name="leaderboard" size={size} color={color} />
      )}} />
      <Tab.Screen name="profile" component={ProfileScreen} options={{tabBarIcon:({color,size}) => (
        <MaterialIcons name="supervised-user-circle" size={size} color={color} />
      )}}/>
    </Tab.Navigator>
  );
}