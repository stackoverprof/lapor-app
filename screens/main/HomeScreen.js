import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { css } from '@emotion/native'
import { View, ScrollView } from 'react-native'
import Header from '../../components/home/Header'
import ReportCard from '../../components/home/ReportCard'
import c from './../../core/style/theme.style';

const HomeScreen = ({ navigation }) => {
	const [listLaporan, setListLaporan] = useState([]);

	useEffect(() => {
		console.log(listLaporan)
	}, [listLaporan])

	useEffect(() => {
		(async () => {
			const laporans = await axios.get('https://node-mongo-pjpb.herokuapp.com/laporan')
				.then(res => res.data)
				.catch(err => console.log(err))
			setListLaporan(laporans)
		})()
	}, [])

	return (
		<View style={styles.screen}>
			<ScrollView contentContainerStyle={styles.scrollview}>
				<Header />
				{listLaporan.map((item, i) => (
					<ReportCard navigation={navigation} img={item.gambar} title={item.title} date={item.datetime} key={i} />
				))}
			</ScrollView>
		</View>
	)
}

export default HomeScreen

const styles = {
	screen: css`
        display: flex;
        justify-content: flex-start;
        align-items: center;
        flex-direction: column;
        flex: 1;
        background: ${c.white};
        width: 100%;
    `,
	scrollview: css`
        display: flex;
        justify-content: flex-start;
        align-items: center;
        flex-direction: column;
        width: 100%;
        min-width: 100%;
        padding-bottom: 24px;
    `,
}

