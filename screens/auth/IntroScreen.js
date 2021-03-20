import React  from 'react'
import { css } from '@emotion/native'
import { View, Text, Image } from 'react-native'

import RaisedButton from '../../components/atomic/RaisedButton'
import gif_stripe from '../../assets/img/gif/stripe.gif'

const IntroScreen = ({navigation}) => {
    
    return (
        <View style={styles.screen}>
            <View style={styles.inner}>
                <View></View>
                <View style={styles.lower}>
                    <RaisedButton 
                        onPress={() => navigation.push('RegistrationScreen')}
                        size={20}
                        wide 
                    >
                        Mulai
                    </RaisedButton>
                </View>
            </View>
            <Image source={gif_stripe} style={styles.stripebg} />
        </View>
    )
}

export default IntroScreen

const styles = {
    screen: css`
        position: relative;
        flex: 1;
        justify-content: flex-end;
    `,
    inner: css`
        position: absolute;
        top: 0;
        flex: 1;
        width: 100%;
        height: 100%;
        justify-content: space-between;
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