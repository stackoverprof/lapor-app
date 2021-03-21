import React, { useState } from 'react'
import { css } from '@emotion/native'
import c from '../../core/style/theme.style'
import {
    View,
    Text,
    Image,
    TextInput,
    KeyboardAvoidingView,
    TouchableWithoutFeedback,
    ImageBackground,
    Keyboard
} from 'react-native'

import { validateUsername, validateTelephone } from '../../core/utils/validator'

import RaisedButton from '../../components/atomic/RaisedButton'
import gif_stripe from '../../assets/img/gif/stripe.gif'
import img_ava from '../../assets/img/assets/holder-ava.png'
import { useAuth } from '../../core/contexts/AuthContext'

const AuthScreen = ({navigation}) => {
    const [username, setUsername] = useState('')
    const [telephone, setTelephone] = useState('')
    const [invalidUsername, setInvalidUsername] = useState('')
    const [invalidTelephone, setInvalidTelephone] = useState(null)

    const { user } = useAuth()

    const initialFillUp = () => {
        if (!telephone) setTelephone('+62')
    }

    const checkUsername = (value) => {
        setInvalidUsername(validateUsername(value))
        setUsername(value)
    }

    return (
        <View style={styles.screen}>
            <KeyboardAvoidingView
                behavior="padding"
                style={styles.keyboardAvoider}
            >
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={styles.inner}>
                        <View></View>

                        <View style={[styles.container, styles.upper]}>
                            <Text style={styles.textWelcome}>Selamat{'\n'}Datang.</Text>
                            <ImageBackground source={img_ava} style={styles.avaContainer}>
                                <Image source={{uri: user.photoUrl}} style={styles.ava} />
                            </ImageBackground>
                        </View>

                        <View style={[styles.container, styles.form]}>
                            <View style={styles.inputContainer}>
                                <TextInput
                                    style={styles.input}
                                    onChangeText={checkUsername}
                                    value={username}
                                    placeholder="Pilih Username"
                                    />
                                {!!invalidUsername && <Text style={styles.invalid}>{invalidUsername}</Text>}
                            </View>
                            <View style={styles.inputContainer}>
                                <TextInput
                                    style={styles.input}
                                    onChangeText={setTelephone}
                                    value={telephone}
                                    placeholder="Telepon"
                                    keyboardType="phone-pad"
                                    autoCompleteType="tel"
                                    onFocus={initialFillUp}
                                    onBlur={() => setInvalidTelephone(validateTelephone(telephone))}
                                />
                                {!!invalidTelephone ?
                                    <Text style={styles.invalid}>{invalidTelephone}</Text>
                                : invalidTelephone !== null ?
                                    <Text style={[styles.invalid, styles.black]}>Pastikan nomor aktif - untuk keadaan darurat</Text>
                                :
                                    <></>
                                }
                            </View>
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
                <Text style={styles.text1}>Akun terhubung</Text>
                <Text style={styles.email}>{user.email}</Text>
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
    inputContainer: css`
        width: 100%;
        margin-bottom: 24px;
    `,
    input: css`
        font-family: Slab_4;
        font-size: 24px;
        border-bottom-width: 2px;
        width: 100%;
        padding: 8px 0;
    `,
    invalid: css`
        font-family: Poppins_3;
        font-size: 12px;
        margin-top: 4px;
        color: ${c.red};
    `,
    black: css`
        color: ${c.black};
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
        border-radius: 50px;
        overflow: hidden;
    `,
    avaContainer: css`
        width: 100px;
        height: 100px;
        border-radius: 50px;
        overflow: hidden;
    `,
}