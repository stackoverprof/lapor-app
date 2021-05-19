import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import AuthArea from './AuthArea'
import MainArea from './MainArea'
import AppLoading from 'expo-app-loading'
import { useAuth } from '../../core/contexts/AuthContext'

const RootNavigation = () => {
    const RootStack = createStackNavigator() 
    const { authState, isNew, showAuthArea } = useAuth()
    
    // if (authState === 'initial') return <AppLoading />

    return (
        <RootStack.Navigator headerMode="none">
            {(authState !== 'user' || (isNew && showAuthArea)) && (
                <RootStack.Screen name="AuthArea" component={AuthArea} options={{ animationEnabled: false }}/>
            )}
            {authState === 'user' && (
                <RootStack.Screen name="MainArea" component={MainArea} options={{ animationEnabled: false }}/>
            )}
        </RootStack.Navigator>
    )
}

export default RootNavigation
