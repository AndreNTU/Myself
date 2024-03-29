import { StyleSheet, Text, View, SafeAreaView, Image, KeyboardAvoidingView, TextInput, Pressable, Alert } from 'react-native'
import React, {useEffect} from 'react'
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage';
const LogInScreen = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigation = useNavigation()

    useEffect(() => {
        const checkLoginStatus = async () => {
            try {
                const token = await AsyncStorage.getItem("authToken")
    
                if (token) {
                    setTimeout(() => {
                        navigation.replace("Main")
                    }, 400)
                }
            } catch (error) {
                console.log("error", error)
            }
        }
    
        checkLoginStatus ()
    }, [])
    

    const handleLogin = () => {
        const user = {
            email: email,
            password: password
        }

        axios.post(`http://192.168.0.14:8000/login`, user)
        .then((response) => {
            console.log(response)
            const token = response.data.token
            AsyncStorage.setItem("authToken", token)
            navigation.navigate("Home")
        }).catch((error) => {
            Alert.alert("Login error")
            console.log("error", error)
        })
    }

    return (
        <SafeAreaView style={styles.container} >
        <View style = {{marginTop:75}}>

        </View>
            
            <KeyboardAvoidingView>
                <View style={styles.logincontainer}>
                    <Text style={styles.login}>Login to your Account</Text>
                </View>
                <View style={styles.container3}>
                </View>

                <View style={styles.container4}>
                    <MaterialIcons style={{ marginLeft: 8, color: 'gray' }} name="email" size={24} color="black" />
                    <TextInput
                        value={email}
                        onChangeText={(text) => setEmail(text)}
                        placeholderTextColor={'gray'} style={{ color: 'gray', marginVertical: 10, width: 300, fontSize: email ? 16 : 16 }} placeholder="enter your Email" />
                </View>

                <View style={styles.container31}>
                </View>

                <View style={styles.container4}>
                    <AntDesign style={{ marginLeft: 8 }} name="lock" size={24} color="gray" />
                    <TextInput
                        secureTextEntry={true}
                        value={password}
                        onChangeText={(text) => setPassword(text)}
                        placeholderTextColor={'gray'} style={{ color: 'gray', marginVertical: 10, width: 300, fontSize: password ? 16 : 16 }} placeholder="enter your Password" />
                </View>


                <View>
                    <View style={styles.bottomtext}>
                        <Text>Keep me logged in</Text>
                        <Text>Forgot Password</Text>
                    </View>
                </View>

                <View style={{ marginTop: 45 }} />

                <Pressable
                    onPress={handleLogin}
                    style={{ width: 200, backgroundColor: 'black', padding: 15, marginTop: 40, marginLeft: 'auto', marginRight: 'auto', borderRadius: 6 }}>
                    <Text style={{ textAlign: 'center', fontWeight: 'bold', fontSize: 16, color: 'white' }} >Login</Text>
                </Pressable>

                <Pressable onPress={() => navigation.navigate('Register')} style={{ marginTop: 10 }}>
                    <Text style={{ textAlign: 'center', fontSize: 16 }} >Don't have an account? <Text style={{ fontWeight: '500', color: '#007FFF' }}>Sign Up</Text></Text>
                </Pressable>

            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}

export default LogInScreen
styles = StyleSheet.create({
    container: {
        flex: 1,
        baclgroundColor: "white",
        alignItems: "center"
    },
    container2: {
        marginTop: 50
    },
    login: {
        fontSize: 17,
        fontWeight: 'bold',
        marginTop: 25,
    },
    logincontainer: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    container3: {
        marginTop: 40,

    },

    container31: {
        marginTop: 30,

    },
    container4: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 4,
        borderColor: "#D0D0D0",
        borderWidth: 1,
        paddingVertical: 5,
        borderRadius: 5,
    },
    bottomtext: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 12,
    }

})
