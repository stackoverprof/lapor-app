import React from 'react'
import { css } from '@emotion/native'
import { View, Image, Text } from 'react-native'
import RaisedButton from '../../components/atomic/RaisedButton'

const HomeScreen = () => {
    return (
        <View style={styles.screen}>
            <View style={styles.head}>
                <Image source={require('../../assets/img/illus/mega.png')} />
                <View style={styles.content}>
                    <Text style={styles.text1}>Laporan Terkini</Text>
                    <RaisedButton size={20} wide>
                        Laporkan
                    </RaisedButton>
                </View>
            </View>
            
        </View>
    )
}

export default HomeScreen

const styles = {
    screen: css`
        flex: 1;
    `,
    head: css`
        width: 100%;
        padding: 24px;
        flex-direction: row; 
        margin-top: 48px;       
    `,
    text1: css`
        font-size: 26px;
        
    `
}