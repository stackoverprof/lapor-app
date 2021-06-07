import React from 'react'
import { css } from '@emotion/native'
import { View, Text } from 'react-native'
import RaisedButton from './../../components/atomic/RaisedButton';
import { useAuth } from '../../core/contexts/AuthContext';

const HomeScreen = () => {
	const { authMethods } = useAuth()
	return (
		<View style={styles.screen}>
			<Text>Dashboardd</Text>
			<RaisedButton
				onPress={authMethods.signOut}
				size={20}
				wide
			>
				Logout
			</RaisedButton>
		</View>
	)
}

export default HomeScreen

const styles = {
	screen: css`
        flex: 1;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        padding-top: 40px;
    `,
}