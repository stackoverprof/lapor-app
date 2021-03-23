import React, { useEffect } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import HomeScreen from '../../screens/app/HomeScreen'
import CreatorScreen from '../../screens/app/CreatorScreen'
import UrgentScreen from '../../screens/app/UrgentScreen'
import DashboardScreen from '../../screens/app/DashboardScreen'
import { useApp } from '../../core/contexts/AppContext'

const MainArea = () => {
    const MainArea = createBottomTabNavigator()
    
    const { setHasEnteredMain } = useApp()

    useEffect(() => {
        setHasEnteredMain(true)
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