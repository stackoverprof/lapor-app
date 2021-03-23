import React, { useState } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import AuthArea from './AuthArea'
import MainArea from './MainArea'
import { useApp } from '../../core/contexts/AppContext'
import { useAuth } from '../../core/contexts/AuthContext'

const RootNavigation = () => {
    const RootStack = createStackNavigator() 
    const { hasEnteredMain } = useApp()
    const { authState, isNew } = useAuth()
    
    return (
        <RootStack.Navigator headerMode="none">
            {(authState !== 'user' || (isNew && !hasEnteredMain)) && (
                <RootStack.Screen name="AuthArea" component={AuthArea} options={{ animationEnabled: false }}/>
            )}
            {authState === 'user' && (
                <RootStack.Screen name="MainArea" component={MainArea} options={{ animationEnabled: false }}/>
            )}
        </RootStack.Navigator>
    )
}

export default RootNavigation
