import React from 'react'
import { css } from '@emotion/native'
import { View } from 'react-native'
import Header from '../../components/home/Header'
import ReportCard from '../../components/home/ReportCard'

const HomeScreen = () => {
    return (
        <View style={styles.screen}>
            <Header />
            <ReportCard />
        </View>
    )
}

export default HomeScreen

const styles = {
    screen: css`
        flex: 1;
        background: #fff;
    `,
}