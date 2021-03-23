import React, { useEffect, useState } from 'react'
import { css } from '@emotion/native'
import c from '../../core/style/theme.style'
import { validateUsername, validateTelephone } from '../../core/utils/validator'
import RaisedButton from '../../components/atomic/RaisedButton'
import gif_stripe from '../../assets/img/gif/stripe.gif'
import { useAuth } from '../../core/contexts/AuthContext'
import WelcomeHeader from '../../components/auth/WelcomeHeader'
import {
    View,
    Text,
    Image,
    TextInput,
    KeyboardAvoidingView,
    TouchableWithoutFeedback,
    Keyboard,
    Alert
} from 'react-native'

const AuthScreen = ({navigation}) => {
    const [username, setUsername] = useState('')
    const [telephone, setTelephone] = useState('')
    const [invalidUsername, setInvalidUsername] = useState('')
    const [invalidTelephone, setInvalidTelephone] = useState(null)
    const [warnMinimal, setWarnMinimal] = useState(false)

    //ihrih lkmjlwmjcewjtow

    const { user } = useAuth()

    const initialFillUp = () => {
        if (!telephone) setTelephone('+62')
        if (invalidTelephone === null) setInvalidTelephone('')
    }

    const checkUsername = (value) => {
        setInvalidUsername(validateUsername(value, warnMinimal))
        if (value.length > 3) setWarnMinimal(true)
        setUsername(value)
    }

    const checkTelephone = (value) => {
        setInvalidTelephone(validateTelephone(value))
        setTelephone(value)
    }

    useEffect(() => {
        navigation.addListener('beforeRemove', (e) => {
            e.preventDefault()
    
            // Prompt the user before leaving the screen
            Alert.alert(
                'Tinggalkan pendaftaran?',
                'Yakin untuk membatalkan pendaftaran dan kembali ke depan?',
                [
                  { text: 'Batal', style: 'cancel', onPress: () => {} },
                  { text: 'Yakin', style: 'destructive', onPress: () => navigation.dispatch(e.data.action) }
                ]
            )
        })
    }, [navigation])

    return (
        <View style={styles.screen}>
            <KeyboardAvoidingView
                behavior="padding"
                style={styles.keyboardAvoider}
            >
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={styles.inner}>
                        <View></View>

                        <WelcomeHeader />

                        <View style={[styles.container, styles.form]}>
                            <View style={styles.inputContainer}>
                                <TextInput
                                    style={styles.input}
                                    onChangeText={checkUsername}
                                    value={username}
                                    placeholder="Pilih Username"
                                    onBlur={() => {
                                        setInvalidUsername(validateUsername(username))
                                        setWarnMinimal(true)
                                    }}
                                    />
                                {!!invalidUsername && <Text style={styles.invalid}>{invalidUsername}</Text>}
                            </View>
                            <View style={styles.inputContainer}>
                                <TextInput
                                    style={styles.input}
                                    onChangeText={checkTelephone}
                                    value={telephone}
                                    placeholder="Telepon"
                                    keyboardType="phone-pad"
                                    autoCompleteType="tel"
                                    onFocus={initialFillUp}
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
                                onPress={() => navigation.push('IntroScreen')} // [TODO] : Only when valid and success storing, loading
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
}