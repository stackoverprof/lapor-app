import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

const SignIn = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text>Sign In Screen</Text>
            <Button title="Sign In"/>
            <Button
                title="Create Account"
                onPress={() => navigation.push("SignUp")}
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
