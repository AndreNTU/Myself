import {StyleSheet, Text, View} from 'react-native'
import React from 'react'
import LoginScreen from './screens/LoginScreen'
import RegisterScreen from './screens/RegisterScreen'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'

const Stack = createStackNavigator ()

const StackNavigator = () => {
    return (
<NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} options = {{headerShown: false}} />
        <Stack.Screen name="Register" component={RegisterScreen} options = {{headerShown: false}}  />
      </Stack.Navigator>
    </NavigationContainer>
    )
}


export default StackNavigator

const styles = StyleSheet.create ({

})