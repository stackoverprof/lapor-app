import React from 'react'
import { css } from '@emotion/native'
import { View, Text } from 'react-native'

const HomeScreen = () => {
    return (
        <View style={styles.screen}>
            <Text>Darurat</Text>
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
