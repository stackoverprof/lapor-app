import React from 'react'
import { Text, View } from 'react-native'
import { css } from '@emotion/native'

import RaisedButton from '../components/atomic/RaisedButton'

const Auth = ({navigation}) => {
    return (
        <View style={styles.screen}>
            <Text>Sign In Screen</Text>
            <RaisedButton>Sign In with Google</RaisedButton>
        </View>
    )
}

export default Auth

const styles = {
    screen: css`
        flex: 1;
        justify-content: center;
        align-items: center;
    `
}