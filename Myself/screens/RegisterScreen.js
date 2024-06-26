import {Text, View, SafeAreaView, KeyboardAvoidingView, TextInput, Pressable, Alert } from 'react-native'
import React from 'react'
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import axios from 'axios'


const RegisterScreen = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [name, setName] = useState ("")
    const navigation = useNavigation()
    const handleRegister = () => {
        const user = {
            name: name,
            email: email,
            password: password
        }

        axios
      .post("http://192.168.0.14:8000/register", user)
      .then((response) => {
        console.log(response);
        Alert.alert(
          "Registration successful",
          "you have been registered successfully"
        );
        setName("");
        setEmail("");
        setPassword("");
      })
      .catch((error) => {
        Alert.alert(
          "Registration failed",
          "An error occurred during registration"
        );
        console.log("error", error);
      });
  };
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "white", alignItems: "center"}} >
            <View style = {{marginTop:75}}>
                
            </View>
            <KeyboardAvoidingView>
                <View style={{alignItems: 'center', justifyContent: 'center'}}>
                    <Text style={{fontSize: 17, fontWeight: 'bold', marginTop: 25,}}>Login to your Account</Text>
                </View>

                <View style={{marginTop: 30}}>
                </View>

                <View style={{flexDirection: 'row', alignItems: 'center', gap: 4, borderColor: "#D0D0D0", borderWidth: 1, paddingVertical: 5, borderRadius: 5,}}>
                    <Ionicons style={{ marginLeft: 8, color: 'gray' }} name="person" size={24} color="black" />

                    <TextInput
                        value={name}
                        onChangeText={(text) => setName(text)}
                        placeholderTextColor={'gray'} style={{ color: 'gray', marginVertical: 10, width: 300, fontSize: name ? 16 : 16 }} placeholder="enter your Name" />
                </View>

                <View style = {{marginTop: 30}}>
                </View>
                <View style={{flexDirection: 'row', alignItems: 'center', gap: 4, borderColor: "#D0D0D0", borderWidth: 1, paddingVertical: 5, borderRadius: 5}}>
                    <MaterialIcons style={{ marginLeft: 8, color: 'gray' }} name="email" size={24} color="black" />
                    <TextInput
                        value={email}
                        onChangeText={(text) => setEmail(text)}
                        placeholderTextColor={'gray'} style={{ color: 'gray', marginVertical: 10, width: 300, fontSize: email ? 16 : 16 }} placeholder="enter your Email" />
                </View>
                <View style={{marginTop: 30}}>
                </View>

                <View style={{flexDirection: 'row', alignItems: 'center', gap: 4, borderColor: "#D0D0D0", borderWidth: 1, paddingVertical: 5,borderRadius: 5}}>
                    <AntDesign style={{ marginLeft: 8 }} name="lock" size={24} color="gray" />
                    <TextInput
                    secureTextEntry = {true}
                        value={password}
                        onChangeText={(text) => setPassword(text)}
                        placeholderTextColor={'gray'} style={{ color: 'gray', marginVertical: 10, width: 300, fontSize: password ? 16 : 16 }} placeholder="enter your Password" />
                </View>


                <View style={{ marginTop: 45 }} />

                <Pressable 
                onPress = {handleRegister}
                style={{ width: 200, backgroundColor: 'black', padding: 15, marginTop: 40, marginLeft: 'auto', marginRight: 'auto', borderRadius: 6 }}>
                    <Text style={{ textAlign: 'center', fontWeight: 'bold', fontSize: 16, color: 'white' }} >Register</Text>
                </Pressable>

                <Pressable onPress={() => navigation.goBack()} style={{ marginTop: 10 }}>
                    <Text style={{ textAlign: 'center', fontSize: 16 }} >Already have an account? <Text style={{ fontWeight: '500', color: '#007FFF' }}>Sign In</Text></Text>
                </Pressable>

            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}


export default RegisterScreen

