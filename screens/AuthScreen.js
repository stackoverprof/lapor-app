import React from 'react'
import { Text, View, Image } from 'react-native'
import { css } from '@emotion/native'

import RaisedButton from '../components/atomic/RaisedButton'
import googleIcon from '../assets/img/icons/google.png'
import logo from '../assets/img/logo-lapor.png'

const Auth = ({navigation}) => {
    return (
        <View style={styles.screen}>
            <View style={styles.containerLeft}>
                <Image source={logo} style={styles.logo} />
            </View>
            
            <View style={styles.lower}>
                <RaisedButton style={styles.authButton} wide iconsrc={googleIcon} size={20}>Sign In with Google</RaisedButton>
            </View>
        </View>
    )
}

export default Auth

const styles = {
    screen: css`
        flex: 1;
        justify-content: space-between;
        align-items: center;
        padding-top: 140px;
    `,
    button: css`
        margin: 6px 0;
    `,
    authButton: css`
        margin: 6px 0;
    `,
    logo: css`
        width: 152px;
        height: 47.2px;
    `,
    containerLeft: css`
        width: 100%;
        padding: 0 48px;
        justify-content: flex-start;
    `,
    lower: css`
        padding-bottom: 32px;
        flex: 1;
        max-height: 260px;
        width: 100%;
        justify-content: flex-end;
        align-items: center;
        background: #0002;
    `
}