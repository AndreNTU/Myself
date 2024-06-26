import React from 'react'
import LoginScreen from './screens/LoginScreen'
import RegisterScreen from './screens/RegisterScreen'
import HomeScreen from './screens/HomeScreen'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import ThreadsScreen from './screens/ThreadsScreen'
import { Ionicons } from '@expo/vector-icons';
import ProfileScreen from './screens/ProfileScreen'

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()


function BottomTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeScreen}

        options=
        {{
          gestureEnabled: false,
          tabBarLabel: "Home",
          tabBarLabelStyle: { color: 'black' },
          headerShown: false,
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Entypo name="home" size={24} color="black" />
            ) : (
              <AntDesign name="home" size={24} color="black" />
            )
        }} />
        <Tab.Screen
        name="Threads"
        component={ThreadsScreen}
        options=
        {{
          tabBarLabel: "Create",
          tabBarLabelStyle: { color: 'black' },
          headerShown: false,
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Ionicons name="create" size={24} color="black" />
            ) : (
              <Ionicons name="create-outline" size={24} color="black" />
            )
        }} />
         <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options=
        {{
          tabBarLabel: "Profile",
          tabBarLabelStyle: { color: 'black' },
          headerShown: false,
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Ionicons name="person" size={24} color="black" />
            ) : (
              <Ionicons name="person-outline" size={24} color="black" />
            )
        }} />
    </Tab.Navigator>
  )
}

const StackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Register" component={RegisterScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Main" component={BottomTabs} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}


export default StackNavigator
