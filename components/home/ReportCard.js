import React from 'react'
import { css } from '@emotion/native'
import { View, Image, Text } from 'react-native'
import c from './../../core/style/theme.style'
import GrayButton from '../atomic/GrayButton'

const ReportCard = () => {

    return (
        <View style={styles.container}>
            <Image source={{ uri: 'https://statik.tempo.co/data/2017/10/04/id_652651/652651_720.jpg' }} style={styles.thumbnail} />
            <View style={styles.content}>
                <Text style={styles.text1}>Diduga maling, dikeroyok massa lur kasihan</Text>
                <View style={styles.sub_content}>
                    <Text style={styles.text_date}>11.07 - 16 Maret</Text>

                    <GrayButton size={14} onPress={() => console.log('pressed')}>
                        Detail
                    </GrayButton>
                </View>
            </View>
        </View>
    )
}

const styles = {
    container: css`
        width: 100%;
        padding: 24px;
        flex-direction: row; 
        margin-top: 48px;       
    `,
    text1: css`
        font-size: ${Platform.OS === 'ios' ? '18px' : '16px'};
        font-family: Slab_7;
        max-width: 100%;
        width: 100%;
    `,
    text_date: css`
        font-size: ${Platform.OS === 'ios' ? '12px' : '10px'};
        font-family: Slab_7;
        margin-right: 8px;
        color: ${c.grayDark};
    `,
    thumbnail: css`
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
        flex: 1;
    `,
    sub_content: css`
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-direction: row;
        width: 100%;
    `,
}

export default ReportCard