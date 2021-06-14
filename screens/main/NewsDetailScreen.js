import React from 'react'
import { css } from '@emotion/native'
import { View, Text, ScrollView } from 'react-native'
import c from '../../core/style/theme.style';

const NewsDetailScreen = () => {
	return (
		<View style={styles.screen}>
			<View style={styles.header}>
				<Text style={styles.titleText}>Detail Laporan</Text>
			</View>
			<ScrollView contentContainerStyle={styles.scrollview}>
				<View style={{ backgroundColor: 'black', height: 207, width: 347 }}>
				</View>
				<View style={styles.viewTitle}>
					<Text style={styles.title}>Diteriaki maling, dikeroyok masa lur kasihan</Text>
				</View>
				<View style={styles.pelapor}>
					<Text>Pelapor</Text>
				</View>
				<View style={styles.namaPelapor}>
					<Text>Erbin</Text>
				</View>
				<View style={styles.waktu}>
					<Text>11.07</Text>
				</View>
				<View style={styles.tanggal}>
					<Text>16 Maret</Text>
				</View>


				<View style={styles.downVote}>
					<Text>DOWN VOTE</Text>
				</View>
			</ScrollView>
		</View>
	)
}

export default NewsDetailScreen

const styles = {
	screen: css`
        flex: 1;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        padding-top: 40px;
		width: 100%;
    `,
	header: css`
        width: 100%;
        padding: 10px 0;
    `,
	titleText: css`
        font-size: 17px;
        font-family: Poppins_6;
        textAlign: center;
        color: ${c.black};
    `,
	title: css`
		align-self: flex-start;
        font-size: 17.77px;
        font-family: Poppins_6;
        text-align: left;
		margin-top: 32px;
		width: 100%;
		max-width: 80%;
        color: ${c.black};
    `,
	viewTitle: css`
		flex: 1;
		display: flex;
		justify-content: flex-start;
		align-items: center;
		width: 100%;
		min-width: 100%;
		padding-left: 24px;
	`,
	scrollview: css`
        display: flex;
        justify-content: flex-start;
        align-items: center;
        flex-direction: column;
        width: 100%;
        min-width: 100%;
    `,
	pelapor: css`
        font-family: Slab_7;
		font-size: 30px;
		max-width: 60%;
	`,
	namaPelapor: css`
        font-family: Slab_7;
		font-size: 30px;
		max-width: 60%;
	`,
	waktu: css`
        font-family: Slab_7;
		font-size: 30px;
		max-width: 60%;
	`,
	tanggal: css`
        font-family: Slab_7;
		font-size: 30px;
		max-width: 60%;
	`,
	deskripsi: css`
        font-family: Slab_3;
		align-self: flex-start;
        font-size: 17.77px;
        text-align: left;
		margin-top: 32px;
		width: 100%;
		max-width: 80%;
        color: ${c.black};
		padding-left: 24px;
	`,
	noHp: css`
        align-self: flex-start;
        font-size: 13.77px;
        font-family: Slab_7;
        text-align: left;
		margin-top: 32px;
		width: 100%;
		max-width: 80%;
        color: ${c.black};
		padding-left: 24px;
	`,
	status: css`
		display: flex;
		justify-content: center;
		align-items: center;
	`,
	upVote: css`
        font-family: Slab_7;
		font-size: 30px;
		max-width: 60%;
	`,
	voteCount: css`
        font-family: Slab_7;
		font-size: 30px;
		max-width: 60%;
	`,
	downVote: css`
        font-family: Slab_7;
		font-size: 30px;
		max-width: 60%;
	`,

}
