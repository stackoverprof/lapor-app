import React from 'react'
import { css } from '@emotion/native'
import { View } from 'react-native'
import Header from '../../components/home/Header'

const HomeScreen = () => {
    return (
        <View style={styles.screen}>
            <Header />
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