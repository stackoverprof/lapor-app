import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import HomeScreen from '../../screens/app/HomeScreen'
import CreatorScreen from '../../screens/app/CreatorScreen'
import UrgentScreen from '../../screens/app/UrgentScreen'
import DashboardScreen from '../../screens/app/DashboardScreen'

const AppArea = () => {
    const AppTabs = createBottomTabNavigator();

    return (
        <AppTabs.Navigator screenOptions={{headerShown: true}}>
            <AppTabs.Screen name="HomeScreen" component={HomeScreen} options={{ title: 'Beranda' }}/>
            <AppTabs.Screen name="CreatorScreen" component={CreatorScreen} options={{ title: 'Lapor' }}/>
            <AppTabs.Screen name="UrgentScreen" component={UrgentScreen} options={{ title: 'Darurat' }}/>
            <AppTabs.Screen name="DashboardScreen" component={DashboardScreen} options={{ title: 'Dasbor' }}/>
        </AppTabs.Navigator>
    )
}

export default AppArea