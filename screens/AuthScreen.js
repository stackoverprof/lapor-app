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
}