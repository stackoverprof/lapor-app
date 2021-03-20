import React from 'react'
import { css } from '@emotion/native'
import { View, Text } from 'react-native'

const RegistrationScreen = () => {
    return (
        <View style={styles.screen}>
            <Text>Fill data</Text>
        </View>
    )
}

export default RegistrationScreen

const styles = {
    screen: css`
        flex: 1;
        justify-content: space-between;
        align-items: center;
        padding-top: 32px;
    `,
}
