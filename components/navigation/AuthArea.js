import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Auth from '../../screens/AuthScreen'
import SignUp from '../../screens/SignUp'


const AuthArea = () => {
    const AuthStack = createStackNavigator()

    return (
        <AuthStack.Navigator headerMode="none">
            <AuthStack.Screen name="Auth" component={Auth} options={{ title: "Sign In" }}/>
            <AuthStack.Screen name="SignUp" component={SignUp} options={{ title: "Create Account" }}/>
        </AuthStack.Navigator>
    )
}

export default AuthArea