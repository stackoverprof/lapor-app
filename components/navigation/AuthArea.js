import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import AuthScreen from '../../screens/auth/AuthScreen'
import RegistrationScreen from '../../screens/auth/RegistrationScreen'
import IntroScreen from '../../screens/auth/IntroScreen'

const AuthArea = () => {
    const AuthStack = createStackNavigator()

    return (
        <AuthStack.Navigator headerMode="none">
            <AuthStack.Screen name="AuthScreen" component={AuthScreen}/>
            <AuthStack.Screen name="RegistrationScreen" component={RegistrationScreen}/>
            <AuthStack.Screen name="IntroScreen" component={IntroScreen}/>
        </AuthStack.Navigator>
    )
}

export default AuthArea