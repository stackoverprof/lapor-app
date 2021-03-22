import React, { useState } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import AuthArea from './AuthArea'
import AppArea from './AppArea'
import { useAuth } from '../../core/contexts/AuthContext'

const RootNavigation = () => {
    const [hasEnteredApp, setHasEnteredApp] = useState(false)
    const RootStack = createStackNavigator() 
    const { authState, isNew } = useAuth()
    
    return (
        <RootStack.Navigator headerMode="none">
            {(authState !== 'user' || (isNew && !hasEnteredApp)) && (
                <RootStack.Screen name="AuthArea" component={AuthArea} options={{ animationEnabled: false }}/>
            )}
            {authState === 'user' && (
                <RootStack.Screen name="AppArea" component={AppArea} initialParams={{setHasEnteredApp}} options={{ animationEnabled: false }}/>
            )}
        </RootStack.Navigator>
    )
}

export default RootNavigation
