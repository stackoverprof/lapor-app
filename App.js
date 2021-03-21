import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import AppLoading from 'expo-app-loading'
import AuthProvider from './core/contexts/AuthContext'
import RootNavigation from './components/navigation/RootNavigation'

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

    let [fontsLoaded] = useFonts({
        Poppins_3,
        Poppins_6,
        Slab_3,
        Slab_4,
        Slab_7,
    });
    
    if (!fontsLoaded) return <AppLoading />

    return (
        <AuthProvider>
            <NavigationContainer>
                <RootNavigation />
            </NavigationContainer>
        </AuthProvider>
    )
}

export default App
