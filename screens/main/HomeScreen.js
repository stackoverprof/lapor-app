import React from 'react'
import { css } from '@emotion/native'
import { View, Image, Text } from 'react-native'
import RaisedButton from '../../components/atomic/RaisedButton'
import IconFA5 from 'react-native-vector-icons/FontAwesome5'

const HomeScreen = () => {
    return (
        <View style={styles.screen}>
            <View style={styles.head}>
                <Image source={require('../../assets/img/illus/mega.png')} style={styles.megaphone} />
                <View style={styles.content}>
                    <Text style={styles.text1}>Laporan Terkini</Text>
                    <RaisedButton shallow size={16} onPress={() => console.log('pressed')} icon={<IconFA5 name="plus" size={20} color={'#FFF'} />}>
                        Laporkan!
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
        background: #fff;
    `,
    head: css`
        width: 100%;
        padding: 24px;
        flex-direction: row; 
        margin-top: 48px;       
    `,
    text1: css`
        font-size: 26px;
        font-family: Slab_7;
        margin-bottom: 8px;
    `,
    megaphone: css`
        height: 100px;
        width: 100px;
        margin-right: 12px;
    `,
    content: css`
        display: flex;
        justify-content: center;
        align-items: flex-start;
        flex-direction: column;
    `,
}