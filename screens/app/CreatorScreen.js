import React from 'react'
import { css } from '@emotion/native'
import { View, Text } from 'react-native'

const CreatorScreen = () => {
    return (
        <View style={styles.screen}>
            <Text>Create</Text>
        </View>
    )
}

export default CreatorScreen

const styles = {
    screen: css`
        flex: 1;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        padding-top: 40px;
    `,
}
