import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import FeedScreen from '../screens/FeedScreen';
import UploadScreen from '../screens/UploadScreen';
import ProfileScreen from '../screens/ProfileScreen';

const Tab = createBottomTabNavigator();

export default function AppNavigator() {
  return (
    <Tab.Navigator screenOptions={{
      tabBarStyle: { backgroundColor: "#000", borderTopColor: "#222" },
      tabBarActiveTintColor: "#1e90ff",
      tabBarInactiveTintColor: "#777"
    }}>
      <Tab.Screen name="Home" component={FeedScreen} options={{
        tabBarIcon: ({ color }) => <Ionicons name="home" size={24} color={color} />
      }} />
      <Tab.Screen name="Upload" component={UploadScreen} options={{
        tabBarIcon: ({ color }) => <Ionicons name="cloud-upload" size={24} color={color} />
      }} />
      <Tab.Screen name="Profile" component={ProfileScreen} options={{
        tabBarIcon: ({ color }) => <Ionicons name="person" size={24} color={color} />
      }} />
    </Tab.Navigator>
  );
}
