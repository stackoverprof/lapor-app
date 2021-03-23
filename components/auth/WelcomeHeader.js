import React from 'react'
import { css } from '@emotion/native'
import { View, Text, Image, ImageBackground } from 'react-native'
import { useAuth } from '../../core/contexts/AuthContext'
import img_ava from '../../assets/img/assets/holder-ava.png'

const WelcomeHeader = () => {
    const { user } = useAuth()

    return (
        <View style={[styles.container, styles.upper]}>
            <Text style={styles.textWelcome}>Selamat{'\n'}Datang.</Text>
            <ImageBackground source={img_ava} style={styles.avaContainer}>
                <Image source={{uri: user.photoUrl}} style={styles.ava} />
            </ImageBackground>
        </View>
    )
}

export default WelcomeHeader

const styles = {
    container: css`
        width: 100%;
        padding: 0 32px;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    `,
    upper: css`
        margin-bottom: 40px;
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
