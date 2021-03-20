import React from 'react'
import { Text, View } from 'react-native'
import { css } from '@emotion/native'

import RaisedButton from '../components/atomic/RaisedButton'
import googleIcon from '../assets/img/icons/google.png'
import Icon from 'react-native-vector-icons/Feather'

const Auth = ({navigation}) => {
    return (
        <View style={styles.screen}>
            <Text>Sign In Screen</Text>
            <RaisedButton style={styles.button} iconsrc={googleIcon} size={16}>Sign In with Google</RaisedButton>
            <RaisedButton style={styles.button} size={16}>Sign In with Google</RaisedButton>
            <RaisedButton 
                style={styles.button} 
                size={16}
                icon={<Icon name="mail" size={24} color="#fff"/>}
            >
                Sign In with Google
            </RaisedButton>

            <View style={styles.lower}>
                <RaisedButton style={styles.authButton} wide iconsrc={googleIcon} size={16}>Sign In with Google</RaisedButton>
            </View>
        </View>
    )
}

export default Auth

const styles = {
    screen: css`
        flex: 1;
        justify-content: center;
        align-items: center;
    `,
    button: css`
        margin: 6px 0;
    `,
    authButton: css`
        margin: 6px 0;
    `,
    lower: css`
        position: absolute;
        bottom: 0;
        flex: 1;
        width: 100%;
        height: 100px;
        justify-content: center;
        align-items: center;
    `
}