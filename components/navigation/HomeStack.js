import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from '../../screens/main/HomeScreen'
import NewsDetailScreen from '../../screens/main/NewsDetailScreen'

const HomeStack = () => {
	const HomeStack = createStackNavigator()

	return (
		<HomeStack.Navigator headerMode="none">
			<HomeStack.Screen name="HomeScreen" component={HomeScreen} />
			<HomeStack.Screen name="NewsDetailScreen" component={NewsDetailScreen} />
		</HomeStack.Navigator>
	)
}

export default HomeStack