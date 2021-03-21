import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import AppLoading from 'expo-app-loading'

import AuthArea from './components/navigation/AuthArea'
import AppArea from './components/navigation/AppArea'

import { 
    useFonts, 
    Poppins_600SemiBold as Poppins_6 ,
    Poppins_300Light as Poppins_3 
} from '@expo-google-fonts/poppins'
import { 
    RobotoSlab_300Light as Slab_3,
    RobotoSlab_400Regular as Slab_4, 
    RobotoSlab_700Bold as Slab_7 
} from '@expo-google-fonts/roboto-slab'

const App = () => {
    const RootStack = createStackNavigator() 

    let [fontsLoaded] = useFonts({
        Poppins_3,
        Poppins_6,
        Slab_3,
        Slab_4,
        Slab_7,
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
