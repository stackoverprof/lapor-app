import React from 'react'
import { css } from '@emotion/native'
import { View, Image, ImageBackground } from 'react-native'
import gif_stripe from '../../assets/img/gif/stripe.gif'
import img_logo from '../../assets/img/logo-lapor.png'
import img_thief from '../../assets/img/illus/thief.png'
import GoogleButton from '../../components/atomic/GoogleButton'
import Foreword from '../../components/auth/Foreword'

const AuthScreen = ({navigation}) => {

    return (
        <View style={styles.screen}>
            <View style={styles.containerLeft}>
                <Image source={img_logo} style={styles.logo} />
            </View>

            <Foreword />

            <ImageBackground 
                source={img_thief} 
                style={styles.lower} 
                imageStyle={[styles.lowerbg, {resizeMode: 'stretch', top: undefined, left: undefined}]}
            >
                <Image source={gif_stripe} style={styles.stripebg} />

                <GoogleButton 
                    afterSignedUp={() => navigation.push('RegistrationScreen')}
                />
            </ImageBackground>
        </View>
    )
}

export default AuthScreen

const styles = {
    screen: css`
        flex: 1;
        justify-content: flex-start;
        align-items: center;
        padding-top: 140px;
    `,
    containerLeft: css`
        width: 100%;
        padding: 0 36px;
        justify-content: flex-start;
    `,
    button: css`
        margin: 6px 0;
    `,
    logo: css`
        width: 152px;
        height: 47.2px;
        margin-bottom: 80px;
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
    lowerbg: css`
        position: absolute;
        width: 375px;
        align-self: flex-end;
    `,
    stripebg: css`
        position: absolute;
        bottom: 120px;
        width: 100%;
        height: 40px;
        z-index: -1;
    `,
}