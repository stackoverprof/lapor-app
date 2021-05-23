import React, { useEffect } from 'react'
import { Platform } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import IconFA5 from 'react-native-vector-icons/FontAwesome5'
import IconMCI from 'react-native-vector-icons/MaterialCommunityIcons'
import IconIO from 'react-native-vector-icons/Ionicons'

import HomeScreen from '../../screens/main/HomeScreen'
import CreatorScreen from '../../screens/main/CreatorScreen'
import UrgentScreen from '../../screens/main/UrgentScreen'
import DashboardScreen from '../../screens/main/DashboardScreen'
import { useAuth } from '../../core/contexts/AuthContext'
import c from './../../core/style/theme.style';

const MainArea = () => {
    const MainArea = createBottomTabNavigator()
    const { setShowAuthArea } = useAuth()
    const tabBarOptions = {
        activeTintColor: c.red,
        inactiveTintColor: c.grayDark,
        style: {
            height: Platform.OS === 'ios' ? 76 : 60,
            paddingTop: Platform.OS === 'ios' ? 4 : 2,
            paddingBottom: Platform.OS === 'ios' ? 28 : 8,
        },
        labelStyle: {
            fontFamily: 'Slab_4',
            fontSize: Platform.OS === 'ios' ? 10 : 9,
        },
    }

    useEffect(() => {
        setShowAuthArea(false)
    }, [])

    return (
        <MainArea.Navigator screenOptions={{ headerShown: true }} tabBarOptions={tabBarOptions}>
            <MainArea.Screen name="HomeScreen" component={HomeScreen} options={{
                title: 'Beranda',
                tabBarIcon: ({ size, color }) => (
                    <IconFA5 name="home" size={size} color={color} />
                ),
            }} />
            <MainArea.Screen name="CreatorScreen" component={CreatorScreen} options={{
                title: 'Lapor',
                tabBarIcon: ({ size, color }) => (
                    <IconFA5 name="plus" size={size} color={color} />
                ),
            }} />
            <MainArea.Screen name="UrgentScreen" component={UrgentScreen} options={{
                title: 'Darurat',
                tabBarIcon: ({ size, color }) => (
                    <IconMCI name="alert-circle-outline" size={size + 4} color={color} />
                ),
            }} />
            <MainArea.Screen name="DashboardScreen" component={DashboardScreen} options={{
                title: 'Dasbor',
                tabBarIcon: ({ size, color }) => (
                    <IconIO name="options" size={size + 4} color={color} />
                ),
            }} />
        </MainArea.Navigator >
    )
}

export default MainArea