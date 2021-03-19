import React from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import button from '../core/style/button.style'
import { css } from '@emotion/native'

const Auth = ({navigation}) => {
    return (
        <View style={styles.screen}>
            <Text>Sign In Screen</Text>
            <MainButton>Sign In with Google</MainButton>
        </View>
    )
}

const MainButton = ({children}) => (
    <View style={button.container}>
        <View style={button.wall}><Text style={button.text}>Sign In</Text></View>
        <TouchableOpacity 
            style={button.main}
            activeOpacity={0}
        >
            <Text style={button.text}>Sign In</Text>
        </TouchableOpacity>
    </View>
)

export default Auth

const styles = {
    screen: css`
        flex: 1;
        justify-content: center;
        align-items: center;
    `
}