import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { useFonts, Poppins_600SemiBold } from '@expo-google-fonts/poppins'
import AppLoading from 'expo-app-loading'

import AuthArea from './components/navigation/AuthArea'
import AppArea from './components/navigation/AppArea'

const App = () => {
    const RootStack = createStackNavigator() 

    let [fontsLoaded] = useFonts({
        Poppins_600SemiBold,
    });
    
    if (!fontsLoaded) return <AppLoading />

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
