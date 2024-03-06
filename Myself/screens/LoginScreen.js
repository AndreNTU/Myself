import { StyleSheet, Text, View, SafeAreaView, Image, KeyboardAvoidingView } from 'react-native'
import React from 'react'

const LogInScreen = () => {
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
                <View style = {styles.logincontainer}>
                    <Text style = {styles.login}>Login to your Account</Text>
                </View>

                <View style = {styles.container3}>
                    
                </View>

                <View>
                

                </View>
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
    
})
