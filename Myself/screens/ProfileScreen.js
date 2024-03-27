import {Text, View, Image, Pressable } from 'react-native'
import { React, useEffect, useState, useContext } from 'react'
import axios from 'axios'
import { UserType } from '../userContext'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

const ProfileScreen = () => {
    const [user, setUser] = useState('')
    const navigation = useNavigation ()
    const { userId, setUserId } = useContext(UserType)
    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const response = await axios.get(`http://192.168.0.14:8000/profile/${userId}`)
                const { user } = response.data
                setUser(user)
            } catch (error) {
                console.log('Error while loading profile', error)
            }
        }

        fetchProfile()
    }, [])
    console.log(user)

    const logout = () => {
        clearAuthToken();
    }
    const clearAuthToken = async () => {
        await AsyncStorage.removeItem("authToken");
        console.log("Cleared auth token");
        navigation.replace("Login")
    }

    return (
        <View style={{ marginTop: 55, padding: 15 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                <Image
                    style={{
                        width: 60,
                        height: 60,
                        borderRadius: 30,
                        resizeMode: "contain",
                    }}
                    source={{
                        uri: "https://cdn-icons-png.flaticon.com/128/149/149071.png",
                    }}
                />
                <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{user.name}</Text>
                <View style={{ paddingHorizontal: 7, paddingVertical: 5, borderBottomEndRadius: 8, backgroundColor: '#D0D0D0' }}>
                    <Text>Myself</Text>
                </View>
                <View style={{ flexDirection: "row", alignItems: "center", gap: 10, marginTop: 20 }}>

                    <View style={{ margin: 30 }}></View>


                    <Pressable
                        onPress={logout}
                        style={{
                            flex: 0.5,
                            justifyContent: "center",
                            alignItems: "center",
                            padding: 10,
                            paddingLeft: 10,
                            borderColor: "#D0D0D0",
                            borderWidth: 1,
                            borderRadius: 5,
                            marginBottom: 20
                        }}
                    >
                        <Text>Logout</Text>
                    </Pressable>

                </View>
            </View>
        </View>
    )
}

export default ProfileScreen