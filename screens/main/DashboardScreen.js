import React from 'react'
import { css } from '@emotion/native'
import { View, Text, ImageBackground, Image } from 'react-native'
import RaisedButton from './../../components/atomic/RaisedButton';
import { useAuth } from '../../core/contexts/AuthContext';

const HomeScreen = () => {
	const { user, authMethods } = useAuth()
	return (
		<View style={styles.screen}>
			<View style={styles.mainContainer}>
				<View style={[styles.container, styles.upper]}>
					<Text style={styles.textWelcome}>Dashboard</Text>
					<ImageBackground source={require('../../assets/img/assets/holder-ava.png')} style={styles.avaContainer}>
						<Image source={{uri: user.photoUrl}} style={styles.ava} />
					</ImageBackground>
				</View>

				<View style={styles.textContainer}>
					<Text style={styles.simpleTextLabel}>Username</Text>
					<Text style={styles.simpleText}>{user.username}</Text>
				</View>

				<View style={styles.textContainer}>
					<Text style={styles.simpleTextLabel}>Nama lengkap</Text>
					<Text style={styles.simpleText}>{user.fullName}</Text>
				</View>

				<View style={styles.textContainer}>
					<Text style={styles.simpleTextLabel}>Email</Text>
					<Text style={styles.simpleText}>{user.email}</Text>
				</View>
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
        justify-content: space-between;
        align-items: center;
        padding-top: 80px;
		padding-bottom: 24px;
    `,
	container: css`
		width: 100%;
		padding: 0 32px;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	`,
	mainContainer: css`
		flex-direction: column;
		justify-content: center;
		align-items: center;
		width: 100%;
	`,
	textContainer: css`
		width: 100%;
		padding: 0 32px;
		margin: 8px 0;
		flex-direction: column;
		justify-content: center;
		align-items: flex-start;
	`,
	textWelcome: css`
		font-family: Slab_7;
		font-size: 30px;
		max-width: 60%;
	`,
	simpleTextLabel: css`
		font-family: Slab_7;
		font-size: 16px;
		margin-bottom: 4px;
	`,
	simpleText: css`
		font-family: Slab_4;
		font-size: 16px;
	`,
	upper: css`
		margin-bottom: 40px;
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