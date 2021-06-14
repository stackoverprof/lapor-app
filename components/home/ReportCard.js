import React from 'react'
import { css } from '@emotion/native'
import { View, Image, Text } from 'react-native'
import c from './../../core/style/theme.style'
import GrayButton from '../atomic/GrayButton'

const ReportCard = ({ img, title, date }) => {

	return (
		<View style={styles.container}>
			<Image source={img ? { uri: img } : require('./../../assets/img/assets/holder-img.png')} style={styles.thumbnail} />
			<View style={styles.content}>
				<Text style={styles.text1}>{title}</Text>
				<View style={styles.sub_content}>
					<Text style={styles.text_date}>{date}</Text>

					<GrayButton size={14} haptics="low" onPress={() => console.log('pressed')}>
						Detail
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
        margin-top: 24px;
        border-radius: 8px;
        border: 1px solid ${c.grayLight};
        background: ${c.white};
        box-shadow: 0 6px 0 ${c.grayLight};
    `,
	text1: css`
        font-size: ${Platform.OS === 'ios' ? '18px' : '16px'};
        font-family: Slab_7;
        max-width: 100%;
        width: 100%;
    `,
	text_date: css`
        font-size: ${Platform.OS === 'ios' ? '12px' : '10px'};
        font-family: Slab_7;
        margin-right: 8px;
        margin-bottom: 2px;
        color: ${c.grayDark};
    `,
	thumbnail: css`
        height: 100px;
        width: 100px;
        margin-right: 12px;
        border-radius: 6px;
    `,
	content: css`
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
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

export default ReportCard