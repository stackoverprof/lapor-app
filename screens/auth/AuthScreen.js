import React from 'react'
import { css } from '@emotion/native'
import { Text, View, Image, ImageBackground } from 'react-native'
import c from '../../core/style/theme.style'
import { useAuth } from '../../core/contexts/AuthContext'

import RaisedButton from '../../components/atomic/RaisedButton'
import img_googleIcon from '../../assets/img/icons/google.png'
import gif_stripe from '../../assets/img/gif/stripe.gif'
import img_logo from '../../assets/img/logo-lapor.png'
import img_thief from '../../assets/img/illus/thief.png'

const AuthScreen = ({navigation}) => {
    const { authMethods, setErrorAuth } = useAuth()

    const handleGoogleAuth = () => {
        setErrorAuth('')
        authMethods.google({navigation})
    }
    
    return (
        <View style={styles.screen}>
            <View style={styles.containerLeft}>
                <Image source={img_logo} style={styles.logo} />
            </View>

            <View style={styles.containerLeft}>
                <Text style={styles.intro}>
                    Tindak kejahatan ada di mana-mana.
                    {'\n'}
                    <Text style={styles.intro_bold}>
                        <Text style={styles.intro_red}>Laporkan!{' '}</Text>
                        Saat Anda menemuinya.
                    </Text>
                </Text>
            </View>

            <ImageBackground 
                source={img_thief} 
                style={styles.lower} 
                imageStyle={[styles.lowerbg, {resizeMode: 'stretch', top: undefined, left: undefined}]}
            >
                <Image source={gif_stripe} style={styles.stripebg} />

                <RaisedButton 
                    onPress={handleGoogleAuth}
                    iconsrc={img_googleIcon} 
                    size={20}
                    wide 
                >
                    Sign In with Google
                </RaisedButton>
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
    button: css`
        margin: 6px 0;
    `,
    logo: css`
        width: 152px;
        height: 47.2px;
        margin-bottom: 80px;
    `,
    containerLeft: css`
        width: 100%;
        padding: 0 36px;
        justify-content: flex-start;
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
    intro: css`
        font-family: Slab_4;
        font-size: 24px;
        max-width: 80%;
    `,
    intro_bold: css`
        font-family: Slab_7;
    `,
    intro_red: css`
        color: ${c.red}
    `,
    stripebg: css`
        position: absolute;
        bottom: 120px;
        width: 100%;
        height: 40px;
        z-index: -1;
    `,
}