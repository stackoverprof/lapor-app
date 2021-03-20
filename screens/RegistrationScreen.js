import React, { useState } from 'react'
import { css } from '@emotion/native'
import { View, Text, Image, TextInput } from 'react-native'

import RaisedButton from '../components/atomic/RaisedButton'
import gif_stripe from '../assets/img/gif/stripe.gif'
import img_ava from '../assets/img/assets/holder-ava.png'

const AuthScreen = ({navigation}) => {
    const [displayName, setDisplayName] = useState('')
    const [telephone, setTelephone] = useState(null)
    return (
        <View style={styles.screen}>
            <View style={[styles.container, {marginBottom: 80}]}>
                <Text style={styles.textWelcome}>Selamat{'\n'}Datang.</Text>
                <Image source={img_ava} style={styles.ava} />
            </View>

            <View style={[styles.container, styles.form]}>
                <TextInput
                    style={styles.input}
                    onChangeText={setDisplayName}
                    value={displayName}
                    placeholder="Display Name"
                />
                <TextInput
                    style={styles.input}
                    onChangeText={setTelephone}
                    value={telephone}
                    placeholder="Telepon"
                    keyboardType="phone-pad"
                />
            </View>

            <View style={styles.lower}>
                <Image source={gif_stripe} style={styles.stripebg} />
                <RaisedButton 
                    onPress={() => navigation.push('RegistrationScreen')}
                    size={20}
                    wide 
                >
                    Mulai
                </RaisedButton>
            </View>
        </View>
    )
}

export default AuthScreen

const styles = {
    screen: css`
        flex: 1;
        justify-content: flex-start;
        align-items: center;
        padding-top: 120px;
    `,
    input: css`
        font-family: Slab_4;
        font-size: 24px;
        border-bottom-width: 2px;
        width: 100%;
        padding: 8px 0;
        margin-bottom: 24px;
    `,
    form: css`
        flex-direction: column;
    `,
    lower: css`
        position: absolute;
        bottom: 0;
        padding-bottom: 40px;
        flex: 1;
        max-height: 260px;
        height: 270px;
        width: 100%;
        justify-content: flex-end;
        align-items: center;
    `,
    stripebg: css`
        position: absolute;
        bottom: 120px;
        width: 100%;
        height: 40px;
        z-index: -1;
    `,
    container: css`
        width: 100%;
        padding: 0 32px;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    `,
    textWelcome: css`
        font-family: Slab_7;
        font-size: 30px;
    `,
    ava: css`
        width: 100px;
        height: 100px;
    `,
}