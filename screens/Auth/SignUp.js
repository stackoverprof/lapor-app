import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

const SignIn = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text>Create New Account</Text>
            <Button
                title="Create Account"
            />
            <Button 
                title="SignIn instead"
                onPress={() => navigation.push("SignIn")}
            />
        </View>
    )
}

export default SignIn

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center"
    },
    button: {
      paddingHorizontal: 20,
      paddingVertical: 10,
      marginVertical: 10,
      borderRadius: 5
    }
})
