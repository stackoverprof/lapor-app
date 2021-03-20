import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import AuthScreen from '../../screens/AuthScreen'
import RegistrationScreen from '../../screens/RegistrationScreen'


const AuthArea = () => {
    const AuthStack = createStackNavigator()

    return (
        <AuthStack.Navigator headerMode="none">
            <AuthStack.Screen name="AuthScreen" component={AuthScreen} options={{ title: "Sign In" }}/>
            <AuthStack.Screen name="RegistrationScreen" component={RegistrationScreen} options={{ title: "Create Account" }}/>
        </AuthStack.Navigator>
    )
}

export default AuthArea