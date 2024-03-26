import { StyleSheet, Text, View } from 'react-native'
import { React, useEffect, useContext } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import {jwtDecode} from 'jwt-decode'
import {decode} from 'js-base64'

global.atob = decode

import { UserType } from '../userContext'

const HomeScreen = () => {
    const { userId, setUserId } = useContext(UserType)
    useEffect(() => {
        const fetchUsers = async () => {
            const token = await AsyncStorage.getItem("authToken");
            const decodedToken = jwtDecode (token);
            const userId = decodedToken.userId;
            setUserId(userId)
        }

        fetchUsers()
    }, [])

    return (
        <View>
            <Text>Home Screen</Text>
        </View>
    )
}

export default HomeScreen