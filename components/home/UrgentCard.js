import React from 'react'
import { css } from '@emotion/native'
import { View, Text } from 'react-native'
import c from '../../core/style/theme.style'
import GrayButton from '../atomic/GrayButton'

const UrgentCard = ({title, contact}) => {

    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.text1}>{title}</Text>
                <View style={styles.sub_content}>
                    <Text style={styles.contact}>{contact}</Text>

                    <GrayButton size={14} haptics="low" onPress={() => console.log('pressed')}>
                        Panggil
                    </GrayButton>
                </View>
            </View>
        </View>
    )
}

const styles = {
    container: css`
        width: 92%;
        padding: 12px;
        flex-direction: row; 
        margin-bottom: 16px;
        border-radius: 8px;
        border: 1px solid ${c.grayLight};
        background: ${c.white};
        box-shadow: 0 6px 0 ${c.grayLight};
    `,
    text1: css`
        font-size: ${Platform.OS === 'ios' ? '18px' : '16px'};
        font-family: Slab_7;
        max-width: 100%;
        width: 100%;
        margin: 20px 0;
        textAlign: center;
    `,
    contact: css`
        font-size: ${Platform.OS === 'ios' ? '14px' : '12px'};
        font-family: Slab_7;
        margin-right: 8px;
        margin-left: 8px;
        margin-bottom: 2px;
        color: ${c.red};
    `,
    content: css`
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        flex-direction: column;
        padding-bottom: 2px;
        flex: 1;
    `,
    sub_content: css`
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
        flex-direction: row;
        width: 100%;
    `,
}

export default UrgentCard