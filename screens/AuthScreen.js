import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import button from '../core/style/button.style'

const Auth = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text>Sign In Screen</Text>
            <MainButton>Sign In with Google</MainButton>
        </View>
    )
}

const MainButton = ({children}) => (
    <TouchableOpacity 
        style={button.main} 
        onPress={() => navigation.push("SignUp")}
    >
        <Text style={button.mainText}>{children}</Text>
        <View style={button.mainWall}></View>
    </TouchableOpacity>
)

export default Auth

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center"
    },
})
