import React from 'react'
import { css } from '@emotion/native'
import { View, Image, Text } from 'react-native'
import RaisedButton from '../../components/atomic/RaisedButton'
import IconFA5 from 'react-native-vector-icons/FontAwesome5'

const Header = () => {

    return (
        <View style={styles.head}>
            <Image source={require('../../assets/img/illus/mega.png')} style={styles.megaphone} />
            <View style={styles.content}>
                <Text style={styles.text1}>Laporan Terkini</Text>
                <RaisedButton shallow size={16} onPress={() => console.log('pressed')} icon={<IconFA5 name="plus" size={20} color={'#FFF'} />}>
                    Laporkan!
                </RaisedButton>
            </View>
        </View>
    )
}

const styles = {
    head: css`
        width: 100%;
        padding: 12px 0;
        flex-direction: row; 
        margin-top: 48px;     
        min-width: 92%;
    `,
    text1: css`
        font-size: ${Platform.OS === 'ios' ? '28px' : '26px'};
        font-family: Slab_7;
    `,
    megaphone: css`
        height: 100px;
        width: 100px;
        margin-right: 12px;
        border-radius: 6px;
    `,
    content: css`
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        flex-direction: column;
        padding-bottom: 8px;
        padding-top: ${Platform.OS === 'ios' ? '12px' : '8px'};
    `,
}

export default Header