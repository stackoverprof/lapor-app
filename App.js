import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import AuthArea from './components/navigation/AuthArea'
import AppArea from './components/navigation/AppArea'

const App = () => {
    const RootStack = createStackNavigator()
    
    return (
        <NavigationContainer>
            <RootStack.Navigator headerMode="none">
                <RootStack.Screen name="Auth" component={AuthArea} options={{ animationEnabled: false }}/>
                <RootStack.Screen name="App" component={AppArea} options={{ animationEnabled: false }}/>
            </RootStack.Navigator>
        </NavigationContainer>
    )
}

export default App
