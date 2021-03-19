import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

const AppArea = () => {
    const AuthStack = createStackNavigator()

    return (
        <AuthStack.Navigator headerMode="none">
            <AuthStack.Screen name="SignIn" component={SignIn} options={{ title: "Sign In" }}/>
            <AuthStack.Screen name="SignUp" component={SignUp} options={{ title: "Create Account" }}/>
        </AuthStack.Navigator>
    )
}

export default AppArea