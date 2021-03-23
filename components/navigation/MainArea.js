import React, { useEffect } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import HomeScreen from '../../screens/main/HomeScreen'
import CreatorScreen from '../../screens/main/CreatorScreen'
import UrgentScreen from '../../screens/main/UrgentScreen'
import DashboardScreen from '../../screens/main/DashboardScreen'
import { useAuth } from '../../core/contexts/AuthContext'

const MainArea = () => {
    const MainArea = createBottomTabNavigator()

    const { setShowAuthArea } = useAuth()

    useEffect(() => {
        setShowAuthArea(false)
    }, [])    

    return (
        <MainArea.Navigator screenOptions={{headerShown: true}}>
            <MainArea.Screen name="HomeScreen" component={HomeScreen} options={{ title: 'Beranda' }}/>
            <MainArea.Screen name="CreatorScreen" component={CreatorScreen} options={{ title: 'Lapor' }}/>
            <MainArea.Screen name="UrgentScreen" component={UrgentScreen} options={{ title: 'Darurat' }}/>
            <MainArea.Screen name="DashboardScreen" component={DashboardScreen} options={{ title: 'Dasbor' }}/>
        </MainArea.Navigator>
    )
}

export default MainArea