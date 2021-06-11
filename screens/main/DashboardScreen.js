import React from 'react'
import { css } from '@emotion/native'
import { View, Text } from 'react-native'
import RaisedButton from './../../components/atomic/RaisedButton';
import { useAuth } from '../../core/contexts/AuthContext';

const HomeScreen = () => {
	const { user, authMethods } = useAuth()
	return (
		<View style={styles.screen}>
			<Text>Dashboard</Text>
			<View style={[styles.container, styles.upper]}>
				<Text style={styles.textWelcome}>{user.fullName}</Text>
				<ImageBackground source={require('../../assets/img/assets/holder-ava.png')} style={styles.avaContainer}>
					<Image source={{ uri: user.photoUrl }} style={styles.ava} />
				</ImageBackground>
			</View>

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
	container: css`
	width: 100%;
	padding: 0 32px;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
`,
	upper: css`
	margin-bottom: 40px;
`,
	textWelcome: css`
	font-family: Slab_7;
	font-size: 30px;
`,
	ava: css`
	width: 100px;
	height: 100px;
	border-radius: 50px;
	overflow: hidden;
`,
	avaContainer: css`
	width: 100px;
	height: 100px;
	border-radius: 50px;
	overflow: hidden;
`,
}