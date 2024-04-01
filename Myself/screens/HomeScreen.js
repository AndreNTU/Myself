import {Text, View, ScrollView, Image} from 'react-native'
import { React, useEffect, useContext, useState,useCallback } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import axios from 'axios'
import { jwtDecode } from 'jwt-decode'
import { decode } from 'js-base64'

import { EvilIcons } from '@expo/vector-icons';
import { useFocusEffect } from "@react-navigation/native"

global.atob = decode

import { UserType } from '../userContext'
 
const HomeScreen = () => {
    const { userId, setUserId } = useContext(UserType)
    const [posts, setPosts] = useState([])

    useEffect(() => {
        const fetchUsers = async () => {
            const token = await AsyncStorage.getItem("authToken");
            const decodedToken = jwtDecode(token);
            const userId = decodedToken.userId;
            setUserId(userId)
        }

        fetchUsers()
    }, [])

    useFocusEffect(
        useCallback(() => {
          fetchPosts();
        }, [])
      );


    const fetchPosts = async () => {
        try {
            const response = await axios.get("http://192.168.0.6:8000/get-posts")
            setPosts(response.data)

        } catch (error) {
            console.log('Error fetching posts', error)

        }
    }

    console.log('posts', posts)
    return (
        <ScrollView style={{ marginTop: 50, flex: 1, backgroundColor: 'white' }}>
            <View style={{ alignItems: "center", marginTop: 20 }}>
                <Text style={{ fontWeight: 'bold', fontSize: 15 }}>Home Screen</Text>
            </View>

            <View style={{ marginTop: 20, marginLeft: 10 }}>
                {posts.map((post, uid) =>
                    <View style = {{padding: 15, borderColor:'#D0D0D0', borderTopWidth: 1, flexDirection: 'row', gap: 10, marginVertical: 10 }}>
                        <View>
                        <Image
                style={{width: 40,height: 40,borderRadius: 20, resizeMode: "contain",}}
                source={{uri: "https://cdn-icons-png.flaticon.com/128/149/149071.png",}} />
                        </View>

                        <View>
                        <Text style ={{fontSize: 15, fontWeight: 'bold', marginBottom: 4}}>{post.user.name}</Text>
                        <Text>{post.content}</Text>
                        <View style = {{flexDirection: 'row', alignItems: 'center', gap: 10, marginTop:15}}>
                       
                        <Text style = {{color: 'grey'}}>Delete</Text>
                        <EvilIcons name="trash" size={24} color="gray" />
</View>

                        </View>
                    </View>
                )}

            </View>
        </ScrollView>
    )
}

export default HomeScreen