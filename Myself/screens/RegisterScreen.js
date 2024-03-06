import { StyleSheet, Text, View, SafeAreaView, Image, KeyboardAvoidingView, TextInput, Pressable } from 'react-native'
import React from 'react'
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

const RegisterScreen = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [name, setName] = useState ("")
    const navigation = useNavigation()
    return (
        <SafeAreaView style={styles.container} >
            <View style={styles.container2}>
                <Image
                    style={{ width: 150, height: 100, resizeMode: "contain" }}
                    source={{
                        uri: "https://freelogopng.com/images/all_img/1688663386threads-logo-transparent.png",
                    }}
                />
            </View>
            <KeyboardAvoidingView>
                <View style={styles.logincontainer}>
                    <Text style={styles.login}>Login to your Account</Text>
                </View>

                <View style={styles.container3}>
                </View>

                <View style={styles.container4}>
                    <Ionicons style={{ marginLeft: 8, color: 'gray' }} name="person" size={24} color="black" />

                    <TextInput
                        value={email}
                        onChangeText={(name) => setName(text)}
                        placeholderTextColor={'gray'} style={{ color: 'gray', marginVertical: 10, width: 300, fontSize: name ? 16 : 16 }} placeholder="enter your Name" />
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
                    secureTextEntry = {true}
                        value={password}
                        onChangeText={(text) => setPassword(text)}
                        placeholderTextColor={'gray'} style={{ color: 'gray', marginVertical: 10, width: 300, fontSize: password ? 16 : 16 }} placeholder="enter your Password" />
                </View>


                <View style={{ marginTop: 45 }} />

                <Pressable style={{ width: 200, backgroundColor: 'black', padding: 15, marginTop: 40, marginLeft: 'auto', marginRight: 'auto', borderRadius: 6 }}>
                    <Text style={{ textAlign: 'center', fontWeight: 'bold', fontSize: 16, color: 'white' }} >Register</Text>
                </Pressable>

                <Pressable onPress={() => navigation.goBack()} style={{ marginTop: 10 }}>
                    <Text style={{ textAlign: 'center', fontSize: 16 }} >Already have an account? Sign in</Text>
                </Pressable>

            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}


export default RegisterScreen
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
        marginTop: 30,

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
