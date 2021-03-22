import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import HomeScreen from '../../screens/app/HomeScreen'
import CreatorScreen from '../../screens/app/CreatorScreen'
import UrgentScreen from '../../screens/app/UrgentScreen'
import DashboardScreen from '../../screens/app/DashboardScreen'

const AppArea = () => {
    const AppArea = createBottomTabNavigator();

    return (
        <AppArea.Navigator screenOptions={{headerShown: true}}>
            <AppArea.Screen name="HomeScreen" component={HomeScreen} options={{ title: 'Beranda' }}/>
            <AppArea.Screen name="CreatorScreen" component={CreatorScreen} options={{ title: 'Lapor' }}/>
            <AppArea.Screen name="UrgentScreen" component={UrgentScreen} options={{ title: 'Darurat' }}/>
            <AppArea.Screen name="DashboardScreen" component={DashboardScreen} options={{ title: 'Dasbor' }}/>
        </AppArea.Navigator>
    )
}

export default AppArea