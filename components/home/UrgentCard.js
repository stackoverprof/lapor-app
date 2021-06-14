import React from 'react'
import { css } from '@emotion/native'
import { ImageBackground, Image, View, Text } from 'react-native'
import c from '../../core/style/theme.style'
import GrayButton from '../atomic/GrayButton'
import call from 'react-native-phone-call'

const UrgentCard = ({ title, contact }) => {
	const image = { uri: "https://athleticprovinggrounds.com/wp-content/uploads/2017/10/grunge-danger-background.jpg" };

	const triggerCall = () => {
		const args = {
			number: contact,
			prompt: true,
		}
		call(args).catch(console.error);
	}

	return (
		<View style={styles.container}>
			<View style={styles.content}>
				<ImageBackground source={image} style={styles.imgBackground}>
					<Text style={styles.text1}>{title}</Text>
				</ImageBackground>
				<View style={styles.sub_content}>
					<Text style={styles.contact}>{contact}</Text>

					<GrayButton size={14} haptics="low" onPress={triggerCall}>
						Panggil
                    </GrayButton>
				</View>
			</View>
		</View>
	)
}

const styles = {
	container: css`
        width: 92%;
        padding: 12px;
        flex-direction: row; 
        margin-bottom: 16px;
        border-radius: 8px;
        border: 1px solid ${c.grayLight};
        background: ${c.white};
        box-shadow: 0 6px 0 ${c.grayLight};
    `,
	imgBackground: css`
        margin-bottom: 4px;
    `,
	text1: css`
        font-size: ${Platform.OS === 'ios' ? '18px' : '16px'};
        font-family: Slab_7;
        max-width: 100%;
        width: 100%;
        margin: 20px 0;
        textAlign: center;
        color: white;
    `,
	contact: css`
        font-size: ${Platform.OS === 'ios' ? '16px' : '14px'};
        font-family: Slab_7;
        margin-right: 8px;
        margin-left: 8px;
        margin-bottom: 2px;
        color: ${c.red};
    `,
	content: css`
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        padding-bottom: 2px;
        flex: 1;
    `,
	sub_content: css`
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
        flex-direction: row;
        width: 100%;
    `,
}

export default UrgentCard