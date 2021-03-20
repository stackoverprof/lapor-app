import React, { useState } from 'react'
import { css } from '@emotion/native'
import {
    View,
    Text,
    Image,
    TextInput,
    KeyboardAvoidingView,
    Platform,
    TouchableWithoutFeedback,
    Keyboard
} from 'react-native'

import RaisedButton from '../../components/atomic/RaisedButton'
import gif_stripe from '../../assets/img/gif/stripe.gif'
import img_ava from '../../assets/img/assets/holder-ava.png'

const AuthScreen = ({navigation}) => {
    const [displayName, setDisplayName] = useState('')
    const [telephone, setTelephone] = useState(null)
    return (
        <View style={styles.screen}>
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                style={styles.keyboardAvoider}
            >
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={styles.inner}>
                        <View></View>

                        <View style={[styles.container, styles.upper]}>
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
                            <TouchableWithoutFeedback onPress={() => setTelephone('+62')}>
                                <TextInput
                                    style={styles.input}
                                    onChangeText={setTelephone}
                                    value={telephone}
                                    placeholder="Telepon"
                                    keyboardType="phone-pad"
                                />
                            </TouchableWithoutFeedback>
                        </View>

                        <View style={styles.lower}>
                            <RaisedButton 
                                onPress={() => navigation.push('IntroScreen')}
                                size={20}
                                wide 
                            >
                                Lanjut
                            </RaisedButton>
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
            <View style={styles.emailContainer}>
                <Text style={styles.text1}>Masuk sebagai</Text>
                <Text style={styles.email}>mail.errbint@gmail.com</Text>
            </View>
            <Image source={gif_stripe} style={styles.stripebg} />
        </View>
    )
}

export default AuthScreen

const styles = {
    screen: css`
        position: relative;
        flex: 1;
        justify-content: flex-end;
    `,
    keyboardAvoider: css`
        position: absolute;
        top: 0;
        flex: 1;
        width: 100%;
        height: 100%;
    `,
    inner: css`
        flex: 1;
        margin-top: 58px;
        width: 100%;
        justify-content: space-between;
        align-items: center;
    `,
    input: css`
        font-family: Slab_4;
        font-size: 24px;
        border-bottom-width: 2px;
        width: 100%;
        padding: 8px 0;
        margin-bottom: 24px;
    `,
    emailContainer: css`
        justify-content: center;
        align-items: center;
        margin-bottom: 32px;
    `,
    text1: css`
        font-family: Slab_3;
        font-size: 14px;
    `,
    email: css`
        font-family: Slab_4;
        font-size: 14px;
    `,
    form: css`
        flex-direction: column;
    `,
    upper: css`
        margin-bottom: 40px;
    `,
    lower: css`
        padding-bottom: 40px;
        flex: 1;
        max-height: 260px;
        height: 270px;
        width: 100%;
        justify-content: flex-end;
        align-items: center;
    `,
    stripebg: css`
        position: relative;
        margin-bottom: 120px;
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